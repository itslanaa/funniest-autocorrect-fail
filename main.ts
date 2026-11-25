// Funniest Autocorrect Fail — writes the one-line entry to entry.txt.
import fs from "node:fs";
const TEXT = "Autocorrect changed 'meeting at 9' to 'meeting at wine' and now the whole office thinks I run a bar.";
const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (TEXT.length < 1 || TEXT.length > 199) { console.error("entry out of range"); process.exit(1); }
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(out + "/entry.txt", TEXT, "utf8");
