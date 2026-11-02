const L = require('../_lib');
const U = require('../_users');
const M = require('../_mail');
const S = require('../_settings');
/* One endpoint for people and sign-in details.
   action: me | list | invite | reset | remove (owner; a manager only for editors) | save (owner: set a password or role) | password (anyone: change their own) */
const crypto = require('crypto');
const INVITE_DAYS = 7;
const hashToken = (t) => L.sign('invite:' + t);
module.exports = async function (req, res) {
  const me = await U.live(L.currentUser(req));
  /* A person opening their invitation link sets their own password. No sign-in needed; the link itself is the proof. */
  if (req.method === 'POST' && !me) {
    let b0; try { b0 = await L.readJson(req, 4000); } catch (e) { return L.send(res, 413, { error: 'Request too large.' }); }
    if (b0.action !== 'accept') return L.send(res, 401, { error: 'Please log in.' });
    if (!L.storageReady()) return L.send(res, 503, { error: 'Storage is not connected yet.' });
    const email = U.cleanEmail(b0.email), token = String(b0.token || '');
    const pr = U.passwordProblem(b0.password); if (pr) return L.send(res, 400, { error: pr });
    const users = await U.readUsers();
    const u = users.find((x) => x.email === email);
    if (!u || u.disabled || !u.invite || !token || !L.safeEq(hashToken(token), u.invite.h) || Date.parse(u.invite.exp) < Date.now()) {
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
  await S.load();
  if (/^(settings|savesettings|testgithub|testmail)$/.test(action)) {
    if (me.role !== 'owner') return L.send(res, 403, { error: 'Only AMBS can change connections.' });
    if (action === 'settings') return L.send(res, 200, { settings: S.summary() });
    if (action === 'savesettings') {
      const patch = {}; for (const k of Object.keys(S.KEYS)) if (Object.prototype.hasOwnProperty.call(b.values || {}, k)) patch[k] = b.values[k];
      await S.save(patch);
      return L.send(res, 200, { settings: S.summary() });
    }
    if (action === 'testgithub') {
      const tok = process.env.GITHUB_TOKEN, repo = process.env.GITHUB_REPO || 'ambssolutions/mikia';
      if (!tok) return L.send(res, 200, { ok: false, note: 'No GitHub access key has been saved yet.' });
      try {
        const r = await fetch('https://api.github.com/repos/' + repo, { headers: { Authorization: 'Bearer ' + tok, Accept: 'application/vnd.github+json', 'User-Agent': 'mikia-site-editor' } });
        const j = await r.json().catch(() => ({}));
        if (r.status === 401) return L.send(res, 200, { ok: false, note: 'GitHub did not accept this key. It may be wrong or expired.' });
        if (r.status === 404) return L.send(res, 200, { ok: false, note: 'This key cannot see ' + repo + '. Check the repository name and that the key was given to that repository.' });
        if (!r.ok) return L.send(res, 200, { ok: false, note: 'GitHub said: ' + (j.message || r.status) });
        if (j.permissions && !j.permissions.push) return L.send(res, 200, { ok: false, note: 'The key can read ' + repo + ' but cannot change it. Give it "Contents: Read and write".' });
        return L.send(res, 200, { ok: true, note: 'Connected to ' + repo + '. The editor can publish.' });
      } catch (e) { return L.send(res, 200, { ok: false, note: 'Could not reach GitHub just now. Try again in a moment.' }); }
    }
    if (action === 'testmail') {
      const to = U.cleanEmail(b.to) || (me.email !== 'master' ? me.email : '');
      if (!M.configured()) return L.send(res, 200, { ok: false, note: 'No email password has been saved yet.' });
      if (!U.EMAIL.test(to)) return L.send(res, 200, { ok: false, note: 'Type the email address to send the test to.' });
      try { await M.send({ to, subject: 'MiKia website: test email', text: 'This is a test from the MiKia website admin. Email is connected.' }); return L.send(res, 200, { ok: true, note: 'Test email sent to ' + to + '.' }); }
      catch (e) { return L.send(res, 200, { ok: false, note: 'The mailbox did not accept it. Check the email password (use a Zoho app password).' }); }
    }
  }
  const users = await U.readUsers();
  const owners = () => users.filter((u) => u.role === 'owner').length;

  if (action === 'password') {
    if (me.email === 'master') {
      const mh = S.masterHash(), env = process.env.ADMIN_PASSWORD, cur = String(b.current || '');
      if (!(mh ? U.checkPassword(cur, mh) : (env && L.safeEq(cur, env)))) return L.send(res, 400, { error: 'Your current password is not right.' });
      const pr0 = U.passwordProblem(b.next); if (pr0) return L.send(res, 400, { error: pr0 });
      await S.setMasterHash(U.hashPassword(b.next));
      return L.send(res, 200, { ok: true });
    }
    const u = users.find((x) => x.email === me.email);
    if (!u) return L.send(res, 404, { error: 'Your account was not found.' });
    if (!U.checkPassword(String(b.current || ''), u.hash)) return L.send(res, 400, { error: 'Your current password is not right.' });
    const pr = U.passwordProblem(b.next); if (pr) return L.send(res, 400, { error: pr });
    u.hash = U.hashPassword(b.next);
    await U.writeUsers(users);
    return L.send(res, 200, { ok: true });
  }
  if (me.role !== 'owner' && me.role !== 'manager') return L.send(res, 403, { error: 'You can not manage people. Ask the person who looks after the website.' });
  const mgr = me.role === 'manager';
  /* A MiKia admin (manager) can invite, reset and remove editors only. Everything else stays with AMBS. */
  const target = (email) => users.find((x) => x.email === email);
  const editorOnly = (email) => { const t = target(email); return !t || L.ROLE(t.role) === 'editor'; };
  if (mgr && !['invite', 'reset', 'list', 'remove', 'disable'].includes(action)) return L.send(res, 403, { error: 'Only AMBS can do that.' });
  if (mgr && action !== 'list' && action !== 'invite' && !editorOnly(U.cleanEmail(b.email))) return L.send(res, 403, { error: 'Only AMBS can change that person.' });
  const view = () => users.filter((x) => !mgr || L.ROLE(x.role) === 'editor' || x.email === me.email).map(U.publicUser);
  /* Optionally emails the private link to the person. If the mailbox is not connected yet, the link is still returned so it can be copied. */
  const inviteReply = async (email, link, extra) => {
    const out = Object.assign({ users: view(), link }, extra || {});
    if (b.send) {
      const u = target(email);
      if (!M.configured()) { out.emailed = false; out.emailNote = 'Email is not connected yet, so copy the link and send it yourself.'; }
      else {
        const who = me.name || me.email, nm = (u && u.name) || '';
        const text = 'Hi' + (nm ? ' ' + nm : '') + ',\n\n' + who + ' has invited you to edit the MiKia website.\n\nOpen this private link to choose your password:\n' + link + '\n\nThe link works once and expires in ' + INVITE_DAYS + ' days. After that, sign in at ' + L.origin(req) + '/admin with your email and password.\n\nMiKia Design and Construction';
        const html = '<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px"><p>Hi' + (nm ? ' ' + L.esc(nm) : '') + ',</p><p>' + L.esc(who) + ' has invited you to edit the MiKia website.</p><p><a href="' + L.esc(link) + '" style="display:inline-block;background:#c8323c;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none">Choose your password</a></p><p>Or paste this private link into your browser:<br>' + L.esc(link) + '</p><p>The link works once and expires in ' + INVITE_DAYS + ' days. After that, sign in at ' + L.esc(L.origin(req)) + '/admin with your email and password.</p><p>MiKia Design and Construction</p></div>';
        try { await M.send({ to: email, subject: 'Your MiKia website editor login', text, html }); out.emailed = true; }
        catch (e) { out.emailed = false; out.emailNote = 'The email could not be sent, so copy the link and send it yourself.'; }
      }
    }
    return out;
  };
  if (action === 'invite') {
    const email = U.cleanEmail(b.email), name = L.FB_CLEAN(b.name, 80), role = mgr ? 'editor' : L.ROLE(b.role);
    if (!U.EMAIL.test(email)) return L.send(res, 400, { error: 'Please enter a valid email address.' });
    let u = users.find((x) => x.email === email);
    if (u && u.hash && !u.invite) return L.send(res, 400, { error: 'That person already has a login. Use "Reset password" to give them a new link.' });
    if (u && mgr && L.ROLE(u.role) !== 'editor') return L.send(res, 403, { error: 'Only AMBS can change that person.' });
    if (u && u.role === 'owner' && role !== 'owner' && owners() <= 1) return L.send(res, 400, { error: 'There must be at least one owner.' });
    if (!u) { u = { email, created: new Date().toISOString() }; users.push(u); }
    u.name = name || u.name || ''; u.role = role;
    const token = crypto.randomBytes(24).toString('base64url');
    u.invite = { h: hashToken(token), exp: new Date(Date.now() + INVITE_DAYS * 864e5).toISOString() };
    await U.writeUsers(users);
    return L.send(res, 200, await inviteReply(email, L.origin(req) + '/admin?invite=' + token + '&email=' + encodeURIComponent(email)));
  }
  if (action === 'reset') {
    const email = U.cleanEmail(b.email);
    const u = users.find((x) => x.email === email);
    if (!u) return L.send(res, 404, { error: 'That person was not found.' });
    const token = crypto.randomBytes(24).toString('base64url');
    u.invite = { h: hashToken(token), exp: new Date(Date.now() + INVITE_DAYS * 864e5).toISOString() };
    await U.writeUsers(users);
    return L.send(res, 200, await inviteReply(email, L.origin(req) + '/admin?invite=' + token + '&email=' + encodeURIComponent(email)));
  }
  if (action === 'disable') {
    const email = U.cleanEmail(b.email), u = target(email), off = !!b.off;
    if (!u) return L.send(res, 404, { error: 'That person was not found.' });
    if (email === me.email) return L.send(res, 400, { error: 'You cannot switch off your own access.' });
    if (off && u.role === 'owner' && users.filter((x) => x.role === 'owner' && !x.disabled).length <= 1) return L.send(res, 400, { error: 'There must be at least one owner with access.' });
    if (off) u.disabled = true; else delete u.disabled;
    await U.writeUsers(users);
    return L.send(res, 200, { users: view() });
  }
  if (action === 'list') return L.send(res, 200, { users: view() });
  if (action === 'save') {
    const email = U.cleanEmail(b.email), name = L.FB_CLEAN(b.name, 80), role = mgr ? 'editor' : L.ROLE(b.role);
    if (!U.EMAIL.test(email)) return L.send(res, 400, { error: 'Please enter a valid email address.' });
    let u = users.find((x) => x.email === email);
    if (u && mgr && L.ROLE(u.role) !== 'editor') return L.send(res, 403, { error: 'Only AMBS can change that person.' });
    if (u && u.role === 'owner' && role !== 'owner' && owners() <= 1) return L.send(res, 400, { error: 'There must be at least one owner.' });
    if (!u && !b.password) return L.send(res, 400, { error: 'Please set a password for the new person.' });
    if (b.password) { const pr = U.passwordProblem(b.password); if (pr) return L.send(res, 400, { error: pr }); }
    if (!u) { u = { email, created: new Date().toISOString() }; users.push(u); }
    u.name = name || u.name || ''; u.role = role;
    if (b.password) u.hash = U.hashPassword(b.password);
    await U.writeUsers(users);
    return L.send(res, 200, { users: view() });
  }
  if (action === 'remove') {
    const email = U.cleanEmail(b.email);
    const u = users.find((x) => x.email === email);
    if (!u) return L.send(res, 404, { error: 'That person was not found.' });
    if (u.role === 'owner' && owners() <= 1) return L.send(res, 400, { error: 'There must be at least one owner.' });
    if (email === me.email) return L.send(res, 400, { error: 'You cannot remove yourself while signed in.' });
    await U.writeUsers(users.filter((x) => x.email !== email));
    return L.send(res, 200, { users: view().filter((x) => x.email !== email) });
  }
  return L.send(res, 400, { error: 'Unknown action.' });
};
