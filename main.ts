import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original fortune-cookie line for a developer (81 chars, under the
// 120-char gate). Written exactly as-is, with no trailing newline, so the
// gate reads the line and nothing else.
const entry =
  "Your estimate was a wish dressed as a number; the deadline heard it as a promise.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
