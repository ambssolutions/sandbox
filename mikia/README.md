# MiKia Consulting Group website

A static multi-page website. No build step: open `index.html`, or deploy the folder as is (Vercel config included).

## Pages
`index`, `services`, six service pages, `how-we-work`, `residential`, `commercial`, `about`, `contact`, `privacy`, `404`.

## Things to finish before launch
- **Projects:** add real projects to `assets/projects.js`. Only add projects the client has permitted. The two images in `assets/projects/` are illustrative renders, not real projects.
- **Enquiry form:** set `FORM_ENDPOINT` in `assets/form.js` (for example a Formspree URL). While empty, the form opens the visitor's email app addressed to info@mikia.co.nz. Designs sent from the design tool arrive pre-filled in the message.
- **Copy:** service, about and privacy wording is drafted from the homepage text. Have the client check it. The privacy page needs a legal read.
- **Team:** add Neelam Gandhi's photo and bio, and other team members, to `about.html`.
- **Domain:** canonical URLs, `sitemap.xml` and `robots.txt` assume `https://www.mikia.co.nz`.
- **Analytics:** none is installed. If added, update the privacy page and consider a cookie notice.

## 3D, tour and designer
- `assets/house3d.js` is a bundled Three.js scene (about 550 KB, loaded only when the section is near the screen). It powers the "See it built" section (build timeline and a guided tour through the house) and the "Design your own" tool.
- The designer offers roof shape, cladding, colours, extras and time of day. Its options are typical New Zealand house styles and materials. It is not a list of council-approved designs: every house still needs building consent and may need resource consent. The page says so.

## Structure
`assets/style.css`, `assets/site.js` (menu), `assets/motion.js` (scroll and pointer effects), `assets/home.js` (hero animation), `assets/ui.js` (services index), `assets/v3d.js` and `assets/designer.js` (3D sections), `assets/form.js`, `assets/projects*.js`.

- The style presets in the designer (Villa, Californian bungalow, State house, Art Deco, Brick and tile, Mid-century, Contemporary, Townhouse, Bach, Lodge) are based on real New Zealand architectural periods and their typical features. They are illustrative, not copies of any specific plan, and not a list of council-approved designs.
