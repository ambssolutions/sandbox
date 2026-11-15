# Shine Auto Repairs website

One-page website for Shine Auto Repairs, a mechanic at Unit 4B, 4 Homepride Avenue, Warwick Farm NSW. Built from their Google listing and business card.

Preview: `python3 -m http.server` in this folder, then open http://localhost:8000.

## Pages
- `index.html`: inspection-bay hero with live open status and week strip, services ticker, services showcase (7 animated scenes), "Pink slip, blue slip or neither?" helper with the NSW fees, how a job goes (sticky stacked cards), rating, FAQ (slow folds), hours and address, enquiry form (hidden until an email is supplied), call band
- `privacy.html`, `404.html`

## Files
- `assets/content.js`: business facts, hours and reviews (one source)
- `assets/page.js`: menu, live open/closed status in Sydney time, today's hours, phone quick bar, services showcase, slip helper, FAQ folds, click-to-load map
- `assets/fonts/`: self-hosted Archivo and IBM Plex Sans
- `assets/site.js`: AMBS starter (hide-if-missing, enquiry form, reveals)
- `assets/site.css`: styles
- `BRIEF.md`, `CONTENT-NEEDED.md`, `CLAUDE.md`

## Things to finish before launch
- Everything in `CONTENT-NEEDED.md`, first of all confirming the hours
- Domain, then add canonical, og:url and sitemap.xml; set robots.txt to allow; remove the `noindex` meta tags
- Set up the form endpoint and send a real test enquiry
- Share image and a favicon from the real logo
- Run the Lighthouse speed check on the live site (preview, 15 Nov 2026: phone 99 / 100 / 100, laptop 100 / 100 / 100 for performance, accessibility, best practices; SEO 63 only because of noindex)
