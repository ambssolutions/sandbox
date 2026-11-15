# Shine Auto Repairs website: notes for Claude

Built by AMBS Solutions. Follow the **ambs-website-design** skill (and **website-chat-bot** if this site has the chat). These are the house rules that matter most for this owner.

## Working style
- Work locally and show screenshots or a short video first. Publish to the live site only when the owner says "push live".
- Never lose a working feature when changing things (form leads, booking, phone links). Start from the latest live version.
- Deploy only `main`.

## Design rules the owner always checks
- Everything fits the screen: 390×844 phones and 1280×720 / 1366×768 / 1440×900 / 1536×864 laptops. No overlapping text, and the hero fits the first screen.
- Centre-align section headings, intros, the hero, the footer and menus. Keep tick lists, FAQs, timelines and forms left-aligned.
- One type scale across all pages, with calm, readable fonts.
- Real logo (vector), and all accent colours taken from the logo. No glow, haloes, highlighter bands or white outer shadows.
- Native motion only: CSS sticky stacking cards (opaque, heading pinned, each card's number and title showing), slow smooth opens (~1.4s), no scroll-jacking or JS pinning, no count-ups, tilt or zoom. Respect reduced motion.
- Declutter: one headline and one main action in the hero; few cards, chips and arrows.
- Doesn't look AI-generated: plain Australian English (this client is in NSW), no em dashes, no exclamation marks, no hype words, no "X. One Y." headings, no eyebrow on every section.
- Real, sharp, uncropped photos (WebP with srcset). Smooth on phones: no live backdrop-blur.
- Header stays visible while scrolling. On phones, a small Call / Book bar that hides while the hero shows.
- Dark mode (if offered) built properly, including menus and overlays. It never switches by time of day.
- Forms really send. Contact details live in one place. Never invent facts: hide what the client hasn't supplied (`CONTENT-NEEDED.md`).
- Footer credit: "Proudly designed by AMBS Solutions".

## This site
- Design idea: "pressed metal". Embossed orange keys, brushed-steel plates with rivets, stamped numbers, keys that press in. The client asked for embossed, high-detail and unique. Signature: the 3D "Walk around a pink slip" bay. Details in BRIEF.md.
- Photos are AI illustrations, labelled on the page. Swap for real photos when supplied.
- NSW fees and rules are sourced from nsw.gov.au and dated. Re-check every 1 July.
- Stack: static HTML, CSS and JS, no build step. Preview with `python3 -m http.server` in this folder.
- Content lives in: `assets/content.js` (business facts, hours, reviews). Hours also appear in `index.html` (JSON-LD, the week strip, the hours table and the FAQ): change all together.
- Form endpoint: none yet. The enquiry form is hidden until `email` is set in content.js.
- Languages: English (Australia), `lang="en-AU"`. Phones shown as (02) 8798 5715, linked as tel:+61287985715.
- Things to finish before launch: see README.md
