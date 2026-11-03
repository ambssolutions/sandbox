const crypto = require('crypto');
const L = require('./_lib');
const S = require('./_settings');
/* Customer feedback from the Share your experience window.
   1. The details are emailed to the MiKia inbox (through FormSubmit) with a link to the website editor, where it is approved.
   2. If the person allowed it, the feedback is kept as "pending" until it is approved by email or in /admin.
   Settings: FEEDBACK_TO (inbox, defaults to the test address) plus the media settings. */
const TOLIST = () => String(process.env.FEEDBACK_TO || 'hello@ambs.co.nz').split(/[\s,;]+/).filter(Boolean);
const TO = () => TOLIST().join(', ');

/* Email goes out through the site's own mailbox (Zoho SMTP) when SMTP_PASSWORD is set; FormSubmit is only the fallback.
   Settings: SMTP_PASSWORD (app password), SMTP_USER (default hello@ambs.co.nz), SMTP_HOST (default smtp.zoho.com.au), SMTP_PORT (default 465),
   FEEDBACK_TO (who receives it), FEEDBACK_FROM (defaults to SMTP_USER). */
async function sendSmtp(f) {
  const nodemailer = require('nodemailer');
  const user = process.env.SMTP_USER || 'hello@ambs.co.nz';
  const port = Number(process.env.SMTP_PORT || 465);
  const tx = nodemailer.createTransport({ host: process.env.SMTP_HOST || 'smtp.zoho.com.au', port, secure: port === 465, auth: { user, pass: process.env.SMTP_PASSWORD }, connectionTimeout: 10000, socketTimeout: 15000 });
  const when = new Date().toLocaleString('en-NZ', { timeZone: 'Pacific/Auckland', weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit' }) + ' (NZ time)';
  const rows = [['Received', when], ['Name', f.name], ['Email', f.email || '(not given)'], ['Project', f.project || '(not given)'], ['OK to show on the website', f.consent ? 'Yes' : 'No'], ['Message', f.text]];
  const html = '<table cellpadding="8" style="border-collapse:collapse;font:15px system-ui,sans-serif">' + rows.map((r) => '<tr><td style="border:1px solid #ddd;background:#f6f6f6"><b>' + L.esc(r[0]) + '</b></td><td style="border:1px solid #ddd;white-space:pre-wrap">' + L.esc(r[1]) + '</td></tr>').join('') + '</table>'
    + '<p style="font:15px system-ui,sans-serif"><b>What to do with this feedback</b><br>' + (f.consent ? 'Open the website editor, go to <b>Client feedback</b>, and press <b>Approve</b> to show it in the Testimonials section (about a minute), or <b>Delete</b> to remove it.' : 'The sender did not allow this on the website, so it cannot be shown there. You can reply to them by email if they gave an address.') + '<br><a href="' + L.esc(f.admin) + '">' + L.esc(f.admin) + '</a></p>';
  const textBody = rows.map((r) => r[0] + ': ' + r[1]).join('\n') + '\n\n' + (f.consent ? 'To show it on the website or delete it, open the website editor and go to Client feedback:' : 'The sender did not allow this on the website, so it cannot be shown there. Client feedback in the website editor:') + '\n' + f.admin;
  await tx.sendMail({ from: '"MiKia website" <' + (process.env.FEEDBACK_FROM || user) + '>', to: TO(), replyTo: f.email || undefined, subject: 'customer feedback', text: textBody, html });
}
async function sendFormSubmit(fields, o) {
  const r = await fetch('https://formsubmit.co/ajax/' + TOLIST()[0], {
    method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json', Origin: o, Referer: o + '/' }, body: JSON.stringify(TOLIST().length > 1 ? Object.assign({ _cc: TOLIST().slice(1).join(',') }, fields) : fields)
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || j.success === false || j.success === 'false') throw new Error('mail');
}
module.exports = async function (req, res) {
  await S.load();
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
    Received: new Date().toLocaleString('en-NZ', { timeZone: 'Pacific/Auckland', weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit' }) + ' (NZ time)', Name: name, Email: email || '(not given)', Project: project || '(not given)',
    'OK to show on the website': consent ? 'Yes' : 'No', Message: text
  };
  if (email) fields._replyto = email;
  fields['Website editor (Client feedback tab)'] = 'https://mikia.co.nz/admin';
  /* Keep every message in the editor first (status "private" when the sender did not allow it on the website), then email it.
     If the email cannot be sent the message is not lost; it is only an error if neither worked. */
  let saved = false, mailed = false;
  try {
    const items = await L.readFeedback();
    items.push({ id, name, project, email, text, status: consent ? 'pending' : 'private', created: new Date().toISOString() });
    await L.writeFeedback(items.slice(-300));
    saved = true;
  } catch (e) { /* try the email anyway */ }
  try {
    if (process.env.SMTP_PASSWORD) await sendSmtp({ name, email, project, consent, text, admin: 'https://mikia.co.nz/admin' });
    else await sendFormSubmit(fields, o);
    mailed = true;
  } catch (e) { /* handled below */ }
  if (!saved && !mailed) return L.send(res, 502, { error: 'Could not send that just now.' });
  return L.send(res, 200, { ok: true });
};
