/* The room studio in 3D. Loaded only when someone taps "View in 3D".
   Each piece becomes a block the right size and depth, with its front showing the same picture as
   in the studio (a real build, a drawn design or a cut-out). Drag to look around, pinch or scroll to
   move closer. Daylight, lights on (the pieces glow and light the wall and floor) or lights off.
   Nothing moves on its own: the scene only redraws when the visitor moves it. */
import * as THREE from "./vendor/three/three.module.min.js";
import { OrbitControls } from "./vendor/three/OrbitControls.js";

let dlg = null, renderer = null;

function edgeColour(canvas) {
  // average colour of a piece's outer edge, for its sides
  const c = document.createElement("canvas"); c.width = 16; c.height = 16;
  const x = c.getContext("2d"); x.drawImage(canvas, 0, 0, 16, 16);
  const d = x.getImageData(0, 0, 16, 16).data; let r = 0, g = 0, b = 0, n = 0;
  for (let i = 0; i < 16; i++) for (const [px, py] of [[i, 0], [i, 15], [0, i], [15, i]]) { const j = (py * 16 + px) * 4; r += d[j]; g += d[j + 1]; b += d[j + 2]; n++; }
  return new THREE.Color(r / n / 255, g / n / 255, b / n / 255);
}

function planks() {
  const c = document.createElement("canvas"); c.width = 512; c.height = 512;
  const x = c.getContext("2d");
  for (let i = 0; i < 8; i++) {
    const t = 0.85 + ((i * 37) % 10) / 60;
    x.fillStyle = `rgb(${Math.round(176 * t)},${Math.round(137 * t)},${Math.round(98 * t)})`; x.fillRect(i * 64, 0, 64, 512);
    x.fillStyle = "rgba(60,40,20,.35)"; x.fillRect(i * 64, 0, 1.5, 512);
    for (let k = 0; k < 30; k++) { x.fillStyle = `rgba(80,55,30,${0.04 + (k % 5) / 60})`; x.fillRect(i * 64 + ((k * 13) % 60), 0, 1, 512); }
  }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(4, 4); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function open(items, mode, onMode) {
  if (dlg) dlg.remove();
  dlg = document.createElement("div");
  dlg.className = "st3d"; dlg.setAttribute("role", "dialog"); dlg.setAttribute("aria-modal", "true"); dlg.setAttribute("aria-label", "Your pieces in 3D");
  dlg.innerHTML =
    '<div class="st3d-top"><div><h2>Your pieces in 3D</h2><p>Drag to look around. Pinch or scroll to move closer.</p></div>' +
    '<div class="st3d-ctl"><div class="st-lights" role="group" aria-label="Lighting">' +
    '<button type="button" data-l="day">Daylight</button><button type="button" data-l="on">Lights on</button><button type="button" data-l="off">Lights off</button></div>' +
    '<button type="button" class="st3d-close" aria-label="Close the 3D view">&times;</button></div></div><div class="st3d-stage"></div>' +
    '<p class="st3d-note">A guide to size and style, in a sample room. Sizes and finishes are confirmed in person.</p>';
  document.body.appendChild(dlg);
  document.documentElement.classList.add("st-locked");
  const stage = dlg.querySelector(".st3d-stage");

  renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  stage.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.05, 50);

  // lay the pieces along the back wall in the order they sit in the photo, at their real sizes
  const mm = 0.001, gap = 0.25;
  const sorted = items.map((it, i) => ({ ...it, i })).sort((a, b) => a.x - b.x);
  const total = sorted.reduce((s, it) => s + it.w * mm, 0) + gap * Math.max(0, sorted.length - 1);
  const roomW = Math.max(5, total + 1.6), roomD = 4.6, roomH = 2.7;

  // room
  const wallMat = new THREE.MeshStandardMaterial({ color: 0xe8e2d8, roughness: 0.95 });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(roomW, roomD), new THREE.MeshStandardMaterial({ map: planks(), roughness: 0.8 }));
  floor.rotation.x = -Math.PI / 2; floor.position.z = roomD / 2; floor.receiveShadow = true; scene.add(floor);
  const back = new THREE.Mesh(new THREE.PlaneGeometry(roomW, roomH), wallMat); back.position.set(0, roomH / 2, 0); back.receiveShadow = true; scene.add(back);
  for (const s of [-1, 1]) {
    const side = new THREE.Mesh(new THREE.PlaneGeometry(roomD, roomH), wallMat);
    side.rotation.y = -s * Math.PI / 2; side.position.set(s * roomW / 2, roomH / 2, roomD / 2); side.receiveShadow = true; scene.add(side);
  }
  const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(roomW, roomD), new THREE.MeshStandardMaterial({ color: 0xf4f1ec, roughness: 1 }));
  ceiling.rotation.x = Math.PI / 2; ceiling.position.set(0, roomH, roomD / 2); scene.add(ceiling);
  const skirting = new THREE.Mesh(new THREE.BoxGeometry(roomW, 0.09, 0.015), new THREE.MeshStandardMaterial({ color: 0xf6f4ef }));
  skirting.position.set(0, 0.045, 0.008); scene.add(skirting);

  // lights for daylight
  const hemi = new THREE.HemisphereLight(0xfff8ee, 0xb8a080, 1.1); scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff3e0, 1.6); sun.position.set(roomW / 2 + 1, 3.4, 3.6); sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024); Object.assign(sun.shadow.camera, { left: -roomW, right: roomW, top: 4, bottom: -1, near: 0.5, far: 14 }); sun.shadow.bias = -0.0004;
  scene.add(sun);

  // pieces
  const lamps = [], glows = [];
  let x = -total / 2;
  sorted.forEach(it => {
    const w = it.w * mm, h = Math.min(roomH - 0.02, it.h * mm), d = Math.max(0.02, it.depth * mm), y = Math.min(roomH - h, it.lift * mm);
    const tex = new THREE.CanvasTexture(it.canvas); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    const sideMat = new THREE.MeshStandardMaterial({ color: edgeColour(it.canvas), roughness: 0.7 });
    const front = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.85, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0 });
    const box = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [sideMat, sideMat, sideMat, sideMat, front, sideMat]);
    box.position.set(x + w / 2, y + h / 2, d / 2); box.castShadow = true; box.receiveShadow = true; scene.add(box);
    if (it.lit) {
      const [r, g, b] = it.light.split(",").map(n => +n / 255);
      // backlight: lamps tucked between the piece and the wall, so the light haloes onto the wall around its edges
      for (const [lx, ly] of [[0, 0.5], [-0.5, 0.5], [0.5, 0.5], [0, 0], [0, 1]]) {
        const lamp = new THREE.PointLight(new THREE.Color(r, g, b), 0, Math.max(1.2, Math.max(w, h) * 0.9), 2);
        lamp.position.set(x + w / 2 + lx * w * 0.9, y + ly * h * 0.9 + (1 - ly) * 0.05, 0.03); lamp.userData.k = lx === 0 && ly === 0.5 ? 0.6 : 1; scene.add(lamp); lamps.push(lamp);
      }
      if (y > 0.05) { const under = new THREE.PointLight(new THREE.Color(r, g, b), 0, 1.6, 1.8); under.position.set(x + w / 2, Math.max(0.05, y - 0.05), d / 2); scene.add(under); lamps.push(under); }
      glows.push(front);
    }
    x += w + gap;
  });

  // camera: standing in the room, looking at the wall
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 1.2, 0.3);
  camera.position.set(0.6, 1.55, roomD - 0.6);
  controls.minDistance = 1; controls.maxDistance = roomD + 1.5;
  controls.minPolarAngle = Math.PI * 0.2; controls.maxPolarAngle = Math.PI * 0.53;
  controls.minAzimuthAngle = -Math.PI * 0.42; controls.maxAzimuthAngle = Math.PI * 0.42;
  controls.enableDamping = false; controls.screenSpacePanning = true;

  function setMode(m) {
    mode = m;
    [].forEach.call(dlg.querySelectorAll(".st-lights button"), b => b.setAttribute("aria-pressed", b.dataset.l === m ? "true" : "false"));
    const day = m === "day";
    hemi.intensity = day ? 1.1 : 0.12; sun.intensity = day ? 1.6 : 0;
    scene.background = new THREE.Color(day ? 0xf2efe9 : 0x07070a);
    lamps.forEach(l => { l.intensity = m === "on" ? 1.6 * (l.userData.k || 1) : 0; });
    glows.forEach(f => { f.emissiveIntensity = m === "on" ? 0.75 : 0; });
    renderer.toneMappingExposure = day ? 1 : 1.15;
    draw();
  }
  function size() { const r = stage.getBoundingClientRect(); renderer.setSize(r.width, r.height, false); camera.aspect = r.width / Math.max(1, r.height); camera.updateProjectionMatrix(); draw(); }
  let raf = 0;
  function draw() { if (!raf) raf = requestAnimationFrame(() => { raf = 0; controls.update(); renderer.render(scene, camera); }); }
  controls.addEventListener("change", draw);

  [].forEach.call(dlg.querySelectorAll(".st-lights button"), b => b.addEventListener("click", () => { setMode(b.dataset.l); if (onMode) onMode(b.dataset.l); }));
  function close() {
    removeEventListener("resize", size); controls.dispose(); renderer.dispose();
    scene.traverse(o => { if (o.geometry) o.geometry.dispose(); [].concat(o.material || []).forEach(m => { if (m.map) m.map.dispose(); m.dispose(); }); });
    dlg.remove(); dlg = null; document.documentElement.classList.remove("st-locked");
  }
  dlg.querySelector(".st3d-close").addEventListener("click", close);
  dlg.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  addEventListener("resize", size);
  size(); setMode(mode || "day");
  dlg.querySelector(".st3d-close").focus();
  return { close };
}
