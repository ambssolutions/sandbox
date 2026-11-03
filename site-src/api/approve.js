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
  /* The one-click approve link has been switched off. Feedback is approved, hidden or deleted in the website editor (Client feedback), which records who did it and when. */
  return page(res, 200, 'Use the website editor', '<h1>Approve it in the website editor</h1><p>Feedback is now approved, hidden or deleted in the website editor, under Client feedback.</p><p><a href="https://mikia.co.nz/admin">Open the website editor</a></p>');
};
