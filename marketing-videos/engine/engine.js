/* AMBS short-video engine.
   Every video is a pure function of time: render(t) sets the DOM for second t.
   - Opened in a browser: plays in real time and loops (space = pause, ←/→ = scrub).
   - Driven by render.mjs: window.__seek(t) is called once per frame, then screenshotted. */
(function () {
  const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const lerp = (a, b, p) => a + (b - a) * p;
  const ease = {
    linear: (x) => x,
    out: (x) => 1 - Math.pow(1 - x, 3),
    inOut: (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2),
    back: (x) => { const c = 1.9; return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2); },
  };
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /** Eased 0..1 progress of t through [a, b]. */
  function p(t, a, b, e = ease.out) {
    if (b <= a) return t >= a ? 1 : 0;
    return e(clamp((t - a) / (b - a)));
  }

  /** Show el from a until b (b optional): fade + slide/scale in, fade out. */
  function vis(el, t, a, b = null, o = {}) {
    if (typeof el === "string") el = $(el);
    if (!el) return 0;
    const dur = o.dur ?? 0.35;
    const pi = p(t, a, a + dur, o.ease ?? ease.back);
    const po = b == null ? 0 : p(t, b - (o.outDur ?? 0.25), b, ease.inOut);
    const op = clamp(Math.min(p(t, a, a + dur * 0.6, ease.linear), 1) * (1 - po));
    const y = (o.y ?? 22) * (1 - pi) - (o.yOut ?? 0) * po;
    const x = (o.x ?? 0) * (1 - pi);
    const s = o.scale != null ? lerp(o.scale, 1, pi) : 1;
    el.style.opacity = op;
    el.style.visibility = op <= 0.001 ? "hidden" : "visible";
    el.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
    return op;
  }

  /** Typewriter effect. */
  function type(el, text, t, a, b, caret = true) {
    if (typeof el === "string") el = $(el);
    const n = Math.floor(p(t, a, b, ease.linear) * text.length + 1e-6);
    el.textContent = text.slice(0, n);
    el.classList.toggle("caret", caret && t >= a && t < b + 0.4);
  }

  /** Number counting from v0 to v1 over [a, b]. */
  function count(el, t, a, b, v0, v1, fmt = (v) => Math.round(v).toLocaleString("en-NZ")) {
    if (typeof el === "string") el = $(el);
    el.textContent = fmt(lerp(v0, v1, p(t, a, b, ease.out)));
  }

  /** Interpolate along keyframes [{t, x, y}] with eased segments. */
  function path(t, keys) {
    if (t <= keys[0].t) return keys[0];
    for (let i = 1; i < keys.length; i++) {
      if (t <= keys[i].t) {
        const k0 = keys[i - 1], k1 = keys[i];
        const q = p(t, k0.t, k1.t, ease.inOut);
        return { x: lerp(k0.x, k1.x, q), y: lerp(k0.y, k1.y, q) };
      }
    }
    return keys[keys.length - 1];
  }

  const CURSOR_SVG =
    '<svg viewBox="0 0 26 30" width="26" height="30"><path d="M3 2 L3 24 L9 18.5 L13 27.5 L17 25.8 L13 17 L21 17 Z" fill="#111" stroke="#fff" stroke-width="2" stroke-linejoin="round"/></svg><div class="ripple"></div>';

  /** Create a mouse cursor inside parent. Returns fn(t, keys) — keys may have click:true. */
  function cursor(parent) {
    const el = document.createElement("div");
    el.className = "cursor";
    el.innerHTML = CURSOR_SVG;
    parent.appendChild(el);
    const rip = el.querySelector(".ripple");
    return (t, keys, a = keys[0].t, b = keys[keys.length - 1].t + 0.4) => {
      const show = t >= a && t <= b;
      el.style.display = show ? "block" : "none";
      if (!show) return;
      const pos = path(t, keys);
      let s = 1, r = 0, ro = 0;
      for (const k of keys) {
        if (k.click && t >= k.t && t < k.t + 0.45) {
          const q = (t - k.t) / 0.45;
          s = 1 - 0.18 * Math.sin(Math.min(q * 2, 1) * Math.PI);
          r = lerp(0.4, 1.6, q); ro = 1 - q;
        }
      }
      el.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(${s})`;
      rip.style.transform = `scale(${r})`;
      rip.style.opacity = ro;
    };
  }

  /** Workflow chain helper: nodes light up as a pulse travels the wires.
      runs = [[start, end], ...] — each run lights nodes 0..n-1 across [start, end]. */
  function flow(root, runs) {
    const nodes = $$(".node", root);
    const wires = $$(".wire", root);
    const pulse = $(".pulse", root);
    return (t) => {
      let run = null;
      for (const r of runs) if (t >= r[0]) run = r;
      const n = nodes.length;
      if (!run) {
        nodes.forEach((nd) => { nd.classList.remove("on"); $(".ok", nd).style.opacity = 0; });
        wires.forEach((w) => ($("i", w).style.width = "0%"));
        pulse.style.opacity = 0;
        return;
      }
      const q = clamp((t - run[0]) / (run[1] - run[0])) * (n - 1); // 0..n-1
      nodes.forEach((nd, i) => {
        const on = q >= i - 0.02;
        nd.classList.toggle("on", on);
        const k = $(".ok", nd);
        const kp = p(q, i, i + 0.35, ease.back);
        k.style.opacity = on ? 1 : 0;
        k.style.transform = `scale(${on ? kp : 0})`;
      });
      wires.forEach((w, i) => ($("i", w).style.width = clamp(q - i) * 100 + "%"));
      // Pulse sits on the active wire.
      const wi = Math.min(Math.floor(q), wires.length - 1);
      const w = wires[wi];
      const local = clamp(q - wi);
      const moving = q < n - 1;
      pulse.style.opacity = moving ? 1 : 0;
      if (w) {
        pulse.style.left = w.offsetLeft + w.offsetWidth * local + "px";
        pulse.style.top = w.offsetTop + w.offsetHeight / 2 + "px";
      }
    };
  }

  /** HTML for a horizontal workflow inside a container of width w.
      items = [[emoji, label], ...]; top = y of node boxes. */
  function flowHTML(items, w, top = 40) {
    const n = items.length, nw = 98, pad = 14;
    const gap = (w - pad * 2 - n * nw) / (n - 1);
    const xs = items.map((_, i) => pad + i * (nw + gap));
    let h = "";
    items.forEach(([ic, lb], i) => {
      h += `<div class="node" style="position:absolute;left:${xs[i]}px;top:${top}px"><div class="bx"><span class="emoji">${ic}</span><div class="ok">✓</div></div><div class="lb">${lb}</div></div>`;
      if (i < n - 1) {
        const x0 = xs[i] + nw / 2 + 31 + 5, x1 = xs[i + 1] + nw / 2 - 31 - 5;
        h += `<div class="wire" style="left:${x0}px;top:${top + 30}px;width:${x1 - x0}px"><i></i></div>`;
      }
    });
    return h + `<div class="pulse"></div>`;
  }

  /** Shared chrome: progress bar, brand, captions, phase badges, end card. */
  function chrome(cfg) {
    const f = $("#frame");
    const D = cfg.duration;
    f.insertAdjacentHTML("beforeend", `
      <div class="progress"><i></i></div>
      <img class="brand" src="../assets/ambs-logo.png" alt="AMBS">
      ${cfg.captions.map((c, i) => `<div class="caption" data-c="${i}">${c.html}</div>`).join("")}
      ${cfg.phases.map((ph, i) => `<div class="badge ${ph.kind}" data-b="${i}"><span class="dot"></span>${ph.label}</div>`).join("")}
      <div class="end">
        <img class="elogo" src="../assets/ambs-logo.png" alt="AMBS">
        <h2>${cfg.end.title}</h2>
        <div class="sub">${cfg.end.sub}</div>
        <div class="cmt">Comment</div>
        <div class="kw${cfg.keyword.length > 4 ? " long" : ""}">${[...cfg.keyword].map((ch) => `<span>${ch}</span>`).join("")}</div>
        <div class="arrow emoji">👇</div>
        <div class="reply"><div class="av"></div><div class="in ph">Add a comment…</div><div class="send">Post</div></div>
        <div class="foot"><b>ambs.co.nz</b> · ${cfg.end.foot ?? "AI automation &amp; websites for NZ businesses"}</div>
      </div>`);
    const bar = $(".progress i", f);
    const caps = $$(".caption", f);
    const badges = $$(".badge", f);
    const end = $(".end", f);
    const letters = $$(".kw span", end);
    const input = $(".reply .in", end);
    const E0 = cfg.end.at;

    return (t) => {
      bar.style.width = (t / D) * 100 + "%";
      cfg.captions.forEach((c, i) => vis(caps[i], t, c.a, c.b, { y: 16, dur: 0.3 }));
      cfg.phases.forEach((ph, i) => vis(badges[i], t, ph.a, ph.b, { scale: 0.6, y: 0, dur: 0.3 }));
      // End card
      const eo = p(t, E0, E0 + 0.35, ease.out);
      end.style.opacity = eo;
      end.style.visibility = eo > 0 ? "visible" : "hidden";
      vis($(".elogo", end), t, E0 + 0.0, null, { y: 0, scale: 0.6, dur: 0.45 });
      vis($("h2", end), t, E0 + 0.1, null, { y: 30 });
      vis($(".sub", end), t, E0 + 0.25, null, { y: 20 });
      vis($(".cmt", end), t, E0 + 0.45, null, { y: 20 });
      letters.forEach((l, i) => {
        const a = E0 + 0.6 + i * 0.09;
        vis(l, t, a, null, { y: -40, scale: 0.4, dur: 0.4 });
        // gentle wave once all letters are in
        const w = Math.max(0, t - (E0 + 1.6));
        if (w > 0) l.style.transform = `translateY(${-6 * Math.max(0, Math.sin(w * 4 - i * 0.6))}px)`;
      });
      const ar = $(".arrow", end);
      vis(ar, t, E0 + 1.0, null, { y: -20 });
      if (t > E0 + 1.35) ar.style.transform = `translateY(${10 * Math.abs(Math.sin((t - E0) * 5))}px)`;
      // Someone types the keyword into the comment box.
      vis($(".reply", end), t, E0 + 1.3, null, { y: 30 });
      const ta = E0 + 1.9;
      if (t < ta) { input.textContent = "Add a comment…"; input.classList.add("ph"); }
      else { input.classList.remove("ph"); type(input, cfg.keyword, t, ta, ta + 0.5); }
      const send = $(".send", end);
      const sp = t >= ta + 0.9 && t < ta + 1.2 ? 0.88 : 1;
      send.style.transform = `scale(${sp})`;
      if (t >= ta + 1.0) { input.textContent = cfg.keyword + "  ✓"; input.classList.remove("caret"); }
      vis($(".foot", end), t, E0 + 0.8, null, { y: 10 });
    };
  }

  // ------------------------------------------------------------------ runtime
  const renderers = [];
  const E = {
    clamp, lerp, ease, p, vis, type, count, path, cursor, flow, flowHTML, $, $$,
    duration: 22,
    use(fn) { renderers.push(fn); },
    setup(cfg) { E.duration = cfg.duration; E.voice = cfg.voice ?? []; renderers.unshift(chrome(cfg)); },
  };
  window.E = E;
  window.__seek = (t) => { for (const r of renderers) r(t); };

  function fit() {
    const f = $("#frame");
    if (window.__RENDER) { f.style.transform = ""; return; }
    const s = Math.min(innerWidth / 540, innerHeight / 960);
    f.style.transform = `scale(${s})`;
  }
  window.addEventListener("resize", fit);

  window.addEventListener("load", async () => {
    await document.fonts.ready;
    fit();
    if (window.__RENDER) { window.__ready = true; return; }
    let t0 = performance.now(), paused = false, tp = 0;
    addEventListener("keydown", (e) => {
      if (e.code === "Space") { paused = !paused; if (!paused) t0 = performance.now() - tp * 1000; }
      if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
        tp = clamp(tp + (e.code === "ArrowRight" ? 1 : -1), 0, E.duration); t0 = performance.now() - tp * 1000; window.__seek(tp);
      }
    });
    const loop = (now) => {
      if (!paused) { tp = ((now - t0) / 1000) % E.duration; window.__seek(tp); }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  });
})();
