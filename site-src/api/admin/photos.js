const L = require('../_lib');
const U = require('../_users');
/* Admin photos. GET: the current list. POST {action:'move', id, dir:'up'|'down'}, {action:'remove', id}. Any signed-in person may do these. */
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
    const photos = await L.currentPhotos();
    if (b.action === 'undo') {
      const items = await L.readActivity(), it = items.find((x) => x.id === b.act && (x.area || 'Photos') === 'Photos' && /^(add|move|remove)$/.test(x.kind));
      if (!it) return L.send(res, 404, { error: 'That change was not found.' });
      if (it.undo) return L.send(res, 409, { error: 'That change has already been undone.' });
      if (me.role === 'editor' && it.by !== me.email) return L.send(res, 403, { error: 'You can only undo your own changes.' });
      let text = '';
      if (it.kind === 'add') {
        const k = photos.findIndex((p) => p.id === it.pid);
        if (k < 0) return L.send(res, 409, { error: 'That photo is no longer in the Media box, so there is nothing to undo.' });
        photos.splice(k, 1); text = 'Undid "Added a photo"';
      } else if (it.kind === 'move') {
        const k = photos.findIndex((p) => p.id === it.pid), j = k + (it.dir === 'up' ? 1 : -1);
        if (k < 0 || j < 0 || j >= photos.length) return L.send(res, 409, { error: 'The photos have been reordered since, so this cannot be undone neatly. Use the arrows in Photos instead.' });
        const t = photos[k]; photos[k] = photos[j]; photos[j] = t; text = 'Undid "Moved a photo ' + (it.dir === 'up' ? 'up' : 'down') + '"';
      } else {
        if (!it.rec) return L.send(res, 409, { error: 'This removal was made before Undo was available, so it cannot be undone. Add the photo again in Photos.' });
        if (photos.some((p) => p.id === it.rec.id)) return L.send(res, 409, { error: 'That photo is already back in the Media box.' });
        photos.splice(Math.min(Math.max(0, (it.pos || photos.length + 1) - 1), photos.length), 0, it.rec); text = 'Undid "Removed a photo"';
      }
      await L.writeManifest(photos);
      await L.markActivity([it.id], { undo: true });
      await L.logActivity(me, { kind: 'undo', title: 'Photo', src: it.src, text });
      return L.send(res, 200, { ok: true, photos: photos.map(L.publicPhoto) });
    }
    const i = photos.findIndex((p) => p.id === b.id);
    if (i < 0) return L.send(res, 404, { error: 'That photo was not found.' });
    if (b.action === 'move') {
      const j = b.dir === 'up' ? i - 1 : i + 1;
      if (j >= 0 && j < photos.length) { const t = photos[i]; photos[i] = photos[j]; photos[j] = t; await L.writeManifest(photos); await L.logActivity(me, { kind: 'move', pid: t.id, title: 'Photo', src: t.src, dir: b.dir === 'up' ? 'up' : 'down', from: i + 1, to: j + 1 }); }
      return L.send(res, 200, { ok: true, photos: photos.map(L.publicPhoto) });
    }
    if (b.action === 'remove') {
      const hit = photos[i], next = photos.filter((p) => p.id !== b.id);
      await L.writeManifest(next);
      /* The file is kept, so the removal can be undone. */
      await L.logActivity(me, { kind: 'remove', pid: hit.id, title: 'Photo', src: hit.src, rec: hit, pos: i + 1 });
      return L.send(res, 200, { ok: true, photos: next.map(L.publicPhoto) });
    }
    return L.send(res, 400, { error: 'Unknown action.' });
  } catch (e) {
    await L.logActivity(me, { area: 'Photos', kind: 'failed', title: 'Photo', text: 'Could not go live (' + (b.action === 'remove' ? 'removing a photo' : 'reordering the photos') + '): ' + String(e.message || '').slice(0, 140) });
    return L.send(res, 502, { error: String(e.message || '').indexOf('Storage is switched off') === 0 ? e.message : 'Could not update the photos. Please try again.' });
  }
};
