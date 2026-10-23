// Centre-alignment check (owner's rule). Every heading, intro, paragraph, label and button must be
// centred, alone or as a centred row. Only FAQs, forms, the catalogue list, the studio tools and menus
// may be left-aligned. Run before showing anything:  python3 -m http.server 8124  then  node tools/align-check.mjs
import { createRequire } from "node:module"; import { execSync } from "node:child_process";
const require = createRequire(import.meta.url);
const { chromium } = require(execSync("npm root -g").toString().trim() + "/playwright");
const b = await chromium.launch({ args: ["--use-gl=swiftshader", "--enable-unsafe-swiftshader"] });
const BASE = process.env.BASE || "http://127.0.0.1:8124/";
const pages = ["concepts/", "concepts/designs/01-after-dark/", "concepts/designs/02-arch/", "concepts/designs/03-reels/", "concepts/designs/04-atelier/", "concepts/designs/05-studio/", "concepts/designs/06-showroom/", "v1.html", "gallery.html"];
let total = 0;
for (const u of pages) for (const [w, h] of [[1366, 768], [390, 844]]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto(BASE + u, { waitUntil: "networkidle" });
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 800) { scrollTo(0, y); await new Promise(r => setTimeout(r, 30)); } scrollTo(0, 0); });
  await p.waitForTimeout(1500);
  const bad = await p.evaluate(() => {
    const SKIP = ".faq-list,form .field,form .hp,.st,.st3d,.cat,.make-list>li>button,header,nav,.lb,.quick,[data-concept-switcher],.tray,dialog,.card,.vbar,.filters,.seg,.hp,.skip,.make-list .pm,.tile-ph,.thumb,.index,.phone,.steps3 .n,.st-cut,.rail,.mosaic .tile,.pv-panel";
    const out = [];
    document.querySelectorAll("main h1, main h2, main h3, main p, main dt, main dd, main .k, main .btn, main a.link, main .t-link, main .lede, main li, main button[type=submit], main .send").forEach(el => {
      if (el.closest(SKIP) || !el.offsetParent) return;
      const cs = getComputedStyle(el); if (cs.visibility === "hidden") return;
      const r = el.getBoundingClientRect(); if (!r.width) return;
      const centredText = cs.textAlign === "center";
      // the box itself should sit in the middle of its section's content area
      let par = el.parentElement; while (par && getComputedStyle(par).display === "contents") par = par.parentElement;
      const pr = par.getBoundingClientRect(), pcs = getComputedStyle(par);
      const pl = pr.left + parseFloat(pcs.paddingLeft), prr = pr.right - parseFloat(pcs.paddingRight);
      // items side by side in a row are judged as a group: the row's contents must sit in the middle
      let L = r.left, R = r.right;
      if (/flex|grid/.test(pcs.display) && par.children.length > 1) {
        const kids = [...par.children].filter(k => k.offsetParent).map(k => k.getBoundingClientRect()).filter(k => Math.abs(k.top - r.top) < r.height);
        L = Math.min(...kids.map(k => k.left)); R = Math.max(...kids.map(k => k.right));
      }
      const boxCentred = Math.abs((L - pl) - (prr - R)) < 6;
      const fullWidth = r.width > (prr - pl) - 6;
      if (!(boxCentred && (centredText || !fullWidth || el.childElementCount))) {
        if (!(centredText && boxCentred)) out.push(el.tagName.toLowerCase() + "." + (el.className || "") + ' "' + el.textContent.trim().slice(0, 40) + '" align=' + cs.textAlign + " box=" + (boxCentred ? "centred" : "off"));
      }
    });
    return out;
  });
  total += bad.length;
  console.log(u, w, bad.length ? "\n   " + bad.slice(0, 12).join("\n   ") : "ok");
  await p.close();
}
console.log("TOTAL", total);
process.exitCode = total ? 1 : 0;
await b.close();
