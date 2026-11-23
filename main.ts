// How Many Tabs Do You Have Open?
// Writes one honest count of open browser tabs, digits only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const tabs = 137;

// The gate allows 1 to 5 characters, digits only, never whitespace-only.
if (!Number.isInteger(tabs) || tabs < 0 || String(tabs).length > 5) {
  throw new Error("tab count must be a number of 1 to 5 digits");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), String(tabs), "utf8");
