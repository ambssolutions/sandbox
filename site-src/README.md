# MiKia Consulting Group website

A static multi-page website. No build step: open `index.html`, or deploy the folder as is (Vercel config included).

## Pages
`index`, `services`, six service pages, `how-we-work`, `residential`, `commercial`, `about`, `contact`, `privacy`, `404`.

## Things to finish before launch
- **Projects:** add real projects to `assets/projects.js`. Only add projects the client has permitted. The two images in `projects/` are illustrative renders, not real projects.
- **Enquiry form:** set `FORM_ENDPOINT` in `assets/form.js` (for example a Formspree URL). While empty, the form opens the visitor's email app addressed to info@mikia.co.nz. Designs sent from the design tool arrive pre-filled in the message.
- **Copy:** service, about and privacy wording is drafted from the homepage text. Have the client check it. The privacy page needs a legal read.
- **Team:** add Neelam Gandhi's photo and bio, and other team members, to `about.html`.
- **Domain:** canonical URLs, `sitemap.xml` and `robots.txt` assume `https://www.mikia.co.nz`.
- **Analytics:** none is installed. If added, update the privacy page and consider a cookie notice.

## Feedback, photos and admin: finish at launch
The home page has a photo carousel and a client feedback section. Both are run from `/admin` (not listed in search engines). The server code is in `api/`.
- **Settings (Vercel > Project > Settings > Environment Variables):** `ADMIN_PASSWORD` and `SESSION_SECRET` (set), `BLOB_READ_WRITE_TOKEN` (added by the connected Blob store `mikia-media`). The admin password is kept in Vercel only. Change it there and redeploy before handing `/admin` to the client.
- **Feedback email sender (not set up yet):** add `SMTP_PASSWORD`, a Zoho app password for hello@ambs.co.nz (My Account > Security > App Passwords), as a Sensitive Production variable. Optional: `SMTP_USER`, `SMTP_HOST` (default `smtp.zoho.com.au`), `SMTP_PORT`, `FEEDBACK_FROM`. Without it the form falls back to FormSubmit, which is not reliable. If SMTP is not available on the Zoho plan, use a transactional email service instead.
- **Feedback destination:** `FEEDBACK_TO` (default `hello@ambs.co.nz`, the test address) and the `FB_TO` constant in `assets/book.js` (used if the site's own service is unavailable). Change both to `info@mikia.co.nz` for launch.
- **Test before launch:** submit a feedback with a name and the "show on the website" box ticked, check the email, use the Approve link, confirm it shows in Testimonials, then delete the test entry in `/admin`.
- **Photos:** the carousel starts with stock photos. Replace them with real project photos in `/admin` (add the new ones, remove the stock ones).

## 3D, tour and designer
- `assets/house3d.js` is a bundled Three.js scene (about 550 KB, loaded only when the section is near the screen). It powers the "See it built" section (build timeline and a guided tour through the house) and the "Design your own" tool.
- The designer offers roof shape, cladding, colours, extras and time of day. Its options are typical New Zealand house styles and materials. It is not a list of council-approved designs: every house still needs building consent and may need resource consent. The page says so.

## Structure
`assets/style.css`, `assets/site.js` (menu), `assets/motion.js` (scroll and pointer effects), `assets/home.js` (hero animation), `assets/ui.js` (services index), `assets/v3d.js` and `assets/designer.js` (3D sections), `assets/form.js`, `assets/projects*.js`.
