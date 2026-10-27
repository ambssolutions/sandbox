// Render posters/*.html to out/poster-<name>.jpg at the #frame size (4:5 feed 1080x1350, or 9:16 story 1080x1920).
//   node posters/render.mjs [name-prefix…]
import { chromium } from "playwright";
import { readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const wanted = process.argv.slice(2);
const names = readdirSync(here).filter((f) => f.endsWith(".html") && !f.startsWith("_")).map((f) => f.slice(0, -5))
  .filter((n) => !wanted.length || wanted.some((w) => n.startsWith(w)));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 640, height: 960 }, deviceScaleFactor: 2 });
for (const n of names) {
  await page.goto(pathToFileURL(join(here, n + ".html")).href);
  await page.evaluate(() => document.fonts.ready);
  const out = join(here, "..", "out", `poster-${n}.jpg`);
  const bb = await page.locator("#frame").boundingBox();
  const clip = { x: Math.round(bb.x), y: Math.round(bb.y), width: Math.round(bb.width), height: Math.round(bb.height) };
  await page.screenshot({ path: out, type: "jpeg", quality: 93, clip });
  console.log("✓", out);
}
await browser.close();
