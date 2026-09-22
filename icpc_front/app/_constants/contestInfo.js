// Single source of truth for contest facts shown across the site.
// Update here — every section (hero, scoreboard, dates, sub-pages) reads from this file.

export const contestInfo = {
  year: "2026",
  regionalName: "ICPC Asia Amritapuri Regional 2026",
  onsiteSlots: "380",
  onsiteSlotsLabel: "Total Onsite Slots",
  womenOnsiteSlots: "20",
  womenOnsiteSlotsLabel: "Women Onsite Slots",
  prizePool: "₹3 Lakhs",
  prizePoolShort: "₹3L",
  prizePoolLabel: "Prize Pool",
  hostCitiesCount: "4",
  hostCitiesLabel: "Host Cities",
  hostCities: ["Kollam", "Bengaluru", "Coimbatore", "Mysuru"],
  teamSize: "3",
  registrationFee: "₹1,500",
  contactEmail: "icpc@am.amrita.edu",
  contactWhatsapp: "80890 62917",
  contactWhatsappUrl: "https://wa.me/918089062917",
  yearsRunning: "13+",

  mockContestDate: "25 September 2026",
  paymentDeadline: "27th September 2026",
  registrationDeadlineISO: "2026-09-25T00:00:00+05:30",

  registrationUrl:
    "https://icpc.global/login?redirect_uri=/private/teamRegistration/site/40197",
  undertakingUrl: "https://indiaicpc.in/#undertaking",

  dates: [
    { title: "Registration opens", date: "15 June 2026", status: "Upcoming" },
    { title: "Registration closes", date: "25 September 2026", status: "Deadline" },
    { title: "Preliminary round", date: "3 October 2026", time: "1:30 PM – 4:30 PM", status: "Online contest" },
    { title: "Regional onsite", date: "1–2 January 2027", status: "4 host cities" },
    { title: "Asia West Championship", date: "TBA", status: "Continental" },
    { title: "ICPC World Finals", date: "TBA", status: "Global final" },
  ],
};
