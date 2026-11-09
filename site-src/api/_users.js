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
/* Sections an editor can be given. Owners and MiKia admins always have all of them; an editor with no list saved (added before this existed) has all too. */
const SECTIONS = ['pages', 'photos', 'details', 'feedback', 'changes'];
const cleanAccess = (a) => (Array.isArray(a) ? SECTIONS.filter((x) => a.includes(x)) : SECTIONS.slice());
const accessOf = (u) => (L.ROLE(u.role) !== 'editor' ? SECTIONS.slice() : Array.isArray(u.access) ? cleanAccess(u.access) : SECTIONS.slice());
const can = (me, sec) => !!me && (me.email === 'master' || me.role === 'owner' || me.role === 'manager' || (Array.isArray(me.access) && me.access.includes(sec)));
let seen = { t: 0, users: null };
async function live(me) {
  if (!me) return null;
  if (me.email === 'master' || !L.storageReady()) return Object.assign({}, me, { access: SECTIONS.slice(), super: me.email === 'master' });
  if (!seen.users || Date.now() - seen.t > 8000) { try { seen = { t: Date.now(), users: await readUsers() }; } catch (e) { return me; } }
  const u = seen.users.find((x) => x.email === me.email);
  if (!u || u.disabled) return null;
  /* "Last active": noted at most once every 15 minutes while someone uses the editor, so the People list shows people who are still signed in from an earlier visit. */
  if (!u.lastSeen || Date.now() - Date.parse(u.lastSeen) > 15 * 60000) {
    try { const fresh = await readUsers(), f = fresh.find((x) => x.email === me.email); if (f) { f.lastSeen = new Date().toISOString(); await writeUsers(fresh); } } catch (e) { /* only a note for the People list */ }
  }
  return { email: me.email, name: u.name || me.name || '', role: L.ROLE(u.role), access: accessOf(u), super: L.ROLE(u.role) === 'owner' && !!u.super };
}
/* The AMBS address is always the owner and super admin, so the website can never be left without one. It still has to sign in with its own password. */
const ALWAYS_SUPER = ['hello@ambs.co.nz'];
async function readUsers() {
  const j = await L.readStore(path());
  const users = j && Array.isArray(j.users) ? j.users : [];
  users.forEach((u) => { if (ALWAYS_SUPER.includes(String(u.email || '').toLowerCase())) { u.role = 'owner'; u.super = true; } });
  return users;
}
async function writeUsers(users) { await L.writeStore(path(), { users, updated: new Date().toISOString() }); seen = { t: 0, users: null }; }
const publicUser = (u) => ({ email: u.email, name: u.name || '', role: L.ROLE(u.role), created: u.created || '', lastLogin: u.lastLogin || '', lastSeen: u.lastSeen || '', pending: !u.hash || !!u.invite, disabled: !!u.disabled, access: accessOf(u), super: L.ROLE(u.role) === 'owner' && !!u.super });
const cleanEmail = (v) => L.FB_CLEAN(v, 120).toLowerCase();
function passwordProblem(pw) {
  pw = String(pw || '');
  if (pw.length < 10) return 'The password must be at least 10 characters.';
  if (pw.length > 200) return 'That password is too long.';
  return '';
}

const masterPath = () => 'admin/m-' + L.sign('masterlogin').slice(0, 32) + '.json';
module.exports = { masterPath, SECTIONS, cleanAccess, accessOf, can, live, readUsers, writeUsers, hashPassword, checkPassword, publicUser, cleanEmail, passwordProblem, EMAIL };
