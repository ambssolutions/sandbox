/* Room preview: put a design on a photo of the visitor's own room.
   The photo never leaves the device. The design is drawn by designs.js, then warped onto the
   four corners the visitor drags (a perspective homography in WebGL), over a soft contact shadow.
   Markup lives in index.html under #preview. */
(function () {
  var section = document.getElementById("preview");
  if (!section || !window.CW_DESIGNS) return;
  var started = false, wanted = null;
  // Only build the preview when it is about to be seen, so the first load stays light
  function go() { if (!started) { started = true; cwPreviewInit(section); if (wanted) window.CW_PREVIEW.pick(wanted); } }
  window.CW_PREVIEW = { pick: function (id) { wanted = id; go(); } };
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { if (es.some(function (e) { return e.isIntersecting; })) { io.disconnect(); go(); } }, { rootMargin: "800px 0px" });
    io.observe(section);
  } else go();
})();

function cwPreviewInit(root) {
  var D = window.CW_DESIGNS;

  var stage = root.querySelector(".pv-stage");
  var base = root.querySelector(".pv-base");      // 2D: photo and shadow
  var glc = root.querySelector(".pv-gl");         // WebGL: the warped design
  var handles = [].slice.call(root.querySelectorAll(".pv-h"));
  var grip = root.querySelector(".pv-grip");
  var status = root.querySelector(".pv-status");
  var SAMPLE_QUAD = [[0.315, 0.175], [0.685, 0.175], [0.685, 0.741], [0.315, 0.741]];
  var DPR = Math.min(window.devicePixelRatio || 1, 1.5);

  var state = {
    photo: null, photoW: 1600, photoH: 1066, sample: true,
    quad: SAMPLE_QUAD.map(function (p) { return p.slice(); }),
    design: D.list.filter(function (d) { return d.id === "marbletv"; })[0] || D.list[0], opts: null,
    light: 0, warmth: 0, shadow: 0.6, hide: false
  };
  function optsFor(d) { return { count: d.count.value, finish: d.finish, trim: d.trim }; }
  state.opts = optsFor(state.design);

  /* ---------- WebGL ---------- */
  var gl = glc.getContext("webgl", { premultipliedAlpha: true, preserveDrawingBuffer: true, antialias: true, alpha: true });
  if (!gl) {
    root.classList.add("pv-nogl");
    status.textContent = "Your browser can't show the room preview. Try Chrome, Safari or Firefox on a newer device.";
    return;
  }
  var VS = "attribute vec2 p;uniform vec2 r;void main(){gl_Position=vec4(p/r*2.0-1.0,0.0,1.0);gl_Position.y=-gl_Position.y;}";
  var FS = [
    "precision highp float;",
    "uniform sampler2D t;uniform mat3 hi;uniform float h,lt,wm;",
    "void main(){",
    " vec3 q=hi*vec3(gl_FragCoord.x,h-gl_FragCoord.y,1.0);vec2 uv=q.xy/q.z;",
    " vec4 c=texture2D(t,clamp(uv,0.0,1.0));",
    " vec3 col=c.rgb*(1.0+lt);",
    " col+=vec3(0.07,0.025,-0.06)*wm;",
    " col*=1.0-0.12*smoothstep(0.82,1.0,uv.y)-0.05*smoothstep(0.08,0.0,uv.y);",
    " gl_FragColor=vec4(clamp(col,0.0,1.0)*c.a,c.a);",
    "}"
  ].join("\n");
  function sh(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; }
  var prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS));
  gl.linkProgram(prog); gl.useProgram(prog);
  var U = {}; ["r", "t", "hi", "h", "lt", "wm"].forEach(function (k) { U[k] = gl.getUniformLocation(prog, k); });
  var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  var aP = gl.getAttribLocation(prog, "p"); gl.enableVertexAttribArray(aP); gl.vertexAttribPointer(aP, 2, gl.FLOAT, false, 0, 0);
  var tex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, tex);
  [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T].forEach(function (k) { gl.texParameteri(gl.TEXTURE_2D, k, gl.CLAMP_TO_EDGE); });
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
  var maxTex = Math.min(2048, gl.getParameter(gl.MAX_TEXTURE_SIZE));
  var designAspect = 1;

  function uploadDesign() {
    var c = D.render(state.design, state.opts, maxTex);
    designAspect = c.width / c.height;
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, c);
  }

  // Unit square -> quad (Heckbert), then invert, so each pixel can find its spot on the design
  function squareToQuad(q) {
    var x0 = q[0][0], y0 = q[0][1], x1 = q[1][0], y1 = q[1][1], x2 = q[2][0], y2 = q[2][1], x3 = q[3][0], y3 = q[3][1];
    var dx1 = x1 - x2, dx2 = x3 - x2, dx3 = x0 - x1 + x2 - x3, dy1 = y1 - y2, dy2 = y3 - y2, dy3 = y0 - y1 + y2 - y3;
    var g = 0, h = 0, den = dx1 * dy2 - dx2 * dy1;
    if (Math.abs(den) > 1e-9) { g = (dx3 * dy2 - dx2 * dy3) / den; h = (dx1 * dy3 - dx3 * dy1) / den; }
    return [x1 - x0 + g * x1, x3 - x0 + h * x3, x0, y1 - y0 + g * y1, y3 - y0 + h * y3, y0, g, h, 1];
  }
  function inv3(m) {
    var a = m[0], b = m[1], c = m[2], d = m[3], e = m[4], f = m[5], g = m[6], h = m[7], i = m[8];
    var A = e * i - f * h, B = -(d * i - f * g), C = d * h - e * g, det = a * A + b * B + c * C;
    if (Math.abs(det) < 1e-12) return null;
    return [A / det, -(b * i - c * h) / det, (b * f - c * e) / det,
            B / det, (a * i - c * g) / det, -(a * f - c * d) / det,
            C / det, -(a * h - b * g) / det, (a * e - b * d) / det];
  }

  function drawGL(W, H) {
    if (glc.width !== W || glc.height !== H) { glc.width = W; glc.height = H; }
    gl.viewport(0, 0, W, H); gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
    if (state.hide) return;
    var q = state.quad.map(function (p) { return [p[0] * W, p[1] * H]; });
    var hi = inv3(squareToQuad(q)); if (!hi) return;
    gl.uniformMatrix3fv(U.hi, false, [hi[0], hi[3], hi[6], hi[1], hi[4], hi[7], hi[2], hi[5], hi[8]]);
    gl.uniform2f(U.r, W, H); gl.uniform1f(U.h, H); gl.uniform1f(U.lt, state.light); gl.uniform1f(U.wm, state.warmth);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([q[0][0], q[0][1], q[1][0], q[1][1], q[2][0], q[2][1], q[0][0], q[0][1], q[2][0], q[2][1], q[3][0], q[3][1]]), gl.DYNAMIC_DRAW);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  // Photo plus a soft shadow where the design meets the wall and floor
  function drawBase(ctx, W, H) {
    ctx.clearRect(0, 0, W, H);
    if (state.photo) ctx.drawImage(state.photo, 0, 0, W, H);
    if (state.hide || state.shadow <= 0) return;
    var q = state.quad.map(function (p) { return [p[0] * W, p[1] * H]; });
    var hgt = Math.hypot(q[3][0] - q[0][0], q[3][1] - q[0][1]), off = W * 4;
    ctx.save();
    // the shape is drawn far off-canvas; only its blurred shadow lands on the photo
    ctx.shadowColor = "rgba(20,12,6," + (0.45 * state.shadow) + ")";
    ctx.shadowBlur = Math.max(6, hgt * 0.06); ctx.shadowOffsetX = off; ctx.shadowOffsetY = hgt * 0.012;
    ctx.beginPath(); q.forEach(function (p, i) { ctx[i ? "lineTo" : "moveTo"](p[0] - off, p[1]); }); ctx.closePath(); ctx.fill();
    ctx.shadowColor = "rgba(10,6,3," + (0.7 * state.shadow) + ")";
    ctx.shadowBlur = Math.max(3, hgt * 0.015); ctx.shadowOffsetY = hgt * 0.004;
    ctx.lineWidth = Math.max(2, hgt * 0.01);
    ctx.beginPath(); ctx.moveTo(q[3][0] - off, q[3][1]); ctx.lineTo(q[2][0] - off, q[2][1]); ctx.stroke();
    ctx.restore();
  }

  /* ---------- layout ---------- */
  var cssW = 0, cssH = 0, raf = 0;
  function layout() {
    var maxW = stage.parentElement.clientWidth, maxH = Math.max(220, window.innerHeight * (matchMedia("(max-width: 1080px)").matches ? 0.45 : 0.72));
    var ar = state.photoW / state.photoH;
    cssW = Math.min(maxW, maxH * ar); cssH = cssW / ar;
    stage.style.width = cssW + "px"; stage.style.height = cssH + "px";
    base.width = Math.round(cssW * DPR); base.height = Math.round(cssH * DPR);
    schedule();
  }
  function schedule() { if (!raf) raf = requestAnimationFrame(paint); }
  function paint() {
    raf = 0;
    drawBase(base.getContext("2d"), base.width, base.height);
    drawGL(base.width, base.height);
    placeHandles();
  }
  function placeHandles() {
    handles.forEach(function (h, i) {
      h.style.transform = "translate(" + (state.quad[i][0] * cssW) + "px," + (state.quad[i][1] * cssH) + "px)";
      h.hidden = state.hide;
    });
    var c = centre();
    grip.style.transform = "translate(" + (c[0] * cssW) + "px," + (c[1] * cssH) + "px)";
    grip.hidden = state.hide;
  }
  function centre() {
    var x = 0, y = 0; state.quad.forEach(function (p) { x += p[0] / 4; y += p[1] / 4; }); return [x, y];
  }

  /* ---------- placing the design ---------- */
  // A straight-on starting position at true scale: the sample wall is 2.4 m high,
  // and on a visitor's photo we assume a 2.4 m wall fills about 60% of the height.
  function defaultQuad() {
    var mm = state.design.size(state.opts.count);
    var wallTop = state.sample ? SAMPLE_QUAD[0][1] : 0.2, floor = state.sample ? SAMPLE_QUAD[3][1] : 0.8;
    var perMm = (floor - wallTop) / 2400, aspect = state.photoH / state.photoW;
    var h = mm[1] * perMm, w = mm[0] * perMm * aspect, maxW = state.sample ? 0.72 : 0.85;
    if (w > maxW) { h *= maxW / w; w = maxW; }
    var bottom = floor - (state.design.lift || 0) * perMm;
    return [[0.5 - w / 2, bottom - h], [0.5 + w / 2, bottom - h], [0.5 + w / 2, bottom], [0.5 - w / 2, bottom]];
  }
  // When the size changes, keep the left edge and stretch the right edge to the new proportions
  function refit(oldAspect) {
    var k = designAspect / oldAspect, q = state.quad;
    [[0, 1], [3, 2]].forEach(function (pair) {
      var a = q[pair[0]], b = q[pair[1]];
      b[0] = a[0] + (b[0] - a[0]) * k; b[1] = a[1] + (b[1] - a[1]) * k;
    });
  }

  /* ---------- dragging ---------- */
  function toNorm(e) {
    var r = stage.getBoundingClientRect();
    return [Math.min(1.2, Math.max(-0.2, (e.clientX - r.left) / r.width)), Math.min(1.2, Math.max(-0.2, (e.clientY - r.top) / r.height))];
  }
  function inside(pt) {
    var q = state.quad, c = false;
    for (var i = 0, j = 3; i < 4; j = i++) {
      if ((q[i][1] > pt[1]) !== (q[j][1] > pt[1]) && pt[0] < (q[j][0] - q[i][0]) * (pt[1] - q[i][1]) / (q[j][1] - q[i][1]) + q[i][0]) c = !c;
    }
    return c;
  }
  var drag = null;
  function startDrag(e, kind) {
    if (state.hide) return;
    e.preventDefault();
    drag = { kind: kind, from: toNorm(e), quad: state.quad.map(function (p) { return p.slice(); }), id: e.pointerId };
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) {}
    stage.classList.add("dragging");
  }
  handles.forEach(function (h, i) {
    h.addEventListener("pointerdown", function (e) { startDrag(e, i); });
    h.addEventListener("keydown", function (e) { nudge(e, [i]); });
  });
  grip.addEventListener("pointerdown", function (e) { startDrag(e, "move"); });
  grip.addEventListener("keydown", function (e) { nudge(e, [0, 1, 2, 3]); });
  // On a mouse, dragging anywhere on the design moves it. On touch, the grip does, so the page still scrolls.
  stage.addEventListener("pointerdown", function (e) {
    if (e.pointerType !== "mouse" || e.target !== glc && e.target !== base) return;
    if (inside(toNorm(e))) startDrag(e, "move");
  });
  stage.addEventListener("pointermove", function (e) {
    if (e.pointerType === "mouse" && !drag) stage.classList.toggle("over", inside(toNorm(e)));
  });
  window.addEventListener("pointermove", function (e) {
    if (!drag || e.pointerId !== drag.id) return;
    var p = toNorm(e), dx = p[0] - drag.from[0], dy = p[1] - drag.from[1];
    if (drag.kind === "move") state.quad = drag.quad.map(function (q) { return [q[0] + dx, q[1] + dy]; });
    else state.quad[drag.kind] = [drag.quad[drag.kind][0] + dx, drag.quad[drag.kind][1] + dy];
    schedule();
  });
  function endDrag() { if (drag) { drag = null; stage.classList.remove("dragging"); } }
  window.addEventListener("pointerup", endDrag); window.addEventListener("pointercancel", endDrag);

  function nudge(e, idx) {
    var k = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key];
    if (!k) return;
    e.preventDefault();
    var step = e.shiftKey ? 0.02 : 0.004;
    idx.forEach(function (i) { state.quad[i][0] += k[0] * step; state.quad[i][1] += k[1] * step; });
    schedule();
  }

  /* ---------- controls ---------- */
  var designBox = root.querySelector("[data-pv=designs]");
  var finishBox = root.querySelector("[data-pv=finishes]");
  var trimBox = root.querySelector("[data-pv=trims]");
  var countOut = root.querySelector("[data-pv=count]");
  var countLabel = root.querySelector("[data-pv=count-label]");
  var summary = root.querySelector("[data-pv=summary]");
  var tabBox = root.querySelector("[data-pv=cats]");
  var note = root.querySelector("[data-pv=note]");
  var cat = state.design.cat;

  function chip(box, label, on, swatch, fn) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "pv-chip"; b.setAttribute("aria-pressed", on ? "true" : "false");
    if (swatch) { var s = document.createElement("span"); s.className = "pv-sw"; s.style.background = swatch; s.setAttribute("aria-hidden", "true"); b.appendChild(s); }
    b.appendChild(document.createTextNode(label));
    b.addEventListener("click", fn); box.appendChild(b);
    return b;
  }
  function swatchFor(key) {
    var f = D.finishes[key];
    if (f.grain) return "repeating-linear-gradient(90deg," + f.base + " 0 3px," + f.dark + " 3px 4px," + f.light + " 4px 6px)";
    if (f.mirror) return "linear-gradient(135deg,#eef2f3,#a9b5bb 55%,#dfe5e7)";
    return f.base;
  }
  function trimSwatch(key) {
    var t = D.trims[key];
    if (t.light) return "radial-gradient(circle,rgb(" + t.light + ") 0 35%,rgba(" + t.light + ",.25) 70%)";
    return t.c ? "linear-gradient(135deg," + t.hi + "," + t.c + ")" : "transparent";
  }

  function buildDesigns() {
    tabBox.textContent = ""; designBox.textContent = "";
    D.cats.forEach(function (c) {
      var t = document.createElement("button");
      t.type = "button"; t.className = "pv-tab"; t.textContent = c.label; t.dataset.cat = c.id;
      t.setAttribute("aria-pressed", c.id === cat ? "true" : "false");
      t.addEventListener("click", function () { cat = c.id; buildDesigns(); });
      tabBox.appendChild(t);
    });
    D.list.forEach(function (d) {
      if (d.cat !== cat) return;
      var b = chip(designBox, d.label, d === state.design, null, function () { pick(d); });
      b.dataset.id = d.id;
      if (d.photo) { var tag = document.createElement("small"); tag.textContent = "Real build"; b.appendChild(tag); }
      if (!thumbs[d.id]) thumbs[d.id] = D.render(d, optsFor(d), 160).toDataURL("image/jpeg", 0.8);
      var img = document.createElement("img");
      img.src = thumbs[d.id]; img.alt = ""; img.width = 40; img.height = 40;
      b.insertBefore(img, b.firstChild);
    });
  }
  var thumbs = {};
  function group(box, show) { box.closest("[data-pv-group]").hidden = !show; }
  function buildOptions() {
    var d = state.design, fins = d.finishes || [], trims = d.trims || [];
    finishBox.textContent = ""; trimBox.textContent = "";
    fins.forEach(function (k) {
      chip(finishBox, D.finishes[k].label, k === state.opts.finish, swatchFor(k), function () { state.opts.finish = k; refreshDesign(); buildOptions(); });
    });
    trims.forEach(function (k) {
      chip(trimBox, D.trims[k].label, k === state.opts.trim, trimSwatch(k), function () { state.opts.trim = k; refreshDesign(); buildOptions(); });
    });
    group(finishBox, fins.length > 1); group(trimBox, trims.length > 0);
    root.querySelector("[data-pv=trim-label]").textContent = d.trimLabel || "Trim and handles";
    countLabel.textContent = d.count.label.replace(/, m$/, " (metres)");
    countOut.textContent = d.photo ? ["Smaller", "As built", "Larger"][state.opts.count - 1] : state.opts.count;
    note.textContent = d.note || "";
    [].forEach.call(designBox.children, function (b) { b.setAttribute("aria-pressed", b.dataset.id === d.id ? "true" : "false"); });
    summary.textContent = D.describe(d, state.opts);
  }
  function pick(d) {
    state.design = d; state.opts = optsFor(d);
    if (cat !== d.cat) { cat = d.cat; buildDesigns(); }
    uploadDesign(); state.quad = defaultQuad(); buildOptions(); schedule();
  }
  function refreshDesign() { var old = designAspect; uploadDesign(); if (old !== designAspect) refit(old); schedule(); }

  root.querySelector("[data-pv=less]").addEventListener("click", function () { step(-1); });
  root.querySelector("[data-pv=more]").addEventListener("click", function () { step(1); });
  function step(n) {
    var c = state.design.count, v = Math.min(c.max, Math.max(c.min, state.opts.count + n));
    if (v === state.opts.count) return;
    state.opts.count = v; refreshDesign(); buildOptions();
  }

  function slider(name, fn) {
    var el = root.querySelector("[data-pv=" + name + "]");
    el.addEventListener("input", function () { fn(parseFloat(el.value)); schedule(); });
    return el;
  }
  var sLight = slider("light", function (v) { state.light = v / 100; });
  var sWarm = slider("warmth", function (v) { state.warmth = v / 100; });
  var sShadow = slider("shadow", function (v) { state.shadow = v / 100; });
  slider("scale", function () {}).addEventListener("input", function (e) {
    var el = e.target, k = parseFloat(el.value) / parseFloat(el.dataset.last || 100);
    el.dataset.last = el.value;
    var c = centre();
    state.quad = state.quad.map(function (p) { return [c[0] + (p[0] - c[0]) * k, c[1] + (p[1] - c[1]) * k]; });
    schedule();
  });

  root.querySelector("[data-pv=reset]").addEventListener("click", function () {
    state.quad = defaultQuad(); state.light = 0; state.warmth = 0; state.shadow = 0.6;
    sLight.value = 0; sWarm.value = 0; sShadow.value = 60;
    var sc = root.querySelector("[data-pv=scale]"); sc.value = 100; sc.dataset.last = 100;
    schedule();
  });

  var compare = root.querySelector("[data-pv=compare]");
  compare.addEventListener("click", function () {
    state.hide = !state.hide;
    compare.setAttribute("aria-pressed", state.hide ? "true" : "false");
    compare.textContent = state.hide ? "Show design" : "Hide design";
    schedule();
  });

  /* ---------- photos ---------- */
  function loadPhoto(src, isSample) {
    var img = new Image();
    img.decoding = "async";
    img.onload = function () {
      // Keep it light: never hold more than 2400px on the long side
      var k = Math.min(1, 2400 / Math.max(img.naturalWidth, img.naturalHeight));
      var c = document.createElement("canvas");
      c.width = Math.round(img.naturalWidth * k); c.height = Math.round(img.naturalHeight * k);
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      state.photo = c; state.photoW = c.width; state.photoH = c.height; state.sample = !!isSample;
      state.quad = defaultQuad();
      if (!isSample) { URL.revokeObjectURL(src); status.textContent = "Photo added. Drag the four corners to the corners of the wall or space."; }
      root.classList.toggle("pv-own", !isSample);
      layout();
    };
    img.onerror = function () { status.textContent = "That photo didn't open. Try a JPG or PNG photo."; };
    img.src = src;
  }
  [].forEach.call(root.querySelectorAll("input[type=file]"), function (inp) {
    inp.addEventListener("change", function () {
      var f = inp.files && inp.files[0];
      if (f) loadPhoto(URL.createObjectURL(f), false);
      inp.value = "";
    });
  });
  root.querySelector("[data-pv=sample]").addEventListener("click", function () {
    loadPhoto(stage.dataset.sample, true);
    status.textContent = "Showing the sample room.";
  });

  /* ---------- saving ---------- */
  function exportCanvas() {
    var W = state.photoW, H = state.photoH, out = document.createElement("canvas");
    out.width = W; out.height = H;
    var ctx = out.getContext("2d");
    drawBase(ctx, W, H);
    var keep = [glc.width, glc.height];
    drawGL(Math.min(W, 4096), Math.min(H, 4096));
    ctx.drawImage(glc, 0, 0, W, H);
    glc.width = keep[0]; glc.height = keep[1]; schedule();
    // label so a shared image is never mistaken for a photo of a finished job
    var fs = Math.max(14, Math.round(W / 60));
    ctx.font = "600 " + fs + "px system-ui, sans-serif";
    var text = "Illustrative preview · " + D.describe(state.design, state.opts) + " · Custom Wardrobes 020 4149 8811";
    var tw = ctx.measureText(text).width;
    ctx.fillStyle = "rgba(24,18,14,.72)"; ctx.fillRect(0, H - fs * 2.2, Math.min(W, tw + fs * 2), fs * 2.2);
    ctx.fillStyle = "#f6f2ea"; ctx.fillText(text, fs, H - fs * 0.75);
    return out;
  }
  root.querySelector("[data-pv=save]").addEventListener("click", function () {
    exportCanvas().toBlob(function (blob) {
      if (!blob) return;
      var name = "room-preview-" + state.design.id + ".jpg";
      var file = window.File ? new File([blob], name, { type: "image/jpeg" }) : null;
      if (file && navigator.canShare && matchMedia("(pointer: coarse)").matches && navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file], title: "Room preview" }).catch(function () {});
        return;
      }
      var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      status.textContent = "Saved. You can send it to us with your enquiry.";
    }, "image/jpeg", 0.9);
  });

  root.querySelector("[data-pv=ask]").addEventListener("click", function () {
    var field = document.getElementById("f-design");
    if (field) field.value = D.describe(state.design, state.opts);
    var kind = document.getElementById("f-kind");
    if (kind) kind.value = { tv: "TV unit or media wall", prayer: "Prayer unit or carved panel", walls: "Feature wall or bedroom", wardrobes: "Wardrobe" }[state.design.cat] || "";
    var c = document.getElementById("contact");
    if (c) { c.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }); setTimeout(function () { var n = document.getElementById("f-name"); if (n) n.focus({ preventScroll: true }); }, 700); }
  });

  /* ---------- start ---------- */
  status.textContent = "Loading designs…";
  D.ready().then(function () {
    status.textContent = "";
    buildDesigns();
    uploadDesign();
    buildOptions();
    loadPhoto(stage.dataset.sample, true);
  });
  var rt; window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(layout, 120); });
  root.classList.add("pv-ready");
  window.CW_PREVIEW = { pick: function (id) {
    D.ready().then(function () { var d = D.list.filter(function (x) { return x.id === id; })[0]; if (d) pick(d); });
  } };
}
