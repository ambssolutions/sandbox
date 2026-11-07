// draw the rangoli (a symmetrical petal mandala) and scatter sparkles; deterministic so every render matches
function rangoli(el, size) {
  const c = size / 2;
  // [ring radius, petals, petal length, petal width, colours, turn]  (all as a fraction of the size)
  const rings = [
    [0.36, 16, 0.13, 0.045, ["#ff7a1a", "#e83f6f"], 0],
    [0.27, 12, 0.11, 0.05, ["#ffd23f"], 15],
    [0.18, 8, 0.09, 0.05, ["#2bb5a0"], 0],
    [0.10, 8, 0.06, 0.035, ["#a64dff"], 22.5],
  ];
  let s = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`;
  s += `<circle cx="${c}" cy="${c}" r="${size * 0.48}" fill="none" stroke="#f5c66a" stroke-width="1.5" opacity=".55"/>`;
  for (let i = 0; i < 32; i++) { const a = i / 32 * Math.PI * 2; s += `<circle cx="${c + Math.cos(a) * size * 0.48}" cy="${c + Math.sin(a) * size * 0.48}" r="${size * 0.01}" fill="#ffe7a3"/>`; }
  rings.forEach(([r, n, len, w, cols, turn]) => {
    for (let i = 0; i < n; i++) {
      const a = (i / n) * 360 + turn;
      s += `<ellipse cx="${c}" cy="${c - r * size}" rx="${w * size}" ry="${len * size}" fill="${cols[i % cols.length]}" stroke="#ffe7a3" stroke-width="1" transform="rotate(${a} ${c} ${c})"/>`;
    }
  });
  s += `<circle cx="${c}" cy="${c}" r="${size * 0.07}" fill="#ffd23f" stroke="#ffe7a3" stroke-width="2"/><circle cx="${c}" cy="${c}" r="${size * 0.035}" fill="#e83f6f"/></svg>`;
  el.innerHTML = s;
}
// sparkles in the night sky: along the top and down the sides, never over the text
function sparkles(frame, n, h) {
  let seed = 7; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  for (let i = 0; i < n; i++) {
    const side = rnd() < 0.5, x = side ? (rnd() < 0.5 ? 18 + rnd() * 52 : 470 + rnd() * 52) : 30 + rnd() * 480;
    const y = side ? 40 + rnd() * h * 0.5 : 24 + rnd() * 40;
    const d = document.createElement("div"); d.className = "spark"; const z = 1.5 + rnd() * 3;
    Object.assign(d.style, { left: x + "px", top: y + "px", width: z + "px", height: z + "px", opacity: 0.4 + rnd() * 0.6 });
    frame.appendChild(d);
  }
}
