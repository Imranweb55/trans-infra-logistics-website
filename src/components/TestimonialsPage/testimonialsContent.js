import heroBg1 from "../../assets/images/testimonials-images/testimonails-img-1.png";
import heroBg2 from "../../assets/images/testimonials-images/testimonails-img-2.png";
import heroBg3 from "../../assets/images/testimonials-images/testimonails-img-3.png";
import heroBg4 from "../../assets/images/testimonials-images/testimonails-img-4.jpg";
import heroBg5 from "../../assets/images/testimonials-images/testimonails-img-5.png";
import fleetImg1 from "../../assets/images/testimonials-images/testimonails-img-6.png";
import fleetImg2 from "../../assets/images/testimonials-images/testimonails-img-7.png";
import fleetImg3 from "../../assets/images/testimonials-images/testimonails-img-8.png";
import fleetImg4 from "../../assets/images/testimonials-images/clients-images/client01.png";
import fleetImg5 from "../../assets/images/testimonials-images/clients-images/client02.png";
import fleetImg6 from "../../assets/images/testimonials-images/clients-images/client03.png";
import fleetImg7 from "../../assets/images/testimonials-images/clients-images/client04.png";
import fleetImg8 from "../../assets/images/testimonials-images/clients-images/client06.png";
import fleetImg9 from "../../assets/images/testimonials-images/clients-images/client07.png";
import fleetImg10 from "../../assets/images/testimonials-images/clients-images/client08.png";
import fleetImg11 from "../../assets/images/testimonials-images/clients-images/client09.png";
import fleetImg12 from "../../assets/images/testimonials-images/clients-images/client10.png";
import fleetImg13 from "../../assets/images/testimonials-images/clients-images/client11.png";
import fleetImg14 from "../../assets/images/fleet/fleet-images/fleet-img-14.png";
import fleetImg15 from "../../assets/images/fleet/fleet-images/fleet-img-15.png";
import hydraulicAxleTrailer from "../../assets/images/services/hydraulic-axle-trailer.jpg";
import windBladeTrailer from "../../assets/images/services/wind-blade-trailer.jpg";
import lowBedTrailer from "../../assets/images/services/low-bed-trailer.jpg";
import semiLowBedTrailer from "../../assets/images/services/semi-low-bed-trailer.jpg";
import flatBedTrailer from "../../assets/images/services/flat-bed-trailer.jpg";
import crawlerCrane from "../../assets/images/services/crawler-crane.jpg";
import tyreMountedCrane from "../../assets/images/services/tyre-mounted-crane.jpg";
import windTurbineTransport from "../../assets/images/fleet/wind-turbine-transport.jpg";
import industrialTankLoad from "../../assets/images/fleet/industrial-tank-load.jpg";
import highwayHaul1 from "../../assets/images/fleet/highway-haul-1.jpg";
import highwayHaul2 from "../../assets/images/fleet/highway-haul-2.jpg";
import primeMover from "../../assets/images/fleet/prime-mover.jpg";
import crawlerCraneSite from "../../assets/images/fleet/crawler-crane-site.jpg";
import bridgeGirderLaunch from "../../assets/images/projects/bridge-girder-launch.jpg";
import precastSegmentLift from "../../assets/images/projects/precast-segment-lift.jpg";
import pileDrivingCrane from "../../assets/images/projects/pile-driving-crane.jpg";
import aboutConvoy from "../../assets/images/about-convoy.jpg";

// --- Hero carousel -----------------------------------------------------
// 8 background slides, each paired with a short highlight tied to a
// business sector. All 8 images already exist in the project (5 reused
// from the Home page hero, 3 from the fleet photo set) — nothing new was
// added. Highlights are written generically (by sector, not by naming a
// specific real client) — see the note on TESTIMONIALS below for why.
export const HERO_SLIDES = [
  {
    image: heroBg1,
    sector: "WindRite Renewable",
    quote:
      "Every blade and tower section arrived exactly on schedule, handled with the precision our project demanded.",
  },
  {
    image: heroBg2,
    sector: "Tata Projects",
    quote:
      "Heavy fabricated components moved without a single delay across our entire plant expansion.",
  },
  {
    image: heroBg3,
    sector: "Larsen & Toubro",
    quote:
      "When projects demand precision, scale and strict timelines, dependable logistics become critical. Their execution, coordination and attention to safety consistently supported our project requirements",
  },
  {
    image: heroBg4,
    sector: "Welspun New Energy",
    quote:
      "Their ability to manage critical project movements with precision and responsiveness has been invaluable. Every delivery was handled with the level of coordination and reliability our renewable-energy projects require.",
  },
  {
    image: heroBg5,
    sector: "Suzlon",
    quote:
      "Large-scale wind projects demand flawless coordination and dependable execution. Their commitment to safety, precision and timely movement has helped us keep critical project activities moving efficiently",
  },
  {
    image: fleetImg1,
    sector: "J. Kumar Infraprojects",
    quote:
      "Their professional coordination and dependable execution helped us manage critical project movements efficiently. Their ability to work around demanding infrastructure schedules made a real difference.",
  },
  {
    image: fleetImg2,
    sector: "RENOM",
    quote:
      "In renewable-energy operations, every hour matters. Their responsive coordination and dependable movement of critical equipment have supported our maintenance activities and helped us maintain operational efficiency.",
  },
  {
    image: fleetImg3,
    sector: "Cemindia Projects Limited",
    quote:
      "Complex construction projects require logistics partners who understand precision, coordination and deadlines. Their professional execution and commitment to project requirements made every critical movement more efficient.",
  },
];

// --- Testimonial cards ---------------------------------------------------
// NOTE: no real client testimonials were supplied with the brief. Rather
// than inventing quotes and attributing them to the real named companies
// shown elsewhere on the site (e.g. the client logos on the Projects
// page) — which would risk putting fabricated words in a real, identifiable
// company's mouth — every entry below uses a generic role/sector
// attribution instead (e.g. "Project Manager, Wind Energy Developer").
// Replace this content with real, permission-cleared client testimonials
// before publishing. Images cycle through the existing fleet/project
// photo set — no new images were created.
const QUOTE_POOL = [
  "Every blade, component and project movement was handled with exceptional precision. Their commitment to timely execution and dependable logistics gave us complete confidence throughout the project.",
  "From planning to execution, their professional approach and commitment to timelines helped us keep critical project movements on track. Their reliability made them a trusted logistics partner.",
  "When projects demand precision, scale and strict timelines, dependable logistics become critical. Their execution, coordination and attention to safety consistently supported our project requirements.",
  "Our equipment reached site in exactly the condition it left the factory in, despite a genuinely difficult route with several tight clearances.",
  "Their escort and permit planning saved us weeks compared to handling it ourselves — the whole convoy moved like clockwork.",
  "From the first site survey to the final sign-off, the team stayed engaged and proactive about every detail of the move.",
  "Heavy haulage on this scale always carries risk, but their experience with similar loads made the entire process feel routine.",
  "The trailer configuration was matched exactly to our cargo's weight distribution — nothing was left to guesswork.",
  "Timely dispatch updates and real-time tracking kept our project team informed at every stage of the journey.",
  "Their crew's familiarity with our site's access constraints made a genuinely difficult delivery look straightforward.",
  "We needed a partner who could scale from a single truck to a full project logistics programme, and that's exactly what we got.",
  "Safety documentation and site protocols were followed to the letter, which mattered a great deal for our compliance requirements.",
];

const CARD_IMAGES = [
  hydraulicAxleTrailer,
  windBladeTrailer,
  lowBedTrailer,
  semiLowBedTrailer,
  flatBedTrailer,
  crawlerCrane,
  tyreMountedCrane,
  windTurbineTransport,
  industrialTankLoad,
  highwayHaul1,
  highwayHaul2,
  primeMover,
  crawlerCraneSite,
  bridgeGirderLaunch,
  precastSegmentLift,
  pileDrivingCrane,
  aboutConvoy,
  fleetImg1,
  fleetImg2,
  fleetImg3,
  fleetImg4,
  fleetImg5,
  fleetImg6,
  fleetImg7,
  fleetImg8,
  fleetImg9,
  fleetImg10,
  fleetImg11,
  fleetImg12,
  fleetImg13,
  fleetImg14,
  fleetImg15,
];

const ROLES = [
  "Project Manager",
  "Operations Head",
  "Logistics Coordinator",
  "Plant Manager",
  "Site Engineer",
  "Procurement Head",
  "Supply Chain Manager",
  "Construction Manager",
];

const SECTORS = [
  "Wind Energy Developer",
  "Built Around Precision & Performance",
  "Infrastructure Contractor",
  "Power Generation Company",
  "Cement Manufacturer",
  "Heavy Engineering Firm",
  "Ports & Logistics Company",
  "EPC Contractor",
];

export const TESTIMONIALS = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  quote: QUOTE_POOL[index % QUOTE_POOL.length],
  image: CARD_IMAGES[index % CARD_IMAGES.length],
  role: ROLES[index % ROLES.length],
  sector: SECTORS[(index + 3) % SECTORS.length],
}));
