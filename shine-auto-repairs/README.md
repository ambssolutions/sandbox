# Shine Auto Repairs website

One-page website for Shine Auto Repairs, a mechanic at Unit 4B, 4 Homepride Avenue, Warwick Farm NSW. Built from their Google listing and business card.

Preview: `python3 -m http.server` in this folder, then open http://localhost:8000.

## Pages
- `index.html`: services, what to have ready when you call, rating, hours and address, enquiry form (hidden until an email is supplied), call band
- `privacy.html`, `404.html`

## Files
- `assets/content.js`: business facts, hours and reviews (one source)
- `assets/page.js`: menu, live open/closed status in Sydney time, today's hours, phone quick bar, click-to-load map
- `assets/site.js`: AMBS starter (hide-if-missing, enquiry form, reveals)
- `assets/site.css`: styles
- `BRIEF.md`, `CONTENT-NEEDED.md`, `CLAUDE.md`

## Things to finish before launch
- Everything in `CONTENT-NEEDED.md`, first of all confirming the hours
- Domain, then add canonical, og:url and sitemap.xml; set robots.txt to allow; remove the `noindex` meta tags
- Set up the form endpoint and send a real test enquiry
- Share image and a favicon from the real logo
- Run the Lighthouse speed check on the live site
