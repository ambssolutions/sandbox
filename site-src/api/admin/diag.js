const L = require('../_lib');
const U = require('../_users');
/* Editor problem log. The editor reports, on its own, when the editing window or the preview does not show a page properly (a blank window, a page that never reports in, the simple view
   being needed...), with what the browser and screen are, so a problem that "happens from time to time" can be traced. POST {kind, ...}: any signed-in person's editor may report.
   GET: the log, for owners and managers only. POST {action:'clear'}: empty it (owners and managers). Nothing here is shown on the website; no passwords or page contents are kept. */
const KINDS = new Set(['blank', 'auto-simple', 'simple-failed', 'watchdog', 'slow', 'manual-simple', 'manual-own-window', 'popup-blocked', 'preview-error', 'frame-error']);
const path = () => 'admin/d-' + L.sign('diagstore').slice(0, 32) + '.json';
const str = (v, n) => String(v == null ? '' : v).replace(/[\u0000-\u001f]/g, ' ').slice(0, n);
const num = (v) => (Number.isFinite(Number(v)) ? Math.round(Number(v)) : null);
async function read() { const j = await L.readStore(path(), 3000); return j && Array.isArray(j.items) ? j.items : []; }
module.exports = async function (req, res) {
  const me = await U.live(L.currentUser(req));
  L.touchSession(req, res, me);
  if (!me) return L.send(res, 401, { error: 'Please log in.' });
  const staff = me.role !== 'editor';
  if (req.method === 'GET') {
    if (!staff) return L.send(res, 403, { error: 'Only owners and managers can see this.' });
    return L.send(res, 200, { items: await read(), storage: L.storageReady() });
  }
  if (req.method !== 'POST') { res.setHeader('Allow', 'GET, POST'); return L.send(res, 405, { error: 'Method not allowed' }); }
  let b; try { b = await L.readJson(req, 12000); } catch (e) { return L.send(res, 413, { error: 'Request too large.' }); }
  if (!L.storageReady()) return L.send(res, 200, { ok: false });
  if (b.action === 'clear') {
    if (!staff) return L.send(res, 403, { error: 'Only owners and managers can do this.' });
    await L.writeStore(path(), { items: [], updated: new Date().toISOString() });
    return L.send(res, 200, { ok: true });
  }
  const kind = str(b.kind, 30);
  if (!KINDS.has(kind)) return L.send(res, 400, { error: 'Unknown report.' });
  const item = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), at: new Date().toISOString(), kind,
    by: me.email, who: me.name || me.email,
    page: str(b.page, 60), mode: str(b.mode, 12), view: str(b.view, 12), ver: str(b.ver, 16),
    ua: str(b.ua, 260), platform: str(b.platform, 40), lang: str(b.lang, 20),
    screen: str(b.screen, 30), viewport: str(b.viewport, 60), frame: str(b.frame, 30), dpr: str(b.dpr, 8),
    net: str(b.net, 40), visible: str(b.visible, 12),
    t: { got: num(b.t && b.t.got), ready: num(b.t && b.t.ready), server: num(b.t && b.t.server) },
    shown: b.shown && typeof b.shown === 'object' ? { text: num(b.shown.t), w: num(b.shown.w), h: num(b.shown.h), d: str(b.shown.d, 160) } : null,
    errors: Array.isArray(b.errors) ? b.errors.slice(0, 12).map((x) => str(x, 200)) : [],
    note: str(b.note, 200)
  };
  try {
    const items = await read();
    /* The same report from the same person about the same page within a minute is one report. */
    const dup = items.find((x) => x.kind === item.kind && x.by === item.by && x.page === item.page && Date.now() - Date.parse(x.at) < 60000);
    if (!dup) { items.unshift(item); await L.writeStore(path(), { items: items.slice(0, 200), updated: new Date().toISOString() }); }
  } catch (e) { /* a report that cannot be kept must never get in the way of editing */ }
  return L.send(res, 200, { ok: true });
};
