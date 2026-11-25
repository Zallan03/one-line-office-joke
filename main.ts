// One-Line Office Joke Laugh-Off — entry program (program/v1, Node 22).
// Writes one office joke to /output/entry.txt
// (MAKEFUN_OUTPUT_DIR stands in for /output when grading locally).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My performance review praised my 'strong email presence' \u2014 which is just replying 'Sounds good!' to emails I never read.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;

// Count code points, not UTF-16 units, so the check matches the gate's
// character count exactly (the em dash is one character either way, but
// the rule should be right for any future text).
const charCount = Array.from(ENTRY).length;
if (charCount < MIN_CHARS || charCount > MAX_CHARS) {
  throw new Error(
    `entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${charCount}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
