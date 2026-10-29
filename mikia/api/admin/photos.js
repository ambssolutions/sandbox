const L = require('../_lib');
/* Admin: whoever is logged in sees the current list and whether storage is connected. */
module.exports = async function (req, res) {
  if (!L.isAdmin(req)) return L.send(res, 401, { error: 'Please log in.' });
  const photos = await L.currentPhotos();
  return L.send(res, 200, { photos: photos.map(L.publicPhoto), storage: L.storageReady() });
};
