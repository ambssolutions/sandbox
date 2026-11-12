/* Sends mail through the site's own mailbox (Zoho SMTP). Settings: SMTP_PASSWORD (app password), SMTP_USER (default hello@ambs.co.nz),
   SMTP_HOST (default smtp.zoho.com.au), SMTP_PORT (default 465), MAIL_FROM (defaults to SMTP_USER). */
const configured = () => !!process.env.SMTP_PASSWORD;
async function send({ to, subject, text, html }) {
  const nodemailer = require('nodemailer');
  const user = process.env.SMTP_USER || 'hello@ambs.co.nz', port = Number(process.env.SMTP_PORT || 465);
  const tx = nodemailer.createTransport({ host: process.env.SMTP_HOST || 'smtp.zoho.com.au', port, secure: port === 465, auth: { user, pass: process.env.SMTP_PASSWORD }, connectionTimeout: 10000, socketTimeout: 15000 });
  await tx.sendMail({ from: '"MiKia website" <' + (process.env.MAIL_FROM || user) + '>', to, subject, text, html });
}
module.exports = { configured, send };
