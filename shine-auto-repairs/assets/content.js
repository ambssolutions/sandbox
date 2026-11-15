/* One source for Shine Auto Repairs' business facts. Every page reads from here.
   Empty values stay hidden on the site (data-need). Never fill a gap with a guess: see CONTENT-NEEDED.md. */
window.SITE = {
  name: "Shine Auto Repairs",
  phoneDisplay: "(02) 8798 5715",
  phoneTel: "+61287985715",
  mobile: { name: "Balli", display: "0433 597 181", tel: "+61433597181" },   // from the business card
  // Services, colours (orange #f39a36, red car #d9342b) and "Quality work guaranteed" come from the business card.
  email: "",                 // NEEDED: the address enquiries should go to
  formEndpoint: "",          // e.g. "https://api.web3forms.com/submit" once set up
  web3formsKey: "",
  address: ["Unit 4B, 4 Homepride Avenue", "Warwick Farm NSW 2170"],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Shine+Auto+Repairs+Warwick+Farm&query_place_id=ChIJ-YbkfgOVEmsRFlQ4039uDYI",
  timeZone: "Australia/Sydney",
  // [open, close] in 24h time, Monday first. null = closed. Source: Birdeye listing, checked 15 November 2026.
  hours: [["09:00","17:00"],["09:00","17:00"],["09:00","17:00"],["09:00","17:00"],["09:00","17:00"],["09:00","14:00"],null],
  rating: { value: "4.8", count: 57, source: "Birdeye", asAt: "15 November 2026" },
  testimonials: [],          // NEEDED: 2 real reviews, quoted with the reviewer's permission
  abn: "",                   // NEEDED
  logo: ""                   // NEEDED: vector logo (SVG). Until then the name is set in type.
};
