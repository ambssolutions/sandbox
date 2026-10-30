/* ============================================================
   MiKia website content. Edit this file only; no code changes needed.
   Anything left empty is hidden from the site. Add only items the
   client has approved for publishing (reviews, photos, numbers).
   ============================================================ */
window.MIKIA = {
  // Contact details: change them here and they update on every page (header menu, Get in touch, Contact page, footer).
  contact: { email: "info@mikia.co.nz", phone: "+6421573085", phoneDisplay: "+64 21 573 085", address1: "1c, 32 Mahuhu Crescent", address2: "Auckland CBD 1010" },

  nzbn: "",                       // e.g. "9429000000000"
  companyNumber: "",              // NZ company number
  hours: "", // opening hours (shown on the contact page when filled in)
  serviceAreas: ["Auckland"],     // e.g. ["Auckland CBD","North Shore","South Auckland"]
  reviewsUrl: "",                 // link to Google reviews page
  social: { linkedin: "https://www.linkedin.com/company/mikiaconsultinggroup", facebook: "https://www.facebook.com/profile.php?id=61563658722446", instagram: "" },

  story: "",                      // 2 to 3 short paragraphs: who founded it, when and why. Separate paragraphs with a blank line.
  difference: [],                 // extra "what makes us different" points, e.g. ["Fixed-fee proposals"]

  team: [
    // { name: "", role: "", bio: "Two sentences.", photo: "assets/team/name.jpg" }
  ],
  teamPhoto: { src: "", alt: "" }, // group photo, e.g. { src: "assets/team/group.jpg", alt: "The MiKia team on site" }

  credentials: [
    // { name: "Licensed Cadastral Surveyor", detail: "Licence number or body", logo: "assets/logos/lcs.svg" }
  ],
  accreditations: [
    // { name: "Association name", logo: "assets/logos/name.svg", url: "https://..." }
  ],
  media: [
    // Photos of projects and YouTube videos shown on the home page. Leave empty to show the placeholder.
    // { type: "photo", src: "projects/name.jpg", alt: "Describe the photo", caption: "Optional caption" }
    // { type: "youtube", url: "https://www.youtube.com/watch?v=VIDEOID", title: "Video title" }
  ],

  testimonials: [
    // { quote: "What the client said.", name: "Client name", place: "Suburb", project: "Subdivision, 2025" }
  ],

  careers: {
    intro: "",                    // short "work with us" statement
    roles: [
      // { title: "Planner", type: "Full time", location: "Auckland CBD", summary: "Two sentences.", apply: "mailto:info@mikia.co.nz?subject=Planner" }
    ],
    benefits: []                  // e.g. ["Flexible hours", "Professional development"]
  }
};
