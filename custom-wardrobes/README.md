# Custom Wardrobes website

Website for Custom Wardrobes (Singh, Auckland): TV and media walls, prayer units, carved backlit panels, feature walls, bedrooms and wardrobes. Built by AMBS Solutions.

Preview: `python3 -m http.server`, then open http://localhost:8000.

## Pages
- `index.html`: hero with three arches of real builds (muted video loops), recent builds rail, "From a bare wall" video, what we make, room preview, how it works, follow the builds, questions, contact
- `gallery.html`: every build, filters by type, lightbox (swipe, arrow keys)
- `privacy.html`, `404.html`

## Files
- `assets/content.js`: business facts (phone, socials, area, email, form endpoint). Empty values stay hidden.
- `assets/projects.js`: every project and its photos. Read by the home rail, the gallery and the lightbox.
- `assets/tiles.js`: builds the project tiles before first paint (no layout shift).
- `assets/designs.js`: room preview designs in four groups (TV walls, prayer and art, walls and bedroom, wardrobes). "Real build" designs are photos of his work; the rest are drawn to real sizes using textures from his builds.
- `assets/visualiser.js`: the room preview. The photo stays in the browser; the design is warped onto four draggable corners with WebGL.
- `assets/site.js`: menu, folds, lightbox, rail, filters, videos, form (endpoint, or text message fallback), TikTok loader, quick bar, reveals.
- `assets/site.css`: one stylesheet.
- `tools/build-media.py`: rebuilds photos, clips, cut-outs and textures from the downloaded social media files. `tools/sample-room.py` draws the sample room.

## Adding a project
Add photos with `tools/projects-media.json` and `tools/build-media.py`, then add the project to `assets/projects.js` (title, type, text, and alt text for each photo).

## Things to finish before launch
See `CONTENT-NEEDED.md`: permission for the photos, logo, email and form endpoint (then send a real test enquiry), domain (canonical, og:url, sitemap.xml), then remove `noindex` from the pages, `robots.txt` and `vercel.json`. Offer GA4 and mention it on the privacy page.
