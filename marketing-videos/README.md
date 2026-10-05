# AMBS Solutions short videos

Five vertical (9:16, 1080×1920, 22 s) "before → after" videos for Reels, TikTok, YouTube Shorts and LinkedIn.
Nobody appears on camera. Each one is an animated screen recording of a real kind of transformation, and each ends with a **comment keyword** call to action instead of "Contact us".

| # | File | Story | Keyword |
|---|------|-------|---------|
| 1 | `out/01-auto-invoices.mp4` | Copying jobs from Excel into invoice templates → invoices create, send and chase themselves | **AUTO** |
| 2 | `out/02-crm-leads.mp4` | Enquiries lost in an inbox and sticky notes → CRM pipeline with instant replies and follow-ups | **CRM** |
| 3 | `out/03-website-bookings.mp4` | Missed calls and phone tag → website that takes bookings into the calendar 24/7 | **WEBSITE** |
| 4 | `out/04-demo-quotes.mp4` | Quotes typed in Word at night → form builds the quote, customer accepts in one tap, job booked | **DEMO** |
| 5 | `out/05-help-reporting.mp4` | Monday copy-paste reporting → live dashboard and an auto-emailed weekly report | **HELP** |

Each video also has a `-cover.jpg` thumbnail in `out/`.

## Structure (same in every video)

| Time | What's on screen |
|------|------------------|
| 0–3 s | Hook, e.g. *"A business owner was doing this **manually** EVERY DAY…"*, over the manual process (spreadsheet, inbox, phone, Word). A red **MANUAL** badge. |
| 3–12 s | The automated version running, with a green **AUTOMATED** badge and live notifications. |
| 12–18 s | *"Now it happens **automatically.**"* plus the result (for example 2 hrs → 0 min). |
| 18–22 s | *"Want to know how?"*, then **Comment `AUTO` 👇**, with the keyword being typed into a comment box. |

The video has no voice-over and every line is on screen, so it works with the sound off. A silent audio track is included so every platform accepts the upload. **Add a trending sound inside the app when you post.** That helps reach.

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
npx http-server . -p 8080        # preview at http://localhost:8080/videos/01-auto-invoices.html
                                 # (space = pause, ←/→ = jump 1 s)
node render.mjs                  # render all → out/*.mp4 + covers
node render.mjs 03               # render just one
```

- **Text, keyword, timings:** edit the `E.setup({...})` block at the bottom of each video (`captions`, `keyword`, `end.title`, `end.sub`).
- **Brand colours:** change the CSS variables at the top of `engine/base.css`. Every video picks them up.
- **New video:** copy the closest one in `videos/`, change the scene, then run `node render.mjs <name>`.
- Font: Inter (SIL Open Font License), bundled in `assets/`.
