/* Shared helpers for the media API.
   Settings (Vercel > Project > Settings > Environment Variables):
     ADMIN_PASSWORD         the password for /admin
     SESSION_SECRET         optional, a long random string used to sign the login cookie (falls back to ADMIN_PASSWORD)
     BLOB_READ_WRITE_TOKEN  added automatically when a Blob store is connected to the project */
const crypto = require('crypto');
const { put, del, list } = require('@vercel/blob');

const MANIFEST = 'media/manifest.json';
const COOKIE = 'mk_admin';
const DAYS = 7;

const STOCK = [
  ['stock-res-1', 'New black-clad townhouses along a residential street', 'New townhouses'],
  ['stock-res-2', 'Houses scattered across a bush-covered hillside suburb', 'Hillside suburbs'],
  ['stock-res-3', 'A blue weatherboard home with white trim and a timber door', 'Weatherboard homes'],
  ['stock-res-4', 'A new modern house beside a traditional home', 'Infill housing'],
  ['stock-res-5', 'A low modern house among dunes with pine trees behind', 'Modern homes in the landscape'],
  ['stock-com-2', 'A mixed-use building with black and white cladding and large windows', 'Mixed-use frontage'],
  ['stock-com-3', 'A building clad in black metal and vertical timber battens', 'Timber and black cladding'],
  ['stock-com-4', 'A dark angular apartment building with balconies', 'Apartments'],
  ['stock-com-5', 'An apartment building clad in copper-toned panels', 'Cladding and balconies']
].map(([id, alt, caption]) => ({ id, src: '/projects/' + id + '-1600.webp', alt, caption, stock: true }));

function send(res, code, obj) {
  res.statusCode = code;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(obj));
}

function secret() { return process.env.SESSION_SECRET || process.env.ADMIN_PASSWORD || ''; }
function sign(v) { return crypto.createHmac('sha256', secret()).update(v).digest('hex'); }
function safeEq(a, b) {
  const x = Buffer.from(String(a)), y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}
function makeToken() { const exp = String(Date.now() + DAYS * 864e5); return exp + '.' + sign('mk' + exp); }
function readCookie(req, name) {
  const m = String(req.headers.cookie || '').split(/;\s*/).map((s) => s.split('=')).find((p) => p[0] === name);
  return m ? m.slice(1).join('=') : '';
}
function isAdmin(req) {
  if (!secret()) return false;
  const t = readCookie(req, COOKIE), i = t.indexOf('.');
  if (i < 1) return false;
  const exp = t.slice(0, i);
  return Number(exp) > Date.now() && safeEq(t.slice(i + 1), sign('mk' + exp));
}
function cookieHeader(value, maxAge) {
  return COOKIE + '=' + value + '; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=' + maxAge;
}
function sessionCookie() { return cookieHeader(makeToken(), DAYS * 86400); }
function clearCookie() { return cookieHeader('', 0); }

async function readJson(req, limit) {
  const chunks = []; let n = 0;
  for await (const c of req) { n += c.length; if (n > (limit || 20000)) throw new Error('too large'); chunks.push(c); }
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}'); } catch (e) { return {}; }
}
async function readBuffer(req, limit) {
  const chunks = []; let n = 0;
  for await (const c of req) { n += c.length; if (n > limit) { const e = new Error('too large'); e.code = 'TOO_LARGE'; throw e; } chunks.push(c); }
  return Buffer.concat(chunks);
}

async function readManifest() {
  try {
    const l = await list({ prefix: MANIFEST, limit: 5 });
    const b = (l.blobs || []).find((x) => x.pathname === MANIFEST);
    if (!b) return null;
    const r = await fetch(b.url + '?t=' + Date.now());
    if (!r.ok) return null;
    const j = await r.json();
    return Array.isArray(j.photos) ? j.photos : null;
  } catch (e) { return null; }
}
async function writeManifest(photos) {
  await put(MANIFEST, JSON.stringify({ photos, updated: new Date().toISOString() }), {
    access: 'public', contentType: 'application/json', allowOverwrite: true, addRandomSuffix: false, cacheControlMaxAge: 30
  });
}
async function currentPhotos() { return (await readManifest()) || STOCK.map((p) => Object.assign({}, p)); }
function storageReady() { return !!process.env.BLOB_READ_WRITE_TOKEN; }
function publicPhoto(p) { return { id: p.id, src: p.src, alt: p.alt, caption: p.caption, stock: !!p.stock }; }

/* Feedback store. The store file name is derived from the secret so the (public) blob address cannot be guessed.
   Only name, project, text and status are kept here; email addresses go in the notification email only. */
const FB_CLEAN = (v, n) => String(v == null ? '' : v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, n);
function fbPath() { return 'testimonials/s-' + sign('fbstore').slice(0, 32) + '.json'; }
function approveToken(id) { return sign('approve:' + id).slice(0, 32); }
async function readFeedback() {
  try {
    const l = await list({ prefix: fbPath(), limit: 5 });
    const b = (l.blobs || []).find((x) => x.pathname === fbPath());
    if (!b) return [];
    const r = await fetch(b.url + '?t=' + Date.now());
    if (!r.ok) return [];
    const j = await r.json();
    return Array.isArray(j.items) ? j.items : [];
  } catch (e) { return []; }
}
async function writeFeedback(items) {
  await put(fbPath(), JSON.stringify({ items, updated: new Date().toISOString() }), {
    access: 'public', contentType: 'application/json', allowOverwrite: true, addRandomSuffix: false, cacheControlMaxAge: 30
  });
}
const esc = (t) => String(t == null ? '' : t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function origin(req) { return 'https://' + (req.headers['x-forwarded-host'] || req.headers.host || 'www.mikia.co.nz'); }
function publicFeedback(p) { return { id: p.id, name: p.name, project: p.project, text: p.text }; }

module.exports = { FB_CLEAN, approveToken, readFeedback, writeFeedback, esc, origin, publicFeedback, STOCK, send, isAdmin, sessionCookie, clearCookie, safeEq, secret, readJson, readBuffer, readManifest, writeManifest, currentPhotos, storageReady, publicPhoto, put, del };
