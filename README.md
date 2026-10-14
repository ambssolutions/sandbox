# Jot Punia: personal real estate site

Single-page site for **Jot Punia**, Residential Sales at Barfoot & Thompson in South Auckland.

The concept is built around Jot as a content creator. The site works like his channel:

- **Intro:** a film-leader countdown.
- **Hero:** a tappable Stories player, with a poll sticker that pre-fills the enquiry.
- **Your listing:** "every listing gets its own series", shown as episode cards.
- **How I sell:** the sale as a storyboard of sticky stacked scene cards (native CSS sticky, no scroll-jacking).
- **Suburbs:** a "Location scout" explorer.
- **Comments:** reviews shown as a comment thread.
- **Enquiry:** a DM-style appraisal form.
- **Footer:** a "That's a wrap." credits roll.

## Files

- `index.html`: the whole site (inline CSS and JS, no build step)
- `assets/vendor/`: self-hosted GSAP 3.12.5, ScrollTrigger and Lenis 1.1.13
- `assets/img/`: imagery in `-800` and `-1400` webp sizes (illustrative stock photos from Unsplash)
- `privacy.html`: Privacy Act 2020 statement, linked from the form and the footer
- `404.html`, `robots.txt`, `vercel.json` (main-only deploys, clean URLs, security headers)
- `COMPLIANCE.md`: how the site meets REAA 2008 / Code of Conduct, Fair Trading Act, Privacy Act and WCAG 2.2 AA, and what still needs sign-off

Preview locally: `python3 -m http.server`, then open http://localhost:8000.

## Things to finish before launch

See `CONTENT-NEEDED.md` (the compliance sign-off table comes first). The appraisal form opens the visitor's email app until a `FORM_ENDPOINT` is set.
