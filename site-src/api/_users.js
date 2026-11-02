/* Admin users: who may sign in to /admin, and what they may do.
   owner  = AMBS. Can do everything, including adding and removing people.
   editor = the MiKia team. Can do everything on the website, but cannot manage people.
   Passwords are never stored: only a salted scrypt hash. The file name comes from the site secret so its address cannot be guessed. */
const crypto = require('crypto');
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
/* The signed cookie says who someone was when they signed in. This checks they are still allowed in now (not removed, not switched off) and takes their role from the list,
   so switching someone off or changing their role works straight away. The AMBS master login is always allowed. */
let seen = { t: 0, users: null };
async function live(me) {
  if (!me) return null;
  if (me.email === 'master' || !L.storageReady()) return me;
  if (!seen.users || Date.now() - seen.t > 8000) { try { seen = { t: Date.now(), users: await readUsers() }; } catch (e) { return me; } }
  const u = seen.users.find((x) => x.email === me.email);
  if (!u || u.disabled) return null;
  return { email: me.email, name: u.name || me.name || '', role: L.ROLE(u.role) };
}
async function readUsers() { const j = await L.readStore(path()); return j && Array.isArray(j.users) ? j.users : []; }
async function writeUsers(users) { await L.writeStore(path(), { users, updated: new Date().toISOString() }); seen = { t: 0, users: null }; }
const publicUser = (u) => ({ email: u.email, name: u.name || '', role: L.ROLE(u.role), created: u.created || '', lastLogin: u.lastLogin || '', pending: !u.hash || !!u.invite, disabled: !!u.disabled });
const cleanEmail = (v) => L.FB_CLEAN(v, 120).toLowerCase();
function passwordProblem(pw) {
  pw = String(pw || '');
  if (pw.length < 10) return 'The password must be at least 10 characters.';
  if (pw.length > 200) return 'That password is too long.';
  return '';
}

module.exports = { live, readUsers, writeUsers, hashPassword, checkPassword, publicUser, cleanEmail, passwordProblem, EMAIL };
