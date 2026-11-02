(()=>{'use strict';
const $=id=>document.getElementById(id);
const BRAIN_KEY='jarvis.chess.zero.v2';
const DB_NAME='jarvis-zero-personal-vault';
const P=800,V=768,TYPES='PNBRQK';
let stopping=false,busy=false,newGames=0,ignored=0,lastReport=0,brain=null;
const req=r=>new Promise((ok,no)=>{r.onsuccess=()=>ok(r.result);r.onerror=()=>no(r.error);});
const sleep=()=>new Promise(ok=>setTimeout(ok,0));
const setStatus=s=>{$('status').textContent=s;};
const dbp=new Promise((ok,no)=>{let r=indexedDB.open(DB_NAME,1);r.onupgradeneeded=()=>{
 let db=r.result;
 if(!db.objectStoreNames.contains('games')){let st=db.createObjectStore('games',{keyPath:'seq',autoIncrement:true});st.createIndex('gameKey','gameKey',{unique:true});}
 if(!db.objectStoreNames.contains('state'))db.createObjectStore('state',{keyPath:'key'});
 };r.onerror=()=>no(r.error);r.onsuccess=()=>ok(r.result);});
async function getState(key){let db=await dbp;return (await req(db.transaction('state').objectStore('state').get(key)))?.value;}
async function putState(key,value){let db=await dbp;return req(db.transaction('state','readwrite').objectStore('state').put({key,value}));}
async function total(){let db=await dbp;return req(db.transaction('games').objectStore('games').count());}
async function maxSeq(){let db=await dbp;return new Promise((ok,no)=>{let q=db.transaction('games').objectStore('games').openCursor(null,'prev');q.onsuccess=()=>ok(q.result?.key||0);q.onerror=()=>no(q.error);});}
async function findGame(k){let db=await dbp;return req(db.transaction('games').objectStore('games').index('gameKey').getKey(k));}
async function addGame(g){let db=await dbp;return req(db.transaction('games','readwrite').objectStore('games').add(g));}
async function batchFrom(start,n){let db=await dbp;return req(db.transaction('games').objectStore('games').getAll(IDBKeyRange.lowerBound(start),n));}
async function clearArchive(){let db=await dbp;await req(db.transaction('games','readwrite').objectStore('games').clear());}
async function restoreGame(g){let db=await dbp;return req(db.transaction('games','readwrite').objectStore('games').put(g));}
function fresh(){return {version:2,value:Array(V).fill(0),policy:Array(P).fill(0),stats:{humanMoves:0,humanGames:0,selfplayGames:0,trainedPositions:0,policyUpdates:0,importedGames:0,importedMoves:0,results:{w:0,b:0,draw:0}}};}
function loadBrain(){try{let b=JSON.parse(localStorage.getItem(BRAIN_KEY));if(b&&b.version===2&&Array.isArray(b.value)&&b.value.length===V&&Array.isArray(b.policy)&&b.policy.length===P){b.stats||={};return b;}}catch{}return fresh();}
brain=loadBrain();
function safeSaveBrain(){try{localStorage.setItem(BRAIN_KEY,JSON.stringify(brain));}catch(e){setStatus('Browser storage error: '+e.message+'. Export your model or synchronize to GitHub.');throw e;}}
function busySet(on){busy=on;for(let id of ['lichess','local','sync','restore'])$(id).disabled=on;$('stop').disabled=!on;}
function pidx(p){return TYPES.indexOf(p.toUpperCase());}
function nsq(r,c,turn){return (turn==='w'?r:7-r)*8+c;}
function valFeatures(s){let f=[];for(let r=0;r<8;r++)for(let c=0;c<8;c++){let p=s.b[r][c];if(p)f.push(((Core.color(p)===s.turn?0:1)*6+pidx(p))*64+nsq(r,c,s.turn));}return f;}
function policyFeatures(s,m){let p=s.b[m.fr][m.fc],i=pidx(p),f=[i*64+nsq(m.fr,m.fc,s.turn),384+i*64+nsq(m.tr,m.tc,s.turn)],cap=s.b[m.tr][m.tc]||m.sp==='ep';if(cap)f.push(768+pidx(cap===true?'P':cap));if(m.promotion)f.push(775+pidx(m.promotion));if(m.sp&&m.sp.startsWith('castle'))f.push(781);if(m.sp==='ep')f.push(782);return f;}
function trainValue(s,target,rate=.07){let f=valFeatures(s),z=f.reduce((sum,i)=>sum+brain.value[i],0),prediction=Math.tanh(z*.22),err=(target-prediction)*(1-prediction*prediction)*rate*.22;for(let i of f)brain.value[i]=Math.max(-2,Math.min(2,brain.value[i]+err));brain.stats.trainedPositions=(brain.stats.trainedPositions||0)+1;}
function trainPolicy(s,legal,chosen,rate=.12){let feats=legal.map(m=>policyFeatures(s,m)),scores=feats.map(f=>f.reduce((sum,i)=>sum+brain.policy[i],0)),high=Math.max(...scores),weights=scores.map(x=>Math.exp(Math.max(-35,x-high))),den=weights.reduce((a,b)=>a+b,0),grad=new Float32Array(P);for(let k=0;k<legal.length;k++){let diff=(legal[k]===chosen?1:0)-weights[k]/den;for(let j of feats[k])grad[j]+=diff;}for(let i=0;i<P;i++)if(grad[i])brain.policy[i]=Math.max(-4,Math.min(4,brain.policy[i]+rate*grad[i]));brain.stats.policyUpdates=(brain.stats.policyUpdates||0)+1;brain.stats.importedMoves=(brain.stats.importedMoves||0)+1;}
function normSAN(x){return String(x).replace(/0/g,'O').replace(/[+#?!]/g,'').replace(/e\.p\./gi,'').trim();}
function pruneVariations(x){let depth=0,out='';for(let ch of x){if(ch==='(')depth++;else if(ch===')')depth=Math.max(0,depth-1);else if(!depth)out+=ch;}return out;}
function parsePGN(pgn){let headers={};pgn.replace(/^\s*\[([^\s\]]+)\s+"([^"]*)"\]\s*$/gm,(_,k,v)=>(headers[k]=v,''));let body=pgn.replace(/^\s*\[[^\n\]]+\]\s*$/gm,' ').replace(/\{[^}]*\}/g,' ').replace(/;[^\n]*/g,' ').replace(/\$\d+/g,' ');body=pruneVariations(body).replace(/\d+\.(?:\.\.)?/g,' ');let tokens=body.split(/\s+/).filter(x=>x&&!['1-0','0-1','1/2-1/2','*','...'].includes(x));return {headers,tokens};}
async function digest(s){let hash=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return Array.from(new Uint8Array(hash)).map(x=>x.toString(16).padStart(2,'0')).join('');}
function usernames(){return [...new Set($('accounts').value.split(/[,;\s]+/).map(s=>s.trim().toLowerCase()).filter(s=>/^[\w-]{2,40}$/.test(s)))];}
function gameTime(h){if(!h.UTCDate)return 0;let match=(h.UTCDate+' '+(h.UTCTime||'00:00:00')).match(/^(\d{4})\.(\d{2})\.(\d{2}) (\d{2}):(\d{2}):(\d{2})/);return match?Date.UTC(+match[1],+match[2]-1,+match[3],+match[4],+match[5],+match[6]):0;}
async function processPGN(pgn,names){if(!pgn.trim()||!pgn.includes('[Event '))return;
let {headers:h,tokens}=parsePGN(pgn),white=(h.White||'').toLowerCase(),black=(h.Black||'').toLowerCase(),side=names.includes(white)?'w':names.includes(black)?'b':null;
if(!side||h.Variant&&!/^standard$/i.test(h.Variant)||h.FEN||h.SetUp==='1'||!tokens.length||!['1-0','0-1','1/2-1/2'].includes(h.Result||'')){ignored++;return;}
let identifier=await digest(pgn.trim().replace(/\r\n/g,'\n'));if(await findGame(identifier)){ignored++;return;}
let s=Core.initial(),events=[];for(let t of tokens){let n=normSAN(t),legal=Core.legal(s),choice=legal.find(m=>normSAN(Core.san(s,m))===n||Core.uci(m)===n.toLowerCase());if(!choice){ignored++;return;}if(s.turn===side)events.push({s,legal,choice});s=Core.apply(s,choice);}
if(!events.length){ignored++;return;}
let outcome=h.Result==='1-0'?'w':h.Result==='0-1'?'b':null;
for(let e of events){trainPolicy(e.s,e.legal,e.choice);trainValue(e.s,!outcome?0:side===outcome?1:-1);}
let record={gameKey:identifier,source:h.Site?.includes('lichess.org')?'lichess':'pgn',user:side==='w'?h.White:h.Black,white:h.White,black:h.Black,result:h.Result,utc:gameTime(h),raw:pgn.trim(),importedAt:Date.now()};
try{await addGame(record);}catch(e){if(e.name!=='ConstraintError')throw e;ignored++;return;}
newGames++;brain.stats.importedGames=(brain.stats.importedGames||0)+1;
if(newGames%25===0){safeSaveBrain();await putState('last_checkpoint',Date.now());await statsUpdate();setStatus('Archived and trained '+newGames.toLocaleString()+' new games; ignored/duplicates '+ignored.toLocaleString()+'. Current game is safely persisted.');await sleep();}
}
async function consumeStream(stream,names){let reader=stream.getReader(),decoder=new TextDecoder(),carry='',bytes=0;try{while(true){let {value,done}=await reader.read();if(done)break;if(stopping)break;bytes+=value.byteLength;carry+=decoder.decode(value,{stream:true});let parts=carry.split(/\r?\n\s*(?=\[Event\s+")/g);carry=parts.pop();for(let p of parts){if(stopping)break;await processPGN(p,names);}if(bytes-lastReport>1000000){lastReport=bytes;setStatus('Read '+(bytes/1048576).toFixed(1)+' MiB | '+newGames+' new games archived | '+ignored+' skipped/duplicates');await sleep();}}
if(!stopping&&carry.trim())await processPGN(carry,names);
}finally{reader.releaseLock();}}
async function statsUpdate(){let n=await total();$('count').textContent=n.toLocaleString();$('positions').textContent=(brain.stats.trainedPositions||0).toLocaleString();$('moves').textContent=(brain.stats.policyUpdates||0).toLocaleString();try{if(navigator.storage&&navigator.storage.estimate){let e=await navigator.storage.estimate();$('storage').textContent=(e.usage/1048576).toFixed(1)+' MiB';}}catch{}}
async function runOperation(fn){if(busy)return;stopping=false;newGames=0;ignored=0;lastReport=0;busySet(true);try{await fn();safeSaveBrain();await statsUpdate();setStatus((stopping?'Stopped safely. ':'Finished. ')+newGames+' newly archived games; '+ignored+' rejected or already present. Brain checkpoint saved. Reload the chessboard to use the trained model.');}catch(e){try{safeSaveBrain();}catch{}await statsUpdate();setStatus('Import stopped with an error: '+String(e.message||e)+'. Previously archived games remain saved.');}finally{busySet(false);}}
async function importLichess(){let names=usernames();if(!names.length){setStatus('Enter at least one of your valid Lichess usernames.');return;}await runOperation(async()=>{for(let name of names){if(stopping)break;let since=0;
if($('scope').value==='incremental'){let timestamp=await getState('lichess_last_time_'+name)||0;since=Math.max(0,timestamp-86400000);}
let params=new URLSearchParams({moves:'true',tags:'true',clocks:'false',evals:'false',opening:'false',finished:'true',sort:'dateAsc'});
if(since)params.set('since',String(since));
setStatus('Downloading only games of @'+name+' from Lichess; '+(since?'incremental':'all history')+'.');
let url='https://lichess.org/api/games/user/'+encodeURIComponent(name)+'?'+params.toString();let response=await fetch(url,{headers:{Accept:'application/x-chess-pgn'}});
if(!response.ok)throw Error('Lichess @'+name+' returned HTTP '+response.status+(response.status===429?' (rate limited; follow Lichess retry guidance)':''));
if(!response.body)throw Error('Lichess response cannot be streamed in this browser. Download the PGN file instead.');
await consumeStream(response.body,names);
// Completion: bookmark server time with overlap to avoid missing recent same-time games.
if(!stopping)await putState('lichess_last_time_'+name,Date.now());
safeSaveBrain();
}});}
async function importFiles(){let files=[...$('files').files],names=usernames();if(!files.length){setStatus('Choose at least one downloaded .pgn file.');return;}if(!names.length){setStatus('Enter the username you played under in those PGN files.');return;}
await runOperation(async()=>{for(let file of files){if(stopping)break;setStatus('Streaming '+file.name+' ('+(file.size/1048576).toFixed(1)+' MiB)');await consumeStream(file.stream(),names);}});}
function download(name,blob){let url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),3000);}
async function exportArchive(){if(busy)return;busySet(true);try{let n=await total();if(!n){setStatus('No archived games to export.');return;}if(window.showSaveFilePicker){let handle=await window.showSaveFilePicker({suggestedName:'jarvis-my-games.pgn',types:[{description:'PGN game archive',accept:{'text/plain':['.pgn']}}]});let writer=await handle.createWritable();let next=1;try{while(true){let group=await batchFrom(next,100);if(!group.length)break;for(let g of group)await writer.write(g.raw+'\n\n');next=group[group.length-1].seq+1;setStatus('Writing game archive through #'+next+'…');}await writer.close();}catch(e){await writer.abort();throw e;}}else{let parts=[],next=1;while(true){let group=await batchFrom(next,100);if(!group.length)break;for(let g of group)parts.push(g.raw+'\n\n');next=group[group.length-1].seq+1;}download('jarvis-my-games.pgn',new Blob(parts,{type:'text/plain'}));}setStatus('Exported '+n+' games.');}catch(e){if(e.name!=='AbortError')setStatus('Export failed: '+e.message);}finally{busySet(false);}}
function bytesB64(b){let s='';for(let i=0;i<b.length;i+=8192)s+=String.fromCharCode(...b.subarray(i,i+8192));return btoa(s);}
function fromB64(s){let raw=atob(s),b=new Uint8Array(raw.length);for(let i=0;i<raw.length;i++)b[i]=raw.charCodeAt(i);return b;}
async function derive(pass,salt){let base=await crypto.subtle.importKey('raw',new TextEncoder().encode(pass),'PBKDF2',false,['deriveKey']);return crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:210000,hash:'SHA-256'},base,{name:'AES-GCM',length:256},false,['encrypt','decrypt']);}
async function encrypt(o,pass){let salt=crypto.getRandomValues(new Uint8Array(16)),iv=crypto.getRandomValues(new Uint8Array(12)),key=await derive(pass,salt),body=new TextEncoder().encode(JSON.stringify(o)),cipher=new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv},key,body));return JSON.stringify({version:1,kdf:'PBKDF2-SHA256-210000',scheme:'AES-256-GCM',salt:bytesB64(salt),iv:bytesB64(iv),payload:bytesB64(cipher)});}
async function decrypt(s,pass){let j=JSON.parse(s);if(j.version!==1||!j.payload)throw Error('Unknown encrypted vault format');let key=await derive(pass,fromB64(j.salt));let plain=await crypto.subtle.decrypt({name:'AES-GCM',iv:fromB64(j.iv)},key,fromB64(j.payload));return JSON.parse(new TextDecoder().decode(plain));}
async function exportBundle(){if(busy)return;busySet(true);try{let pass=$('passphrase').value;if(pass.length<12){setStatus('For encrypted backup enter an encryption passphrase of at least 12 characters.');return;}let next=1,batches=[];while(true){let group=await batchFrom(next,100);if(!group.length)break;batches.push(...group);next=group[group.length-1].seq+1;if(batches.length%1000===0)await sleep();}
let obj={version:1,createdAt:Date.now(),brain,games:batches};let encrypted=await encrypt(obj,pass);download('jarvis-personal-vault.encrypted.json',new Blob([encrypted],{type:'application/json'}));setStatus('Created encrypted backup with '+batches.length+' games. Keep the passphrase safe.');}catch(e){setStatus('Backup error: '+e.message);}finally{busySet(false);}}
function repoConfig(){let repo=$('repo').value.trim(),token=$('token').value.trim(),pass=$('passphrase').value;if(!/^[\w.-]+\/[\w.-]+$/.test(repo))throw Error('Enter owner/repository, e.g. deepnilray/jarvis-zero-private');if(!token)throw Error('Enter a fine-grained token with Contents: read/write permission to the private repository.');if(pass.length<12)throw Error('Enter an encryption passphrase of at least 12 characters.');return {repo,token,pass};}
function gitURL(repo,path){return 'https://api.github.com/repos/'+repo+'/contents/'+path.split('/').map(encodeURIComponent).join('/');}
async function gitGet(config,path){let r=await fetch(gitURL(config.repo,path),{headers:{Authorization:'Bearer '+config.token,Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'},cache:'no-store'});if(r.status===404)return null;if(!r.ok)throw Error('GitHub GET '+path+': HTTP '+r.status+'. Check private repository and token access.');let j=await r.json();if(j.type!=='file'||!j.content)throw Error('GitHub returned unsupported file format at '+path);return {sha:j.sha,text:new TextDecoder().decode(fromB64(j.content.replace(/\s/g,'')))};}
async function gitPut(config,path,content,existingSHA){let body={message:'Jarvis Zero encrypted private vault checkpoint',content:bytesB64(new TextEncoder().encode(content))};if(existingSHA)body.sha=existingSHA;let r=await fetch(gitURL(config.repo,path),{method:'PUT',headers:{Authorization:'Bearer '+config.token,Accept:'application/vnd.github+json','Content-Type':'application/json','X-GitHub-Api-Version':'2022-11-28'},body:JSON.stringify(body)});if(!r.ok){let details=await r.text();throw Error('GitHub PUT '+path+' HTTP '+r.status+': '+details.slice(0,180));}}
async function checkPrivate(c){let r=await fetch('https://api.github.com/repos/'+c.repo,{headers:{Authorization:'Bearer '+c.token,Accept:'application/vnd.github+json'}});if(!r.ok)throw Error('Private repository not found or inaccessible (HTTP '+r.status+'). Create it first on GitHub.');let j=await r.json();if(!j.private)throw Error('Repository is PUBLIC. Refusing to upload personal training data. Create a private repository instead.');}
async function syncGithub(){await runCloud(async c=>{await checkPrivate(c);
let remote=await gitGet(c,'vault/manifest.json'),manifest=remote?JSON.parse(remote.text):{version:1,lastSeq:0,files:[]};
if(manifest.version!==1)throw Error('Unknown remote vault format.');
let localMax=await maxSeq();if(manifest.lastSeq>localMax)throw Error('Remote GitHub archive is ahead of this browser. Restore it in a clean browser vault first; refusing to overwrite.');
let start=manifest.lastSeq+1,added=0;
while(true){let games=await batchFrom(start,100);if(!games.length)break;
let last=games[games.length-1].seq,name='vault/games/'+String(games[0].seq).padStart(9,'0')+'-'+String(last).padStart(9,'0')+'.enc.json';
setStatus('Encrypting and backing up games through #'+last+'…');
let encrypted=await encrypt({version:1,games},c.pass);await gitPut(c,name,encrypted,null);
manifest.files.push(name);manifest.lastSeq=last;added+=games.length;start=last+1;
await gitPut(c,'vault/manifest.json',JSON.stringify(manifest),remote?.sha);
remote=await gitGet(c,'vault/manifest.json');
await sleep();
}
let model=await gitGet(c,'vault/brain.enc.json');await gitPut(c,'vault/brain.enc.json',await encrypt({version:2,brain,savedAt:Date.now()},c.pass),model?.sha);
await putState('last_synced_seq',manifest.lastSeq);
setStatus('Private GitHub sync complete: '+added+' new games; latest model uploaded. Remote archived through #'+manifest.lastSeq+'. No token was stored.');});}
async function restoreGithub(){await runCloud(async c=>{await checkPrivate(c);let m=await gitGet(c,'vault/manifest.json'),b=await gitGet(c,'vault/brain.enc.json');if(!m||!b)throw Error('No complete vault backup exists in that repository.');
if(await total())throw Error('This browser already has archived games. Restore only into an empty vault to prevent overwriting/duplication. Export your current archive first.');
let manifest=JSON.parse(m.text),saved=await decrypt(b.text,c.pass);if(!saved.brain||saved.brain.value?.length!==V||saved.brain.policy?.length!==P)throw Error('Backup model is invalid or incompatible.');
let count=0;
for(let path of manifest.files||[]){let file=await gitGet(c,path);if(!file)throw Error('Missing archived batch '+path);let obj=await decrypt(file.text,c.pass);for(let game of obj.games||[]){await restoreGame(game);count++;}setStatus('Restoring encrypted GitHub files: '+count+' games so far…');await sleep();}
brain=saved.brain;safeSaveBrain();await putState('last_synced_seq',manifest.lastSeq);await statsUpdate();setStatus('Restored '+count+' games plus the trained model from your private GitHub repository. Refresh the chessboard.');});}
async function runCloud(fn){if(busy)return;busySet(true);try{let c=repoConfig();await fn(c);}catch(e){setStatus('GitHub vault: '+String(e.message||e));}finally{busySet(false);}}
async function publishForGuests(){
 if(busy)return;
 const t=$('public-token').value.trim();
 if(!t){setStatus('Enter a GitHub token with Contents: write on the public website repository.');return;}
 const count=brain.stats?.importedGames||0;
 if(count<1||!(brain.stats?.importedMoves>0)){setStatus('No Lichess games have been trained yet. Import your own games before publishing.');return;}
 busySet(true);$('publish').disabled=true;
 try{
   const target={repo:'deepnilray/deepnilray.github.io',token:t};
   const rr=await fetch('https://api.github.com/repos/'+target.repo,{headers:{Authorization:'Bearer '+t,Accept:'application/vnd.github+json'},cache:'no-store'});
   if(!rr.ok)throw Error('Cannot access website repository (HTTP '+rr.status+'). Verify token access.');
   const details=await rr.json();
   if(details.private)throw Error('Expected a public GitHub Pages repository.');
   const publicModel={version:2,value:brain.value,policy:brain.policy,stats:{
     importedGames:count,importedMoves:brain.stats.importedMoves||0,policyUpdates:brain.stats.policyUpdates||0,trainedPositions:brain.stats.trainedPositions||0,
     humanMoves:0,humanGames:0,selfplayGames:0,results:{w:0,b:0,draw:0}
   },publication:{version:1,trained:true,source:'private owner training: own Lichess games only',updatedAt:new Date().toISOString()}};
   const old=await gitGet(target,'jarvis-zero/public-model.json');
   await gitPut(target,'jarvis-zero/public-model.json',JSON.stringify(publicModel),old?.sha);
   setStatus('Published '+count.toLocaleString()+' personal-game training checkpoint. Guest chessboards will read it on their next page load. No PGN files or tokens uploaded.');
 }catch(e){setStatus('Cannot publish: '+String(e.message||e));}
 finally{busySet(false);$('publish').disabled=false;}
}
function setPGNLink(){let first=usernames()[0]||'f14deepnilray';$('pgnlink').href='https://lichess.org/api/games/user/'+encodeURIComponent(first)+'?moves=true&tags=true&clocks=false&evals=false&sort=dateAsc';}
$('lichess').addEventListener('click',importLichess);
$('local').addEventListener('click',importFiles);
$('stop').addEventListener('click',()=>{stopping=true;setStatus('Stopping after currently parsed game. Existing data remains saved.');});
$('accounts').addEventListener('input',setPGNLink);
$('downloadbrain').addEventListener('click',()=>download('jarvis-zero-brain.json',new Blob([JSON.stringify(brain)],{type:'application/json'})));
$('downloadarchive').addEventListener('click',exportArchive);
$('downloadvault').addEventListener('click',exportBundle);
$('sync').addEventListener('click',syncGithub);
$('restore').addEventListener('click',restoreGithub);
$('publish').addEventListener('click',publishForGuests);
statsUpdate().catch(e=>setStatus('Archive database error: '+e.message));
})();