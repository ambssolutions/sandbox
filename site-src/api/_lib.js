/* Shared helpers for the media API.
   Settings (Vercel > Project > Settings > Environment Variables):
     ADMIN_PASSWORD         the password for /admin
     SESSION_SECRET         optional, a long random string used to sign the login cookie (falls back to ADMIN_PASSWORD)
     BLOB_READ_WRITE_TOKEN  added automatically when a Blob store is connected to the project */
const crypto = require('crypto');
let storeFailAt = 0;
const blob = require('@vercel/blob');
const { del, list } = blob;
const OFF = 'Storage is switched off right now (its monthly limit has been used up), so photos, people and feedback cannot be saved until it is back. Ask AMBS.';
const put = async (...a) => { try { return await blob.put(...a); } catch (e) { if (/40[23]|suspend|limit|quota/i.test(String(e && e.message))) { storeFailAt = Date.now(); throw new Error(OFF); } throw e; } };

const MANIFEST = 'media/manifest.json';
const COOKIE = 'mk_admin';
const DAYS = 7;

const STOCK = [
  ['stock-res-1', 'New black-clad townhouses along a residential street', 'New townhouses'],
  ['stock-res-2', 'Houses scattered across a bush-covered hillside suburb', 'Hillside suburbs'],
  ['stock-res-4', 'A new modern house beside a traditional home', 'Infill housing'],
  ['stock-com-2', 'A mixed-use building with black and white cladding and large windows', 'Mixed-use frontage'],
  ['stock-com-3', 'A building clad in black metal and vertical timber battens', 'Timber and black cladding']
].map(([id, alt]) => ({ id, src: '/projects/' + id + '-1600.webp', alt, caption: '', desc: '', stock: true }));

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
/* Who is signed in.
   New logins carry a signed session with the person's email and role (owner = AMBS, manages everyone; manager = MiKia admin, can invite and remove editors; editor = MiKia team).
   The old shared-password cookie still works and counts as an owner, so the AMBS master password is always a way in. */
const SESSION = 'mk_session';
function b64u(s) { return Buffer.from(s).toString('base64url'); }
/* A sign-in lasts 30 minutes from the last time the editor was used (every request renews it), then the person has to sign in again. */
const IDLE_MIN = 30;
function makeSession(u) {
  const body = b64u(JSON.stringify({ e: u.email, n: u.name || '', r: ROLE(u.role), x: Date.now() + IDLE_MIN * 60000 }));
  return body + '.' + sign('sess' + body);
}
function currentUser(req) {
  if (!secret()) return null;
  const t = readCookie(req, SESSION), i = t.indexOf('.');
  if (i > 0) {
    const body = t.slice(0, i);
    if (safeEq(t.slice(i + 1), sign('sess' + body))) {
      try {
        const j = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
        if (Number(j.x) > Date.now() && j.e) return { email: j.e, name: j.n || '', role: ROLE(j.r) };
      } catch (e) { /* fall through */ }
    }
  }
  const o = readCookie(req, COOKIE), k = o.indexOf('.');
  if (k > 0) {
    const exp = o.slice(0, k);
    if (Number(exp) > Date.now() && safeEq(o.slice(k + 1), sign('mk' + exp))) return { email: 'master', name: 'AMBS master login', role: 'owner' };
  }
  return null;
}
function isAdmin(req) { return !!currentUser(req); }
const ROLE = (r) => (r === 'owner' || r === 'manager' ? r : 'editor');
function isOwner(req) { const u = currentUser(req); return !!u && u.role === 'owner'; }
function cookieHeader(name, value, maxAge) {
  return name + '=' + value + '; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=' + maxAge;
}
function sessionCookie() { return cookieHeader(COOKIE, makeToken(), DAYS * 86400); }
function sessionCookieFor(u) { return cookieHeader(SESSION, makeSession(u), IDLE_MIN * 60); }
function touchSession(req, res, me) { try { if (me && readCookie(req, SESSION)) res.setHeader('Set-Cookie', sessionCookieFor({ email: me.email, name: me.name, role: me.role })); } catch (e) { /* keep going */ } }
function clearCookie() { return [cookieHeader(COOKIE, '', 0), cookieHeader(SESSION, '', 0), cookieHeader(BACK, '', 0)]; }
/* "View as": an owner can open the editor as another person. The owner's own sign-in is kept here (signed, 2 hours) so they can step back. */
const BACK = 'mk_back';
function backCookieFor(u) { const body = b64u(JSON.stringify({ e: u.email, n: u.name || '', r: ROLE(u.role), x: Date.now() + 2 * 3600e3 })); return cookieHeader(BACK, body + '.' + sign('back' + body), 2 * 3600); }
function readBack(req) {
  const t = readCookie(req, BACK), i = t.indexOf('.'); if (i <= 0) return null;
  const body = t.slice(0, i); if (!safeEq(t.slice(i + 1), sign('back' + body))) return null;
  try { const j = JSON.parse(Buffer.from(body, 'base64url').toString('utf8')); if (Number(j.x) > Date.now() && j.e) return { email: j.e, name: j.n || '', role: ROLE(j.r) }; } catch (e) { /* not valid */ }
  return null;
}
const clearBack = () => cookieHeader(BACK, '', 0);

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

/* Stored lists (photos, feedback, people).
   Each save is written as a NEW file whose name carries the time, and a read takes the newest one. Files are never overwritten, so a read straight after
   a save always sees the save (an overwritten file can be served stale from the cache for a minute). Older copies are tidied away. */
const VER = /-(\d{13})\.json$/;
/* Storage can be slow or switched off (for instance when the monthly limit is used up). A good read is remembered for a short time, so most requests never ask storage at all,
   and if storage then fails the last good copy is used instead of pretending nothing is there. */
const memo = new Map();
const storeFailing = () => Date.now() - storeFailAt < 120000;
async function readStore(base, maxAgeMs) {
  const m = memo.get(base), ttl = maxAgeMs == null ? 10000 : maxAgeMs;
  if (m && Date.now() - m.t < ttl) return m.val;
  if (storeFailing() && m) return m.val;
  try {
    const l = await list({ prefix: base.replace(/\.json$/, ''), limit: 200 });
    const all = l.blobs || [];
    const vers = all.filter((x) => VER.test(x.pathname)).sort((a, b) => a.pathname < b.pathname ? 1 : -1);
    const hit = vers[0] || all.find((x) => x.pathname === base);
    if (!hit) { memo.set(base, { t: Date.now(), val: null }); storeFailAt = 0; return null; }
    const r = await fetch(hit.url);
    if (!r.ok) throw new Error('read ' + r.status);
    const val = await r.json();
    memo.set(base, { t: Date.now(), val }); storeFailAt = 0;
    return val;
  } catch (e) { storeFailAt = Date.now(); return m ? m.val : null; }
}
let lastStamp = 0;
async function writeStore(base, obj) {
  const stem = base.replace(/\.json$/, '');
  lastStamp = Math.max(Date.now(), lastStamp + 1);
  const name = stem + '-' + String(lastStamp).padStart(13, '0') + '.json';
  await put(name, JSON.stringify(obj), { access: 'public', contentType: 'application/json', allowOverwrite: false, addRandomSuffix: false, cacheControlMaxAge: 60 });
  memo.set(base, { t: Date.now(), val: obj });
  try {
    const l = await list({ prefix: stem, limit: 200 });
    const old = (l.blobs || []).filter((x) => x.pathname !== name && (VER.test(x.pathname) ? x.pathname < name : false)).sort((a, b) => a.pathname < b.pathname ? 1 : -1).slice(3);
    for (const o of old) { try { await del(o.url); } catch (e) { /* tidy-up only */ } }
  } catch (e) { /* tidy-up only */ }
}

/* Changes made outside the page editor (photos) are recorded here so they show in Changes and undo. */
const actPath = () => 'admin/a-' + sign('activitystore').slice(0, 32) + '.json';
async function readActivity() { const j = await readStore(actPath(), 3000); return j && Array.isArray(j.items) ? j.items : []; }
async function markActivity(ids, patch) {
  try {
    const items = await readActivity(); let n = 0;
    items.forEach((x) => { if (ids === 'all' || ids.includes(x.id)) { Object.assign(x, patch); n++; } });
    if (n) await writeStore(actPath(), { items, updated: new Date().toISOString() });
    return n;
  } catch (e) { return 0; }
}
async function logActivity(me, item) {
  try {
    const items = await readActivity();
    items.unshift(Object.assign({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), at: new Date().toISOString(), by: me.email, who: me.name || me.email, area: 'Photos' }, item));
    await writeStore(actPath(), { items: items.slice(0, 300), updated: new Date().toISOString() });
  } catch (e) { /* the change itself is already saved */ }
}
async function readManifest(maxAgeMs) { const j = await readStore(MANIFEST, maxAgeMs); return j && Array.isArray(j.photos) ? j.photos : null; }
async function writeManifest(photos) { await writeStore(MANIFEST, { photos, updated: new Date().toISOString() }); }
async function currentPhotos(maxAgeMs) { return (await readManifest(maxAgeMs)) || STOCK.map((p) => Object.assign({}, p)); }
function storageReady() { return !!process.env.BLOB_READ_WRITE_TOKEN; }
function publicPhoto(p) {
  /* Photos are just photos: no title or write-up is published (the picture description is only read by screen readers and Google). */
  return { id: p.id, src: p.src, alt: p.alt, caption: '', desc: '', stock: !!p.stock };
}

/* Feedback store. The store file name is derived from the secret so the (public) blob address cannot be guessed.
   Only name, project, text and status are kept here; email addresses go in the notification email only. */
const FB_CLEAN = (v, n) => String(v == null ? '' : v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, n);
function fbPath() { return 'testimonials/s-' + sign('fbstore').slice(0, 32) + '.json'; }
function approveToken(id) { return sign('approve:' + id).slice(0, 32); }
async function readFeedback(maxAgeMs) { const j = await readStore(fbPath(), maxAgeMs); return j && Array.isArray(j.items) ? j.items : []; }
async function writeFeedback(items) { await writeStore(fbPath(), { items, updated: new Date().toISOString() }); }
const esc = (t) => String(t == null ? '' : t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function origin(req) { return 'https://' + (req.headers['x-forwarded-host'] || req.headers.host || 'www.mikia.co.nz'); }
function publicFeedback(p) { return { id: p.id, name: p.name, project: p.project, text: p.text }; }

module.exports = { markActivity, readActivity, logActivity, storeFailing, touchSession, IDLE_MIN, backCookieFor, readBack, clearBack, ROLE, readStore, writeStore, currentUser, isOwner, sessionCookieFor, sign, FB_CLEAN, approveToken, readFeedback, writeFeedback, esc, origin, publicFeedback, STOCK, send, isAdmin, sessionCookie, clearCookie, safeEq, secret, readJson, readBuffer, readManifest, writeManifest, currentPhotos, storageReady, publicPhoto, put, del };
