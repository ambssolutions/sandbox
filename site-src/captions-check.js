/* The text under the homepage's Media photos is page text (edited in the page editor, shown by position under whichever photo is in that place):
   each built-in slide must have a title and a write-up, and each built-in picture description matches the Photos list's starting photos.
   Run: node captions-check.js [path to index.html] [path to api/_lib.js] */
const fs = require('fs');
const html = fs.readFileSync(process.argv[2] || 'index.html', 'utf8');
const lib = fs.readFileSync(process.argv[3] || 'api/_lib.js', 'utf8');
const stock = [...lib.matchAll(/\['(stock-[a-z0-9-]+)', '([^']+)', '([^']+)'\]/g)].map((m) => ({ id: m[1], alt: m[2] }));
const track = html.slice(html.indexOf('id="mcarTrack"'), html.indexOf('mcar-bar'));
const slides = [...track.matchAll(/<figure class="mcar-s[^"]*">([\s\S]*?)<\/figure>/g)].map((m) => ({ src: (/src="([^"]+)"/.exec(m[1]) || [])[1] || '', alt: (/alt="([^"]*)"/.exec(m[1]) || [])[1] || '', cap: /<figcaption><b>[^<]+<\/b><span>[^<]+<\/span><\/figcaption>/.test(m[1]) }));
let bad = 0;
for (const s of stock) {
  const sl = slides.find((x) => x.src.includes(s.id + '-'));
  if (!sl) { console.log('FAIL no built-in slide for ' + s.id); bad++; continue; }
  const ok = sl.cap && sl.alt === s.alt;
  console.log((ok ? 'ok   ' : 'FAIL ') + s.id + ': ' + (sl.cap ? 'has a title and write-up' : 'MISSING its title or write-up') + ', description ' + (sl.alt === s.alt ? 'matches' : 'differs'));
  if (!ok) bad++;
}
console.log(bad ? bad + ' problems' : 'every built-in slide has its title and write-up, and the picture descriptions match');
process.exit(bad ? 1 : 0);
