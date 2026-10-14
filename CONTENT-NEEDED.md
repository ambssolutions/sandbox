# What we still need from Jot

The site is built and works today. Send these and they go in without a redesign.

| Need | Goes in |
|---|---|
| Portrait photo (vertical, about 1000 x 1250, good light) | `assets/img/jot.webp` (replaces the JP monogram automatically) |
| Confirm mobile number (site uses 027 786 0004 from his homes.co.nz profile) | `index.html`: search `277860004` |
| Confirm email (site uses j.punia@barfoot.co.nz, inferred from his Barfoot profile URL) | `index.html`: `AGENT_EMAIL` and the mailto links |
| Confirm Instagram follower count (site says 12K+) | `index.html`: hero channel strip and origin stats |
| 4 to 8 of his own reels or listing photos, with permission | Story player, Series cards and Storyboard (replace stock images in `assets/img/`) |
| 2 to 4 more client reviews with name, suburb and permission | `#comments` thread |
| Languages he speaks (for example English, Punjabi, Hindi) | Origin story greeting chips |
| Web3Forms access key, if enquiries should arrive without the email app | `index.html`: `FORM_ENDPOINT` and `FORM_KEY` |
| Domain name | add `canonical`, `og:url` and a `sitemap.xml` |
