const L = require('../_lib');
module.exports = async function (req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return L.send(res, 405, { error: 'Method not allowed' }); }
  if (!L.isAdmin(req)) return L.send(res, 401, { error: 'Please log in.' });
  if (!L.storageReady()) return L.send(res, 503, { error: 'Photo storage is not connected yet.' });
  let b; try { b = await L.readJson(req, 2000); } catch (e) { return L.send(res, 413, { error: 'Request too large.' }); }
  try {
    const photos = await L.currentPhotos();
    const i = photos.findIndex((p) => p.id === b.id), j = b.dir === 'up' ? i - 1 : i + 1;
    if (i < 0) return L.send(res, 404, { error: 'That photo was not found.' });
    if (j >= 0 && j < photos.length) { const t = photos[i]; photos[i] = photos[j]; photos[j] = t; await L.writeManifest(photos); }
    return L.send(res, 200, { ok: true, photos: photos.map(L.publicPhoto) });
  } catch (e) {
    return L.send(res, 502, { error: 'Could not reorder the photos. Please try again.' });
  }
};
