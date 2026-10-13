// Render every videos/*.html (or the ones named on the command line) to out/<name>.mp4.
// Frames are rendered deterministically: window.__seek(t) per frame, then a screenshot
// piped into ffmpeg. Output: 1080x1920, 30fps, H.264 + AAC voice-over (voice.py, Kokoro TTS).
//
//   node render.mjs                 # all videos
//   node render.mjs 01-auto-invoices
//   FPS=60 node render.mjs
//   VOICE=am_michael node render.mjs   # pick another Kokoro voice (default af_heart)
import { chromium } from "playwright";
import { spawn, spawnSync } from "node:child_process";
import { readdirSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const FPS = Number(process.env.FPS ?? 30);
const outDir = join(root, "out");
mkdirSync(outDir, { recursive: true });

const wanted = process.argv.slice(2);
const names = readdirSync(join(root, "videos"))
  .filter((f) => f.endsWith(".html"))
  .map((f) => f.replace(/\.html$/, ""))
  .filter((n) => !wanted.length || wanted.some((w) => n.startsWith(w)));

const browser = await chromium.launch();

async function render(name) {
  const page = await browser.newPage({ viewport: { width: 540, height: 960 }, deviceScaleFactor: 2 });
  await page.addInitScript(() => { window.__RENDER = true; });
  await page.goto(pathToFileURL(resolve(root, "videos", name + ".html")).href);
  await page.waitForFunction(() => window.__ready === true);
  const duration = await page.evaluate(() => window.E.duration);
  const frames = Math.round(duration * FPS);
  const meta = await page.evaluate(() => window.COVER_AT ?? 1.5);

  // Voice-over track (falls back to silence if the video has no voice lines).
  const lines = await page.evaluate(() => window.E.voice);
  const wav = join(outDir, name + ".voice.wav");
  const audioIn = ["-f", "lavfi", "-i", "anullsrc=channel_layout=stereo:sample_rate=44100"];
  if (lines.length) {
    const job = JSON.stringify({ duration, lines, out: wav, voice: process.env.VOICE ?? "af_heart" });
    const r = spawnSync("python3", [join(root, "voice.py")], { input: job, stdio: ["pipe", "inherit", "pipe"] });
    process.stderr.write(`${name} voice:\n${r.stderr}`);
    if (r.status) throw new Error(`voice.py failed for ${name}`);
    audioIn.splice(0, audioIn.length, "-i", wav);
  }

  const out = join(outDir, name + ".mp4");
  const ff = spawn("ffmpeg", [
    "-y", "-loglevel", "error",
    "-f", "image2pipe", "-framerate", String(FPS), "-i", "-", ...audioIn,
    "-map", "0:v", "-map", "1:a", "-t", String(duration),
    "-c:v", "libx264", "-preset", "medium", "-crf", "19", "-pix_fmt", "yuv420p", "-movflags", "+faststart",
    "-af", "highpass=f=70,acompressor=threshold=-20dB:ratio=3:attack=5:release=120,loudnorm=I=-14:TP=-1.5:LRA=11,aresample=44100",
    "-ac", "2", "-c:a", "aac", "-b:a", "160k", out,
  ], { stdio: ["pipe", "inherit", "inherit"] });
  const done = new Promise((ok, fail) => ff.on("close", (c) => (c ? fail(new Error(`ffmpeg ${c}`)) : ok())));

  const frame = page.locator("#frame");
  for (let i = 0; i < frames; i++) {
    await page.evaluate((t) => window.__seek(t), i / FPS);
    const buf = await frame.screenshot({ type: "jpeg", quality: 92 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once("drain", r));
  }
  ff.stdin.end();
  await done;

  // Cover / thumbnail image.
  await page.evaluate((t) => window.__seek(t), meta);
  await frame.screenshot({ path: join(outDir, name + "-cover.jpg"), type: "jpeg", quality: 92 });
  await page.close();
  rmSync(wav, { force: true });
  console.log(`✓ ${name}.mp4  (${duration}s, ${frames} frames)`);
}

await Promise.all(names.map(render));
await browser.close();
