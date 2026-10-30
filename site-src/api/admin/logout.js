const L = require('../_lib');
module.exports = async function (req, res) {
  res.setHeader('Set-Cookie', L.clearCookie());
  return L.send(res, 200, { ok: true });
};
