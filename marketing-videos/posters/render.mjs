// Render posters/*.html to out/poster-<name>.jpg (4:5, 1080x1350).
//   node posters/render.mjs [name-prefix…]
import { chromium } from "playwright";
import { readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const wanted = process.argv.slice(2);
const names = readdirSync(here).filter((f) => f.endsWith(".html")).map((f) => f.slice(0, -5))
  .filter((n) => !wanted.length || wanted.some((w) => n.startsWith(w)));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 540, height: 675 }, deviceScaleFactor: 2 });
for (const n of names) {
  await page.goto(pathToFileURL(join(here, n + ".html")).href);
  await page.evaluate(() => document.fonts.ready);
  const out = join(here, "..", "out", `poster-${n}.jpg`);
  await page.locator("#frame").screenshot({ path: out, type: "jpeg", quality: 93 });
  console.log("✓", out);
}
await browser.close();
