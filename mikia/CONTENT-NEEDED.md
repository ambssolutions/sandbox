# What we still need from MiKia

The site is built and works today. Anything below that is not supplied is simply hidden,
so nothing is made up. Send the items, and they go in without redesign.

Where each item goes:  **content.js** = `assets/content.js` (one file, plain text)
**projects.js** = `assets/projects.js`  |  **page** = needs a small edit to that page

## Home
| Need | Goes in |
|---|---|
| Headline and tagline (confirm current wording) | page: index |
| 3 to 4 selling points, with real numbers if they have them (years, projects) | page: Why MiKia section |
| 5 to 8 best project photos | projects.js + `projects/` |
| 2 to 3 client testimonials with name and suburb, and permission | content.js `testimonials` |
| Logos of accreditations and associations (SVG or PNG) | content.js `accreditations` |

## About
| Need | Goes in |
|---|---|
| Company story: who, when, why | content.js `story` |
| What makes them different (extra points) | content.js `difference` |
| Team names, roles, headshots, short bios | content.js `team` |
| Licences, certifications and insurance, with numbers they are happy to show | content.js `credentials` |
| Group photo or photos on site | content.js `teamPhoto` |

## Services (six pages exist)
For each service: any extra detail on what is included, typical process, typical size or budget range
if they will share it, 2 to 3 photos, and anything they do not do.  Goes in: `SERVICES` in the build, or send as text.

## Projects (6 to 12)
Title, suburb and year, type and size, the brief, the challenge and the result, 5 to 10 photos including
before and after, a client quote, and written permission to publish. Goes in: projects.js.

## Process
Typical timeframes, and warranty or guarantee wording. Goes in: page: how-we-work.

## Reviews
Written reviews with permission, and the Google reviews link. Goes in: content.js `testimonials`, `reviewsUrl`.

## Contact
Opening hours (`hours`), service areas (`serviceAreas`), where enquiries should be delivered and who replies
(form endpoint: see `assets/form.js`), and what they want from enquirers (currently: site, idea, timing, budget).

## Careers
Open roles, benefits and culture, how to apply. Goes in: content.js `careers`.

## FAQ
The ten questions on the site are a first draft written from the existing homepage. The client must check every
answer, especially timing, costs and what they do and do not do, then adjust or add questions.

## Blog or news
Skip unless the client will post regularly and has someone to write it.

## Legal and footer
Privacy policy (a draft is on the site; please have it reviewed), terms and conditions (needs the client's own
text), NZBN and company number (content.js `nzbn`, `companyNumber`), social links (content.js `social`).

## Brand and technical
Logo in vector format (SVG or AI) and colour codes, brand fonts (the site uses Fraunces, IBM Plex Sans and
IBM Plex Mono), domain registrar details and any existing hosting, Google Analytics and Business Profile
access, and the existing website URL if this is a rebuild.

## Version 2 (client feedback, Website design specs V1.0)

Everything is on one Our services page (no sub-pages). Services built with the client's copy: Three Waters, Earthwork / Retaining Wall / Erosion Sediment Control, Flood and Overland Flow Path, Tank Mitigation Design, Parking / Driveway / Manoeuvring, Stormwater Design (Version 2, with rain garden and wetland), On-site Wastewater Treatment Design.

Services still showing "details coming soon" (final copy needed for each):
- Civil: Detailed Feasibility Study, Public Road, Coastal Inundation
- Planning: Complimentary Online Meeting, Development Feasibility Report, Subdivision Assessment, Land Use Consent Assessment, Boundary Adjustment, Special Character Zone
- Survey: Topo, 223, Faulty Title, Boundary Adjustment
- Traffic: Traffic Report, PC79
- Project Management: Complete Subdivision Design (RC, BC, EPA), Construction Management, Stakeholder Consultation Management, Contract Management, Tender Design Management, Engineer's Representation Service
- Construction, COA (Certificate of Acceptance) and Neighbour's Consent (whole sections)
- About: Knowledge sharing

Other content still needed:
- Our Team: names, roles, bios and photos (assets/content.js, `team`).
- Client testimonials (assets/content.js, `testimonials`).
- Real project details and images (assets/projects.js).
- The service copy says "MIKIA Design and Construction Group"; the rest of the site says "MiKia Consulting Group". Confirm which name to use.
- Enquiry form emails info@mikia.co.nz for now; a shared Google Sheet / form service can replace it later (FORM_ENDPOINT in assets/form.js).
