const L = require('../_lib');
const U = require('../_users');
/* Admin photos. GET: the current list. POST {action:'move', id, dir:'up'|'down'}, {action:'edit', id, caption, desc} or {action:'remove', id}. Any signed-in person may do these. */
module.exports = async function (req, res) {
  const me = await U.live(L.currentUser(req));
  L.touchSession(req, res, me);
  if (!me) return L.send(res, req.method === 'GET' ? 200 : 401, req.method === 'GET' ? { auth: false } : { error: 'Please log in.' });
  if (!U.can(me, 'photos')) return L.send(res, 403, { error: 'You do not have access to this section.' });
  if (req.method === 'GET') return L.send(res, 200, { photos: (await L.currentPhotos()).map(L.publicPhoto), storage: L.storageReady() });
  if (req.method !== 'POST') { res.setHeader('Allow', 'GET, POST'); return L.send(res, 405, { error: 'Method not allowed' }); }
  if (!L.storageReady()) return L.send(res, 503, { error: 'Photo storage is not connected yet.' });
  let b; try { b = await L.readJson(req, 4000); } catch (e) { return L.send(res, 413, { error: 'Request too large.' }); }
  try {
    if (b.action === 'undoedit') {
      const rec = (await L.readActivity()).find((x) => x.id === b.logId && x.kind === 'edit');
      if (!rec || (me.role === 'editor' && rec.by !== me.email)) return L.send(res, 403, { error: 'You can only undo changes you made yourself.' });
      const list = await L.currentPhotos(), k = list.findIndex((p) => p.id === rec.pid);
      if (k < 0) return L.send(res, 404, { error: 'That photo is no longer there.' });
      const cur = L.publicPhoto(list[k]);
      list[k].caption = rec.before.caption; list[k].desc = rec.before.desc;
      if (list[k].alt === cur.caption) list[k].alt = rec.before.caption || list[k].alt;
      await L.writeManifest(list);
      await L.logActivity(me, { kind: 'edit', pid: rec.pid, title: rec.before.caption, src: rec.src, undo: true, before: { caption: cur.caption || '', desc: cur.desc || '' }, after: rec.before });
      return L.send(res, 200, { ok: true, photos: list.map(L.publicPhoto) });
    }
    const photos = await L.currentPhotos();
    const i = photos.findIndex((p) => p.id === b.id);
    if (i < 0) return L.send(res, 404, { error: 'That photo was not found.' });
    if (b.action === 'move') {
      const j = b.dir === 'up' ? i - 1 : i + 1;
      if (j >= 0 && j < photos.length) { const t = photos[i]; photos[i] = photos[j]; photos[j] = t; await L.writeManifest(photos); await L.logActivity(me, { kind: 'move', pid: t.id, title: t.caption || '', src: t.src, dir: b.dir === 'up' ? 'up' : 'down' }); }
      return L.send(res, 200, { ok: true, photos: photos.map(L.publicPhoto) });
    }
    if (b.action === 'edit') {
      const cap = L.FB_CLEAN(b.caption, 120), desc = L.FB_CLEAN(b.desc, 220);
      const was = photos[i], pv = L.publicPhoto(was), before = { caption: pv.caption || '', desc: pv.desc || '' };
      /* the picture description for screen readers follows the caption unless it was set on its own */
      if (!was.alt || was.alt === was.caption || was.alt === 'MiKia project photo') was.alt = cap || 'MiKia project photo';
      was.caption = cap; was.desc = desc;
      await L.writeManifest(photos);
      if (before.caption !== cap || before.desc !== desc) await L.logActivity(me, { kind: 'edit', pid: was.id, title: cap || before.caption, src: was.src, before, after: { caption: cap, desc } });
      return L.send(res, 200, { ok: true, photos: photos.map(L.publicPhoto) });
    }
    if (b.action === 'remove') {
      const hit = photos[i], next = photos.filter((p) => p.id !== b.id);
      await L.writeManifest(next);
      await L.logActivity(me, { kind: 'remove', pid: hit.id, title: hit.caption || '', src: hit.src, before: { caption: hit.caption || '', desc: hit.desc || '' } });
      if (hit.blob && /^https:\/\//.test(hit.src)) { try { await L.del(hit.src); } catch (e) { /* the list is already updated */ } }
      return L.send(res, 200, { ok: true, photos: next.map(L.publicPhoto) });
    }
    return L.send(res, 400, { error: 'Unknown action.' });
  } catch (e) {
    return L.send(res, 502, { error: 'Could not update the photos. Please try again.' });
  }
};
