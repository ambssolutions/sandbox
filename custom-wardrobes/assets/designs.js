/* Designs for the room preview: one source for the design list, finishes and trims.
   Two kinds:
   - photo designs: a real build, flattened from the client's own video (`photo` + `size` in mm)
   - drawn designs: drawn to real proportions at 0.5 px per mm, in the styles of the client's
     builds, using marble and walnut herringbone textures taken from those builds.
   Every design has a `cat` (see CATS). Call CW_DESIGNS.ready() before drawing. */
(function () {
  var PX = 0.5; // pixels per millimetre in the texture

  var FINISHES = {
    walnut:   { label: "Walnut",      base: "#5a3e2b", dark: "#3d2a1d", light: "#7b5940", grain: true },
    oak:      { label: "Natural oak", base: "#c39a6b", dark: "#a07a4f", light: "#dbb88e", grain: true },
    white:    { label: "White gloss", base: "#f2f0eb", gloss: true },
    charcoal: { label: "Charcoal",    base: "#3b3b3d", matt: true },
    cream:    { label: "Cream",       base: "#d8c6a1", soft: true },
    mirror:   { label: "Mirror",      base: "#c9d2d6", mirror: true },
    taupe:    { label: "Taupe",       base: "#8d7d71", matt: true },
    greige:   { label: "Soft grey",   base: "#b9b1a8", matt: true }
  };

  var TRIMS = {
    brass:  { label: "Brass",  c: "#b8944f", hi: "#e3c88c" },
    black:  { label: "Black",  c: "#1d1c1b", hi: "#4a4846" },
    silver: { label: "Silver", c: "#a9adb0", hi: "#e4e6e7" },
    none:   { label: "None" },
    warm:   { label: "Warm light", light: "255,190,105" },
    cool:   { label: "Cool light", light: "236,240,255" },
    dark:   { label: "No light" }
  };

  var CATS = [
    { id: "tv", label: "TV walls" },
    { id: "prayer", label: "Prayer and art" },
    { id: "walls", label: "Walls and bedroom" },
    { id: "wardrobes", label: "Wardrobes" }
  ];

  // Real photos and textures from the client's builds
  var IMG = {}, SRC = {
    marble: "assets/img/designs/tex-marble.webp",
    herringbone: "assets/img/designs/tex-herringbone.webp",
    carved: "assets/img/designs/carved-panel.webp",
    prayer: "assets/img/designs/prayer-unit.webp",
    litframe: "assets/img/designs/lit-tv-frame.webp"
  };
  // Pages in sub-folders set window.CW_BASE (e.g. "../../../") so these paths still resolve
  Object.keys(SRC).forEach(function (k) { SRC[k] = (window.CW_BASE || "") + SRC[k]; });
  var loading = null;
  function ready() {
    if (loading) return loading;
    loading = Promise.all(Object.keys(SRC).map(function (k) {
      return new Promise(function (res) {
        var im = new Image(); im.decoding = "async";
        im.onload = function () { IMG[k] = im; res(); }; im.onerror = function () { res(); };
        im.src = SRC[k];
      });
    }));
    return loading;
  }
  // Mirror a texture into a 2 x 2 tile, so it repeats without hard seams
  var tiles = {};
  function tile(key) {
    if (tiles[key] || !IMG[key]) return tiles[key];
    var im = IMG[key], w = im.naturalWidth, h = im.naturalHeight, c = document.createElement("canvas");
    c.width = w * 2; c.height = h * 2;
    var x = c.getContext("2d");
    [[1, 1, 0, 0], [-1, 1, w * 2, 0], [1, -1, 0, h * 2], [-1, -1, w * 2, h * 2]].forEach(function (t) {
      x.setTransform(t[0], 0, 0, t[1], t[2], t[3]); x.drawImage(im, 0, 0);
    });
    return (tiles[key] = c);
  }
  function fillTex(ctx, key, x, y, w, h, scale, fallback) {
    var t = tile(key);
    ctx.save(); ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
    if (!t) { ctx.fillStyle = fallback; ctx.fillRect(x, y, w, h); ctx.restore(); return; }
    var pat = ctx.createPattern(t, "repeat");
    if (pat.setTransform && window.DOMMatrix) pat.setTransform(new DOMMatrix().translate(x, y).scale(scale));
    ctx.fillStyle = pat; ctx.fillRect(x, y, w, h); ctx.restore();
  }
  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }
  // LED strip light: a soft spill of light around a shape, as in the client's builds
  function halo(ctx, x, y, w, h, r, key, size) {
    var t = TRIMS[key]; if (!t || !t.light) return;
    ctx.save();
    ctx.shadowColor = "rgba(" + t.light + ",.95)"; ctx.shadowBlur = size;
    ctx.strokeStyle = "rgba(" + t.light + ",.9)"; ctx.lineWidth = 6;
    roundRect(ctx, x, y, w, h, r); ctx.stroke(); ctx.stroke();
    ctx.restore();
  }
  function lightBand(ctx, x, y, w, h, key, down) {
    var t = TRIMS[key]; if (!t || !t.light) return;
    var g = ctx.createLinearGradient(0, y, 0, y + h);
    g.addColorStop(down ? 0 : 1, "rgba(" + t.light + ",.75)"); g.addColorStop(down ? 1 : 0, "rgba(" + t.light + ",0)");
    ctx.fillStyle = g; ctx.fillRect(x, y, w, h);
  }
  function slats(ctx, x, y, w, h, key, seed, slat, gapW) {
    slat = slat || 28; gapW = gapW || 10;
    ctx.fillStyle = "#17120e"; ctx.fillRect(x, y, w, h);
    for (var sx = x + 3, i = 0; sx < x + w; sx += slat + gapW, i++) panel(ctx, sx, y, Math.min(slat, x + w - sx), h, key, seed + i);
  }
  function tvScreen(ctx, x, y, w, h) {
    ctx.fillStyle = "#0b0b0d"; ctx.fillRect(x, y, w, h);
    var g = ctx.createLinearGradient(x, y, x + w, y + h);
    g.addColorStop(0, "rgba(255,255,255,.10)"); g.addColorStop(0.45, "rgba(255,255,255,0)");
    ctx.fillStyle = g; ctx.fillRect(x + 5, y + 5, w - 10, h - 10);
  }

  // Small seeded random, so the grain is the same every time a design is drawn
  function rand(seed) {
    var s = seed >>> 0 || 1;
    return function () { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return ((s >>> 0) % 100000) / 100000; };
  }

  function shade(hex, amt) {
    var n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    function f(v) { return Math.max(0, Math.min(255, Math.round(amt < 0 ? v * (1 + amt) : v + (255 - v) * amt))); }
    return "rgb(" + f(r) + "," + f(g) + "," + f(b) + ")";
  }

  // A flat panel in a finish, with a soft bevel
  function panel(ctx, x, y, w, h, key, seed) {
    var f = FINISHES[key] || FINISHES.white;
    ctx.save();
    ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
    ctx.fillStyle = f.base; ctx.fillRect(x, y, w, h);
    if (f.grain) {
      var r = rand(seed * 7919 + 13), lines = Math.max(6, Math.round(w / 3 * Math.min(1, K * 1.5)));
      for (var i = 0; i < lines; i++) {
        var gx = x + r() * w, amp = 1 + r() * 4, freq = 0.004 + r() * 0.01, ph = r() * 6.28;
        ctx.strokeStyle = r() > 0.5 ? f.dark : f.light;
        ctx.globalAlpha = 0.08 + r() * 0.22;
        ctx.lineWidth = 0.6 + r() * 1.8;
        ctx.beginPath();
        for (var yy = y, st = 12 / Math.max(K, 0.25); yy <= y + h + st; yy += st) {
          var xx = gx + Math.sin(yy * freq + ph) * amp;
          if (yy === y) ctx.moveTo(xx, yy); else ctx.lineTo(xx, yy);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }
    if (f.gloss) {
      var g = ctx.createLinearGradient(x, y, x + w, y + h);
      g.addColorStop(0, "rgba(255,255,255,.55)"); g.addColorStop(0.35, "rgba(255,255,255,0)");
      g.addColorStop(0.7, "rgba(0,0,0,.04)"); g.addColorStop(1, "rgba(255,255,255,.25)");
      ctx.fillStyle = g; ctx.fillRect(x, y, w, h);
    }
    if (f.matt) {
      var m = ctx.createLinearGradient(x, y, x, y + h);
      m.addColorStop(0, "rgba(255,255,255,.06)"); m.addColorStop(1, "rgba(0,0,0,.08)");
      ctx.fillStyle = m; ctx.fillRect(x, y, w, h);
    }
    if (f.soft) { // padded panel: lighter in the middle, darker at the seams
      var s = ctx.createLinearGradient(x, y, x + w, y);
      s.addColorStop(0, "rgba(60,40,20,.28)"); s.addColorStop(0.18, "rgba(255,255,255,.10)");
      s.addColorStop(0.5, "rgba(255,255,255,.16)"); s.addColorStop(0.82, "rgba(255,255,255,.06)");
      s.addColorStop(1, "rgba(60,40,20,.32)");
      ctx.fillStyle = s; ctx.fillRect(x, y, w, h);
    }
    if (f.mirror) {
      var mg = ctx.createLinearGradient(x, y, x + w * 0.6, y + h);
      mg.addColorStop(0, "#e6ecee"); mg.addColorStop(0.45, "#aab6bc"); mg.addColorStop(1, "#d4dcdf");
      ctx.fillStyle = mg; ctx.fillRect(x, y, w, h);
      ctx.fillStyle = "rgba(255,255,255,.35)";
      ctx.beginPath(); ctx.moveTo(x + w * 0.15, y); ctx.lineTo(x + w * 0.35, y); ctx.lineTo(x - w * 0.1, y + h * 0.7); ctx.lineTo(x - w * 0.3, y + h * 0.7); ctx.fill();
      ctx.beginPath(); ctx.moveTo(x + w * 0.5, y); ctx.lineTo(x + w * 0.56, y); ctx.lineTo(x + w * 0.1, y + h); ctx.lineTo(x + w * 0.04, y + h); ctx.fill();
    }
    // bevel
    ctx.fillStyle = "rgba(255,255,255,.18)"; ctx.fillRect(x, y, w, 2); ctx.fillRect(x, y, 2, h);
    ctx.fillStyle = "rgba(0,0,0,.22)"; ctx.fillRect(x, y + h - 2, w, 2); ctx.fillRect(x + w - 2, y, 2, h);
    ctx.restore();
  }

  function trimRect(ctx, x, y, w, h, key) {
    var t = TRIMS[key]; if (!t || !t.c) return;
    var g = w > h ? ctx.createLinearGradient(x, y, x, y + h) : ctx.createLinearGradient(x, y, x + w, y);
    g.addColorStop(0, t.hi); g.addColorStop(0.5, t.c); g.addColorStop(1, shade(t.c, -0.35));
    ctx.fillStyle = g; ctx.fillRect(x, y, w, h);
  }

  function gap(ctx, x, y, w, h) { ctx.fillStyle = "rgba(20,14,10,.75)"; ctx.fillRect(x, y, w, h); }

  var DESIGNS = [
    {
      id: "carved", cat: "prayer", label: "Backlit carved panel", photo: "carved", lift: 250,
      note: "A real build, from our Radha Krishna panel",
      count: { label: "Size", min: 1, max: 3, value: 2 },
      size: function (n) { return [[900, 1100, 1300][n - 1], [1800, 2200, 2600][n - 1]]; }
    },
    {
      id: "prayerunit", cat: "prayer", label: "Arched prayer unit", photo: "prayer", lift: 150,
      note: "A real build, from our Gurbani prayer unit",
      count: { label: "Size", min: 1, max: 3, value: 2 },
      size: function (n) { return [[1200, 1400, 1600][n - 1], [2300, 2700, 3100][n - 1]]; }
    },
    {
      id: "litframe", cat: "tv", label: "Lit TV frame", photo: "litframe", lift: 500,
      note: "A real build, from our walnut media wall",
      count: { label: "Size", min: 1, max: 3, value: 2 },
      size: function (n) { return [[1500, 1800, 2100][n - 1], [1780, 2136, 2492][n - 1]]; }
    },
    {
      id: "marbletv", cat: "tv", label: "Marble TV wall",
      count: { label: "Width, m", min: 3, max: 5, value: 4 },
      finishes: ["taupe", "walnut", "oak", "greige"], finish: "taupe",
      trims: ["warm", "cool", "dark"], trim: "warm", trimLabel: "Lighting",
      size: function (n) { return [n * 1000, 2500]; },
      draw: function (ctx, W, H, o) {
        var shelf = 500 * PX, tall = 650 * PX, unitTop = H - 760 * PX, unitH = 420 * PX;
        var mx = shelf + 120 * PX, mw = W - shelf - tall - 240 * PX, my = 330 * PX, mh = unitTop - my - 220 * PX;
        panel(ctx, 0, 0, W, H, o.finish, 2000);
        slats(ctx, shelf, 0, W - shelf - tall, H, o.finish === "taupe" ? "walnut" : o.finish, 2010, 14, 8);
        panel(ctx, shelf, my - 120 * PX, W - shelf - tall, mh + 240 * PX, o.finish, 2005);
        // lit display shelves on the left
        panel(ctx, 0, 0, shelf, unitTop, "white", 2020);
        for (var s = 1; s < 5; s++) { var sy = s * unitTop / 5; lightBand(ctx, 10, sy + 10, shelf - 20, 140, o.trim, true); panel(ctx, 0, sy, shelf, 12, "white", 2021 + s); }
        panel(ctx, W - tall, 0, tall, H - 60, o.finish, 2030);
        gap(ctx, W - tall, 0, 3, H);
        halo(ctx, mx, my, mw, mh, 60, o.trim, 60);
        ctx.save(); roundRect(ctx, mx, my, mw, mh, 60); ctx.clip();
        fillTex(ctx, "marble", mx, my, mw, mh, 1.6, "#e9e7e4"); ctx.restore();
        tvScreen(ctx, mx + mw * 0.14, my + mh * 0.16, mw * 0.72, mw * 0.72 * 9 / 16);
        // floating unit: white doors, timber top
        panel(ctx, 0, unitTop, W - tall, 30, "walnut", 2040);
        var doors = Math.max(3, Math.round((W - tall) / 300));
        for (var d = 0; d < doors; d++) panel(ctx, d * (W - tall) / doors + 2, unitTop + 30, (W - tall) / doors - 4, unitH, "white", 2050 + d);
        lightBand(ctx, 0, unitTop + 30 + unitH, W - tall, 140, o.trim, true);
      }
    },
    {
      id: "oakmarble", cat: "tv", label: "Oak and marble media wall",
      count: { label: "Width, m", min: 3, max: 5, value: 4 },
      finishes: ["oak", "walnut", "greige"], finish: "oak",
      trims: ["warm", "cool", "dark"], trim: "warm", trimLabel: "Lighting",
      size: function (n) { return [n * 1000, 2500]; },
      draw: function (ctx, W, H, o) {
        var tower = 500 * PX, unitTop = H - 700 * PX, unitH = 520 * PX, top = 160 * PX;
        var cx = tower + 40, cw = W - 2 * tower - 80;
        slats(ctx, 0, 0, W, H, o.finish, 2100, 18, 26);
        panel(ctx, 0, 0, W, top, o.finish, 2101);
        lightBand(ctx, 0, top, W, 110, o.trim, true);
        var mY = top + 200 * PX, mH = unitTop - mY - 220 * PX;
        fillTex(ctx, "marble", cx + 30, mY, cw - 60, mH, 1.5, "#e9e7e4");
        halo(ctx, cx + 30, mY, cw - 60, mH, 2, o.trim, 40);
        tvScreen(ctx, cx + cw * 0.2, mY + mH * 0.16, cw * 0.6, cw * 0.6 * 9 / 16);
        [0, W - tower].forEach(function (tx, k) {
          panel(ctx, tx, 0, tower, H - 40, o.finish, 2110 + k);
          ctx.fillStyle = "rgba(25,18,12,.55)"; ctx.fillRect(tx + 16, top, tower - 32, unitTop - top + unitH);
          for (var s = 0; s < 6; s++) {
            var sy = top + s * (unitTop + unitH - top) / 6;
            lightBand(ctx, tx + 16, sy + 8, tower - 32, 120, o.trim, true);
            panel(ctx, tx + 16, sy, tower - 32, 10, o.finish, 2120 + s);
          }
        });
        for (var d = 0; d < 4; d++) panel(ctx, cx + d * cw / 4 + 2, unitTop, cw / 4 - 4, unitH, "greige", 2140 + d);
        panel(ctx, cx, unitTop - 14, cw, 14, o.finish, 2150);
        lightBand(ctx, cx, unitTop + unitH, cw, 120, o.trim, true);
      }
    },
    {
      id: "walnutarc", cat: "tv", label: "Walnut media wall with arcs",
      count: { label: "Width, m", min: 3, max: 5, value: 4 },
      finishes: ["walnut", "charcoal", "oak"], finish: "walnut",
      trims: ["warm", "cool", "dark"], trim: "cool", trimLabel: "Lighting",
      size: function (n) { return [n * 1000, 2500]; },
      draw: function (ctx, W, H, o) {
        var fw = Math.min(W * 0.46, 1900 * PX), fx = (W - fw) / 2, fy = 330 * PX, fh = fw * 0.82, inset = 46;
        panel(ctx, 0, 0, W, H, o.finish, 2200);
        for (var x = 300 * PX; x < W; x += 600 * PX) gap(ctx, x, 0, 2, H);
        // white four-point arc inlays along the bottom and sides
        function star(cx, cy, r) {
          ctx.fillStyle = "#e9e6e1"; ctx.beginPath();
          ctx.moveTo(cx, cy - r); ctx.quadraticCurveTo(cx, cy, cx + r, cy); ctx.quadraticCurveTo(cx, cy, cx, cy + r);
          ctx.quadraticCurveTo(cx, cy, cx - r, cy); ctx.quadraticCurveTo(cx, cy, cx, cy - r); ctx.fill();
        }
        var sy = H - 420 * PX;
        for (var s = 600 * PX; s < W; s += 900 * PX) star(s, sy, 170 * PX);
        star(fx - 300 * PX, fy + fh * 0.75, 170 * PX); star(fx + fw + 300 * PX, fy + fh * 0.75, 170 * PX);
        // lit frame with a fluted backing
        panel(ctx, fx - 40, fy - 40, fw + 80, fh + 80, "greige", 2210);
        ctx.fillStyle = "#e9e5df"; ctx.fillRect(fx + inset, fy + inset, fw - 2 * inset, fh - 2 * inset);
        ctx.fillStyle = "rgba(120,110,100,.35)";
        for (var f = fx + inset; f < fx + fw - inset; f += 5) ctx.fillRect(f, fy + inset, 1.5, fh - 2 * inset);
        halo(ctx, fx + inset, fy + inset, fw - 2 * inset, fh - 2 * inset, 2, o.trim, 50);
        var tw = fw * 0.76; tvScreen(ctx, fx + (fw - tw) / 2, fy + inset + 40, tw, tw * 9 / 16);
        // timber plinth with light underneath
        panel(ctx, 0, H - 70, W, 70, "oak", 2220);
        lightBand(ctx, 0, H - 150, W, 80, o.trim, false);
      }
    },
    {
      id: "herringbone", cat: "walls", label: "Walnut herringbone wall",
      count: { label: "Width, m", min: 2, max: 5, value: 3 },
      finishes: ["walnut"], finish: "walnut",
      trims: ["warm", "dark"], trim: "warm", trimLabel: "Wall lights",
      size: function (n) { return [n * 1000, 2500]; },
      draw: function (ctx, W, H, o) {
        var strip = 400 * PX;
        fillTex(ctx, "herringbone", 0, 0, W, H, 0.9, "#5a3e2b");
        for (var x = 1200 * PX; x < W; x += 1200 * PX) { gap(ctx, x - 1, 0, 2, H); slats(ctx, x - strip / 2, 0, strip, H, "walnut", 2300 + x, 16, 8); }
        if (TRIMS[o.trim].light) [0.25, 0.75].forEach(function (k) {
          var lx = W * k, ly = H * 0.42;
          ctx.fillStyle = "#1b1612"; ctx.fillRect(lx - 40, ly, 80, 30);
          var g = ctx.createRadialGradient(lx, ly, 4, lx, ly, 260);
          g.addColorStop(0, "rgba(255,190,105,.55)"); g.addColorStop(1, "rgba(255,190,105,0)");
          ctx.fillStyle = g; ctx.fillRect(lx - 260, ly - 260, 520, 520);
        });
      }
    },
    {
      id: "sliding", cat: "wardrobes", label: "Sliding wardrobe",
      count: { label: "Doors", min: 2, max: 4, value: 3 },
      finishes: ["walnut", "white", "oak", "charcoal", "mirror"], finish: "walnut",
      trims: ["brass", "black", "silver", "none"], trim: "brass",
      size: function (n) { return [n * 800, 2400]; },
      draw: function (ctx, W, H, o) {
        var top = 40 * PX, bot = 50 * PX, dw = W / o.count;
        trimRect(ctx, 0, 0, W, top, o.trim === "none" ? "black" : o.trim);
        gap(ctx, 0, H - bot, W, bot);
        for (var i = 0; i < o.count; i++) {
          var x = i * dw, front = i % 2 === 0;
          panel(ctx, x, top, dw, H - top - bot, o.finish, i + 1);
          if (!front) { ctx.fillStyle = "rgba(0,0,0,.10)"; ctx.fillRect(x, top, dw, H - top - bot); }
          if (o.trim !== "none") {
            var bands = [0.33, 0.66];
            for (var b = 0; b < bands.length; b++) trimRect(ctx, x + 6, top + (H - top - bot) * bands[b] - 4, dw - 12, 8, o.trim);
            trimRect(ctx, x, top, 10, H - top - bot, o.trim);
          }
          gap(ctx, x + dw - 2, top, 2, H - top - bot);
        }
      }
    },
    {
      id: "hinged", cat: "wardrobes", label: "Hinged wardrobe",
      count: { label: "Doors", min: 2, max: 6, value: 4 },
      finishes: ["white", "walnut", "oak", "charcoal"], finish: "white",
      trims: ["black", "brass", "silver"], trim: "black",
      size: function (n) { return [n * 500, 2400]; },
      draw: function (ctx, W, H, o) {
        var plinth = 80 * PX, locker = 450 * PX, g = 3, dw = W / o.count;
        panel(ctx, 0, 0, W, H, o.finish === "white" ? "walnut" : o.finish, 99);
        gap(ctx, 0, H - plinth, W, plinth);
        for (var i = 0; i < o.count; i++) {
          var x = i * dw;
          panel(ctx, x + g, g, dw - 2 * g, locker - 2 * g, o.finish, 20 + i);
          panel(ctx, x + g, locker + g, dw - 2 * g, H - plinth - locker - 2 * g, o.finish, 40 + i);
          var hx = i % 2 === 0 ? x + dw - 26 : x + 18;
          trimRect(ctx, hx, locker + 260, 8, 300, o.trim);
          trimRect(ctx, x + dw / 2 - 60, locker - 30, 120, 7, o.trim);
        }
      }
    },
    {
      id: "walkin", cat: "wardrobes", label: "Open walk-in",
      count: { label: "Sections", min: 2, max: 4, value: 3 },
      finishes: ["walnut", "oak", "white", "charcoal"], finish: "walnut",
      trims: ["brass", "black", "silver"], trim: "brass",
      size: function (n) { return [n * 900, 2400]; },
      draw: function (ctx, W, H, o) {
        var side = 22, sw = W / o.count, shelf = 12;
        var back = o.finish === "white" ? "cream" : "white";
        ctx.fillStyle = "#2a211b"; ctx.fillRect(0, 0, W, H);
        var clothes = ["#e7e1d6", "#b9a68a", "#4a5662", "#8b6f5a", "#ddd5c6", "#2f3338", "#a7b0a5", "#c9b9a3"];
        for (var i = 0; i < o.count; i++) {
          var x = i * sw + side, w = sw - side, r = rand(500 + i);
          panel(ctx, x, 0, w, H, back, 300 + i);
          ctx.fillStyle = "rgba(40,25,10,.18)"; ctx.fillRect(x, 0, w, H);
          // warm light under the top shelf
          var glow = ctx.createLinearGradient(0, 120, 0, 520);
          glow.addColorStop(0, "rgba(255,214,150,.55)"); glow.addColorStop(1, "rgba(255,214,150,0)");
          ctx.fillStyle = glow; ctx.fillRect(x, 120, w, 400);
          panel(ctx, x, 110, w, shelf, o.finish, 600 + i);
          var kind = i % 3;
          if (kind === 0 || kind === 2) {
            var rails = kind === 2 ? [170, 640] : [170];
            for (var k = 0; k < rails.length; k++) {
              var ry = rails[k];
              trimRect(ctx, x + 8, ry, w - 16, 7, o.trim);
              var cx = x + 16;
              while (cx < x + w - 30) {
                var cw = 16 + r() * 22, ch = (kind === 2 ? 360 : 640) - r() * 160;
                ctx.fillStyle = clothes[Math.floor(r() * clothes.length)];
                ctx.beginPath(); ctx.roundRect ? ctx.roundRect(cx, ry + 10, cw, ch, 6) : ctx.rect(cx, ry + 10, cw, ch); ctx.fill();
                ctx.fillStyle = "rgba(0,0,0,.12)"; ctx.fillRect(cx + cw - 4, ry + 10, 4, ch);
                cx += cw + 3;
              }
              if (kind === 2 && k === 0) panel(ctx, x, 600, w, shelf, o.finish, 640 + i);
            }
          } else {
            for (var s = 1; s < 6; s++) {
              var sy = 110 + s * 140;
              panel(ctx, x, sy, w, shelf, o.finish, 700 + s);
              var fx = x + 14;
              while (fx < x + w - 40) { // folded stacks
                var fw = 60 + r() * 40, fh = 30 + r() * 60;
                ctx.fillStyle = clothes[Math.floor(r() * clothes.length)];
                ctx.fillRect(fx, sy - fh, fw, fh);
                ctx.fillStyle = "rgba(0,0,0,.10)"; for (var l = 8; l < fh; l += 10) ctx.fillRect(fx, sy - fh + l, fw, 1.5);
                fx += fw + 12 + r() * 20;
              }
            }
          }
          // drawers
          var dTop = H - 400, dh = (400 - 40) / 3;
          for (var d = 0; d < 3; d++) {
            panel(ctx, x + 2, dTop + d * dh + 2, w - 4, dh - 4, o.finish, 800 + i * 3 + d);
            trimRect(ctx, x + w / 2 - 50, dTop + d * dh + 18, 100, 6, o.trim);
          }
          gap(ctx, x, H - 40, w, 40);
        }
        panel(ctx, 0, 0, side, H, o.finish, 900);
        for (var j = 1; j <= o.count; j++) panel(ctx, Math.min(j * sw, W - side), 0, side, H, o.finish, 900 + j);
        panel(ctx, 0, 0, W, 110, o.finish, 950);
      }
    },
    {
      id: "slatwall", cat: "walls", label: "Slatted feature wall",
      count: { label: "Width, m", min: 2, max: 5, value: 3 },
      finishes: ["walnut", "oak", "charcoal", "white"], finish: "walnut",
      trims: ["brass", "black", "none"], trim: "brass",
      size: function (n) { return [n * 1000, 2400]; },
      draw: function (ctx, W, H, o) {
        var slat = 28, gp = 10, step = slat + gp;
        ctx.fillStyle = "#16110d"; ctx.fillRect(0, 0, W, H);
        var i = 0;
        for (var x = 4; x < W; x += step, i++) {
          panel(ctx, x, 0, Math.min(slat, W - x), H, o.finish, 1000 + i);
          ctx.fillStyle = "rgba(255,255,255,.06)"; ctx.fillRect(x + 3, 0, 3, H);
        }
        if (o.trim !== "none") {
          var every = 600 * PX, k = 0;
          for (var tx = 0; tx <= W; tx += every, k++) trimRect(ctx, Math.min(tx, W - 9), 0, 9, H, o.trim);
        }
      }
    },
    {
      id: "headboard", cat: "walls", label: "Panelled headboard", lift: 0,
      count: { label: "Panels", min: 3, max: 6, value: 4 },
      finishes: ["cream", "white", "charcoal", "walnut"], finish: "cream",
      trims: ["brass", "black", "none"], trim: "brass",
      size: function (n) { return [n * 450, 1700]; },
      draw: function (ctx, W, H, o) {
        var t = o.trim === "none" ? 4 : 9, pw = (W - t * (o.count + 1)) / o.count;
        ctx.fillStyle = o.trim === "none" ? "#3a2c22" : "#000"; ctx.fillRect(0, 0, W, H);
        trimRect(ctx, 0, 0, W, H, o.trim === "none" ? "black" : o.trim);
        for (var i = 0; i < o.count; i++) {
          var x = t + i * (pw + t);
          panel(ctx, x, t, pw, H - 2 * t, o.finish, 1200 + i);
          var sh = ctx.createLinearGradient(0, 0, 0, H);
          sh.addColorStop(0, "rgba(255,255,255,.10)"); sh.addColorStop(0.9, "rgba(0,0,0,0)"); sh.addColorStop(1, "rgba(0,0,0,.18)");
          ctx.fillStyle = sh; ctx.fillRect(x, t, pw, H - 2 * t);
        }
      }
    },
    {
      id: "tvunit", cat: "tv", label: "Floating TV unit", lift: 300,
      count: { label: "Width, m", min: 1, max: 3, value: 2 },
      finishes: ["walnut", "white", "oak", "charcoal"], finish: "walnut",
      trims: ["brass", "black", "none"], trim: "brass",
      size: function (n) { return [n * 900 + 300, 420]; },
      draw: function (ctx, W, H, o) {
        var g = 3, top = 22, doors = Math.max(2, Math.round(W / 300));
        panel(ctx, 0, 0, W, top, o.finish === "white" ? "walnut" : o.finish, 1400);
        var dw = W / doors;
        for (var i = 0; i < doors; i++) {
          panel(ctx, i * dw + g, top + g, dw - 2 * g, H - top - 2 * g - 6, o.finish, 1410 + i);
          if (o.trim !== "none") trimRect(ctx, i * dw + dw / 2 - 40, top + 14, 80, 5, o.trim);
        }
        if (o.trim !== "none") trimRect(ctx, 0, top - 4, W, 4, o.trim);
        var glow = ctx.createLinearGradient(0, H - 8, 0, H);
        glow.addColorStop(0, "rgba(255,214,150,.0)"); glow.addColorStop(1, "rgba(255,214,150,.7)");
        ctx.fillStyle = glow; ctx.fillRect(0, H - 8, W, 8);
      }
    },
    {
      id: "bedside", cat: "walls", label: "Floating bedside", lift: 350,
      count: { label: "Drawers", min: 1, max: 3, value: 2 },
      finishes: ["white", "walnut", "oak", "charcoal"], finish: "white",
      trims: ["black", "brass", "silver"], trim: "black",
      size: function (n) { return [500, 60 + n * 170]; },
      draw: function (ctx, W, H, o) {
        var top = 30, g = 3, dh = (H - top) / o.count;
        panel(ctx, 0, 0, W, H, "walnut", 1800);
        panel(ctx, 0, 0, W, top, "walnut", 1801);
        for (var i = 0; i < o.count; i++) {
          panel(ctx, 12, top + i * dh + g, W - 24, dh - 2 * g - (i === o.count - 1 ? 10 : 0), o.finish, 1810 + i);
          trimRect(ctx, W / 2 - 45, top + i * dh + 16, 90, 5, o.trim);
        }
      }
    }
  ];

  // Draw a design to a canvas. Returns the canvas; its aspect matches the real size.
  // With maxSide, it is drawn straight at the smaller size (faster than drawing big and shrinking).
  var K = 1;
  function render(design, opts, maxSide) {
    var mm = design.size(opts.count), W = Math.round(mm[0] * PX), H = Math.round(mm[1] * PX);
    var k = maxSide ? Math.min(1, maxSide / Math.max(W, H)) : 1;
    var c = document.createElement("canvas"); c.width = Math.max(1, Math.round(W * k)); c.height = Math.max(1, Math.round(H * k));
    var x = c.getContext("2d"); x.scale(k, k); K = k;
    if (design.photo) { if (IMG[design.photo]) x.drawImage(IMG[design.photo], 0, 0, W, H); else { x.fillStyle = "#ddd"; x.fillRect(0, 0, W, H); } }
    else design.draw(x, W, H, opts);
    K = 1;
    return c;
  }

  function describe(design, opts) {
    if (design.photo) return design.label + ", " + ["smaller", "as built", "larger"][opts.count - 1];
    var parts = [design.label, /m$/.test(design.count.label) ? opts.count + " m wide" : opts.count + " " + design.count.label.toLowerCase(), FINISHES[opts.finish].label.toLowerCase()];
    var t = TRIMS[opts.trim];
    if (t && t.light) parts.push(t.label.toLowerCase());
    else if (t && t.c) parts.push(t.label.toLowerCase() + " trim");
    return parts.join(", ");
  }

  window.CW_DESIGNS = { list: DESIGNS, cats: CATS, finishes: FINISHES, trims: TRIMS, render: render, describe: describe, ready: ready };
})();
