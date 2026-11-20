/* Connections that used to live in Vercel (GitHub access key, email password) can be saved from the admin instead.
   They are encrypted (AES-256-GCM, key from the site secret) before they are stored, so the stored file is no use on its own.
   A saved value wins over the Vercel setting of the same name; remove it and the Vercel one is used again. The secret and the storage key stay in Vercel. */
const crypto = require('crypto');
const L = require('./_lib');

const KEYS = { github_token: 'GITHUB_TOKEN', github_repo: 'GITHUB_REPO', github_branch: 'GITHUB_BRANCH', smtp_password: 'SMTP_PASSWORD', smtp_user: 'SMTP_USER', smtp_host: 'SMTP_HOST', master_login: 'MASTER_LOGIN', feedback_to: 'FEEDBACK_TO' };
const SECRET = new Set(['github_token', 'smtp_password']);
const orig = {}; for (const e of Object.values(KEYS)) orig[e] = process.env[e];
const path = () => 'admin/s-' + L.sign('settingstore').slice(0, 32) + '.json';
const key = () => crypto.createHash('sha256').update('settings:' + (process.env.SESSION_SECRET || '')).digest();
function enc(o) { const iv = crypto.randomBytes(12), c = crypto.createCipheriv('aes-256-gcm', key(), iv), ct = Buffer.concat([c.update(JSON.stringify(o), 'utf8'), c.final()]); return Buffer.concat([iv, c.getAuthTag(), ct]).toString('base64'); }
function dec(s) { try { const b = Buffer.from(String(s), 'base64'), d = crypto.createDecipheriv('aes-256-gcm', key(), b.subarray(0, 12)); d.setAuthTag(b.subarray(12, 28)); return JSON.parse(Buffer.concat([d.update(b.subarray(28)), d.final()]).toString('utf8')); } catch (e) { return {}; } }

let cache = { t: 0, vals: {} };
function apply() { for (const [f, e] of Object.entries(KEYS)) { const v = cache.vals[f]; if (v) process.env[e] = v; else if (orig[e] === undefined) delete process.env[e]; else process.env[e] = orig[e]; } }
async function load(force) {
  if (!L.storageReady() || (!force && Date.now() - cache.t < 20000)) return;
  let vals = {}; try { const j = await L.readStore(path(), 20000); if (j && j.d) vals = dec(j.d); else if (L.storeFailing()) return; } catch (e) { /* keep what we have */ return; }
  if (L.storeFailing() && cache.t) return;
  cache = { t: Date.now(), vals }; apply();
}
async function save(patch) {
  await load(true);
  const vals = Object.assign({}, cache.vals);
  for (const [f, v] of Object.entries(patch)) { if (!KEYS[f]) continue; const t = String(v == null ? '' : v).replace(/[\u0000-\u001F]/g, '').trim().slice(0, 300); if (t) vals[f] = t; else delete vals[f]; }
  await L.writeStore(path(), { d: enc(vals), updated: new Date().toISOString() });
  cache = { t: Date.now(), vals }; apply();
}
/* What the admin shows: whether each is set and where from. Secrets show only their last four characters. */
function summary() {
  const out = {};
  for (const [f, e] of Object.entries(KEYS)) {
    const saved = cache.vals[f], v = saved || orig[e] || '';
    out[f] = { set: !!v, from: saved ? 'editor' : orig[e] ? 'vercel' : '', value: SECRET.has(f) ? '' : v, hint: SECRET.has(f) && v ? '••••' + v.slice(-4) : '' };
  }
  return out;
}
/* The AMBS master password can be changed from the admin. Once it has been, the new one (stored only as a salted hash) is used instead of the Vercel setting. */
const masterHash = () => cache.vals.master_hash || '';
async function setMasterHash(h) { await load(true); const vals = Object.assign({}, cache.vals, { master_hash: h }); await L.writeStore(path(), { d: enc(vals), updated: new Date().toISOString() }); cache = { t: Date.now(), vals }; apply(); }
/* Sign-in with just the master password (no email) can be switched off once an owner has an email login. ADMIN_MASTER_LOGIN=on in Vercel always switches it back on, in case nobody can sign in. */
const masterAllowed = () => process.env.ADMIN_MASTER_LOGIN === 'on' || process.env.MASTER_LOGIN !== 'off';
module.exports = { load, save, summary, masterHash, setMasterHash, masterAllowed, KEYS };
