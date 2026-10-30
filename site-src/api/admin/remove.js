const L = require('../_lib');
module.exports = async function (req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return L.send(res, 405, { error: 'Method not allowed' }); }
  if (!L.isAdmin(req)) return L.send(res, 401, { error: 'Please log in.' });
  if (!L.storageReady()) return L.send(res, 503, { error: 'Photo storage is not connected yet.' });
  let b; try { b = await L.readJson(req, 2000); } catch (e) { return L.send(res, 413, { error: 'Request too large.' }); }
  try {
    const photos = await L.currentPhotos();
    const hit = photos.find((p) => p.id === b.id);
    if (!hit) return L.send(res, 404, { error: 'That photo was not found.' });
    const next = photos.filter((p) => p.id !== b.id);
    await L.writeManifest(next);
    if (hit.blob && /^https:\/\//.test(hit.src)) { try { await L.del(hit.src); } catch (e) { /* the list is already updated */ } }
    return L.send(res, 200, { ok: true, photos: next.map(L.publicPhoto) });
  } catch (e) {
    return L.send(res, 502, { error: 'Could not remove the photo. Please try again.' });
  }
};
