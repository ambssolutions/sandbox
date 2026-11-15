/* The inspection bay: a real-time 3D car you can turn, with the pink slip check points pinned to it.
   Loaded only when the section is near the screen. Renders only while visible. Falls back to a photo
   and the plain list of check points if WebGL isn't available. Facts for each point live in the HTML. */
const bay = document.getElementById("bay3d");
if (bay) {
  const stage = bay.querySelector(".bay-stage");
  const pins = [...bay.querySelectorAll(".pin")];
  const keys = [...bay.querySelectorAll("[data-pt]")];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = matchMedia("(pointer: coarse)").matches;
  let started = false;

  // pick a point (works with or without WebGL)
  function pick(id, fromUser) {
    keys.forEach(k => k.setAttribute("aria-pressed", String(k.dataset.pt === id)));
    pins.forEach(p => p.classList.toggle("on", p.dataset.pt === id));
    bay.querySelectorAll(".pt-info").forEach(d => { d.hidden = d.dataset.pt !== id; });
    if (fromUser && window.__bayFace) window.__bayFace(id);
  }
  keys.forEach(k => k.addEventListener("click", () => pick(k.dataset.pt, true)));
  pins.forEach(p => p.addEventListener("click", () => pick(p.dataset.pt, true)));

  const io = new IntersectionObserver(es => {
    if (es[0].isIntersecting && !started) { started = true; start().catch(fail); }
  }, { rootMargin: "400px 0px" });
  io.observe(bay);

  function fail() {
    const im = bay.querySelector(".bay-fallback img[data-src]");
    if (im) { im.srcset = im.dataset.srcset; im.src = im.dataset.src; }
    bay.classList.add("no-gl");
  }

  async function start() {
    const test = document.createElement("canvas");
    if (!(test.getContext("webgl2") || test.getContext("webgl"))) return fail();
    const THREE = await import("./vendor/three.module.min.js");
    const { RoomEnvironment } = await import("./vendor/RoomEnvironment.js");

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, coarse ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.setAttribute("aria-hidden", "true");
    stage.prepend(renderer.domElement);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

    const camera = new THREE.PerspectiveCamera(22, 16 / 9, 0.1, 100);
    const target = new THREE.Vector3(0, 0.62, 0);

    // materials
    const paint = new THREE.MeshPhysicalMaterial({ color: 0xa3120c, metalness: 0.6, roughness: 0.32, clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 0.9 });
    const glass = new THREE.MeshPhysicalMaterial({ color: 0x0b0d10, metalness: 0.2, roughness: 0.05, clearcoat: 1, clearcoatRoughness: 0.02 });
    const trim = new THREE.MeshStandardMaterial({ color: 0x15171b, metalness: 0.3, roughness: 0.55 });
    const rubber = new THREE.MeshStandardMaterial({ color: 0x141414, metalness: 0, roughness: 0.85 });
    const alloy = new THREE.MeshStandardMaterial({ color: 0xc9ccd1, metalness: 1, roughness: 0.22 });
    const disc = new THREE.MeshStandardMaterial({ color: 0x8a8d92, metalness: 0.9, roughness: 0.42 });
    const caliper = new THREE.MeshStandardMaterial({ color: 0xf39a36, metalness: 0.3, roughness: 0.35 });
    const head = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff3dd, emissiveIntensity: 2.2 });
    const tail = new THREE.MeshStandardMaterial({ color: 0x550000, emissive: 0xff1a10, emissiveIntensity: 1.6 });

    // a smooth lofted surface: squircle cross-sections swept along the car
    const smooth = pts => x => {            // Catmull-Rom through [x, y] control points
      let i = 0; while (i < pts.length - 2 && x > pts[i + 1][0]) i++;
      const p0 = pts[Math.max(i - 1, 0)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(i + 2, pts.length - 1)];
      const t = Math.min(Math.max((x - p1[0]) / (p2[0] - p1[0]), 0), 1), t2 = t * t, t3 = t2 * t;
      return 0.5 * ((2 * p1[1]) + (-p0[1] + p2[1]) * t + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3);
    };
    function loft(x0, x1, top, bot, half, lean, nx = 180, nv = 72) {
      const pos = [], idx = [];
      for (let i = 0; i <= nx; i++) {
        const x = x0 + (x1 - x0) * i / nx, yt = top(x), yb = bot(x), hw = half(x);
        const yc = (yt + yb) / 2, hy = Math.max((yt - yb) / 2, 0.001);
        for (let j = 0; j <= nv; j++) {
          const th = -Math.PI / 2 + (j / nv) * Math.PI * 2, c = Math.cos(th), sn = Math.sin(th);
          const y = yc + hy * Math.sign(sn) * Math.pow(Math.abs(sn), 0.42);
          const k = 1 - lean * Math.min(Math.max((y - yb) / (yt - yb + 1e-6), 0), 1);
          pos.push(x, y, hw * k * Math.sign(c) * Math.pow(Math.abs(c), 0.42));
        }
      }
      for (let i = 0; i < nx; i++) for (let j = 0; j < nv; j++) {
        const a = i * (nv + 1) + j, b = a + nv + 1;
        idx.push(a, b, a + 1, b, b + 1, a + 1);
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx); geo.computeVertexNormals();
      return geo;
    }
    const L = 2.42, W = 0.93;
    const ends = (x, l, p) => Math.pow(Math.max(1 - Math.pow(Math.abs(x) / l, p), 0), 0.22);
    const arch = (x, xw) => Math.abs(x - xw) < 0.5 ? 0.36 + Math.sqrt(0.25 - (x - xw) * (x - xw)) : 0;
    const bodyTop = smooth([[-2.42, 0.5], [-2.32, 0.76], [-1.9, 0.88], [-1.2, 0.92], [0, 0.94], [1.0, 0.95], [1.75, 0.87], [2.2, 0.72], [2.42, 0.48]]);
    const bodyBot = x => Math.max(0.3 + Math.max(0, Math.abs(x) - 2.05) * 0.4, arch(x, 1.45), arch(x, -1.4));
    const car = new THREE.Group();
    scene.add(car);

    // body, glasshouse and roof
    car.add(new THREE.Mesh(loft(-L, L, bodyTop, bodyBot, x => W * ends(x, L, 6), 0.1), paint));
    const gTop = smooth([[-1.68, 0.9], [-1.25, 1.18], [-0.7, 1.33], [0.3, 1.355], [0.8, 1.22], [1.25, 0.92]]);
    car.add(new THREE.Mesh(loft(-1.68, 1.25, gTop, x => bodyTop(x) - 0.04, x => 0.8 * ends(x + 0.21, 1.47, 3), 0.3), glass));
    car.add(new THREE.Mesh(loft(-0.95, 0.5, x => gTop(x) + 0.018, x => gTop(x) - 0.05, x => 0.64 * ends(x + 0.225, 0.725, 4), 0.1, 80, 48), paint));

    // lights, grille, mirrors, sills
    for (const z of [-1, 1]) {
      const hl = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.3, 6, 16), head); hl.rotation.set(Math.PI / 2, 0, 0); hl.rotation.y = z * 0.5; hl.position.set(2.28, 0.68, z * 0.44); car.add(hl);
      const tl = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.36, 6, 16), tail); tl.rotation.set(Math.PI / 2, 0, 0); tl.rotation.y = -z * 0.45; tl.position.set(-2.3, 0.74, z * 0.42); car.add(tl);
    }
    for (const z of [-0.94, 0.94]) { const sill = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.07, 0.04), trim); sill.position.set(0.02, 0.34, z); car.add(sill); }
    const ex = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.14, 24), alloy); ex.rotation.z = Math.PI / 2; ex.position.set(-2.34, 0.33, -0.5); car.add(ex);

    // wheels with discs and orange calipers
    function wheel(x, z) {
      const w = new THREE.Group(); w.position.set(x, 0.42, z);
      const side = Math.sign(z);
      const tyre = new THREE.Mesh(new THREE.TorusGeometry(0.31, 0.12, 32, 96), rubber); tyre.scale.z = 1.25; w.add(tyre);
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.2, 64, 1, true), alloy); rim.rotation.x = Math.PI / 2; w.add(rim);
      const face = new THREE.Group(); face.position.z = side * 0.09;
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.04, 32), alloy); hub.rotation.x = Math.PI / 2; face.add(hub);
      for (let i = 0; i < 5; i++) {
        const sp = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.22, 0.03), alloy);
        sp.position.y = 0.12; const holder = new THREE.Group(); holder.rotation.z = (i / 5) * Math.PI * 2; holder.add(sp); face.add(holder);
      }
      w.add(face);
      const d = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.03, 48), disc); d.rotation.x = Math.PI / 2; d.position.z = side * 0.02; w.add(d);
      const c = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.17, 0.08), caliper); c.position.set(-0.13, 0.12, side * 0.05); c.rotation.z = 0.8; w.add(c);
      car.add(w); return face;
    }
    const faces = [wheel(1.45, 0.86), wheel(1.45, -0.86), wheel(-1.4, 0.86), wheel(-1.4, -0.86)];

    // floor, contact shadow, the light gate
    const fc = document.createElement("canvas"); fc.width = fc.height = 512;
    const fx = fc.getContext("2d"); const fg = fx.createRadialGradient(256, 256, 0, 256, 256, 256);
    fg.addColorStop(0, "rgba(46,49,56,1)"); fg.addColorStop(.35, "rgba(30,33,38,.9)"); fg.addColorStop(.7, "rgba(22,24,28,.4)"); fg.addColorStop(1, "rgba(18,20,23,0)");
    fx.fillStyle = fg; fx.fillRect(0, 0, 512, 512);
    const floorTex = new THREE.CanvasTexture(fc); floorTex.colorSpace = THREE.SRGBColorSpace;
    const floor = new THREE.Mesh(new THREE.CircleGeometry(9, 96), new THREE.MeshBasicMaterial({ map: floorTex, transparent: true, depthWrite: false }));
    floor.rotation.x = -Math.PI / 2; scene.add(floor);
    const cv = document.createElement("canvas"); cv.width = cv.height = 256;
    const cx = cv.getContext("2d"); const grd = cx.createRadialGradient(128, 128, 10, 128, 128, 128);
    grd.addColorStop(0, "rgba(0,0,0,.85)"); grd.addColorStop(.55, "rgba(0,0,0,.45)"); grd.addColorStop(1, "rgba(0,0,0,0)");
    cx.fillStyle = grd; cx.fillRect(0, 0, 256, 256);
    const shadow = new THREE.Mesh(new THREE.PlaneGeometry(5.6, 2.8), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.002; car.add(shadow);
    const gate = new THREE.Group();
    const gateMat = new THREE.MeshBasicMaterial({ color: 0xf39a36, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false });
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.012, 1.7, 0.012), gateMat);
    for (const z of [-1.25, 1.25]) { const b = bar.clone(); b.position.set(0, 0.85, z); gate.add(b); }
    const top = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.012, 2.5), gateMat); top.position.y = 1.7; gate.add(top);
    const line = new THREE.Mesh(new THREE.PlaneGeometry(0.02, 2.5), gateMat); line.rotation.x = -Math.PI / 2; line.position.y = 0.004; gate.add(line);
    car.add(gate);

    const key = new THREE.DirectionalLight(0xffffff, 1.4); key.position.set(4, 6, 3); scene.add(key);
    const rim = new THREE.DirectionalLight(0xffb469, 0.9); rim.position.set(-5, 2, -4); scene.add(rim);

    // check points: local positions on the car
    const P = {
      tyres: [1.45, 0.42, 1.0], brakes: [-1.4, 0.55, 1.0], steering: [1.0, 0.3, 0.8], lights: [2.34, 0.68, 0.44],
      windscreen: [0.8, 1.2, 0.25], seatbelts: [-0.3, 1.1, 0.7], body: [0.05, 0.62, 0.98], exhaust: [-2.36, 0.33, -0.5], lpg: [-2.0, 0.92, 0]
    };
    const pts = Object.fromEntries(Object.entries(P).map(([k, v]) => [k, new THREE.Vector3(...v)]));

    // turning: drag, gentle turntable, face a point when picked
    let yaw = 0.22, vel = 0, dragging = false, lastX = 0, aim = null, idle = 0;
    stage.addEventListener("pointerdown", e => { if (e.target.closest(".pin")) return; dragging = true; lastX = e.clientX; aim = null; stage.setPointerCapture(e.pointerId); stage.classList.add("grab"); });
    stage.addEventListener("pointermove", e => { if (!dragging) return; const dx = e.clientX - lastX; lastX = e.clientX; yaw += dx * 0.008; vel = dx * 0.008; idle = 0; });
    const up = () => { dragging = false; stage.classList.remove("grab"); };
    stage.addEventListener("pointerup", up); stage.addEventListener("pointercancel", up);
    stage.addEventListener("keydown", e => { if (e.key === "ArrowLeft") { yaw -= 0.25; idle = 0; } if (e.key === "ArrowRight") { yaw += 0.25; idle = 0; } });
    window.__bayFace = id => {
      const p = pts[id]; if (!p) return;
      const camAz = Math.atan2(camera.position.x, camera.position.z);
      const ptAz = Math.atan2(p.x, p.z);
      let t = camAz - ptAz; while (t - yaw > Math.PI) t -= Math.PI * 2; while (t - yaw < -Math.PI) t += Math.PI * 2;
      aim = t; idle = 0;
    };

    function size() {
      const w = stage.clientWidth, h = stage.clientHeight;
      renderer.setSize(w, h, false); camera.aspect = w / h;
      const far = w / h < 1.2 ? 13.2 / Math.max(w / h, 0.6) * 0.95 : 10.6;
      camera.position.set(far * 0.6, far * 0.2, far * 0.8); camera.lookAt(target); camera.updateProjectionMatrix();
    }
    size(); new ResizeObserver(size).observe(stage);

    let visible = true, raf = 0, t0 = performance.now();
    new IntersectionObserver(es => { visible = es[0].isIntersecting; if (visible && !raf) loop(); }, { threshold: 0 }).observe(stage);
    document.addEventListener("visibilitychange", () => { if (!document.hidden && visible && !raf) loop(); });

    const v = new THREE.Vector3(), camDir = new THREE.Vector3();
    function loop() {
      raf = 0; if (!visible || document.hidden) return;
      const now = performance.now(), dt = Math.min((now - t0) / 1000, 0.05); t0 = now;
      idle += dt;
      if (aim != null) { yaw += (aim - yaw) * Math.min(1, dt * 3); if (Math.abs(aim - yaw) < 0.002) aim = null; }
      else if (!dragging) { yaw += vel; vel *= 0.92; if (!reduce && idle > 2.5) yaw += dt * 0.12; }
      car.rotation.y = yaw;
      const time = now / 1000;
      gate.position.x = reduce ? 0.4 : Math.sin(time * 0.45) * 2.15;
      faces.forEach(f => { f.rotation.z = 0; });
      // pins follow their points; fade the ones on the far side
      car.updateMatrixWorld(); camera.getWorldDirection(camDir);
      const w = stage.clientWidth, h = stage.clientHeight;
      pins.forEach(pin => {
        const p = pts[pin.dataset.pt]; if (!p) return;
        v.copy(p).applyMatrix4(car.matrixWorld);
        const n = new THREE.Vector3(p.x, 0, p.z).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw).normalize();
        const facing = n.dot(new THREE.Vector3().subVectors(camera.position, v).setY(0).normalize());
        v.project(camera);
        pin.style.transform = `translate(${(v.x * 0.5 + 0.5) * w}px, ${(-v.y * 0.5 + 0.5) * h}px)`;
        pin.classList.toggle("far", facing < 0.05 && pin.dataset.pt !== "windscreen" && pin.dataset.pt !== "lpg");
      });
      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    }
    bay.classList.add("gl-on");
    loop();
  }
}
