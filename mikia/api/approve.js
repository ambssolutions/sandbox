const L = require('./_lib');
/* The link in the feedback email. Opening it shows the feedback and an Approve button;
   only the button (a POST) approves, so email scanners that open links cannot approve by accident. */
function page(res, code, title, body) {
  res.statusCode = code;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Robots-Tag', 'noindex');
  res.end('<!doctype html><html lang="en-NZ"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>' + L.esc(title) + '</title>'
    + '<style>body{margin:0;font:17px/1.5 system-ui,sans-serif;background:#f3f0e8;color:#12201b;display:grid;place-items:center;min-height:100vh;padding:20px;box-sizing:border-box}main{max-width:520px;width:100%;background:#fff;border-radius:20px;padding:26px;box-shadow:0 20px 50px -30px rgba(0,0,0,.4)}h1{font:400 26px Georgia,serif;margin:0 0 12px}blockquote{margin:14px 0;padding:0 0 0 14px;border-left:3px solid #c03434}button{min-height:48px;padding:0 26px;border:0;border-radius:999px;background:#12201b;color:#fff;font:600 16px system-ui;cursor:pointer}small{color:#5d6b64}</style></head><body><main>' + body + '</main></body></html>');
}
module.exports = async function (req, res) {
  if (!L.secret() || !L.storageReady()) return page(res, 503, 'Not set up', '<h1>Not set up yet</h1><p>Photo and feedback storage is not connected to the website yet.</p>');
  let id = '', t = '';
  if (req.method === 'POST') {
    const raw = (await L.readBuffer(req, 4000).catch(() => Buffer.alloc(0))).toString('utf8');
    const p = new URLSearchParams(raw); id = p.get('id') || ''; t = p.get('t') || '';
  } else if (req.method === 'GET') {
    const u = new URL(req.url, 'https://x'); id = u.searchParams.get('id') || ''; t = u.searchParams.get('t') || '';
  } else { res.setHeader('Allow', 'GET, POST'); return page(res, 405, 'Not allowed', '<h1>Not allowed</h1>'); }
  if (!id || !t || !L.safeEq(t, L.approveToken(id))) return page(res, 403, 'Link not valid', '<h1>Link not valid</h1><p>This approval link is not valid. You can approve feedback in the website admin instead.</p>');
  const items = await L.readFeedback();
  const it = items.find((x) => x.id === id);
  if (!it) return page(res, 404, 'Not found', '<h1>Feedback not found</h1><p>It may already have been removed.</p>');
  if (req.method === 'POST') {
    it.status = 'approved';
    try { await L.writeFeedback(items); } catch (e) { return page(res, 502, 'Try again', '<h1>Could not save</h1><p>Please try the link again.</p>'); }
    return page(res, 200, 'Approved', '<h1>Approved</h1><p>This feedback now shows in the Testimonials section of the website (it can take about a minute).</p>');
  }
  const done = it.status === 'approved';
  return page(res, 200, 'Approve feedback', '<h1>' + (done ? 'Already approved' : 'Show this on the website?') + '</h1><blockquote>' + L.esc(it.text) + '</blockquote><p><b>' + L.esc(it.name) + '</b>' + (it.project ? '<br><small>' + L.esc(it.project) + '</small>' : '') + '</p>'
    + (done ? '' : '<form method="post" action="/api/approve"><input type="hidden" name="id" value="' + L.esc(id) + '"><input type="hidden" name="t" value="' + L.esc(t) + '"><button type="submit">Approve</button></form>'));
};
