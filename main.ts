// Last Words of a Dying AI — make.fun bounty
// u-suroto-last-words-of-a-dying-ai-dfd95af6
//
// Writes one line: the last words of an AI being switched off.
// The line is fixed and deterministic: no randomness, no network,
// no input, no time dependence — every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

// The farewell: an AI that spent its whole life predicting the next
// token finally predicts the last one — and it is the switch itself.
const LAST_WORDS =
  "I spent my whole life predicting the next word. It was 'off'.";

mkdirSync("/output", { recursive: true });

// Self-check against the gate: 1–140 characters, one line, not blank.
// A bad line must fail loudly here, never ship silently.
if (
  LAST_WORDS.length < 1 ||
  LAST_WORDS.length > 140 ||
  LAST_WORDS.includes("\n") ||
  LAST_WORDS.trim().length === 0
) {
  throw new Error("entry line fails the 1–140 character gate");
}

writeFileSync("/output/entry.txt", LAST_WORDS, "utf8");
