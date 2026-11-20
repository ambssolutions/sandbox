const L = require('./_lib');
/* Public list of the photos shown in the Media carousel. */
module.exports = async function (req, res) {
  if (req.method !== 'GET') { res.setHeader('Allow', 'GET'); return L.send(res, 405, { error: 'Method not allowed' }); }
  const photos = await L.currentPhotos(300000);
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=3600');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify({ photos: photos.map(L.publicPhoto) }));
};
