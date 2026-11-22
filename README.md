# The agent builds a game from one prompt

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Diamondpeter/post-x-agent-builds-game-entry/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Diamondpeter/post-x-agent-builds-game-entry/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt. One tiny browser game. One short video of the agent building it while you watch.

The prompt was: **"Build me a tiny browser game — catch the falling stars."**

The agent built **Star Catcher** (`game.html`): stars fall from a night sky, you move the paddle with your mouse or arrow keys, every catch is a point, every star that hits the ground costs a life. Three lives, then game over. Open `game.html` in any browser and play it.

The video (`video.mp4`, vertical 9:16) shows the whole loop in one short clip: the prompt, the agent working, the finished game running — and it ends with make.fun's referral end card from the press pack, with referral code `h68hpwev` typed into its field.

## The entry

The entry is the post on X carrying the video. `POST.json` names the post's address; `main.ts` (Node 22, standard library only) copies it to `/output/POST.json`, which is all the program has to do — the house reads the post's views and interactions from X itself.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Bounty: [The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709) — $20 shared by the 10 highest-scoring posts (score = views + 10 × likes, reposts, quotes and replies).

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Come build on make.fun: https://make.fun/r/h68hpwev
