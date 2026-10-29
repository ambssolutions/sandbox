const L = require('../_lib');
module.exports = async function (req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return L.send(res, 405, { error: 'Method not allowed' }); }
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return L.send(res, 503, { error: 'The admin password has not been set up yet.' });
  let b; try { b = await L.readJson(req, 4000); } catch (e) { return L.send(res, 413, { error: 'Request too large.' }); }
  if (!b.password || !L.safeEq(b.password, pw)) {
    await new Promise((r) => setTimeout(r, 700));
    return L.send(res, 401, { error: 'That password is not right.' });
  }
  res.setHeader('Set-Cookie', L.sessionCookie());
  return L.send(res, 200, { ok: true });
};
