import {
  Settings2,
  Truck,
  Wind,
  Layers,
  Construction,
  ArrowUpFromLine,
  PackageSearch,
  Warehouse,
} from "lucide-react";
import hydraulicAxleTrailer from "../../assets/images/services/hydraulic-axle-trailer.jpg";
import primeMover from "../../assets/images/fleet/prime-mover.jpg";
import windBladeTrailer from "../../assets/images/services/wind-blade-trailer.jpg";
import windTurbineTransport from "../../assets/images/fleet/wind-turbine-transport.jpg";
import lowBedTrailer from "../../assets/images/services/low-bed-trailer.jpg";
import semiLowBedTrailer from "../../assets/images/services/semi-low-bed-trailer.jpg";
import flatBedTrailer from "../../assets/images/services/flat-bed-trailer.jpg";
import highwayHaul1 from "../../assets/images/fleet/highway-haul-1.jpg";
import highwayHaul2 from "../../assets/images/fleet/highway-haul-2.jpg";
import heroFallback from "../../assets/images/hero-fallback.jpg";
import crawlerCrane from "../../assets/images/services/crawler-crane.jpg";
import tyreMountedCrane from "../../assets/images/services/tyre-mounted-crane.jpg";
import crawlerCraneSite from "../../assets/images/fleet/crawler-crane-site.jpg";
import pileDrivingCrane from "../../assets/images/projects/pile-driving-crane.jpg";
import precastSegmentLift from "../../assets/images/projects/precast-segment-lift.jpg";

// The reference UI lists 15 fleet categories. We only have photos of our
// road-haulage trailers and cranes on hand — there's no dedicated photo yet
// for Manlifts, Forklift Trucks, Reach Trucks or LCVs, so those four reuse
// the closest available site/road photos as a placeholder. Swap those four
// (marked below) for real photos whenever they're available; every other
// entry uses a genuinely matching existing image.
export const FLEET_ITEMS = [
  {
    icon: Settings2,
    title: "Hydraulic Axles",
    count: "90 nos",
    image: hydraulicAxleTrailer,
  },
  {
    icon: Truck,
    title: "Pullers",
    count: "25 nos",
    image: primeMover,
  },
  {
    icon: Wind,
    title: "Windmill Blade Telescopic Trailers",
    count: "50 nos",
    image: windBladeTrailer,
  },
  {
    icon: Wind,
    title: "Windmill Tower Trailers",
    count: "50 nos",
    image: windTurbineTransport,
  },
  {
    icon: Layers,
    title: "Low Bed Trailers",
    count: "25 nos",
    image: lowBedTrailer,
  },
  {
    icon: Layers,
    title: "Semi Low Bed Trailers",
    count: "20 nos",
    image: semiLowBedTrailer,
  },
  {
    icon: Layers,
    title: "High Bed Trailers",
    count: "30 nos",
    image: flatBedTrailer,
  },
  {
    icon: Truck,
    title: "Trucks",
    count: "50 nos",
    image: highwayHaul1,
  },
  {
    icon: Truck,
    title: "Platform Trucks",
    count: "30 nos",
    image: highwayHaul2,
  },
  {
    icon: Truck,
    title: "LCVs",
    count: "60 nos",
    image: heroFallback, // placeholder — no dedicated LCV photo available yet
  },
  {
    icon: Construction,
    title: "Crawler Cranes of Different Capacities",
    count: "35 nos",
    image: crawlerCrane,
  },
  {
    icon: Construction,
    title: "Tyre Mounted Cranes of Different Capacities",
    count: "30 nos",
    image: tyreMountedCrane,
  },
  {
    icon: ArrowUpFromLine,
    title: "Manlifts",
    count: "12 nos",
    image: crawlerCraneSite, // placeholder — no dedicated manlift photo available yet
  },
  {
    icon: PackageSearch,
    title: "Forklift Trucks",
    count: "15 nos",
    image: pileDrivingCrane, // placeholder — no dedicated forklift photo available yet
  },
  {
    icon: Warehouse,
    title: "Reach Trucks",
    count: "9 nos",
    image: precastSegmentLift, // placeholder — no dedicated reach truck photo available yet
  },
];

// Top summary stat cards ("Below is the list of our current fleet").
export const FLEET_SUMMARY = [
  { icon: Settings2, value: "90", label: "Hydraulic Axles" },
  { icon: Truck, value: "25", label: "Pullers" },
  { icon: Layers, value: "175", label: "Trailers" },
  { icon: Truck, value: "140", label: "Trucks" },
];
