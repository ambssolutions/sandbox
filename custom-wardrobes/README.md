# Custom Wardrobes website

A single-page site for Custom Wardrobes (@customwardrobes1singh on TikTok), with a room preview where visitors put a wardrobe, TV unit, feature wall or headboard on a photo of their own room.

Preview: from this folder run `python3 -m http.server`, then open http://localhost:8000.

## Pages
- `index.html`: home: hero, what we make, room preview, TikTok, how it works, questions, contact
- `privacy.html`, `404.html`

## Files
- `assets/content.js`: business facts in one place (phone, email, areas, form endpoint). Empty values stay hidden.
- `assets/designs.js`: the preview designs, finishes and trims. Each design is drawn to real proportions (0.5 px per mm).
- `assets/visualiser.js`: the room preview. The photo stays in the browser. The design is warped onto four draggable corners with WebGL, with a soft contact shadow, brightness and warmth. "Save image" exports a labelled JPG ("Illustrative preview").
- `assets/site.js`: menu, slow folds, form (endpoint, or text message fallback), TikTok loader (only on click), quick bar, reveals.
- `assets/site.css`: one stylesheet.
- `assets/img/`: hero photo (from the TikTok profile) and the sample room (an illustrative render made by `tools/sample-room.py`).

## Adding a design to the preview
Add an entry to `DESIGNS` in `assets/designs.js`: `id`, `label`, `count` (what the plus and minus buttons change), `finishes`, `trims`, `size(count)` in millimetres, an optional `lift` (mm off the floor), and `draw(ctx, W, H, opts)`.

## Things to finish before launch
See `CONTENT-NEEDED.md`. Then: domain, canonical and og:url, sitemap.xml, remove `noindex` (index.html, robots.txt, vercel.json), connect the form endpoint and send a real test enquiry, GA4 (and mention it on the privacy page), real logo and favicon, share image.
