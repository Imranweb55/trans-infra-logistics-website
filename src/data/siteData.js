// Centralised, editable site content for Trans Infra Logistics.
// Update figures, copy and contact details here as the business grows —
// components pull from this file so there is a single source of truth.

export const COMPANY = {
  name: "Trans Infra Logistics",
  legalName: "Trans Infra and Logistics Pvt. Ltd.",
  tagline: "Powering progress. Delivering excellence.",
  // Real registered office, taken from the company signboard.
  address: {
    line1: "92/2C, Poonamallee Avadi Road, Veeraragavapuram",
    line2: "Near SA Engg. College, Thiruverkadu Post",
    line3: "Thiruvallur District, Chennai – 600077, Tamil Nadu",
  },
  phone: "044-2680 1883",
  // NOTE: no company email/WhatsApp number was supplied with the brief —
  // replace this placeholder with the real inbox before going live.
  email: "info@transinfralogistics.in",
  social: {
    facebook: "#",
    linkedin: "#",
    instagram: "#",
    youtube: "#",
  },
};

// Route-based nav (each label now points to its own page via React Router,
// instead of scrolling to a same-page anchor). Only Home has full content
// for now — the rest are placeholder pages ready for their own design.
export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Fleet", to: "/fleet" },
  { label: "Clients Projects", to: "/projects" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Careers", to: "/careers" },
  { label: "News", to: "/news" },
  { label: "Contact Us", to: "/contact" },
];

// Headline figures shown on the homepage stats bar. These mirror the
// supplied UI reference — replace with audited figures when available.
export const STATS = [
  { value: "30+", label: "Years of Experience" },
  { value: "1200+", label: "Fleet Strength" },
  { value: "3000+", label: "Projects Completed" },
  { value: "2000+", label: "Happy Clients" },
  { value: "24/7", label: "Support" },
];

export const WHY_CHOOSE_US = [
  "Specialized in heavy haulage & project logistics",
  "Custom engineered solutions for complex transportation",
  "End-to-end project handling with precision & care",
  "Commitment to safety, quality & on-time delivery",
  "Cost effective solutions with maximum reliability",
];

export const CORE_STRENGTHS = [
  {
    icon: "Truck",
    title: "Modern Fleet",
    description: "Advanced & well maintained equipment",
  },
  {
    icon: "Users",
    title: "Expert Team",
    description: "Experienced professionals ensuring safe operations",
  },
  {
    icon: "MapPin",
    title: "Pan India Network",
    description: "Strong presence across India & global reach",
  },
  {
    icon: "Clock",
    title: "Timely Delivery",
    description: "On-time, every time with reliable transport",
  },
  {
    icon: "ShieldCheck",
    title: "Safety First",
    description: "World class safety standards & protocols",
  },
];
