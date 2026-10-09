# AMBS Solutions short videos

Five vertical (9:16, 1080×1920, 22 s) "before → after" videos for Reels, TikTok, YouTube Shorts and LinkedIn.
Nobody appears on camera. Each one is an animated screen recording of a real kind of transformation, and each ends with a **comment keyword** call to action instead of "Contact us".

| # | File | Story | Keyword |
|---|------|-------|---------|
| 1 | `out/01-auto-invoices.mp4` | Copying jobs from Excel into invoice templates → invoices create, send and chase themselves | **AUTO** |
| 2 | `out/02-crm-leads.mp4` | Enquiries lost in an inbox and sticky notes → CRM pipeline with instant replies and follow-ups | **CRM** |
| 3 | `out/03-website-bookings.mp4` | Missed calls and phone tag → website that takes bookings into the calendar 24/7 | **WEBSITE** |
| 4 | `out/04-demo-quotes.mp4` | Quotes typed in Word at night → form builds the quote, customer accepts in one tap, job booked | **DEMO** |
| 6 | `out/06-refer-commission.mp4` | Referral program: refer a business and earn 10% commission, or refer yourself for 10% back (18 s) | **REFER** |
| 7 | `out/07-ambs-brand.mp4` | Brand video: what AMBS does (services from ambs.co.nz), how it works in 3 steps, trust points (26 s) | **HELP** |
| 8 | `out/08-automation-myths.mp4` | 4 automation myths vs truth (answers from the ambs.co.nz FAQ), website-green theme (26 s) | **HELP** |
| 5 | `out/05-help-reporting.mp4` | Monday copy-paste reporting → live dashboard and an auto-emailed weekly report | **HELP** |

Each video also has a `-cover.jpg` frame grab in `out/`. Videos 2 and 3 also have a designed thumbnail (`out/02-crm-leads-thumbnail.jpg`, `out/03-website-bookings-thumbnail.jpg`) with a bold headline and a before/after visual. Its sources are in `thumbnails/`, and `node thumbnails/render.mjs` re-renders it. Upload it as the custom cover when you post.

## Structure (same in every video)

| Time | What's on screen |
|------|------------------|
| 0–3 s | Hook, e.g. *"A business owner was doing this **manually** EVERY DAY…"*, over the manual process (spreadsheet, inbox, phone, Word). A red **MANUAL** badge. |
| 3–12 s | The automated version running, with a green **AUTOMATED** badge and live notifications. |
| 12–18 s | *"Now it happens **automatically.**"* plus the result (for example 2 hrs → 0 min). |
| 18–22 s | *"Want to know how?"*, then **Comment `AUTO` 👇**, with the keyword being typed into a comment box. |

**Voice-over:** every video has a narrator explaining the before, the after, the result and the call to action. The on-screen captions carry the same message, so it still works with the sound off. You can add quiet background music in the app when you post; keep it low under the voice.

**Branding:** the AMBS logo (from the AMBS website repo, `assets/ambs-logo.png`) sits top-left throughout and large on the end card, with `ambs.co.nz` underneath.

## Posting kit

### Captions (paste into the post)

**1 — AUTO**
> This business owner spent 2 hours every evening turning finished jobs into invoices. Now: job marked done → invoice created → emailed → reminder if unpaid. Zero typing.
> Want the same setup? Comment **AUTO** and I'll send you how it works 👇
> #smallbusinessnz #automation #nzbusiness #invoicing #tradiesnz

**2 — CRM**
> Leads were getting lost between the inbox, a spreadsheet and sticky notes. Now every enquiry lands in a pipeline, gets a reply in minutes and is followed up automatically.
> Comment **CRM** and I'll show you the setup 👇
> #crm #smallbusinessnz #salesprocess #nzbusiness #automation

**3 — WEBSITE**
> Missed calls = missed bookings. This website takes bookings by itself, straight into the calendar, with reminder texts. Even at 2am.
> Comment **WEBSITE** and I'll send examples and pricing 👇
> #websitedesign #nzbusiness #onlinebooking #smallbusinessnz #webdesignnz

**4 — DEMO**
> Customer fills a form → quote builds itself → sent → accepted on their phone → job booked and deposit invoiced. What used to take 3 days now takes 2 minutes.
> Comment **DEMO** for a 2-minute walkthrough 👇
> #quoting #tradiesnz #automation #smallbusinessnz #nzbusiness

**5 — HELP**
> Every Monday: 3 hours of copying numbers into a report. Now it's a live dashboard and the report emails itself at 8am.
> Not sure what to automate first? Comment **HELP** 👇
> #businessdashboard #smallbusinessnz #automation #reporting #nzbusiness

### Auto-reply to people who comment (set this up before posting)

The keyword only works if everyone who comments gets a fast reply. In ManyChat (Instagram/Facebook) or a similar tool, create one comment-keyword trigger per word. It sends a DM and a short public reply ("Sent you a DM 👋").

> Hey {first name}! Thanks for commenting **AUTO** 🙌
> Here's the quick version: we connect the tools you already use (spreadsheet, email, accounting) so finished jobs turn into sent invoices with no typing.
> Want me to look at your process and tell you what could be automated? Just reply with what takes up most of your week, or book 15 min here: {booking link}

Change the middle line for each keyword (CRM / WEBSITE / DEMO / HELP). On TikTok and LinkedIn, reply to the comments by hand for now.

### Tips

- Post the same file to Reels, TikTok, Shorts and LinkedIn. Pin the first comment with the keyword.
- Keep important text out of the bottom ~13% of the frame and the right edge, where the app's own buttons sit. The videos are already laid out for this.
- Before posting, swap in **real numbers from a real client** if you have them. The figures in these videos (2 hrs → 0, 3 days → 2 min, and so on) are illustrative examples.

## Editing and re-rendering

Each video is a self-contained HTML page in `videos/`, animated as a pure function of time by `engine/engine.js`, with styles in `engine/base.css`.

```bash
cd marketing-videos
npm install                      # Playwright (Chromium) — ffmpeg must be on PATH
pip install kokoro-onnx soundfile  # voice-over (model ~200 MB downloads to .tts/ on first render)
npx http-server . -p 8080        # preview at http://localhost:8080/videos/01-auto-invoices.html
                                 # (space = pause, ←/→ = jump 1 s)
node render.mjs                  # render all → out/*.mp4 + covers
node render.mjs 03               # render just one
```

- **Text, keyword, timings:** edit the `E.setup({...})` block at the bottom of each video (`captions`, `keyword`, `end.title`, `end.sub`).
- **Voice-over script:** the `voice` lines in the same block. Each line plays from `a` and is sped up slightly if needed to finish by `b`; the render log shows how each line fits. Spell out acronyms you want read as letters (`C R M`), and use a comma to add a pause (`Comment, auto`).
- **Voice:** `VOICE=am_michael node render.mjs` switches narrator (default `af_heart`, a natural US female voice; others: `af_bella`, `am_michael`, `bf_emma`, `bm_george`). `voice.py` uses Kokoro, an open-source TTS model that runs locally. To use your own recorded voice instead, put the recording in place of the generated track at the mux step in `render.mjs`.
- **Logo:** replace `assets/ambs-logo.png` (transparent PNG).
- **Brand colours:** change the CSS variables at the top of `engine/base.css`. Every video picks them up. For the light website-green look (matches ambs.co.nz), add `<link rel="stylesheet" href="../engine/theme-website.css">` after `base.css` in a video, as `videos/08-automation-myths.html` does.
- **New video:** copy the closest one in `videos/`, change the scene, then run `node render.mjs <name>`.
- Font: Inter (SIL Open Font License), bundled in `assets/`. Voice: Kokoro-82M (Apache-2.0).
