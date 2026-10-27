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
- Motion (owner, 22 October 2026): yes to headlines rising once, photos fading up, the soft light sweep on buttons, and one signature moment per page (lights coming up, the gold line drawing, phones rising, a drawing turning into the photo, the studio switching its lights on). Carousels and stacking cards are wanted again (owner, 23 October 2026): use the shared `carousel()` (swipe on phones, arrows and a counter on laptops, never automatic) and `stack()` (opaque sticky cards, each number and title showing as the next stacks, plain list on short screens) from build.py. Still never: rotating or cycling text, sections that open and close (accordions, folds), book-opening or reveal-by-opening effects, count-ups, tilt, zoom, spinners or glow. Everything is shown in full. Slow and smooth, reduced motion respected, everything visible if scripts fail. Videos play only when tapped, except the cinematic hero videos (owner, 23 October 2026: cinematic video hero, 3D showroom, bold luxury editorial and a scroll light story are all wanted; see concept 06 Showroom, which takes its ideas from the MD Projects site). Light effects are quick and snappy (LEDs flick on in about a quarter second), never slow fades.
- Declutter: one headline and one main action in the hero; few cards, chips and arrows.
- Clean, tidy sections (owner, 22 October 2026): even grids with equal tiles (no staggered or ragged layouts), each photo used once per page, no template three-card "How it works", short pages. The wow is light: rooms that start dark, LEDs switching on, then the room lights coming up (night photos made by `tools/night.py`).
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
