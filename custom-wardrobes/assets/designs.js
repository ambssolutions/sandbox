/* Designs for the room preview: one source for the design list, finishes and trims.
   Each design draws itself onto a canvas at 0.5 px per mm, so its shape matches real proportions.
   The drawings are illustrative. When real product photos arrive, a design can set
   `image: "assets/img/NAME.webp"` and `size: [widthMm, heightMm]` to use the photo instead. */
(function () {
  var PX = 0.5; // pixels per millimetre in the texture

  var FINISHES = {
    walnut:   { label: "Walnut",      base: "#5a3e2b", dark: "#3d2a1d", light: "#7b5940", grain: true },
    oak:      { label: "Natural oak", base: "#c39a6b", dark: "#a07a4f", light: "#dbb88e", grain: true },
    white:    { label: "White gloss", base: "#f2f0eb", gloss: true },
    charcoal: { label: "Charcoal",    base: "#3b3b3d", matt: true },
    cream:    { label: "Cream",       base: "#d8c6a1", soft: true },
    mirror:   { label: "Mirror",      base: "#c9d2d6", mirror: true }
  };

  var TRIMS = {
    brass:  { label: "Brass",  c: "#b8944f", hi: "#e3c88c" },
    black:  { label: "Black",  c: "#1d1c1b", hi: "#4a4846" },
    silver: { label: "Silver", c: "#a9adb0", hi: "#e4e6e7" },
    none:   { label: "None" }
  };

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
      var r = rand(seed * 7919 + 13), lines = Math.max(12, Math.round(w / 3));
      for (var i = 0; i < lines; i++) {
        var gx = x + r() * w, amp = 1 + r() * 4, freq = 0.004 + r() * 0.01, ph = r() * 6.28;
        ctx.strokeStyle = r() > 0.5 ? f.dark : f.light;
        ctx.globalAlpha = 0.08 + r() * 0.22;
        ctx.lineWidth = 0.6 + r() * 1.8;
        ctx.beginPath();
        for (var yy = y; yy <= y + h; yy += 12) {
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
      id: "sliding", label: "Sliding wardrobe",
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
      id: "hinged", label: "Hinged wardrobe",
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
      id: "walkin", label: "Open walk-in",
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
      id: "slatwall", label: "Slatted feature wall",
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
      id: "headboard", label: "Panelled headboard", lift: 0,
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
      id: "tvunit", label: "Floating TV unit", lift: 300,
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
      id: "mediawall", label: "TV media wall",
      count: { label: "Width, m", min: 3, max: 5, value: 4 },
      finishes: ["walnut", "oak", "white", "charcoal"], finish: "walnut",
      trims: ["brass", "black", "none"], trim: "brass",
      size: function (n) { return [n * 1000, 2400]; },
      draw: function (ctx, W, H, o) {
        var side = 600 * PX, unitH = 420 * PX, unitTop = H - unitH - 300 * PX, mid = W - 2 * side;
        // slatted panel behind the TV
        ctx.fillStyle = "#16110d"; ctx.fillRect(side, 0, mid, H);
        for (var x = side + 4, i = 0; x < side + mid; x += 38, i++) panel(ctx, x, 0, Math.min(28, side + mid - x), H, o.finish === "white" ? "walnut" : o.finish, 1500 + i);
        // tall cabinets either side
        [0, W - side].forEach(function (sx, s) {
          panel(ctx, sx, 0, side, H, o.finish, 1600 + s);
          ctx.fillStyle = "rgba(20,14,10,.7)"; ctx.fillRect(sx + side / 2 - 1, 0, 2, H - 40);
          trimRect(ctx, sx + side / 2 - 14, H * 0.45, 5, 160, o.trim === "none" ? "black" : o.trim);
          trimRect(ctx, sx + side / 2 + 9, H * 0.45, 5, 160, o.trim === "none" ? "black" : o.trim);
          gap(ctx, sx, H - 40, side, 40);
          if (o.trim !== "none") trimRect(ctx, s ? sx : sx + side - 8, 0, 8, H, o.trim);
        });
        // TV screen, shown for scale
        var tvW = Math.min(mid * 0.72, 1650 * PX), tvH = tvW * 9 / 16, tvX = side + (mid - tvW) / 2, tvY = unitTop - tvH - 180 * PX;
        ctx.fillStyle = "#0d0d0f"; ctx.fillRect(tvX, tvY, tvW, tvH);
        var sg = ctx.createLinearGradient(tvX, tvY, tvX + tvW, tvY + tvH);
        sg.addColorStop(0, "rgba(255,255,255,.10)"); sg.addColorStop(0.4, "rgba(255,255,255,0)");
        ctx.fillStyle = sg; ctx.fillRect(tvX + 6, tvY + 6, tvW - 12, tvH - 12);
        // floating unit under it
        var doors = 3, dw = mid / doors;
        for (var d = 0; d < doors; d++) panel(ctx, side + d * dw + 2, unitTop, dw - 4, unitH, o.finish, 1700 + d);
        if (o.trim !== "none") trimRect(ctx, side, unitTop - 4, mid, 4, o.trim);
        var glow = ctx.createLinearGradient(0, unitTop + unitH, 0, unitTop + unitH + 80);
        glow.addColorStop(0, "rgba(255,214,150,.55)"); glow.addColorStop(1, "rgba(255,214,150,0)");
        ctx.fillStyle = glow; ctx.fillRect(side, unitTop + unitH, mid, 80);
      }
    },
    {
      id: "bedside", label: "Floating bedside", lift: 350,
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
  function render(design, opts, maxSide) {
    var mm = design.size(opts.count), W = Math.round(mm[0] * PX), H = Math.round(mm[1] * PX);
    var c = document.createElement("canvas"); c.width = W; c.height = H;
    design.draw(c.getContext("2d"), W, H, opts);
    if (maxSide && Math.max(W, H) > maxSide) {
      var k = maxSide / Math.max(W, H), s = document.createElement("canvas");
      s.width = Math.round(W * k); s.height = Math.round(H * k);
      var sc = s.getContext("2d"); sc.imageSmoothingQuality = "high"; sc.drawImage(c, 0, 0, s.width, s.height);
      return s;
    }
    return c;
  }

  function describe(design, opts) {
    var parts = [design.label, /m$/.test(design.count.label) ? opts.count + " m wide" : opts.count + " " + design.count.label.toLowerCase(), FINISHES[opts.finish].label.toLowerCase()];
    if (opts.trim && opts.trim !== "none") parts.push(TRIMS[opts.trim].label.toLowerCase() + " trim");
    return parts.join(", ");
  }

  window.CW_DESIGNS = { list: DESIGNS, finishes: FINISHES, trims: TRIMS, render: render, describe: describe };
})();
