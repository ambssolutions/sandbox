/* Room studio: place any of our pieces on a photo of your own room.
   - Rooms: the visitor's photo (camera or file) or a drawn sample room.
   - Pieces: real builds (flattened photos), made-to-measure drawn designs (designs.js),
     any photo from our gallery (projects.js) or an image the visitor uploads. For a photo, the
     visitor marks the piece's four corners and it is flattened to a straight-on cut-out.
   - Several pieces at once, each with its own corners, size, light and shadow.
   Photos never leave the device. Mount with <div data-studio></div>; theme it with the
   --st-* custom properties in studio.css. Needs designs.js and projects.js first.
   Pages in sub-folders set window.CW_BASE so asset paths resolve. */
(function () {
  var BASE = window.CW_BASE || "";
  var D = window.CW_DESIGNS, PROJECTS = window.CW_PROJECTS || [];
  var ROOMS = [
    { id: "bedroom", label: "Bedroom", src: BASE + "assets/img/sample-room-1600.webp", wall: [[0.269, 0.141], [0.731, 0.141], [0.731, 0.741], [0.269, 0.741]] },
    { id: "lounge", label: "Lounge", src: BASE + "assets/img/sample-lounge-1600.webp", wall: [[0.269, 0.141], [0.731, 0.141], [0.731, 0.741], [0.269, 0.741]] }
  ];
  var MAX_ITEMS = 4;
  var DPR = Math.min(window.devicePixelRatio || 1, 1.5);

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function button(cls, text, fn) { var b = el("button", cls); b.type = "button"; b.textContent = text; if (fn) b.addEventListener("click", fn); return b; }

  /* ---------- geometry ---------- */
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
    return [A / det, -(b * i - c * h) / det, (b * f - c * e) / det, B / det, (a * i - c * g) / det, -(a * f - c * d) / det, C / det, -(a * h - b * g) / det, (a * e - b * d) / det];
  }
  function dist(a, b) { return Math.hypot(a[0] - b[0], a[1] - b[1]); }
  function inside(q, pt) {
    var c = false;
    for (var i = 0, j = 3; i < 4; j = i++) if ((q[i][1] > pt[1]) !== (q[j][1] > pt[1]) && pt[0] < (q[j][0] - q[i][0]) * (pt[1] - q[i][1]) / (q[j][1] - q[i][1]) + q[i][0]) c = !c;
    return c;
  }

  // Flatten the quad (in source pixels) of an image into a straight-on canvas
  function flatten(img, q) {
    var w = Math.round((dist(q[0], q[1]) + dist(q[3], q[2])) / 2), h = Math.round((dist(q[0], q[3]) + dist(q[1], q[2])) / 2);
    var k = Math.min(1, 1100 / Math.max(w, h)); w = Math.max(8, Math.round(w * k)); h = Math.max(8, Math.round(h * k));
    var sw = img.naturalWidth || img.width, sh = img.naturalHeight || img.height;
    var sc = document.createElement("canvas"); sc.width = sw; sc.height = sh;
    var sx = sc.getContext("2d"); sx.drawImage(img, 0, 0);
    var src = sx.getImageData(0, 0, sw, sh).data;
    var out = document.createElement("canvas"); out.width = w; out.height = h;
    var ox = out.getContext("2d"), od = ox.createImageData(w, h), o = od.data;
    var m = squareToQuad(q);
    for (var y = 0; y < h; y++) {
      var v = (y + 0.5) / h;
      for (var x = 0; x < w; x++) {
        var u = (x + 0.5) / w, z = m[6] * u + m[7] * v + 1;
        var px = (m[0] * u + m[1] * v + m[2]) / z - 0.5, py = (m[3] * u + m[4] * v + m[5]) / z - 0.5;
        var x0 = Math.max(0, Math.min(sw - 1, Math.floor(px))), y0 = Math.max(0, Math.min(sh - 1, Math.floor(py)));
        var x1 = Math.min(sw - 1, x0 + 1), y1 = Math.min(sh - 1, y0 + 1), fx = Math.max(0, Math.min(1, px - x0)), fy = Math.max(0, Math.min(1, py - y0));
        var i00 = (y0 * sw + x0) * 4, i10 = (y0 * sw + x1) * 4, i01 = (y1 * sw + x0) * 4, i11 = (y1 * sw + x1) * 4, oi = (y * w + x) * 4;
        for (var c = 0; c < 3; c++) o[oi + c] = (src[i00 + c] * (1 - fx) + src[i10 + c] * fx) * (1 - fy) + (src[i01 + c] * (1 - fx) + src[i11 + c] * fx) * fy;
        o[oi + 3] = 255;
      }
    }
    ox.putImageData(od, 0, 0);
    return out;
  }

  function loadImage(src) {
    return new Promise(function (res, rej) { var i = new Image(); i.decoding = "async"; i.onload = function () { res(i); }; i.onerror = rej; i.src = src; });
  }

  /* Find the back wall in a room photo: the long level lines where the wall meets the ceiling and the
     floor, and the upright lines of the room's corners. It is an estimate from one photo, so the
     visitor sees the outline and can drag its corners or type the real size. */
  function senseWall(canvas) {
    var W = 200, H = Math.max(40, Math.round(canvas.height * W / canvas.width)), c = document.createElement("canvas");
    c.width = W; c.height = H; var x = c.getContext("2d"); x.drawImage(canvas, 0, 0, W, H);
    var d = x.getImageData(0, 0, W, H).data, g = new Float32Array(W * H), i, j;
    for (i = 0; i < W * H; i++) g[i] = d[i * 4] * 0.3 + d[i * 4 + 1] * 0.59 + d[i * 4 + 2] * 0.11;
    function at(px, py) { return g[py * W + px]; }
    // how much of a line (row or column, over a span) has a clear step across it
    function rowScore(y, x0, x1) { var n = 0; for (var k = x0; k < x1; k++) if (Math.abs(at(k, Math.min(H - 1, y + 2)) - at(k, Math.max(0, y - 2))) > 9) n++; return n / (x1 - x0); }
    function colScore(cx, y0, y1) { var n = 0; for (var k = y0; k < y1; k++) if (Math.abs(at(Math.min(W - 1, cx + 2), k) - at(Math.max(0, cx - 2), k)) > 9) n++; return n / Math.max(1, y1 - y0); }
    function best(from, to, fn) { var b = { at: -1, s: 0 }; for (var k = from; k <= to; k++) { var v = fn(k); if (v > b.s) b = { at: k, s: v }; } return b; }
    var x0 = Math.round(W * 0.25), x1 = Math.round(W * 0.75);
    var top = best(Math.round(H * 0.03), Math.round(H * 0.45), function (y) { return rowScore(y, x0, x1); });
    var bot = best(Math.round(H * 0.55), Math.round(H * 0.97), function (y) { return rowScore(y, x0, x1); });
    var t = top.s > 0.45 ? top.at / H : 0.06, b = bot.s > 0.45 ? bot.at / H : 0.94;
    var y0 = Math.round(t * H) + 3, y1 = Math.round(b * H) - 3;
    var lf = best(Math.round(W * 0.02), Math.round(W * 0.4), function (k) { return colScore(k, y0, y1); });
    var rt = best(Math.round(W * 0.6), Math.round(W * 0.98), function (k) { return colScore(k, y0, y1); });
    var l = lf.s > 0.6 ? lf.at / W : 0.02, r = rt.s > 0.6 ? rt.at / W : 0.98;
    return { quad: [[l, t], [r, t], [r, b], [l, b]], ceiling: top.s > 0.45, floor: bot.s > 0.45 };
  }

  function mount(root) {
    root.classList.add("st");
    root.innerHTML =
      '<div class="st-left"><div class="st-view"><div class="st-frame"><div class="st-stage" aria-label="Your room. Drag the round handles to fit the selected piece.">' +
      '<canvas class="st-base" aria-hidden="true"></canvas><canvas class="st-gl" aria-hidden="true"></canvas>' +
      '<button class="st-h" type="button" aria-label="Top left corner of the selected piece. Use the arrow keys to move it."></button>' +
      '<button class="st-h" type="button" aria-label="Top right corner of the selected piece. Use the arrow keys to move it."></button>' +
      '<button class="st-h" type="button" aria-label="Bottom right corner of the selected piece. Use the arrow keys to move it."></button>' +
      '<button class="st-h" type="button" aria-label="Bottom left corner of the selected piece. Use the arrow keys to move it."></button>' +
      '<button class="st-grip" type="button" aria-label="Move the selected piece. Drag it, or use the arrow keys."></button>' +
      '</div></div></div>' +
      '<div class="st-under"><div class="st-bar"><div class="st-lights" role="group" aria-label="Lighting">' +
      '<button type="button" data-l="day" aria-pressed="true">Daylight</button><button type="button" data-l="on" aria-pressed="false">Lights on</button><button type="button" data-l="off" aria-pressed="false">Lights off</button></div>' +
      '<button type="button" class="st-btn st-3d" data-a="3d">View in 3D</button></div>' +
      '<div class="st-layers" aria-label="Pieces in your room"></div><p class="st-status" role="status" aria-live="polite"></p></div></div>' +
      '<div class="st-panel">' +
      '<section class="st-step"><h2><span>1</span>Your room</h2><div class="st-room">' +
      '<label class="st-btn st-primary st-file">Take a photo<input type="file" accept="image/*" capture="environment" aria-label="Take a photo of your room"></label>' +
      '<label class="st-btn st-file">Choose a photo<input type="file" accept="image/*" aria-label="Choose a photo of your room"></label>' +
      '<div class="st-rooms" role="group" aria-label="Sample rooms"></div></div>' +
      '<div class="st-wall" hidden><h3>Your wall</h3><p class="st-note st-wall-how"></p>' +
      '<div class="st-wall-size"><label>Width <input type="number" inputmode="decimal" min="0.5" max="20" step="0.05" data-w="w"> m</label>' +
      '<label>Height <input type="number" inputmode="decimal" min="1.8" max="6" step="0.05" data-w="h"> m</label></div>' +
      '<button class="st-btn" type="button" data-a="wall" aria-pressed="false">Adjust the wall outline</button>' +
      '<p class="st-fitsum" role="status"></p></div></section>' +
      '<section class="st-step"><h2><span>2</span>Pick a piece</h2>' +
      '<div class="st-tabs" role="tablist"></div><div class="st-picker"></div></section>' +
      '<section class="st-step st-opts" hidden><h2><span>3</span>Finish</h2><div class="st-optbox"></div></section>' +
      '<section class="st-step"><h2><span>4</span>Fit it to your room</h2>' +
      '<p class="st-tip">Drag the round handles to the corners where the piece should go. Drag the centre button to move it.</p>' +
      '<div class="st-sliders">' +
      '<label>Size <input type="range" min="40" max="180" value="100" data-k="scale"></label>' +
      '<label>Brightness <input type="range" min="-45" max="35" value="0" data-k="light"></label>' +
      '<label>Warmth <input type="range" min="-100" max="100" value="0" data-k="warmth"></label>' +
      '<label>Shadow <input type="range" min="0" max="100" value="60" data-k="shadow"></label></div>' +
      '<div class="st-actions"><button class="st-btn" type="button" data-a="compare" aria-pressed="false">Hide pieces</button>' +
      '<button class="st-btn" type="button" data-a="fit">Fit again</button>' +
      '<button class="st-btn" type="button" data-a="remove">Remove piece</button>' +
      '<button class="st-btn" type="button" data-a="save">Save image</button>' +
      '<button class="st-btn st-primary" type="button" data-a="ask">Ask about this</button></div></section>' +
      '</div>' +
      '<div class="st-cut" hidden role="dialog" aria-modal="true" aria-label="Cut out a piece"><div class="st-cut-in">' +
      '<div class="st-cut-top"><h2>Mark the piece you want</h2><p>Drag the four corners to the corners of the piece. We straighten it out, then you can place it in your room.</p></div>' +
      '<div class="st-cut-stage"><canvas></canvas>' +
      '<button class="st-h" type="button" aria-label="Top left corner"></button><button class="st-h" type="button" aria-label="Top right corner"></button>' +
      '<button class="st-h" type="button" aria-label="Bottom right corner"></button><button class="st-h" type="button" aria-label="Bottom left corner"></button></div>' +
      '<div class="st-cut-bot"><button class="st-btn" type="button" data-c="cancel">Cancel</button><button class="st-btn st-primary" type="button" data-c="use">Place this piece</button></div>' +
      '</div></div>';

    var $ = function (s) { return root.querySelector(s); };
    var stage = $(".st-stage"), base = $(".st-base"), glc = $(".st-gl"), status = $(".st-status");
    var handles = [].slice.call(root.querySelectorAll(".st-stage .st-h")), grip = $(".st-grip");

    var state = { photo: null, pw: 1600, ph: 1066, room: ROOMS[0], own: false, items: [], active: -1, hide: false, lights: "day", wall: ROOMS[0].wall, wallH: 2400, wallEdit: false };

    /* ---------- WebGL ---------- */
    var gl = glc.getContext("webgl", { premultipliedAlpha: true, preserveDrawingBuffer: true, antialias: true, alpha: true });
    if (!gl) { root.classList.add("st-nogl"); root.insertAdjacentHTML("afterbegin", '<p class="st-nogl-msg">Your browser can\'t show the room studio. Try Chrome, Safari or Firefox on a newer device, or call 020 4149 8811.</p>'); return; }
    var VS = "attribute vec2 p;uniform vec2 r;void main(){gl_Position=vec4(p/r*2.0-1.0,0.0,1.0);gl_Position.y=-gl_Position.y;}";
    var FS = "precision highp float;uniform sampler2D t;uniform mat3 hi;uniform float h,lt,wm;" +
      "void main(){vec3 q=hi*vec3(gl_FragCoord.x,h-gl_FragCoord.y,1.0);vec2 uv=q.xy/q.z;vec4 c=texture2D(t,clamp(uv,0.0,1.0));" +
      "vec3 col=c.rgb*(1.0+lt);col+=vec3(0.07,0.025,-0.06)*wm;col*=1.0-0.10*smoothstep(0.84,1.0,uv.y)-0.04*smoothstep(0.08,0.0,uv.y);" +
      "gl_FragColor=vec4(clamp(col,0.0,1.0)*c.a,c.a);}";
    function shader(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; }
    var prog = gl.createProgram();
    gl.attachShader(prog, shader(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, shader(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(prog); gl.useProgram(prog);
    var U = {}; ["r", "t", "hi", "h", "lt", "wm"].forEach(function (k) { U[k] = gl.getUniformLocation(prog, k); });
    var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    var aP = gl.getAttribLocation(prog, "p"); gl.enableVertexAttribArray(aP); gl.vertexAttribPointer(aP, 2, gl.FLOAT, false, 0, 0);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
    gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    var maxTex = Math.min(matchMedia("(pointer: coarse)").matches ? 1280 : 1800, gl.getParameter(gl.MAX_TEXTURE_SIZE));

    function texFrom(canvas) {
      var t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t);
      [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T].forEach(function (k) { gl.texParameteri(gl.TEXTURE_2D, k, gl.CLAMP_TO_EDGE); });
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
      return t;
    }
    function drawGL(W, H) {
      if (glc.width !== W || glc.height !== H) { glc.width = W; glc.height = H; }
      gl.viewport(0, 0, W, H); gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
      if (state.hide || state.wallEdit) return;
      gl.uniform2f(U.r, W, H); gl.uniform1f(U.h, H);
      state.items.forEach(function (it) {
        var q = it.quad.map(function (p) { return [p[0] * W, p[1] * H]; });
        var hi = inv3(squareToQuad(q)); if (!hi) return;
        gl.bindTexture(gl.TEXTURE_2D, it.tex);
        gl.uniformMatrix3fv(U.hi, false, [hi[0], hi[3], hi[6], hi[1], hi[4], hi[7], hi[2], hi[5], hi[8]]);
        var lt = it.light + (state.lights === "off" ? -0.62 : state.lights === "on" ? (isLit(it) ? -0.05 : -0.5) : 0);
        gl.uniform1f(U.lt, lt); gl.uniform1f(U.wm, it.warmth);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([q[0][0], q[0][1], q[1][0], q[1][1], q[2][0], q[2][1], q[0][0], q[0][1], q[2][0], q[2][1], q[3][0], q[3][1]]), gl.DYNAMIC_DRAW);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      });
    }
    function drawBase(ctx, W, H, forSave) {
      ctx.clearRect(0, 0, W, H);
      if (state.photo) ctx.drawImage(state.photo, 0, 0, W, H);
      if (state.own && state.wallEdit && !forSave) { drawWall(ctx, W, H); return; }
      if (state.lights !== "day") { ctx.fillStyle = "rgba(10,12,26," + (state.lights === "on" ? 0.6 : 0.68) + ")"; ctx.fillRect(0, 0, W, H); }
      if (state.hide) return;
      if (state.lights === "on") state.items.forEach(function (it) {
        if (!isLit(it)) return;
        var q = it.quad.map(function (p) { return [p[0] * W, p[1] * H]; }), hgt = dist(q[0], q[3]), off = W * 4, col = lightOf(it);
        ctx.save(); ctx.globalCompositeOperation = "lighter";
        // light spilling onto the wall around the piece
        ctx.shadowColor = "rgba(" + col + ",.55)"; ctx.shadowBlur = Math.max(20, hgt * 0.28); ctx.shadowOffsetX = off;
        ctx.beginPath(); q.forEach(function (p, i) { ctx[i ? "lineTo" : "moveTo"](p[0] - off, p[1]); }); ctx.closePath(); ctx.fill();
        // and a pool of light on the floor below it
        var bx = (q[3][0] + q[2][0]) / 2, by = (q[3][1] + q[2][1]) / 2, bw = dist(q[3], q[2]);
        var g = ctx.createRadialGradient(bx, by, 2, bx, by, bw * 0.75);
        g.addColorStop(0, "rgba(" + col + ",.35)"); g.addColorStop(1, "rgba(" + col + ",0)");
        ctx.shadowColor = "transparent"; ctx.fillStyle = g; ctx.fillRect(bx - bw, by - bw * 0.2, bw * 2, bw * 0.9);
        ctx.restore();
      });
      state.items.forEach(function (it) {
        if (it.shadow <= 0) return;
        var q = it.quad.map(function (p) { return [p[0] * W, p[1] * H]; }), hgt = dist(q[0], q[3]), off = W * 4;
        ctx.save();
        ctx.shadowColor = "rgba(20,12,6," + (0.45 * it.shadow) + ")"; ctx.shadowBlur = Math.max(6, hgt * 0.06); ctx.shadowOffsetX = off; ctx.shadowOffsetY = hgt * 0.012;
        ctx.beginPath(); q.forEach(function (p, i) { ctx[i ? "lineTo" : "moveTo"](p[0] - off, p[1]); }); ctx.closePath(); ctx.fill();
        ctx.shadowColor = "rgba(10,6,3," + (0.6 * it.shadow) + ")"; ctx.shadowBlur = Math.max(3, hgt * 0.015); ctx.shadowOffsetY = hgt * 0.004; ctx.lineWidth = Math.max(2, hgt * 0.01);
        ctx.beginPath(); ctx.moveTo(q[3][0] - off, q[3][1]); ctx.lineTo(q[2][0] - off, q[2][1]); ctx.stroke();
        ctx.restore();
      });
    }

    // the measured wall: a dotted outline with its size along the top and the side
    function drawWall(ctx, W, H) {
      var q = state.wall.map(function (p) { return [p[0] * W, p[1] * H]; }), m = wallSize(), fs = Math.max(12, Math.round(H / 28));
      ctx.save(); ctx.lineWidth = Math.max(2, W / 400); ctx.setLineDash([fs * 0.6, fs * 0.4]);
      ctx.strokeStyle = "rgba(0,0,0,.55)"; ctx.beginPath(); q.forEach(function (p, i) { ctx[i ? "lineTo" : "moveTo"](p[0] + 1, p[1] + 1); }); ctx.closePath(); ctx.stroke();
      ctx.strokeStyle = "#fff"; ctx.beginPath(); q.forEach(function (p, i) { ctx[i ? "lineTo" : "moveTo"](p[0], p[1]); }); ctx.closePath(); ctx.stroke();
      ctx.setLineDash([]); ctx.font = "600 " + fs + "px system-ui, sans-serif"; ctx.textBaseline = "middle";
      function tag(text, x, y) {
        var w = ctx.measureText(text).width + fs; x = Math.min(W - w / 2 - 4, Math.max(w / 2 + 4, x)); y = Math.min(H - fs, Math.max(fs, y));
        ctx.fillStyle = "rgba(15,12,10,.82)"; ctx.fillRect(x - w / 2, y - fs * 0.8, w, fs * 1.6);
        ctx.fillStyle = "#fff"; ctx.textAlign = "center"; ctx.fillText(text, x, y);
      }
      tag((m.typed ? "" : "about ") + m.w.toFixed(m.typed ? 2 : 1).replace(/0$/, "") + " m wide", (q[0][0] + q[1][0]) / 2, (q[0][1] + q[1][1]) / 2 + fs * 1.4);
      tag(m.h.toFixed(2).replace(/0$/, "") + " m high", (q[0][0] + q[3][0]) / 2 + fs * 4.2, (q[0][1] + q[3][1]) / 2);
      ctx.restore();
    }

    /* ---------- layout and painting ---------- */
    var cssW = 0, cssH = 0, raf = 0;
    function layout() {
      var maxW = stage.parentElement.clientWidth || 600;
      var maxH = Math.max(200, innerHeight * (matchMedia("(max-width: 1080px)").matches ? 0.4 : 0.72));
      var ar = state.pw / state.ph;
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
      var q = target();
      handles.forEach(function (h, i) { h.hidden = !q; h.classList.toggle("st-h-wall", state.wallEdit); if (q) h.style.transform = "translate(" + q[i][0] * cssW + "px," + q[i][1] * cssH + "px)"; });
      grip.hidden = !q || state.wallEdit;
      if (q) { var c = centre(q); grip.style.transform = "translate(" + c[0] * cssW + "px," + c[1] * cssH + "px)"; }
    }
    // the corners being dragged: the wall outline while it is being adjusted, otherwise the selected piece
    function target() {
      if (state.wallEdit) return state.wall;
      var it = state.items[state.active]; return it && !state.hide ? it.quad : null;
    }
    function centre(q) { var x = 0, y = 0; q.forEach(function (p) { x += p[0] / 4; y += p[1] / 4; }); return [x, y]; }

    /* ---------- lighting ---------- */
    function isLit(it) { if (it.kind !== "design") return true; var t = D.trims[it.opts.trim]; return !!(t && t.light) || !!it.design.photo; }
    function lightOf(it) { var t = it.kind === "design" && D.trims[it.opts.trim]; return t && t.light ? t.light : "255,196,120"; }
    function effOpts(it) {
      var o = { count: it.opts.count, finish: it.opts.finish, trim: it.opts.trim, content: it.opts.content };
      if (state.lights === "off" && D.trims[o.trim] && D.trims[o.trim].light) o.trim = "dark";
      return o;
    }
    function setLights(m) {
      state.lights = m;
      [].forEach.call(root.querySelectorAll(".st-lights button"), function (b) { b.setAttribute("aria-pressed", b.dataset.l === m ? "true" : "false"); });
      state.items.forEach(function (it) { if (it.kind === "design" && !it.design.photo) rerender(it); });
      schedule();
      say({ day: "Daylight.", on: "Evening, with the lights on.", off: "Evening, with the lights off." }[m]);
    }
    [].forEach.call(root.querySelectorAll(".st-lights button"), function (b) { b.addEventListener("click", function () { setLights(b.dataset.l); }); });

    /* ---------- pieces ---------- */
    // Start a piece straight on, at true scale when we know its size, staggered so pieces don't stack exactly
    function startQuad(mm, lift, aspect) {
      var s = scaleInfo(), wallTop = s.top, floor = s.floor, perMm = s.perMm, a = state.ph / state.pw, h, w;
      if (mm) { h = mm[1] * perMm; w = mm[0] * s.perMmX; } else { h = (floor - wallTop) * 0.62; w = h * aspect * a; }
      // keep it inside the photo with a margin: at most 84% wide and 70% tall (true proportions kept)
      var k = Math.min(1, 0.84 / w, 0.7 / h); w *= k; h *= k;
      var bottom = Math.min(0.95, floor - (lift || 0) * perMm * k), top = bottom - h;
      if (top < 0.05) { top = 0.05; bottom = top + h; }
      // small pieces start beside what is already there; wide ones start centred so they stay in frame
      var n = state.items.length, side = n && w < 0.4 ? (n % 2 ? -1 : 1) * Math.min(0.25, w / 2 + 0.06) : 0;
      var cx = Math.min(1 - w / 2 - 0.03, Math.max(w / 2 + 0.03, s.cx + side));
      return [[cx - w / 2, top], [cx + w / 2, top], [cx + w / 2, bottom], [cx - w / 2, bottom]];
    }
    // the wall: where it sits in the photo, and its size in metres
    function scaleInfo() {
      var q = state.wall, top = (q[0][1] + q[1][1]) / 2, floor = (q[2][1] + q[3][1]) / 2;
      var perMm = (floor - top) / state.wallH, wFrac = (Math.abs(q[1][0] - q[0][0]) + Math.abs(q[2][0] - q[3][0])) / 2;
      // across: from the typed width when the visitor knows it, otherwise the same scale as up and down
      return { top: top, floor: floor, perMm: perMm, perMmX: state.wallW ? wFrac / state.wallW : perMm * state.ph / state.pw, cx: centre(q)[0] };
    }
    function wallSize() {
      var q = state.wall, W = state.pw, H = state.ph;
      function len(a, b) { return Math.hypot((a[0] - b[0]) * W, (a[1] - b[1]) * H); }
      var wPx = (len(q[0], q[1]) + len(q[3], q[2])) / 2, hPx = (len(q[0], q[3]) + len(q[1], q[2])) / 2;
      return { w: state.wallW ? state.wallW / 1000 : state.wallH / 1000 * wPx / Math.max(1, hPx), h: state.wallH / 1000, typed: !!state.wallW };
    }
    /* ---------- will it fit? (only on the visitor's own photo, where we have measured the wall) ---------- */
    function fitOf(d, n) {
      var mm = d.size(n), lift = d.lift || 0, m = wallSize();
      var toCeiling = lift <= 200 && lift + mm[1] >= 2400; // full-height walls, wardrobes and units are made to the ceiling
      var wide = mm[0] > m.w * 1000 + 1, tall = !toCeiling && lift + mm[1] > m.h * 1000 + 1;
      return { ok: !wide && !tall, wide: wide, tall: tall, w: mm[0], h: mm[1] + lift };
    }
    function bestCount(d) {
      if (!state.own) return d.count.value;
      if (fitOf(d, d.count.value).ok) return d.count.value;
      for (var n = d.count.value - 1; n >= d.count.min; n--) if (fitOf(d, n).ok) return n;
      for (n = d.count.value + 1; n <= d.count.max; n++) if (fitOf(d, n).ok) return n;
      return null;
    }
    function metres(mm) { return (mm / 1000).toFixed(1) + " m"; }
    function whyNot(f) {
      return f.wide ? "it is about " + metres(f.w) + " wide and the wall is about " + metres(wallSize().w * 1000)
        : "it reaches about " + metres(f.h) + " high and the wall is " + metres(wallSize().h * 1000);
    }
    function fitAgain() {
      var it = state.items[state.active]; if (!it) return;
      it.quad = startQuad(it.design ? it.design.size(it.opts.count) : null, it.design && it.design.lift, it.aspect);
      it.scale = 100; syncSliders(); schedule(); say(it.label + " fitted again. Drag the corners to fine-tune.");
    }
    function addItem(it) {
      if (state.items.length >= MAX_ITEMS) state.items.shift();
      it.light = 0; it.warmth = 0; it.shadow = 0.6;
      state.items.push(it); state.active = state.items.length - 1; setWallEdit(false);
      syncSliders(); renderLayers(); renderOpts(); schedule();
      say(it.label + " placed. Drag the corners to fit it.");
    }
    function addDesign(d) {
      D.ready().then(function () {
        var n = bestCount(d), opts = { count: n || d.count.min, finish: d.finish, trim: d.trim, content: d.content };
        var it = { label: d.label, kind: "design", design: d, opts: opts };
        var c = D.render(d, effOpts(it), maxTex);
        it.canvas = c; it.tex = texFrom(c); it.aspect = c.width / c.height; it.quad = startQuad(d.size(opts.count), d.lift, 1);
        addItem(it);
        if (state.own && n == null) say(d.label + " won't fit this wall at any of our sizes: " + whyNot(fitOf(d, d.count.min)) + ". It is shown anyway; ask us about a custom size.");
        else if (state.own && n !== d.count.value) say(d.label + " placed in a " + (n < d.count.value ? "smaller" : "larger") + " size, so it fits your wall. Drag the corners to fine-tune.");
      });
    }
    function addCut(canvas, label) {
      addItem({ label: label, kind: "cut", canvas: canvas, tex: texFrom(canvas), aspect: canvas.width / canvas.height, quad: startQuad(null, 0, canvas.width / canvas.height) });
    }
    function rerender(it) {
      var oldA = it.aspect, c = D.render(it.design, effOpts(it), maxTex);
      gl.deleteTexture(it.tex); it.canvas = c; it.tex = texFrom(c); it.aspect = c.width / c.height;
      var k = it.aspect / oldA, q = it.quad;
      [[0, 1], [3, 2]].forEach(function (p) { var a = q[p[0]], b = q[p[1]]; b[0] = a[0] + (b[0] - a[0]) * k; b[1] = a[1] + (b[1] - a[1]) * k; });
      schedule();
    }
    function removeActive() {
      var it = state.items[state.active]; if (!it) return;
      gl.deleteTexture(it.tex); state.items.splice(state.active, 1);
      state.active = state.items.length - 1; syncSliders(); renderLayers(); renderOpts(); schedule();
      say(it.label + " removed.");
    }
    function say(t) { status.textContent = t; }

    var layers = $(".st-layers");
    function renderLayers() {
      layers.textContent = "";
      state.items.forEach(function (it, i) {
        var b = button("st-layer", it.label, function () { setWallEdit(false); state.active = i; syncSliders(); renderLayers(); renderOpts(); schedule(); });
        b.setAttribute("aria-pressed", i === state.active ? "true" : "false");
        layers.appendChild(b);
      });
      if (state.items.length) layers.appendChild(el("span", "st-layer-hint", state.items.length < MAX_ITEMS ? "Add another piece from step 2" : "Up to " + MAX_ITEMS + " pieces"));
    }

    /* ---------- picker ---------- */
    var tabs = $(".st-tabs"), picker = $(".st-picker");
    var TABS = [["builds", "Our builds"], ["photos", "From our photos"], ["made", "Made to measure"], ["yours", "Your own"]];
    var tab = "builds";
    TABS.forEach(function (t) {
      var b = button("st-tab", t[1], function () { tab = t[0]; renderPicker(); });
      b.setAttribute("role", "tab"); b.dataset.t = t[0]; tabs.appendChild(b);
    });
    var thumbs = {};
    function designThumb(d) {
      if (!thumbs[d.id]) thumbs[d.id] = D.render(d, { count: d.count.value, finish: d.finish, trim: d.trim }, 180).toDataURL("image/jpeg", 0.82);
      return thumbs[d.id];
    }
    function card(imgSrc, label, sub, fn) {
      var b = el("button", "st-card"); b.type = "button";
      var i = el("img"); i.src = imgSrc; i.alt = ""; i.loading = "lazy"; i.decoding = "async";
      b.appendChild(i); b.appendChild(el("span", "st-card-t", label)); if (sub) b.appendChild(el("small", "", sub));
      b.addEventListener("click", fn); return b;
    }
    function renderPicker() {
      [].forEach.call(tabs.children, function (b) { b.setAttribute("aria-selected", b.dataset.t === tab ? "true" : "false"); });
      picker.textContent = "";
      if (tab === "builds" || tab === "made") {
        D.ready().then(function () {
          picker.textContent = "";
          var grid = el("div", "st-grid");
          D.list.filter(function (d) { return tab === "builds" ? !!d.photo : !d.photo; }).forEach(function (d) {
            var b = card(designThumb(d), d.label, tab === "builds" ? "Real build" : (D.cats.filter(function (c) { return c.id === d.cat; })[0] || {}).label, function () { addDesign(d); });
            if (state.own) {
              var n = bestCount(d);
              if (n == null) { b.classList.add("st-nofit"); b.appendChild(el("small", "st-fit st-fit-no", "Too big for your wall")); }
              else if (n !== d.count.value) b.appendChild(el("small", "st-fit", "Fits in a smaller size"));
              else b.appendChild(el("small", "st-fit st-fit-ok", "Fits your wall"));
            }
            grid.appendChild(b);
          });
          picker.appendChild(grid);
          if (tab === "builds") picker.appendChild(el("p", "st-note", "Want something else we've built? Use <b>From our photos</b> to cut any piece out of our gallery."));
        });
      } else if (tab === "photos") {
        picker.appendChild(el("p", "st-note", "Pick a photo, then mark the piece you want. Front-on photos work best."));
        var grid = el("div", "st-grid st-grid-photos");
        PROJECTS.forEach(function (p) {
          p.images.forEach(function (im) {
            grid.appendChild(card(BASE + im.src + "-480.webp?v=2", p.title, null, function () {
              openCutter(BASE + im.src + "-" + im.sizes[im.sizes.length - 1] + ".webp?v=2", p.title);
            }));
          });
        });
        picker.appendChild(grid);
      } else {
        picker.appendChild(el("p", "st-note", "Seen something you like on TikTok, Instagram or anywhere else? Upload a screenshot and mark the piece. It stays on your device."));
        var lab = el("label", "st-btn st-primary st-file", "Upload a design<input type=\"file\" accept=\"image/*\" aria-label=\"Upload a picture of a design\">");
        lab.querySelector("input").addEventListener("change", function (e) {
          var f = e.target.files && e.target.files[0]; if (!f) return;
          var u = URL.createObjectURL(f); openCutter(u, "Your design", function () { URL.revokeObjectURL(u); }); e.target.value = "";
        });
        picker.appendChild(lab);
      }
    }

    /* ---------- options for made-to-measure pieces ---------- */
    var optSec = $(".st-opts"), optBox = $(".st-optbox");
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
    function chips(title, keys, cur, label, sw, fn) {
      if (!keys || keys.length < 2) return;
      var g = el("div", "st-chips"); g.appendChild(el("h3", "", title));
      var row = el("div", "st-row");
      keys.forEach(function (k) {
        var b = el("button", "st-chip"); b.type = "button"; b.setAttribute("aria-pressed", k === cur ? "true" : "false");
        var s = el("span", "st-sw"); s.style.background = sw(k); s.setAttribute("aria-hidden", "true"); b.appendChild(s);
        b.appendChild(document.createTextNode(label(k))); b.addEventListener("click", function () { fn(k); }); row.appendChild(b);
      });
      g.appendChild(row); optBox.appendChild(g);
    }
    function renderOpts() {
      var it = state.items[state.active];
      optSec.hidden = !(it && it.kind === "design");
      if (optSec.hidden) return;
      var d = it.design; optBox.textContent = "";
      optSec.querySelector("h2").lastChild.textContent = d.label;
      chips("Finish", d.finishes, it.opts.finish, function (k) { return D.finishes[k].label; }, swatchFor, function (k) { it.opts.finish = k; rerender(it); renderOpts(); });
      if (d.contents) {
        chips("Contents", d.contents, it.opts.content, function (k) { return D.contents[k].label; }, function (k) {
          return k === "custom" ? "conic-gradient(#e9e4da,#b9ab98,#e9e4da)" : "url(" + BASE + "assets/img/designs/content-" + (k === "moolmantar" ? "mool-mantar" : "radha-krishna") + ".webp) center / cover";
        }, function (k) {
          if (k === "custom") { customFor = it; customInput.click(); return; }
          it.opts.content = k; rerender(it); renderOpts();
        });
        optBox.appendChild(el("p", "st-note", "Choose what goes inside the panel. With <b>Your own image</b>, upload a picture and we show it as a lit carving."));
      }
      chips(d.trimLabel || "Trim and handles", d.trims, it.opts.trim, function (k) { return D.trims[k].label; }, trimSwatch, function (k) { it.opts.trim = k; rerender(it); renderOpts(); });
      var c = el("div", "st-count");
      c.appendChild(el("h3", "", d.count.label.replace(/, m$/, " (metres)")));
      var less = button("st-round", "−", function () { step(-1); }), more = button("st-round", "+", function () { step(1); });
      less.setAttribute("aria-label", "Smaller or fewer"); more.setAttribute("aria-label", "Larger or more");
      var out = el("output", "", d.photo ? ["Smaller", "As built", "Larger"][it.opts.count - 1] : it.opts.count);
      c.appendChild(less); c.appendChild(out); c.appendChild(more); optBox.appendChild(c);
      function step(n) { var v = Math.min(d.count.max, Math.max(d.count.min, it.opts.count + n)); if (v !== it.opts.count) { it.opts.count = v; rerender(it); renderOpts(); } }
      if (state.own) {
        var f = fitOf(d, it.opts.count);
        optBox.appendChild(el("p", "st-note st-fitnote" + (f.ok ? "" : " st-fit-no"), f.ok ? "This size fits your wall." : "This size won't fit: " + whyNot(f) + "."));
      }
      if (d.note) optBox.appendChild(el("p", "st-note", d.note));
    }

    var customFor = null, customInput = el("input"); customInput.type = "file"; customInput.accept = "image/*"; customInput.hidden = true; root.appendChild(customInput);
    customInput.addEventListener("change", function () {
      var f = customInput.files && customInput.files[0]; if (!f || !customFor) return;
      var u = URL.createObjectURL(f);
      loadImage(u).then(function (img) { D.setCustom(img); URL.revokeObjectURL(u); customFor.opts.content = "custom"; rerender(customFor); renderOpts(); say("Your image is in the panel, shown as a lit carving."); });
      customInput.value = "";
    });

    /* ---------- fit sliders ---------- */
    var sliders = {};
    [].forEach.call(root.querySelectorAll(".st-sliders input"), function (inp) {
      sliders[inp.dataset.k] = inp;
      inp.addEventListener("input", function () {
        var it = state.items[state.active]; if (!it) return;
        var v = parseFloat(inp.value);
        if (inp.dataset.k === "scale") {
          var k = v / (it.scale || 100); it.scale = v;
          var c = centre(it.quad); it.quad = it.quad.map(function (p) { return [c[0] + (p[0] - c[0]) * k, c[1] + (p[1] - c[1]) * k]; });
        } else if (inp.dataset.k === "light") it.light = v / 100;
        else if (inp.dataset.k === "warmth") it.warmth = v / 100;
        else it.shadow = v / 100;
        schedule();
      });
    });
    function syncSliders() {
      var it = state.items[state.active] || { scale: 100, light: 0, warmth: 0, shadow: 0.6 };
      sliders.scale.value = it.scale || 100; sliders.light.value = it.light * 100; sliders.warmth.value = it.warmth * 100; sliders.shadow.value = it.shadow * 100;
    }

    /* ---------- dragging on the room ---------- */
    function toNorm(e, elm) {
      var r = elm.getBoundingClientRect();
      return [Math.min(1.25, Math.max(-0.25, (e.clientX - r.left) / r.width)), Math.min(1.25, Math.max(-0.25, (e.clientY - r.top) / r.height))];
    }
    var drag = null;
    function startDrag(e, kind) {
      var q = target(); if (!q) return;
      e.preventDefault();
      drag = { kind: kind, from: toNorm(e, stage), quad: q.map(function (p) { return p.slice(); }), id: e.pointerId };
      try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) {}
      stage.classList.add("dragging");
    }
    handles.forEach(function (h, i) {
      h.addEventListener("pointerdown", function (e) { startDrag(e, i); });
      h.addEventListener("keydown", function (e) { nudge(e, [i]); });
    });
    grip.addEventListener("pointerdown", function (e) { startDrag(e, "move"); });
    grip.addEventListener("keydown", function (e) { nudge(e, [0, 1, 2, 3]); });
    // On a mouse, click a piece to select it and drag it. On touch, the grip moves it so the page still scrolls.
    stage.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse" || state.wallEdit || (e.target !== glc && e.target !== base)) return;
      var pt = toNorm(e, stage);
      for (var i = state.items.length - 1; i >= 0; i--) if (inside(state.items[i].quad, pt)) {
        if (i !== state.active) { state.active = i; syncSliders(); renderLayers(); renderOpts(); }
        startDrag(e, "move"); return;
      }
    });
    stage.addEventListener("pointermove", function (e) {
      if (e.pointerType !== "mouse" || drag) return;
      var pt = toNorm(e, stage); stage.classList.toggle("over", state.items.some(function (it) { return inside(it.quad, pt); }));
    });
    addEventListener("pointermove", function (e) {
      if (!drag || e.pointerId !== drag.id) return;
      var q = target(), p = toNorm(e, stage), dx = p[0] - drag.from[0], dy = p[1] - drag.from[1];
      if (!q) return;
      if (drag.kind === "move") drag.quad.forEach(function (o, i) { q[i] = [o[0] + dx, o[1] + dy]; });
      else q[drag.kind] = [drag.quad[drag.kind][0] + dx, drag.quad[drag.kind][1] + dy];
      if (state.wallEdit) wallChanged(); else schedule();
    });
    function endDrag() { if (drag) { drag = null; stage.classList.remove("dragging"); if (state.wallEdit) renderFits(); } }
    addEventListener("pointerup", endDrag); addEventListener("pointercancel", endDrag);
    function nudge(e, idx) {
      var k = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key], q = target();
      if (!k || !q) return;
      e.preventDefault();
      var s = e.shiftKey ? 0.02 : 0.004;
      idx.forEach(function (i) { q[i][0] += k[0] * s; q[i][1] += k[1] * s; });
      if (state.wallEdit) { wallChanged(); renderFits(); } else schedule();
    }

    /* ---------- the cutter ---------- */
    var cut = $(".st-cut"), cutStage = $(".st-cut-stage"), cutCanvas = cutStage.querySelector("canvas");
    var cutHandles = [].slice.call(cutStage.querySelectorAll(".st-h")), cutImg = null, cutQuad = null, cutLabel = "", cutDone = null, cutFrom = null, cutDrag = null;
    function openCutter(src, label, done) {
      say("Opening the photo…");
      loadImage(src).then(function (img) {
        cutImg = img; cutLabel = label; cutDone = done; cutFrom = document.activeElement;
        cutQuad = [[0.18, 0.18], [0.82, 0.18], [0.82, 0.82], [0.18, 0.82]];
        cut.hidden = false; document.documentElement.classList.add("st-locked");
        layoutCut(); cutHandles[0].focus(); say("");
      }).catch(function () { say("That picture didn't open. Try a JPG or PNG."); });
    }
    function layoutCut() {
      if (cut.hidden) return;
      var box = cutStage.parentElement.getBoundingClientRect(), maxW = Math.min(box.width - 24, 900), maxH = innerHeight - 220;
      var ar = cutImg.naturalWidth / cutImg.naturalHeight, w = Math.min(maxW, maxH * ar), h = w / ar;
      cutStage.style.width = w + "px"; cutStage.style.height = h + "px";
      cutCanvas.width = Math.round(w * DPR); cutCanvas.height = Math.round(h * DPR);
      paintCut();
    }
    function paintCut() {
      var c = cutCanvas.getContext("2d"), W = cutCanvas.width, H = cutCanvas.height;
      c.clearRect(0, 0, W, H); c.drawImage(cutImg, 0, 0, W, H);
      var q = cutQuad.map(function (p) { return [p[0] * W, p[1] * H]; });
      c.save(); c.fillStyle = "rgba(0,0,0,.55)"; c.beginPath(); c.rect(0, 0, W, H);
      c.moveTo(q[0][0], q[0][1]); for (var i = 3; i >= 0; i--) c.lineTo(q[i][0], q[i][1]); c.closePath(); c.fill("evenodd");
      c.strokeStyle = "#fff"; c.lineWidth = 2 * DPR; c.beginPath(); q.forEach(function (p, i) { c[i ? "lineTo" : "moveTo"](p[0], p[1]); }); c.closePath(); c.stroke(); c.restore();
      var r = cutStage.getBoundingClientRect();
      cutHandles.forEach(function (h, i) { h.style.transform = "translate(" + cutQuad[i][0] * r.width + "px," + cutQuad[i][1] * r.height + "px)"; });
    }
    cutHandles.forEach(function (h, i) {
      h.addEventListener("pointerdown", function (e) { e.preventDefault(); cutDrag = { i: i, id: e.pointerId }; try { h.setPointerCapture(e.pointerId); } catch (_) {} });
      h.addEventListener("keydown", function (e) {
        var k = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key]; if (!k) return;
        e.preventDefault(); var s = e.shiftKey ? 0.02 : 0.004; cutQuad[i][0] = Math.min(1, Math.max(0, cutQuad[i][0] + k[0] * s)); cutQuad[i][1] = Math.min(1, Math.max(0, cutQuad[i][1] + k[1] * s)); paintCut();
      });
    });
    addEventListener("pointermove", function (e) {
      if (!cutDrag || e.pointerId !== cutDrag.id) return;
      var p = toNorm(e, cutStage); cutQuad[cutDrag.i] = [Math.min(1, Math.max(0, p[0])), Math.min(1, Math.max(0, p[1]))]; paintCut();
    });
    addEventListener("pointerup", function () { cutDrag = null; });
    function closeCutter() {
      cut.hidden = true; document.documentElement.classList.remove("st-locked");
      if (cutDone) cutDone(); cutDone = null; if (cutFrom && cutFrom.focus) cutFrom.focus();
    }
    cut.querySelector('[data-c="cancel"]').addEventListener("click", closeCutter);
    cut.querySelector('[data-c="use"]').addEventListener("click", function () {
      var W = cutImg.naturalWidth, H = cutImg.naturalHeight;
      var flat = flatten(cutImg, cutQuad.map(function (p) { return [p[0] * W, p[1] * H]; }));
      closeCutter(); addCut(flat, cutLabel);
      root.querySelector(".st-view").scrollIntoView({ block: "start" });
    });
    cut.addEventListener("keydown", function (e) { if (e.key === "Escape") closeCutter(); });

    /* ---------- rooms ---------- */
    var roomBox = $(".st-rooms");
    function setPhoto(img, room, own) {
      var k = Math.min(1, 2400 / Math.max(img.naturalWidth, img.naturalHeight)), c = document.createElement("canvas");
      c.width = Math.round(img.naturalWidth * k); c.height = Math.round(img.naturalHeight * k);
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      var old = { w: state.pw, h: state.ph };
      state.photo = c; state.pw = c.width; state.ph = c.height; state.room = room || state.room; state.own = !!own;
      state.wallH = 2400; state.wallW = 0;
      if (own) { var found = senseWall(c); state.wall = found.quad; state.found = found; }
      else state.wall = state.room.wall.map(function (p) { return p.slice(); });
      showWall(own);
      // keep pieces where they are on screen when the photo's shape changes
      if (old.w / old.h !== state.pw / state.ph) state.items.forEach(function (it) { it.quad = startQuad(it.design ? it.design.size(it.opts.count) : null, it.design && it.design.lift, it.aspect); });
      [].forEach.call(roomBox.children, function (b) { b.setAttribute("aria-pressed", !own && room && b.dataset.r === room.id ? "true" : "false"); });
      layout();
    }
    ROOMS.forEach(function (r) {
      var b = button("st-btn st-roomchip", r.label + " (sample)", function () { loadImage(r.src).then(function (i) { setPhoto(i, r, false); say("Showing the sample " + r.label.toLowerCase() + "."); }); });
      b.dataset.r = r.id; roomBox.appendChild(b);
    });
    [].forEach.call(root.querySelectorAll(".st-room input[type=file]"), function (inp) {
      inp.addEventListener("change", function () {
        var f = inp.files && inp.files[0]; if (!f) return;
        var u = URL.createObjectURL(f);
        loadImage(u).then(function (i) {
          setPhoto(i, null, true); URL.revokeObjectURL(u);
          var m = wallSize(), f = state.found;
          say("Your photo is in. We measured the wall at about " + m.w.toFixed(1) + " m wide, taking a standard 2.4 m ceiling" +
            (f.ceiling && f.floor ? "" : " (we couldn't see where it meets the " + (f.ceiling ? "floor" : "ceiling") + ", so check the outline)") + ".");
        })
          .catch(function () { say("That photo didn't open. Try a JPG or PNG."); });
        inp.value = "";
      });
    });

    /* ---------- the measured wall ---------- */
    var wallBox = $(".st-wall"), wallBtn = $('[data-a="wall"]'), fitSum = $(".st-fitsum");
    var inW = wallBox.querySelector('[data-w="w"]'), inH = wallBox.querySelector('[data-w="h"]');
    function setWallEdit(on) {
      state.wallEdit = on && state.own; wallBtn.setAttribute("aria-pressed", state.wallEdit ? "true" : "false");
      wallBtn.textContent = state.wallEdit ? "Done" : "Adjust the wall outline"; schedule();
    }
    function showWall(own) {
      wallBox.hidden = !own;
      wallBox.querySelector(".st-wall-how").textContent = "Measured from your photo, taking a standard 2.4 m ceiling. Drag the dotted corners to the edges of the wall, or type its size if you know it. Pieces show again when you tap Done.";
      setWallEdit(own); wallChanged(); renderFits();
    }
    function wallChanged() {
      var m = wallSize();
      if (document.activeElement !== inW) inW.value = m.w.toFixed(2);
      if (document.activeElement !== inH) inH.value = m.h.toFixed(2);
      schedule();
    }
    inW.addEventListener("change", function () {
      var v = parseFloat(inW.value); if (!(v > 0.4 && v < 30)) return;
      state.wallW = v * 1000; wallChanged(); renderFits(); refit();
    });
    inH.addEventListener("change", function () {
      var v = parseFloat(inH.value); if (!(v > 1.5 && v < 8)) return;
      state.wallH = v * 1000; wallChanged(); renderFits(); refit();
    });
    wallBtn.addEventListener("click", function () { setWallEdit(!state.wallEdit); if (!state.wallEdit) { renderFits(); refit(); } });
    // after the wall changes, made-to-measure pieces are redrawn at their true size against it
    function refit() {
      state.items.forEach(function (it) { if (it.design) it.quad = startQuad(it.design.size(it.opts.count), it.design.lift, it.aspect); });
      schedule();
    }
    function renderFits() {
      if (!state.own) { fitSum.textContent = ""; return; }
      var tooBig = [], smaller = [];
      D.list.forEach(function (d) { var n = bestCount(d); if (n == null) tooBig.push(d.label); else if (n !== d.count.value) smaller.push(d.label); });
      fitSum.textContent = !tooBig.length && !smaller.length ? "Every piece fits this wall in its usual size." :
        (tooBig.length ? "Won't fit this wall: " + tooBig.join(", ") + ". " : "") + (smaller.length ? "Fits in a smaller size: " + smaller.join(", ") + "." : "");
      if (tab === "builds" || tab === "made") renderPicker();
      renderOpts();
    }

    /* ---------- actions ---------- */
    var compare = root.querySelector('[data-a="compare"]');
    compare.addEventListener("click", function () {
      state.hide = !state.hide; compare.setAttribute("aria-pressed", state.hide ? "true" : "false");
      compare.textContent = state.hide ? "Show pieces" : "Hide pieces"; schedule();
    });
    root.querySelector('[data-a="remove"]').addEventListener("click", removeActive);
    root.querySelector('[data-a="fit"]').addEventListener("click", fitAgain);
    function describe() { return state.items.map(function (it) { return it.kind === "design" ? D.describe(it.design, it.opts) : it.label + " (cut from a photo)"; }).join("; "); }
    root.querySelector('[data-a="save"]').addEventListener("click", function () {
      var W = state.pw, H = state.ph, out = document.createElement("canvas"); out.width = W; out.height = H;
      var ctx = out.getContext("2d"); drawBase(ctx, W, H, true);
      var keep = [glc.width, glc.height]; drawGL(Math.min(W, 4096), Math.min(H, 4096)); ctx.drawImage(glc, 0, 0, W, H);
      glc.width = keep[0]; glc.height = keep[1]; schedule();
      var fs = Math.max(14, Math.round(W / 60)); ctx.font = "600 " + fs + "px system-ui, sans-serif";
      var text = "Illustrative preview · Custom Wardrobes · 020 4149 8811", tw = ctx.measureText(text).width;
      ctx.fillStyle = "rgba(15,12,10,.75)"; ctx.fillRect(0, H - fs * 2.2, Math.min(W, tw + fs * 2), fs * 2.2);
      ctx.fillStyle = "#f5f0e7"; ctx.fillText(text, fs, H - fs * 0.75);
      out.toBlob(function (blob) {
        if (!blob) return;
        var file = window.File ? new File([blob], "room-preview.jpg", { type: "image/jpeg" }) : null;
        if (file && navigator.canShare && matchMedia("(pointer: coarse)").matches && navigator.canShare({ files: [file] })) { navigator.share({ files: [file], title: "Room preview" }).catch(function () {}); return; }
        var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "room-preview.jpg";
        document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
        say("Saved. You can text it to 020 4149 8811 with your enquiry.");
      }, "image/jpeg", 0.9);
    });
    root.querySelector('[data-a="ask"]').addEventListener("click", function () {
      var f = document.getElementById("f-design"); if (f) f.value = describe() || "";
      var k = document.getElementById("f-kind"), it = state.items[state.items.length - 1];
      if (k && it && it.design) k.value = { tv: "TV unit or media wall", prayer: "Prayer unit or carved panel", walls: "Feature wall or bedroom", wardrobes: "Wardrobe" }[it.design.cat] || k.value;
      var c = document.getElementById("contact");
      if (c) { c.scrollIntoView(); var n = document.getElementById("f-name"); if (n) n.focus({ preventScroll: true }); }
    });

    root.querySelector('[data-a="3d"]').addEventListener("click", function () {
      if (!state.items.length) { say("Pick a piece first, then view it in 3D."); return; }
      say("Opening the 3D room…");
      import(new URL(BASE + "assets/studio3d.js", location.href).href).then(function (m) {
        say("");
        m.open(state.items.map(function (it) {
          var mm = it.design && it.design.size(it.opts.count);
          var s = scaleInfo(), floor = s.floor, perMm = s.perMm;
          var qh = (dist(it.quad[0], it.quad[3]) + dist(it.quad[1], it.quad[2])) / 2, bottom = (it.quad[2][1] + it.quad[3][1]) / 2;
          var h = mm ? mm[1] : Math.max(400, Math.min(2700, qh / perMm));
          return {
            label: it.label, canvas: it.canvas, w: mm ? mm[0] : h * it.aspect, h: h,
            lift: it.design && it.design.lift != null ? it.design.lift : Math.max(0, Math.min(1200, (floor - bottom) / perMm)),
            depth: { tv: 380, prayer: 420, walls: 40, wardrobes: 600 }[it.design ? it.design.cat : ""] || 300,
            x: centre(it.quad)[0], lit: isLit(it), light: lightOf(it)
          };
        }), state.lights, function (m) { setLights(m); });
      }).catch(function () { say("The 3D room couldn't open on this device."); });
    });

    var rt; addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(function () { layout(); layoutCut(); }, 120); });

    /* ---------- start ---------- */
    layout(); // size the room straight away (sample room proportions) so the page doesn't move when the photo arrives
    renderPicker();
    loadImage(ROOMS[1].src).then(function (i) {
      setPhoto(i, ROOMS[1], false);
      var first = D.list.filter(function (d) { return d.id === (root.dataset.start || "oakmarble"); })[0];
      if (first) addDesign(first);
    });
    root.classList.add("st-ready");
    // data-demo: once, a few seconds after it opens, switch the lights on to show the glow (only if untouched)
    if (root.dataset.demo && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      var touched = false; ["pointerdown", "keydown"].forEach(function (ev) { root.addEventListener(ev, function () { touched = true; }, { once: true }); });
      setTimeout(function () { if (!touched && !state.own && state.items.length) setLights("on"); }, 3200);
    }

    return {
      add: function (id) { var d = D.list.filter(function (x) { return x.id === id; })[0]; if (d) addDesign(d); },
      cut: function (src, label) { openCutter(src, label); },
      clear: function () { while (state.items.length) { state.active = 0; removeActive(); } }
    };
  }

  // Build each studio when it comes near the screen, so the first load stays light
  var api = {}, pending = [];
  window.CW_STUDIO = {
    add: function (id) { if (api.add) api.add(id); else pending.push(["add", id]); },
    cut: function (src, label) { if (api.cut) api.cut(src, label); else pending.push(["cut", src, label]); },
    clear: function () { if (api.clear) api.clear(); }
  };
  function start(node) {
    if (node.dataset.mounted) return; node.dataset.mounted = "1";
    var a = mount(node); if (!a) return;
    api = a; pending.splice(0).forEach(function (p) { a[p[0]](p[1], p[2]); });
  }
  [].forEach.call(document.querySelectorAll("[data-studio]"), function (node) {
    if (node.dataset.eager) {
      // the studio is the first thing on the page: build it once the page has loaded, when the browser is idle
      var go = function () { (window.requestIdleCallback || setTimeout)(function () { start(node); }, { timeout: 1200 }); };
      if (document.readyState === "complete") go(); else addEventListener("load", go);
      window.CW_STUDIO.add = function (id) { start(node); api.add ? api.add(id) : pending.push(["add", id]); };
      window.CW_STUDIO.cut = function (src, label) { start(node); api.cut(src, label); };
      return;
    }
    if (!("IntersectionObserver" in window)) return start(node);
    var io = new IntersectionObserver(function (es) { if (es.some(function (e) { return e.isIntersecting; })) { io.disconnect(); start(node); } }, { rootMargin: "900px 0px" });
    io.observe(node);
    window.CW_STUDIO.add = function (id) { start(node); api.add ? api.add(id) : pending.push(["add", id]); };
    window.CW_STUDIO.cut = function (src, label) { start(node); api.cut(src, label); };
  });
})();
