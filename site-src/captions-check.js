/* The homepage's built-in Media slides (what the page editor shows, and what search engines and visitors without scripts see)
   must say the same as the Photos list's starting photos (what visitors see once the page's script runs).
   Run: node captions-check.js [path to index.html] [path to api/_lib.js] */
const fs = require('fs');
const html = fs.readFileSync(process.argv[2] || 'index.html', 'utf8');
const lib = fs.readFileSync(process.argv[3] || 'api/_lib.js', 'utf8');
const stock = [...lib.matchAll(/\['(stock-[a-z0-9-]+)', '([^']+)', '([^']+)'\]/g)].map((m) => ({ id: m[1], alt: m[2], caption: m[3], desc: m[2] + '.' }));
const track = html.slice(html.indexOf('id="mcarTrack"'), html.indexOf('mcar-bar'));
const slides = [...track.matchAll(/<figure class="mcar-s[^"]*">([\s\S]*?)<\/figure>/g)].map((m) => ({
  src: (/src="([^"]+)"/.exec(m[1]) || [])[1] || '', cap: ((/<figcaption><b>([\s\S]*?)<\/b>/.exec(m[1])) || [])[1] || '', desc: ((/<span>([\s\S]*?)<\/span>/.exec(m[1])) || [])[1] || ''
}));
let bad = 0;
for (const s of stock) {
  const sl = slides.find((x) => x.src.includes(s.id + '-'));
  if (!sl) { console.log('FAIL no built-in slide for ' + s.id); bad++; continue; }
  const same = sl.cap === s.caption && sl.desc === s.desc;
  console.log((same ? 'ok   ' : 'FAIL ') + s.id + ': built-in "' + sl.cap + '" vs Photos list "' + s.caption + '"');
  if (!same) bad++;
}
console.log(bad ? bad + ' mismatched' : 'built-in captions match the Photos list');
process.exit(bad ? 1 : 0);
