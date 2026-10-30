const L = require('../_lib');
const U = require('../_users');
/* One endpoint for people and sign-in details.
   action: me | list (owner) | save (owner: add a person or reset their password/role) | remove (owner) | password (anyone: change their own) */
const crypto = require('crypto');
const INVITE_DAYS = 7;
const hashToken = (t) => L.sign('invite:' + t);
module.exports = async function (req, res) {
  const me = L.currentUser(req);
  /* A person opening their invitation link sets their own password. No sign-in needed; the link itself is the proof. */
  if (req.method === 'POST' && !me) {
    let b0; try { b0 = await L.readJson(req, 4000); } catch (e) { return L.send(res, 413, { error: 'Request too large.' }); }
    if (b0.action !== 'accept') return L.send(res, 401, { error: 'Please log in.' });
    if (!L.storageReady()) return L.send(res, 503, { error: 'Storage is not connected yet.' });
    const email = U.cleanEmail(b0.email), token = String(b0.token || '');
    const pr = U.passwordProblem(b0.password); if (pr) return L.send(res, 400, { error: pr });
    const users = await U.readUsers();
    const u = users.find((x) => x.email === email);
    if (!u || !u.invite || !token || !L.safeEq(hashToken(token), u.invite.h) || Date.parse(u.invite.exp) < Date.now()) {
      await new Promise((r) => setTimeout(r, 700));
      return L.send(res, 400, { error: 'This invitation link has expired or is not valid. Ask for a new one.' });
    }
    u.hash = U.hashPassword(b0.password); delete u.invite; u.lastLogin = new Date().toISOString();
    await U.writeUsers(users);
    res.setHeader('Set-Cookie', L.sessionCookieFor(u));
    return L.send(res, 200, { ok: true, user: U.publicUser(u) });
  }
  if (req.method === 'GET' || !me) return L.send(res, 200, me ? { auth: true, user: me } : { auth: false });
  if (req.method !== 'POST') { res.setHeader('Allow', 'GET, POST'); return L.send(res, 405, { error: 'Method not allowed' }); }
  if (!L.storageReady()) return L.send(res, 503, { error: 'Storage is not connected yet.' });
  let b; try { b = await L.readJson(req, 4000); } catch (e) { return L.send(res, 413, { error: 'Request too large.' }); }
  const action = String(b.action || '');
  const users = await U.readUsers();
  const owners = () => users.filter((u) => u.role === 'owner').length;

  if (action === 'password') {
    if (me.email === 'master') return L.send(res, 400, { error: 'The master password is set in Vercel (ADMIN_PASSWORD). Change it there.' });
    const u = users.find((x) => x.email === me.email);
    if (!u) return L.send(res, 404, { error: 'Your account was not found.' });
    if (!U.checkPassword(String(b.current || ''), u.hash)) return L.send(res, 400, { error: 'Your current password is not right.' });
    const pr = U.passwordProblem(b.next); if (pr) return L.send(res, 400, { error: pr });
    u.hash = U.hashPassword(b.next);
    await U.writeUsers(users);
    return L.send(res, 200, { ok: true });
  }
  if (me.role !== 'owner') return L.send(res, 403, { error: 'Only AMBS can manage people.' });
  if (action === 'invite') {
    const email = U.cleanEmail(b.email), name = L.FB_CLEAN(b.name, 80), role = b.role === 'owner' ? 'owner' : 'editor';
    if (!U.EMAIL.test(email)) return L.send(res, 400, { error: 'Please enter a valid email address.' });
    let u = users.find((x) => x.email === email);
    if (u && u.hash && !u.invite) return L.send(res, 400, { error: 'That person already has a login. Use "Reset password" to give them a new link.' });
    if (u && u.role === 'owner' && role !== 'owner' && owners() <= 1) return L.send(res, 400, { error: 'There must be at least one owner.' });
    if (!u) { u = { email, created: new Date().toISOString() }; users.push(u); }
    u.name = name || u.name || ''; u.role = role;
    const token = crypto.randomBytes(24).toString('base64url');
    u.invite = { h: hashToken(token), exp: new Date(Date.now() + INVITE_DAYS * 864e5).toISOString() };
    await U.writeUsers(users);
    return L.send(res, 200, { users: users.map(U.publicUser), link: L.origin(req) + '/admin?invite=' + token + '&email=' + encodeURIComponent(email) });
  }
  if (action === 'reset') {
    const email = U.cleanEmail(b.email);
    const u = users.find((x) => x.email === email);
    if (!u) return L.send(res, 404, { error: 'That person was not found.' });
    const token = crypto.randomBytes(24).toString('base64url');
    u.invite = { h: hashToken(token), exp: new Date(Date.now() + INVITE_DAYS * 864e5).toISOString() };
    await U.writeUsers(users);
    return L.send(res, 200, { users: users.map(U.publicUser), link: L.origin(req) + '/admin?invite=' + token + '&email=' + encodeURIComponent(email) });
  }
  if (action === 'list') return L.send(res, 200, { users: users.map(U.publicUser) });
  if (action === 'save') {
    const email = U.cleanEmail(b.email), name = L.FB_CLEAN(b.name, 80), role = b.role === 'owner' ? 'owner' : 'editor';
    if (!U.EMAIL.test(email)) return L.send(res, 400, { error: 'Please enter a valid email address.' });
    let u = users.find((x) => x.email === email);
    if (u && u.role === 'owner' && role !== 'owner' && owners() <= 1) return L.send(res, 400, { error: 'There must be at least one owner.' });
    if (!u && !b.password) return L.send(res, 400, { error: 'Please set a password for the new person.' });
    if (b.password) { const pr = U.passwordProblem(b.password); if (pr) return L.send(res, 400, { error: pr }); }
    if (!u) { u = { email, created: new Date().toISOString() }; users.push(u); }
    u.name = name || u.name || ''; u.role = role;
    if (b.password) u.hash = U.hashPassword(b.password);
    await U.writeUsers(users);
    return L.send(res, 200, { users: users.map(U.publicUser) });
  }
  if (action === 'remove') {
    const email = U.cleanEmail(b.email);
    const u = users.find((x) => x.email === email);
    if (!u) return L.send(res, 404, { error: 'That person was not found.' });
    if (u.role === 'owner' && owners() <= 1) return L.send(res, 400, { error: 'There must be at least one owner.' });
    if (email === me.email) return L.send(res, 400, { error: 'You cannot remove yourself while signed in.' });
    await U.writeUsers(users.filter((x) => x.email !== email));
    return L.send(res, 200, { users: users.filter((x) => x.email !== email).map(U.publicUser) });
  }
  return L.send(res, 400, { error: 'Unknown action.' });
};
