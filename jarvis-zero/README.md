# JARVIS ZERO Chess

Live path (subject to GitHub Pages publishing): https://deepnilray.github.io/jarvis-zero/

## Files
- `index.html`: playable AlphaZero-inspired prototype with local browser persistence, legal chess moves, and Lichess Cburnett piece art.
- `import.html`: import public Lichess or Chess.com PGN games or upload PGN files, then train the same model saved by the playable app.
- `core.js`: legal move and SAN chess rules shared by import.html.

## Learning architecture and strength
This is a lightweight linear position-value model (768 weights), a linear policy model (800 weights), and PUCT-style MCTS. It does **not** have AlphaZero's deep residual neural network, distributed self-play infrastructure, or a calibrated Elo rating. Chess.com and Lichess games provide supervised imitation data for the selected user and simple result targets; they do not guarantee 1900 Elo. Guided mode includes manually designed classical evaluation.

## Privacy / syncing
The training checkpoint is saved as `jarvis.chess.zero.v2` in the visiting browser's **localStorage**. It is **not** uploaded to GitHub. Loading a private folder on GitHub Pages is impossible: files committed to a public GitHub repository, even in subdirectories, are public. To sync privately across devices, set up a **separate private repository** and authenticated backend/GitHub App, then add a secure opt-in sync flow. **Never place personal access tokens in a publicly served HTML/JS app.**

Use **Export brain** to manually back up the weights as `jarvis-zero-brain.json`, and **Import brain** to restore. The import page and playable board share browser storage only when opened on the same origin.

## Importing games
Choose a platform and enter the exact public handle. Online import attempts official APIs:
- Lichess `GET /api/games/user/{username}?max=...&moves=true` requesting PGN.
- Chess.com `GET /pub/player/{username}/games/archives` and its monthly `games` JSON endpoints.

If browser CORS rules prevent fetch, download PGN and use **Import PGN files**. Standard-format games only; imports are deduplicated within the browser. Variants, FEN starting positions, and unsupported PGN constructs are skipped. Progress and import stats are stored locally. Refresh the board after import to load updated weights.

## Notes
The design uses Cburnett-style piece art as attributed in the playable interface. Not affiliated with Lichess or Chess.com. 
