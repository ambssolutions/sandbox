/* Admin users: who may sign in to /admin, and what they may do.
   owner  = AMBS. Can do everything, including adding and removing people.
   editor = the MiKia team. Can do everything on the website, but cannot manage people.
   Passwords are never stored: only a salted scrypt hash. The file name comes from the site secret so its address cannot be guessed. */
const crypto = require('crypto');
const { put, list } = require('@vercel/blob');
const L = require('./_lib');

const path = () => 'admin/u-' + L.sign('userstore').slice(0, 32) + '.json';
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function hashPassword(pw) {
  const salt = crypto.randomBytes(16);
  const h = crypto.scryptSync(String(pw), salt, 32, { N: 16384, r: 8, p: 1 });
  return 's1$' + salt.toString('hex') + '$' + h.toString('hex');
}
function checkPassword(pw, stored) {
  const p = String(stored || '').split('$');
  if (p[0] !== 's1' || p.length !== 3) return false;
  const h = crypto.scryptSync(String(pw), Buffer.from(p[1], 'hex'), 32, { N: 16384, r: 8, p: 1 });
  return L.safeEq(h.toString('hex'), p[2]);
}
async function readUsers() {
  try {
    const l = await list({ prefix: path(), limit: 5 });
    const b = (l.blobs || []).find((x) => x.pathname === path());
    if (!b) return [];
    const r = await fetch(b.url + '?t=' + Date.now());
    if (!r.ok) return [];
    const j = await r.json();
    return Array.isArray(j.users) ? j.users : [];
  } catch (e) { return []; }
}
async function writeUsers(users) {
  await put(path(), JSON.stringify({ users, updated: new Date().toISOString() }), {
    access: 'public', contentType: 'application/json', allowOverwrite: true, addRandomSuffix: false, cacheControlMaxAge: 5
  });
}
const publicUser = (u) => ({ email: u.email, name: u.name || '', role: u.role === 'owner' ? 'owner' : 'editor', created: u.created || '', lastLogin: u.lastLogin || '' });
const cleanEmail = (v) => L.FB_CLEAN(v, 120).toLowerCase();
function passwordProblem(pw) {
  pw = String(pw || '');
  if (pw.length < 10) return 'The password must be at least 10 characters.';
  if (pw.length > 200) return 'That password is too long.';
  return '';
}

module.exports = { readUsers, writeUsers, hashPassword, checkPassword, publicUser, cleanEmail, passwordProblem, EMAIL };
