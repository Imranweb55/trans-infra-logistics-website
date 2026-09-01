import windTurbineTransport from "../../assets/images/fleet/wind-turbine-transport.jpg";
import primeMover from "../../assets/images/fleet/prime-mover.jpg";
import windBladeTrailer from "../../assets/images/services/wind-blade-trailer.jpg";
import crawlerCraneSite from "../../assets/images/fleet/crawler-crane-site.jpg";
import bridgeGirderLaunch from "../../assets/images/projects/bridge-girder-launch.jpg";
import highwayHaul1 from "../../assets/images/fleet/highway-haul-1.jpg";
import tyreMountedCrane from "../../assets/images/services/tyre-mounted-crane.jpg";
import industrialTankLoad from "../../assets/images/fleet/industrial-tank-load.jpg";

// NOTE: no real published articles or press coverage were supplied with
// the brief. Every entry below is an example/placeholder — matching the
// reference design's structure and tone — and every "Read More" /
// "Read Article" link points to "#" for now. Replace the titles,
// excerpts and links with real article URLs once real content exists;
// do not treat these as actual published articles.
//
// Images: some slots in the reference show a ship, a plane, or a
// warehouse — we don't have photos of those in the existing asset set,
// so those specific cards below reuse the closest available road/crane
// photo instead (flagged inline). Everything else uses a genuinely
// matching existing image.

export const FEATURED_ARTICLE = {
  badge: "Industry News",
  date: "May 20, 2024",
  title: "Future of Logistics: 5 Key Trends Shaping the Industry in 2024",
  excerpt:
    "Discover the top logistics trends transforming global supply chains, from automation to sustainable transport solutions.",
  image: windTurbineTransport,
  href: "#",
};

export const TRENDING_ARTICLES = [
  {
    badge: "Company Update",
    date: "May 18, 2024",
    title:
      "Trans Infra Expands Heavy Haul Capabilities with New Fleet Addition",
    image: primeMover,
    href: "#",
  },
  {
    badge: "Industry News",
    date: "May 15, 2024",
    title: "Wind Energy Logistics: Challenges and Best Practices",
    image: windBladeTrailer,
    href: "#",
  },
  {
    badge: "Logistics Insight",
    date: "May 12, 2024",
    title: "How Technology is Driving Efficiency in Heavy Transport",
    image: crawlerCraneSite,
    href: "#",
  },
];

export const CATEGORIES = [
  { icon: "Newspaper", label: "Industry News", count: 24 },
  { icon: "Briefcase", label: "Company Updates", count: 18 },
  { icon: "Layers", label: "Logistics Insights", count: 22 },
  { icon: "Zap", label: "Transport Innovation", count: 16 },
  { icon: "Leaf", label: "Sustainability", count: 10 },
  { icon: "Award", label: "Events & Awards", count: 8 },
];

export const LATEST_UPDATES = [
  {
    date: "May 10, 2024",
    title: "India's Logistics Sector Set for Robust Growth in 2024",
    excerpt:
      "Government initiatives and infrastructure investments are driving unprecedented growth in the logistics industry.",
    image: bridgeGirderLaunch, // placeholder — reference shows a container ship
    href: "#",
  },
  {
    date: "May 08, 2024",
    title: "Green Logistics: Building a Sustainable Future",
    excerpt:
      "Sustainable transport solutions are not just a choice but a necessity for a better tomorrow.",
    image: highwayHaul1,
    href: "#",
  },
  {
    date: "May 05, 2024",
    title: "Air Cargo Trends: What to Expect in the Coming Years",
    excerpt:
      "Air freight continues to evolve with new technologies and changing global dynamics.",
    image: tyreMountedCrane, // placeholder — reference shows an aircraft
    href: "#",
  },
  {
    date: "May 02, 2024",
    title: "Warehouse Automation: The Future of Smart Logistics",
    excerpt:
      "Automation and AI are revolutionizing warehouse operations and supply chain management.",
    image: industrialTankLoad, // placeholder — reference shows a warehouse interior
    href: "#",
  },
];

// "In the Media" mentions — generic, illustrative publication names (not
// specific real, identifiable outlets). Replace with real coverage and
// real article links whenever Trans Infra Logistics is actually featured.
export const MEDIA_MENTIONS = [
  {
    name: "Logistics Today",
    description:
      "Trans Infra's innovative approach to heavy transport solutions.",
    href: "#",
  },
  {
    name: "Transport World",
    description: "Industry leaders driving India's logistics growth.",
    href: "#",
  },
  {
    name: "Cargo Digest",
    description: "Fleet expansion strengthening heavy haul capabilities.",
    href: "#",
  },
];
