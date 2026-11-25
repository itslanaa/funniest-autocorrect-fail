// Funniest Autocorrect Fail: the program writes its one-line entry to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Autocorrect changed 'meeting at 9' to 'meeting at wine' and now the whole office thinks I run a bar.";
const MIN_CHARS = 1;
const MAX_CHARS = 199;

const destination = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (LINE.length < MIN_CHARS || LINE.length > MAX_CHARS) {
  throw new Error(`entry is ${LINE.length} chars, outside the ${MIN_CHARS}-${MAX_CHARS} gate`);
}
mkdirSync(destination, { recursive: true });
writeFileSync(join(destination, "entry.txt"), LINE, "utf8");
