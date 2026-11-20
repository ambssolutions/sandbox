const L = require('../_lib');
/* Admin photos. GET: the current list. POST {action:'move', id, dir:'up'|'down'} or {action:'remove', id}. Any signed-in person may do these. */
module.exports = async function (req, res) {
  if (!L.isAdmin(req)) return L.send(res, req.method === 'GET' ? 200 : 401, req.method === 'GET' ? { auth: false } : { error: 'Please log in.' });
  if (req.method === 'GET') return L.send(res, 200, { photos: (await L.currentPhotos()).map(L.publicPhoto), storage: L.storageReady() });
  if (req.method !== 'POST') { res.setHeader('Allow', 'GET, POST'); return L.send(res, 405, { error: 'Method not allowed' }); }
  if (!L.storageReady()) return L.send(res, 503, { error: 'Photo storage is not connected yet.' });
  let b; try { b = await L.readJson(req, 2000); } catch (e) { return L.send(res, 413, { error: 'Request too large.' }); }
  try {
    const photos = await L.currentPhotos();
    const i = photos.findIndex((p) => p.id === b.id);
    if (i < 0) return L.send(res, 404, { error: 'That photo was not found.' });
    if (b.action === 'move') {
      const j = b.dir === 'up' ? i - 1 : i + 1;
      if (j >= 0 && j < photos.length) { const t = photos[i]; photos[i] = photos[j]; photos[j] = t; await L.writeManifest(photos); }
      return L.send(res, 200, { ok: true, photos: photos.map(L.publicPhoto) });
    }
    if (b.action === 'remove') {
      const hit = photos[i], next = photos.filter((p) => p.id !== b.id);
      await L.writeManifest(next);
      if (hit.blob && /^https:\/\//.test(hit.src)) { try { await L.del(hit.src); } catch (e) { /* the list is already updated */ } }
      return L.send(res, 200, { ok: true, photos: next.map(L.publicPhoto) });
    }
    return L.send(res, 400, { error: 'Unknown action.' });
  } catch (e) {
    return L.send(res, 502, { error: 'Could not update the photos. Please try again.' });
  }
};
