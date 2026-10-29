/* Receives the "Share your experience" form and emails it to the MiKia inbox with the subject "customer feedback".
   Needs two settings in Vercel (Project > Settings > Environment Variables):
     RESEND_API_KEY   an API key from resend.com
     FEEDBACK_FROM    a sender on a domain verified in Resend, for example "MiKia website <feedback@mikia.co.nz>"
   Optional: FEEDBACK_TO (defaults to info@mikia.co.nz). Until the key is set the form shows its email fallback. */
module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'Method not allowed' }); }
  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch (e) { b = {}; } }
  b = b || {};
  if (b.company) return res.status(200).json({ ok: true });
  const clean = (v, n) => String(v == null ? '' : v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, n);
  const name = clean(b.name, 120), email = clean(b.email, 200), project = clean(b.project, 200), message = clean(b.message, 4000);
  const consent = b.consent === true || b.consent === 'true';
  if (!name || message.length < 10) return res.status(400).json({ error: 'Please add your name and a few words about your experience.' });
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'Invalid email address.' });
  const key = process.env.RESEND_API_KEY;
  if (!key) return res.status(503).json({ error: 'Feedback email is not set up yet.' });
  const to = process.env.FEEDBACK_TO || 'info@mikia.co.nz';
  const from = process.env.FEEDBACK_FROM || 'MiKia website <feedback@mikia.co.nz>';
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const lines = [
    'Name: ' + name,
    'Email: ' + (email || '(not given)'),
    'Project: ' + (project || '(not given)'),
    'OK to show on the website: ' + (consent ? 'Yes' : 'No'),
    '',
    message
  ];
  const html = '<p><b>Name:</b> ' + esc(name) + '<br><b>Email:</b> ' + esc(email || '(not given)') + '<br><b>Project:</b> ' + esc(project || '(not given)') +
    '<br><b>OK to show on the website:</b> ' + (consent ? 'Yes' : 'No') + '</p><p style="white-space:pre-wrap">' + esc(message) + '</p>';
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [to], subject: 'customer feedback', text: lines.join('\n'), html, reply_to: email || undefined })
    });
    if (!r.ok) return res.status(502).json({ error: 'Could not send.' });
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(502).json({ error: 'Could not send.' });
  }
};
