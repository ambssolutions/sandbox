const L = require('../_lib');
const U = require('../_users');
/* Sign in. With an email and password: a person added in the Users tab.
   With only the shared master password (no email): AMBS's way in, always available, and the way to add the first people. */
let fails = {};
module.exports = async function (req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return L.send(res, 405, { error: 'Method not allowed' }); }
  if (!L.secret()) return L.send(res, 503, { error: 'The admin password has not been set up yet.' });
  let b; try { b = await L.readJson(req, 4000); } catch (e) { return L.send(res, 413, { error: 'Request too large.' }); }
  const email = U.cleanEmail(b.email), pw = String(b.password || '');
  const key = (req.headers['x-forwarded-for'] || '') + '|' + email;
  const f = fails[key] || { n: 0, t: 0 };
  if (f.n >= 8 && Date.now() - f.t < 15 * 60000) return L.send(res, 429, { error: 'Too many tries. Please wait 15 minutes and try again.' });
  const bad = async () => {
    fails[key] = { n: (Date.now() - f.t < 15 * 60000 ? f.n : 0) + 1, t: Date.now() };
    await new Promise((r) => setTimeout(r, 700));
    return L.send(res, 401, { error: email ? 'That email or password is not right.' : 'That password is not right.' });
  };
  if (!pw) return bad();
  if (!email) {
    const master = process.env.ADMIN_PASSWORD;
    if (!master || !L.safeEq(pw, master)) return bad();
    delete fails[key];
    res.setHeader('Set-Cookie', L.sessionCookieFor({ email: 'master', name: 'AMBS master login', role: 'owner' }));
    return L.send(res, 200, { ok: true, user: { email: 'master', name: 'AMBS master login', role: 'owner' } });
  }
  const users = await U.readUsers();
  const u = users.find((x) => x.email === email);
  if (!u || !U.checkPassword(pw, u.hash)) return bad();
  delete fails[key];
  u.lastLogin = new Date().toISOString();
  try { await U.writeUsers(users); } catch (e) { /* signing in still works */ }
  res.setHeader('Set-Cookie', L.sessionCookieFor(u));
  return L.send(res, 200, { ok: true, user: U.publicUser(u) });
};
