import { Wind, Factory, Construction, ShieldCheck } from "lucide-react";
import windBladeTrailer from "../../assets/images/services/wind-blade-trailer.jpg";
import industrialTankLoad from "../../assets/images/fleet/industrial-tank-load.jpg";
import crawlerCraneSite from "../../assets/images/fleet/crawler-crane-site.jpg";
import highwayHaul1 from "../../assets/images/fleet/highway-haul-1.jpg";

// The 4 project category cards. Each reuses an existing project photo —
// no new images were added.
export const PROJECT_CATEGORIES = [
  {
    icon: Wind,
    title: "Wind Energy Projects",
    description:
      "Transportation of wind turbine blades, towers and nacelle across India using specialized trailers.",
    image: windBladeTrailer,
  },
  {
    icon: Factory,
    title: "Industrial Projects",
    description:
      "Movement of heavy machinery, industrial components and plant equipment with precision.",
    image: industrialTankLoad,
  },
  {
    icon: Construction,
    title: "Infrastructure Projects",
    description:
      "Supporting infrastructure development with reliable logistics for large-scale equipment and structures.",
    image: crawlerCraneSite,
  },
  {
    icon: ShieldCheck,
    title: "Specialized Transport",
    description:
      "Handling oversized, over-dimensional and heavy cargo with advanced transport solutions.",
    image: highwayHaul1,
  },
];
