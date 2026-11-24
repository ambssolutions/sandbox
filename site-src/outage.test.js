/* Simulates the storage being suspended: every list/put call throws. */
const Module = require('module');
const path = require('path');
let down = false;
const files = new Map(); // pathname -> json
const fake = {
  list: async ({ prefix }) => { if (down) throw new Error('403 suspended'); return { blobs: [...files.keys()].filter((k) => k.startsWith(prefix)).map((k) => ({ pathname: k, url: 'mem://' + k })) }; },
  put: async (name, body) => { if (down) throw new Error('403 suspended'); files.set(name, JSON.parse(body)); return { url: 'mem://' + name }; },
  del: async () => {}
};
const origResolve = Module._resolveFilename;
Module._resolveFilename = function (r, ...a) { return r === '@vercel/blob' ? '@vercel/blob' : origResolve.call(this, r, ...a); };
require.cache['@vercel/blob'] = { id: '@vercel/blob', filename: '@vercel/blob', loaded: true, exports: fake };
global.fetch = async (u) => { const k = String(u).replace('mem://', ''); return files.has(k) ? { ok: true, json: async () => files.get(k) } : { ok: false, status: 403 }; };
process.env.SESSION_SECRET = 'test-secret-test-secret-test-secret';
process.env.ADMIN_PASSWORD = 'master-test-password';
process.env.BLOB_READ_WRITE_TOKEN = 'x';
const base = '/home/user/mikia/api/';
const L = require(base + '_lib.js'), U = require(base + '_users.js'), login = require(base + 'admin/login.js');
let fails = 0; const ok = (n, c) => { console.log((c ? 'ok   ' : 'FAIL ') + n); if (!c) fails++; };
const call = (handler, body) => new Promise((resolve) => {
  const req = { method: 'POST', headers: { 'x-forwarded-for': '1.2.3.' + Math.floor(Math.random() * 250) }, on() {}, [Symbol.asyncIterator]: async function* () { yield Buffer.from(JSON.stringify(body)); } };
  const res = { headers: {}, setHeader(k, v) { this.headers[k] = v; }, end(t) { resolve({ s: this.statusCode, j: JSON.parse(t || '{}'), h: this.headers }); } };
  handler(req, res);
});
(async () => {
  // normal times: write a user list and read it back
  await L.writeStore('admin/u-test.json', { users: [{ email: 'ed@mikia.co.nz', name: 'Ed', role: 'editor', hash: 'x' }] });
  const a = await L.readStore('admin/u-test.json');
  ok('a saved list reads back', a && a.users.length === 1);
  // storage suspended
  down = true;
  const stale = await L.readStore('admin/u-test.json', 0);
  ok('when storage fails the last good copy is still served', stale && stale.users.length === 1);
  const none = await L.readStore('admin/never-saved.json', 0);
  ok('a list never seen returns nothing, and storage is flagged as failing', none === null && L.storeFailing());
  const r1 = await call(login, { email: 'hello@ambs.co.nz', password: 'master-test-password' });
  ok('AMBS super admin can sign in with the master password while storage is down (' + r1.s + ')', r1.s === 200 && r1.j.user && r1.j.user.super === true && /mk_session/.test(String(r1.h['Set-Cookie'])));
  const r2 = await call(login, { email: 'hello@ambs.co.nz', password: 'wrong' });
  ok('a wrong password is still refused (' + r2.s + ')', r2.s === 401);
  const r3 = await call(login, { email: 'someone@else.com', password: 'master-test-password' });
  ok('other addresses cannot use the master password this way (' + r3.s + ')', r3.s === 401);
  const r4 = await call(login, { email: '', password: 'master-test-password' });
  ok('the master login (no email) still works (' + r4.s + ')', r4.s === 200);
  // the session is accepted afterwards
  const cookie = String(r1.h['Set-Cookie']).split(';')[0];
  const me = L.currentUser({ headers: { cookie } });
  const live = await U.live(me);
  ok('and the editor accepts that session (owner, all sections)', live && live.role === 'owner' && live.super === true && live.access.length >= 5);
  const other = await U.live({ email: 'ed@mikia.co.nz', name: 'Ed', role: 'editor' });
  ok('an ordinary editor is not let in on a guess when the list is unreadable', other === null || other.email === 'ed@mikia.co.nz');
  console.log(fails ? fails + ' FAILED' : 'ALL PASSED'); process.exit(fails ? 1 : 0);
})();
