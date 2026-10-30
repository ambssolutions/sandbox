const L = require('./_lib');
/* Enquiries from the Contact page form, emailed through the site's own mailbox (Zoho SMTP).
   Settings: SMTP_PASSWORD (app password), SMTP_USER (default hello@ambs.co.nz), SMTP_HOST (default smtp.zoho.com.au), SMTP_PORT (default 465),
   ENQUIRY_TO (who receives it; defaults to the test address, set to info@mikia.co.nz at go-live), FEEDBACK_FROM (defaults to SMTP_USER). */
const TO = () => process.env.ENQUIRY_TO || 'hello@ambs.co.nz';
module.exports = async function (req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return L.send(res, 405, { error: 'Method not allowed' }); }
  if (!process.env.SMTP_PASSWORD) return L.send(res, 503, { error: 'Not set up yet.' });
  let b; try { b = await L.readJson(req, 8000); } catch (e) { return L.send(res, 413, { error: 'That message is too long.' }); }
  if (b.company) return L.send(res, 200, { ok: true });
  const name = L.FB_CLEAN(b.name, 80), email = L.FB_CLEAN(b.email, 120), phone = L.FB_CLEAN(b.phone, 40), type = L.FB_CLEAN(b.type, 80), site = L.FB_CLEAN(b.site, 160), message = L.FB_CLEAN(b.message, 3000);
  if (!name || message.length < 5) return L.send(res, 400, { error: 'Please add your name and a few words about your project.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return L.send(res, 400, { error: 'That email address does not look right.' });
  try {
    const nodemailer = require('nodemailer');
    const user = process.env.SMTP_USER || 'hello@ambs.co.nz';
    const port = Number(process.env.SMTP_PORT || 465);
    const tx = nodemailer.createTransport({ host: process.env.SMTP_HOST || 'smtp.zoho.com.au', port, secure: port === 465, auth: { user, pass: process.env.SMTP_PASSWORD }, connectionTimeout: 10000, socketTimeout: 15000 });
    const rows = [['Name', name], ['Email', email], ['Phone', phone || '(not given)'], ['Project type', type || '(not given)'], ['Site address', site || '(not given)'], ['About your project', message]];
    const html = '<table cellpadding="8" style="border-collapse:collapse;font:15px system-ui,sans-serif">' + rows.map((r) => '<tr><td style="border:1px solid #ddd;background:#f6f6f6;vertical-align:top"><b>' + L.esc(r[0]) + '</b></td><td style="border:1px solid #ddd;white-space:pre-wrap">' + L.esc(r[1]) + '</td></tr>').join('') + '</table>';
    await tx.sendMail({ from: '"MiKia website" <' + (process.env.FEEDBACK_FROM || user) + '>', to: TO(), replyTo: email, subject: 'Website enquiry from ' + name, text: rows.map((r) => r[0] + ': ' + r[1]).join('\n'), html });
  } catch (e) { return L.send(res, 502, { error: 'Could not send that just now.' }); }
  return L.send(res, 200, { ok: true });
};
