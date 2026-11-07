// Render thumbnails/*.html to out/<name>-thumbnail.jpg (1080x1920).
//   node thumbnails/render.mjs [name-prefix…]
import { chromium } from "playwright";
import { existsSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const wanted = process.argv.slice(2);
const names = readdirSync(here).filter((f) => f.endsWith(".html")).map((f) => f.slice(0, -5))
  .filter((n) => !wanted.length || wanted.some((w) => n.startsWith(w)));
// use the machine's pre-installed Chromium when there is one (CHROMIUM overrides), else Playwright's own
const exe = process.env.CHROMIUM ?? (existsSync("/opt/pw-browsers/chromium") ? "/opt/pw-browsers/chromium" : undefined);
const browser = await chromium.launch(exe ? { executablePath: exe } : {});
const page = await browser.newPage({ viewport: { width: 540, height: 960 }, deviceScaleFactor: 2 });
for (const n of names) {
  await page.goto(pathToFileURL(join(here, n + ".html")).href);
  await page.evaluate(() => document.fonts.ready);
  const out = join(here, "..", "out", n + "-thumbnail.jpg");
  await page.locator("#frame").screenshot({ path: out, type: "jpeg", quality: 93 });
  console.log("✓", out);
}
await browser.close();
