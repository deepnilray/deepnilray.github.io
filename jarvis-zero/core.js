const Core=(function(){"use strict";
const dirsB=[[1,1],[1,-1],[-1,1],[-1,-1]],dirsR=[[1,0],[-1,0],[0,1],[0,-1]],knights=[[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]];
const inside=(r,c)=>r>=0&&r<8&&c>=0&&c<8;
const color=p=>!p?null:p===p.toUpperCase()?'w':'b';
const enemy=(a,b)=>b&&color(b)!==a&&b.toLowerCase()!=='k';
const sqName=(r,c)=>'abcdefgh'[c]+(8-r);
function initial(){return {b:['rnbqkbnr','pppppppp','........','........','........','........','PPPPPPPP','RNBQKBNR'].map(x=>x.split('').map(ch=>ch==='.'?'':ch)),turn:'w',rights:'KQkq',ep:null,half:0,full:1};}
function copy(s){return {b:s.b.map(row=>row.slice()),turn:s.turn,rights:s.rights,ep:s.ep? s.ep.slice():null,half:s.half,full:s.full};}
function attacked(s,r,c,by){const b=s.b, pawn=by==='w'?'P':'p',pr=r+(by==='w'?1:-1);for(let d of [-1,1])if(inside(pr,c+d)&&b[pr][c+d]===pawn)return true;
 const n=by==='w'?'N':'n';for(const [dr,dc] of knights){let rr=r+dr,cc=c+dc;if(inside(rr,cc)&&b[rr][cc]===n)return true;}
 const k=by==='w'?'K':'k';for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++){if(!dr&&!dc)continue;let rr=r+dr,cc=c+dc;if(inside(rr,cc)&&b[rr][cc]===k)return true;}
 for(const [dr,dc] of [...dirsB,...dirsR]){let rr=r+dr,cc=c+dc;while(inside(rr,cc)){let p=b[rr][cc];if(p){if(color(p)===by){let t=p.toLowerCase();if(t==='q'||(t==='b'&&dr&&dc)||(t==='r'&&(!dr||!dc)))return true;}break;}rr+=dr;cc+=dc;}}
 return false;}
function inCheck(s,who){let king=who==='w'?'K':'k';for(let r=0;r<8;r++)for(let c=0;c<8;c++)if(s.b[r][c]===king)return attacked(s,r,c,who==='w'?'b':'w');return true;}
function pseudo(s,who){const b=s.b,moves=[];function add(fr,fc,tr,tc,sp='',promotion=''){moves.push({fr,fc,tr,tc,sp,promotion});}
for(let r=0;r<8;r++)for(let c=0;c<8;c++){let p=b[r][c];if(!p||color(p)!==who)continue;let t=p.toLowerCase();
if(t==='p'){let d=who==='w'?-1:1, nr=r+d, home=who==='w'?6:1, promo=who==='w'?0:7;
const forward=(tr,tc,sp='')=>{if(tr===promo)for(const q of ['Q','R','B','N'])add(r,c,tr,tc,sp,q);else add(r,c,tr,tc,sp);};
if(inside(nr,c)&&!b[nr][c]){forward(nr,c);if(r===home&&!b[r+2*d][c])add(r,c,r+2*d,c);}
for(const dc of [-1,1]){let cc=c+dc;if(!inside(nr,cc))continue;if(enemy(who,b[nr][cc]))forward(nr,cc);else if(!b[nr][cc]&&s.ep&&s.ep[0]===nr&&s.ep[1]===cc&&b[r][cc]===(who==='w'?'p':'P'))add(r,c,nr,cc,'ep');}}
else if(t==='n'){for(const [dr,dc] of knights){let rr=r+dr,cc=c+dc;if(inside(rr,cc)&&(!b[rr][cc]||enemy(who,b[rr][cc])))add(r,c,rr,cc);}}
else if(t==='b'||t==='r'||t==='q'){let directions=t==='b'?dirsB:t==='r'?dirsR:[...dirsB,...dirsR];for(const [dr,dc] of directions){let rr=r+dr,cc=c+dc;while(inside(rr,cc)){if(!b[rr][cc])add(r,c,rr,cc);else{if(enemy(who,b[rr][cc]))add(r,c,rr,cc);break;}rr+=dr;cc+=dc;}}}
else if(t==='k'){for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++){if(!dr&&!dc)continue;let rr=r+dr,cc=c+dc;if(inside(rr,cc)&&(!b[rr][cc]||enemy(who,b[rr][cc])))add(r,c,rr,cc);}
const home=who==='w'?7:0,rook=who==='w'?'R':'r',opp=who==='w'?'b':'w';if(r===home&&c===4&&!inCheck(s,who)){
if(s.rights.includes(who==='w'?'K':'k')&&b[home][7]===rook&&!b[home][5]&&!b[home][6]&&!attacked(s,home,5,opp)&&!attacked(s,home,6,opp))add(r,c,home,6,'castleK');
if(s.rights.includes(who==='w'?'Q':'q')&&b[home][0]===rook&&!b[home][1]&&!b[home][2]&&!b[home][3]&&!attacked(s,home,3,opp)&&!attacked(s,home,2,opp))add(r,c,home,2,'castleQ');}}
}return moves;}
function apply(s,m){let t=copy(s),b=t.b,p=b[m.fr][m.fc],taken=b[m.tr][m.tc];b[m.fr][m.fc]='';if(m.sp==='ep'){taken=b[m.fr][m.tc];b[m.fr][m.tc]='';}
if(m.sp==='castleK'){b[m.fr][5]=b[m.fr][7];b[m.fr][7]='';}
if(m.sp==='castleQ'){b[m.fr][3]=b[m.fr][0];b[m.fr][0]='';}
b[m.tr][m.tc]=m.promotion?(s.turn==='w'?m.promotion:m.promotion.toLowerCase()):p;
let rights=t.rights;
if(p==='K')rights=rights.replace(/[KQ]/g,'');if(p==='k')rights=rights.replace(/[kq]/g,'');
for(const [r,c,right] of [[7,0,'Q'],[7,7,'K'],[0,0,'q'],[0,7,'k']])if((m.fr===r&&m.fc===c)||(m.tr===r&&m.tc===c))rights=rights.replace(right,'');
t.rights=rights;t.ep=p.toLowerCase()==='p'&&Math.abs(m.tr-m.fr)===2?[(m.tr+m.fr)/2,m.fc]:null;
t.half=p.toLowerCase()==='p'||taken?0:s.half+1;t.full=s.full+(s.turn==='b'?1:0);t.turn=s.turn==='w'?'b':'w';return t;}
function legal(s){let who=s.turn;return pseudo(s,who).filter(m=>!inCheck(apply(s,m),who));}
function positionKey(s){return s.b.map(row=>row.map(x=>x||'.').join('')).join('/')+' '+s.turn+' '+s.rights+' '+(s.ep?s.ep.join(''):'-');}

function uci(m){return sqName(m.fr,m.fc)+sqName(m.tr,m.tc)+(m.promotion||'').toLowerCase();}
function san(s,m){if(m.sp==='castleK')return castleSuffix(s,m,'O-O');if(m.sp==='castleQ')return castleSuffix(s,m,'O-O-O');
let p=s.b[m.fr][m.fc],kind=p.toUpperCase(),capture=!!s.b[m.tr][m.tc]||m.sp==='ep',result='';
if(kind==='P'){if(capture)result+='abcdefgh'[m.fc];}
else {result+=kind;let competitors=legal(s).filter(x=>x!==m&&x.tr===m.tr&&x.tc===m.tc&&s.b[x.fr][x.fc].toUpperCase()===kind&&(x.fr!==m.fr||x.fc!==m.fc));if(competitors.length){let sameFile=competitors.some(x=>x.fc===m.fc),sameRank=competitors.some(x=>x.fr===m.fr);if(!sameFile)result+='abcdefgh'[m.fc];else if(!sameRank)result+=(8-m.fr);else result+=sqName(m.fr,m.fc);}}
result+=(capture?'x':'')+sqName(m.tr,m.tc)+(m.promotion?'='+m.promotion:'');return castleSuffix(s,m,result);}
function castleSuffix(s,m,base){let t=apply(s,m);if(inCheck(t,t.turn))return base+(legal(t).length?'+' :'#');return base;}
function endState(s,visited){let avail=legal(s);if(!avail.length)return {over:true,reason:inCheck(s,s.turn)?'checkmate':'stalemate',winner:inCheck(s,s.turn)?(s.turn==='w'?'b':'w'):null};if(s.half>=100)return{over:true,reason:'50-move rule',winner:null};if(visited){let k=positionKey(s),cnt=visited.filter(x=>x===k).length;if(cnt>=3)return{over:true,reason:'threefold repetition',winner:null};}
const pcs=[];for(const row of s.b)for(const p of row)if(p&&p.toLowerCase()!=='k')pcs.push(p.toLowerCase());if(pcs.length===0||pcs.length===1&&['n','b'].includes(pcs[0])||pcs.length===2&&pcs[0]==='b'&&pcs[1]==='b'&&sameBishopColor(s))return{over:true,reason:'insufficient material',winner:null};return {over:false};}
function sameBishopColor(s){let cols=[];for(let r=0;r<8;r++)for(let c=0;c<8;c++)if(s.b[r][c].toLowerCase()==='b')cols.push((r+c)%2);return cols.length===2&&cols[0]===cols[1];}
function fen(s){return s.b.map(row=>{let str='',n=0;for(const x of row){if(x)n?(str+=n,n=0):0;else n++;if(x)str+=x;}if(n)str+=n;return str;}).join('/')+' '+s.turn+' '+(s.rights||'-')+' '+(s.ep?sqName(...s.ep):'-')+' '+s.half+' '+s.full;}
return {initial,copy,legal,apply,inCheck,attacked,positionKey,uci,san,endState,fen,sqName,color};
})();