const crypto = require('crypto');
const L = require('./_lib');
/* Customer feedback from the Share your experience window.
   1. The details are emailed to the MiKia inbox (through FormSubmit) with a link to approve it for the website.
   2. If the person allowed it, the feedback is kept as "pending" until it is approved by email or in /admin.
   Settings: FEEDBACK_TO (inbox, defaults to the test address) plus the media settings. */
const TO = () => process.env.FEEDBACK_TO || 'hello@ambs.co.nz';
module.exports = async function (req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return L.send(res, 405, { error: 'Method not allowed' }); }
  if (!L.secret() || !L.storageReady()) return L.send(res, 503, { error: 'Not set up yet.' });
  let b; try { b = await L.readJson(req, 8000); } catch (e) { return L.send(res, 413, { error: 'That message is too long.' }); }
  if (b.company) return L.send(res, 200, { ok: true });
  const name = L.FB_CLEAN(b.name, 80), project = L.FB_CLEAN(b.project, 120), email = L.FB_CLEAN(b.email, 120), text = L.FB_CLEAN(b.message, 1200);
  if (!name || text.length < 10) return L.send(res, 400, { error: 'Please add your name and a few words about your experience.' });
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return L.send(res, 400, { error: 'That email address does not look right.' });
  const consent = !!b.consent;
  const id = 'f-' + Date.now().toString(36) + '-' + crypto.randomBytes(4).toString('hex');
  const o = L.origin(req);
  const fields = {
    _subject: 'customer feedback', _template: 'table', _captcha: 'false',
    Name: name, Email: email || '(not given)', Project: project || '(not given)',
    'OK to show on the website': consent ? 'Yes' : 'No', Message: text
  };
  if (email) fields._replyto = email;
  if (consent) fields['Approve for the website'] = o + '/api/approve?id=' + id + '&t=' + L.approveToken(id);
  try {
    const r = await fetch('https://formsubmit.co/ajax/' + TO(), {
      method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json', Origin: o, Referer: o + '/' }, body: JSON.stringify(fields)
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok || j.success === false || j.success === 'false') throw new Error('mail');
  } catch (e) { return L.send(res, 502, { error: 'Could not send that just now.' }); }
  if (consent) {
    try {
      const items = await L.readFeedback();
      items.push({ id, name, project, text, status: 'pending', created: new Date().toISOString() });
      await L.writeFeedback(items.slice(-200));
    } catch (e) { /* the email has been sent; the admin can still see it there */ }
  }
  return L.send(res, 200, { ok: true });
};
