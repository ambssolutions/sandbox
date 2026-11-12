const L = require('./_lib');
/* Public list of approved feedback shown in the Testimonials card. */
module.exports = async function (req, res) {
  if (req.method !== 'GET') { res.setHeader('Allow', 'GET'); return L.send(res, 405, { error: 'Method not allowed' }); }
  let items = [];
  if (L.secret() && L.storageReady()) items = (await L.readFeedback(300000)).filter((p) => p.status === 'approved');
  items = items.slice(-12).reverse().map(L.publicFeedback);
  res.statusCode = 200;
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=3600');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify({ items }));
};
