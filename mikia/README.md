# MiKia Consulting Group website

A static multi-page website built from the supplied homepage. No build step: open `index.html` or deploy the folder as is (Vercel config included).

## Pages
`index`, `services`, six service pages (`project-management`, `planning`, `land-surveying`, `engineering`, `environmental`, `landscape-architecture`), `how-we-work`, `residential`, `commercial`, `about`, `contact`, `privacy`, `404`.

## Things to finish before launch
- **Projects:** add real projects to `assets/projects.js`. Until then the Residential and Commercial pages show a "coming soon" message. Only add projects the client has given permission to publish.
- **Enquiry form:** set `FORM_ENDPOINT` in `assets/form.js` (for example a Formspree URL). While empty, the form opens the visitor's email app addressed to info@mikia.co.nz.
- **Copy:** service, about and privacy wording is drafted from the homepage text. Have the client check it. The privacy page needs a legal read before launch.
- **Team:** add Neelam Gandhi's photo and bio, and any other team members, to `about.html`.
- **Photos:** the homepage project tiles are plan illustrations. Swap in real photos once supplied.
- **Domain:** canonical URLs, `sitemap.xml` and `robots.txt` assume `https://www.mikia.co.nz`.
- **Analytics:** none is installed. If added, update the privacy page and consider a cookie notice.

## Structure
`assets/style.css` (original styles plus the multi-page additions), `assets/site.js` (menu, year, stage line), `assets/home.js` (hero animation), `assets/form.js`, `assets/projects*.js`.
