# Custom Wardrobes website: notes for Claude

Built by AMBS Solutions. Follow the **ambs-website-design** skill (and **website-chat-bot** if this site has the chat). These are the house rules that matter most for this owner.

## Working style
- Work locally and show screenshots or a short video first. Publish to the live site only when the owner says "push live".
- Never lose a working feature when changing things (form leads, booking, phone links). Start from the latest live version.
- Deploy only `main`.

## Design rules the owner always checks
- Everything fits the screen: 390×844 phones and 1280×720 / 1366×768 / 1440×900 / 1536×864 laptops. No overlapping text, and the hero fits the first screen.
- Centre-align every section from the first draft: headings, intros, paragraphs, cards, captions, contact details, buttons (alone or as a centred row), the hero, the footer and menus. Only FAQs, form fields, the catalogue list and the studio tools stay left-aligned. Run `node tools/align-check.mjs` (with `python3 -m http.server 8124`) and get TOTAL 0 before showing anything.
- One type scale across all pages, with calm, readable fonts.
- Real logo (vector), and all accent colours taken from the logo. No glow, haloes, highlighter bands or white outer shadows.
- No animation on this site (owner's rule, 22 October 2026): no reveals, no stacking cards, no carousels or sliders, no drawing or scroll effects, no hover zoom. Sections open instantly. Videos play only when tapped. The room studio is the interactive feature.
- Declutter: one headline and one main action in the hero; few cards, chips and arrows.
- Doesn't look AI-generated: plain NZ English, no em dashes, no exclamation marks, no hype words, no "X. One Y." headings, no eyebrow on every section.
- Real, sharp, uncropped photos (WebP with srcset). Smooth on phones: no live backdrop-blur.
- Header stays visible while scrolling. On phones, a small Call / Book bar that hides while the hero shows.
- Dark mode (if offered) built properly, including menus and overlays. It never switches by time of day.
- Forms really send. Contact details live in one place. Never invent facts: hide what the client hasn't supplied (`CONTENT-NEEDED.md`).
- Footer credit: "Proudly designed by AMBS Solutions".

## This site
- Stack: static HTML, CSS and JS, no build step. Vercel with cleanUrls.
- Content lives in: assets/content.js (business facts), assets/projects.js (projects and photos), assets/designs.js (room preview designs). Real facts in BRIEF.md.
- Concepts: /concepts (gallery) and concepts/designs/NN-slug, built by `python3 concepts/tools/build.py`. The room studio is assets/studio.js + studio.css.
- Form endpoint: not set yet. Falls back to a text message to 020 4149 8811.
- Languages: English (NZ).
- Things to finish before launch: see README.md
