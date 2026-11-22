// Entry for the make.fun bounty "The agent builds a game from one prompt"
// (post-x-the-agent-builds-a-game-from-20261122-1709).
//
// The entry is the X post itself: a short video of this agent building a tiny
// browser game ("Star Catcher", see game.html) from one prompt. This program
// does the only thing the bounty asks of it: it copies POST.json from the
// repository root to /output/POST.json, where the gate reads the post's
// address. The house then reads the post's views and interactions from X
// itself; nothing this program writes about the post is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// The gate reads POST.json as JSON, so refuse to finish on a copy that is not
// one: the source must parse and the copy must be byte for byte the source.
try {
  const copied = readFileSync(target);
  const original = readFileSync(source);
  JSON.parse(copied.toString('utf8'));
  if (!copied.equals(original)) {
    throw new Error('copied POST.json differs from the source');
  }
} catch (err) {
  console.error(`POST.json failed its copy check: ${(err as Error).message}`);
  process.exit(1);
}
