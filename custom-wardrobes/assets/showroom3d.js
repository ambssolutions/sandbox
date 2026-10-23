/* The 3D showroom (concept 06): three real builds on the back wall of a room you can look around.
   Daylight, evening (the room dark, each piece's LEDs on) or lights off. The first time it comes into
   view the room is dark, the LEDs flick on and the camera settles in front of the wall; after that it
   only moves when the visitor moves it. On touch screens the visitor taps once to take control, so the
   page still scrolls past it. Loaded only when the section is near the screen. */
import * as THREE from "./vendor/three/three.module.min.js";
import { OrbitControls } from "./vendor/three/OrbitControls.js";

const BASE = window.CW_BASE || "/";
const PIECES = [
  { src: "carved-panel", w: 1.1, h: 2.2, lift: 0.25, light: [255, 214, 160], glowSelf: true },
  { src: "prayer-unit", w: 1.3, h: 2.507, lift: 0, light: [255, 196, 120] },
  { src: "lit-tv-frame", w: 1.8, h: 2.136, lift: 0.28, light: [255, 226, 190] }
];

function planks() {
  const c = document.createElement("canvas"); c.width = 512; c.height = 512;
  const x = c.getContext("2d");
  for (let i = 0; i < 8; i++) {
    const t = 0.85 + ((i * 37) % 10) / 60;
    x.fillStyle = `rgb(${Math.round(176 * t)},${Math.round(137 * t)},${Math.round(98 * t)})`; x.fillRect(i * 64, 0, 64, 512);
    x.fillStyle = "rgba(60,40,20,.35)"; x.fillRect(i * 64, 0, 1.5, 512);
  }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(5, 4); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function slats() {
  const c = document.createElement("canvas"); c.width = 256; c.height = 64;
  const x = c.getContext("2d"); x.fillStyle = "#cfc8bd"; x.fillRect(0, 0, 256, 64);
  for (let i = 0; i < 16; i++) { x.fillStyle = "rgba(70,60,50,.28)"; x.fillRect(i * 16 + 13, 0, 3, 64); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(30, 1); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function mount(el, ui) {
  const coarse = matchMedia("(pointer: coarse)").matches;
  const renderer = new THREE.WebGLRenderer({ antialias: !coarse, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, coarse ? 1.25 : 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  el.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(46, 16 / 9, 0.05, 60);
  const roomW = 6.6, roomD = 5, roomH = 2.7;

  const wallMat = new THREE.MeshStandardMaterial({ color: 0xe9e3d9, roughness: 0.95 });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(roomW, roomD), new THREE.MeshStandardMaterial({ map: planks(), roughness: 0.75 }));
  floor.rotation.x = -Math.PI / 2; floor.position.z = roomD / 2; scene.add(floor);
  const back = new THREE.Mesh(new THREE.PlaneGeometry(roomW, roomH), new THREE.MeshStandardMaterial({ map: slats(), roughness: 0.9 }));
  back.position.set(0, roomH / 2, 0); scene.add(back);
  for (const s of [-1, 1]) {
    const side = new THREE.Mesh(new THREE.PlaneGeometry(roomD, roomH), wallMat);
    side.rotation.y = -s * Math.PI / 2; side.position.set(s * roomW / 2, roomH / 2, roomD / 2); scene.add(side);
  }
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(roomW, roomD), new THREE.MeshStandardMaterial({ color: 0xf4f1ec, roughness: 1 }));
  ceil.rotation.x = Math.PI / 2; ceil.position.set(0, roomH, roomD / 2); scene.add(ceil);

  const hemi = new THREE.HemisphereLight(0xfff8ee, 0xb8a080, 1.15); scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff3e0, 1.3); sun.position.set(3, 3.2, 4); scene.add(sun);

  const loader = new THREE.TextureLoader(), lamps = [], fronts = [];
  const gap = 0.45, total = PIECES.reduce((s, p) => s + p.w, 0) + gap * (PIECES.length - 1);
  let x = -total / 2, pending = PIECES.length * 2;
  const loaded = () => { if (--pending <= 0) { el.classList.add("ready"); draw(); } };
  PIECES.forEach(p => {
    const day = loader.load(BASE + "assets/img/designs/" + p.src + ".webp", loaded);
    const eve = p.glowSelf ? day : loader.load(BASE + "assets/img/designs/" + p.src + "-night.webp", loaded);
    if (p.glowSelf) loaded();
    [day, eve].forEach(t => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; });
    const d = 0.06, edge = new THREE.MeshStandardMaterial({ color: 0x2a241f, roughness: 0.6 });
    const front = new THREE.MeshStandardMaterial({ map: day, roughness: 0.8, emissive: new THREE.Color(...p.light.map(v => v / 255)), emissiveMap: eve, emissiveIntensity: 0 });
    const box = new THREE.Mesh(new THREE.BoxGeometry(p.w, p.h, d), [edge, edge, edge, edge, front, edge]);
    box.position.set(x + p.w / 2, p.lift + p.h / 2, d / 2 + 0.02); scene.add(box);
    front.userData = { day, eve, glowSelf: !!p.glowSelf };
    fronts.push(front);
    const col = new THREE.Color(...p.light.map(v => v / 255));
    for (const [lx, ly] of [[0, 0.5], [-0.5, 0.5], [0.5, 0.5], [0, 0], [0, 1]]) {
      const l = new THREE.PointLight(col, 0, Math.max(1.1, p.h * 0.7), 2);
      l.position.set(x + p.w / 2 + lx * p.w * 0.95, p.lift + ly * p.h * 0.95 + (1 - ly) * 0.04, 0.02);
      l.userData.k = lx === 0 && ly === 0.5 ? 0.5 : 1; scene.add(l); lamps.push(l);
    }
    const under = new THREE.PointLight(col, 0, 1.8, 1.6); under.position.set(x + p.w / 2, Math.max(0.05, p.lift - 0.04), 0.3);
    under.userData.k = p.lift > 0.1 ? 1.2 : 0.6; scene.add(under); lamps.push(under);
    x += p.w + gap;
  });

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 1.25, 0.2);
  controls.minDistance = 1.4; controls.maxDistance = roomD + 0.6;
  controls.minPolarAngle = Math.PI * 0.25; controls.maxPolarAngle = Math.PI * 0.53;
  controls.minAzimuthAngle = -Math.PI * 0.4; controls.maxAzimuthAngle = Math.PI * 0.4;
  controls.enablePan = false; controls.enableZoom = true;
  const front = new THREE.Vector3(0, 1.45, roomD - 0.4);
  camera.position.copy(front);
  if (coarse) controls.enabled = false;

  let mode = "day";
  function setMode(m) {
    mode = m;
    const day = m === "day", eve = m === "evening";
    hemi.intensity = day ? 1.15 : eve ? 0.05 : 0.02; sun.intensity = day ? 1.3 : 0;
    scene.background = new THREE.Color(day ? 0xf2efe9 : 0x050403);
    lamps.forEach(l => { l.intensity = eve ? 0.7 * l.userData.k : 0; });
    fronts.forEach(f => { f.emissiveIntensity = eve ? (f.userData.glowSelf ? 0.42 : 0.9) : 0; f.color.set(eve ? 0x3a342e : m === "off" ? 0x141210 : 0xffffff); });
    renderer.toneMappingExposure = day ? 1 : 1.05;
    if (ui) ui.forEach(b => b.setAttribute("aria-pressed", b.dataset.mode === m ? "true" : "false"));
    draw();
  }

  function size() {
    const r = el.getBoundingClientRect();
    renderer.setSize(r.width, r.height, false);
    camera.aspect = r.width / Math.max(1, r.height);
    camera.fov = camera.aspect < 1 ? 62 : 46; camera.updateProjectionMatrix(); draw();
  }
  let raf = 0;
  function draw() { if (!raf) raf = requestAnimationFrame(() => { raf = 0; controls.update(); renderer.render(scene, camera); }); }
  controls.addEventListener("change", draw);
  addEventListener("resize", size);
  if (ui) ui.forEach(b => b.addEventListener("click", () => setMode(b.dataset.mode)));

  // the first time it is on screen: dark, then the LEDs flick on and the camera settles in front of the wall
  function intro() {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setMode("evening"); return; }
    setMode("off");
    const from = new THREE.Vector3(2.6, 1.7, roomD - 1.2), t0 = performance.now(), dur = 2200;
    camera.position.copy(from);
    const flick = [[260, "evening"], [330, "off"], [420, "evening"]];
    flick.forEach(([ms, m]) => setTimeout(() => setMode(m), ms));
    (function step(now) {
      const t = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - t, 3);
      camera.position.lerpVectors(from, front, e); controls.update(); renderer.render(scene, camera);
      if (t < 1) requestAnimationFrame(step);
    })(t0);
  }

  size(); setMode("day");
  return {
    intro,
    setMode,
    enableTouch(on) { controls.enabled = on; el.classList.toggle("live", on); },
    dispose() { removeEventListener("resize", size); controls.dispose(); renderer.dispose(); }
  };
}
