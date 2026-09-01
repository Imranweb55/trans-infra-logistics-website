import {
  Wind,
  Factory,
  Construction,
  Ship,
  Zap,
  Building2,
  Landmark,
} from "lucide-react";
import windTurbineTransport from "../../assets/images/fleet/wind-turbine-transport.jpg";
import industrialTankLoad from "../../assets/images/fleet/industrial-tank-load.jpg";
import crawlerCrane from "../../assets/images/services/flat-bed-trailer.jpg";
import highwayHaul1 from "../../assets/images/services/flat-bed-trailer.jpg";
import pileDrivingCrane from "../../assets/images/projects/pile-driving-crane.jpg";
import flatBedTrailer from "../../assets/images/services/flat-bed-trailer.jpg";
import bridgeGirderLaunch from "../../assets/images/projects/bridge-girder-launch.jpg";

// Content for the "Business Sectors" nav dropdown (About Us > Business
// Sectors > ...). Each sector reuses an existing project photo — no new
// images were added — and has its own comprehensive write-up shown in the
// detail panel when selected.
export const BUSINESS_SECTORS = [
  {
    param: "wind-energy",
    icon: Wind,
    title: "Wind Energy",
    image: windTurbineTransport,
    paragraphs: [
      "Wind energy components — blades, tower sections and nacelles — are some of the most demanding cargo we move, combining awkward dimensions with tight tolerances for damage. Our extendable trailers and experienced route-planning teams are built around exactly this kind of load.",
      "We work closely with turbine manufacturers and site EPC contractors from the factory gate to the foundation, coordinating permits, escorts and site access for what is often a multi-vehicle convoy operation.",
      "As India's wind capacity continues to grow, we've built up route knowledge across the wind corridors where this equipment typically needs to travel, reducing planning time on repeat projects.",
    ],
  },
  {
    param: "steel-plants",
    icon: Factory,
    title: "Steel Plants",
    image: industrialTankLoad,
    paragraphs: [
      "Steel plant logistics involves heavy, dense cargo — furnace components, rolling mill equipment, and fabricated structural sections — that demand precise weight distribution and a trailer fleet rated for the load.",
      "We support both greenfield plant construction, where large equipment needs to be delivered to site in a defined sequence, and ongoing operational logistics for plants that need reliable, repeat heavy transport.",
      "Our crews are experienced with the industrial site access, loading dock constraints and safety protocols that steel plant environments require.",
    ],
  },
  {
    param: "heavy-engineering",
    icon: Construction,
    title: "Heavy Engineering",
    image: crawlerCrane,
    paragraphs: [
      "Heavy engineering projects often combine transport and lifting in the same job — moving fabricated equipment to site and then placing it precisely with a crane. Our combined trailer and crawler crane capability lets us handle both ends of that job.",
      "We support equipment relocation, plant machinery installation and structural component placement for engineering firms that need a logistics partner who understands the technical side of the work, not just the haulage.",
      "Lift and transport plans are engineered together for heavy engineering jobs, so the trailer configuration and crane setup are matched from the start rather than solved separately.",
    ],
  },
  {
    param: "imports-exports",
    icon: Ship,
    title: "Imports & Exports",
    image: highwayHaul1,
    paragraphs: [
      "For import and export cargo, the road transport leg between port, rail yard and final site is often the most logistically complex part of the journey — especially for oversized or heavy machinery that needs specialised handling once it clears customs.",
      "We coordinate first- and last-mile heavy haulage for import/export shipments, managing route permits and escort planning for the inland leg of the journey.",
      "Our team works alongside freight forwarders and customs handling agents to keep cargo moving on schedule once it's ready for inland transport.",
    ],
  },
  {
    param: "power-plants",
    icon: Zap,
    title: "Power Plants",
    image: pileDrivingCrane,
    paragraphs: [
      "Power plant construction and maintenance calls for moving some of the heaviest single-piece loads in industry — turbines, generators, transformers and boiler components — often on tight commissioning schedules.",
      "We plan these movements around the plant's construction sequence, coordinating with site engineering teams so heavy equipment arrives exactly when it's needed for installation.",
      "Both greenfield power plant builds and brownfield maintenance/upgrade projects are within our scope, with crane support available for on-site placement once equipment arrives.",
    ],
  },
  {
    param: "cement-plants",
    icon: Building2,
    title: "Cement Plants",
    image: flatBedTrailer,
    paragraphs: [
      "Cement plants rely on continuous, dependable logistics — for both the heavy equipment used in plant construction and the ongoing movement of machinery, spares and industrial materials during operations.",
      "We support cement plant projects with a mix of flatbed, low bed and specialised trailers sized to the specific equipment being moved, from kiln sections to conveyor systems.",
      "Reliable scheduling matters as much as raw capacity in this sector, since plant downtime during equipment changeovers or maintenance windows is costly — our dispatch planning is built around minimising that downtime.",
    ],
  },
  {
    param: "infrastructure",
    icon: Landmark,
    title: "Infrastructure",
    image: bridgeGirderLaunch,
    paragraphs: [
      "Infrastructure projects — bridges, highways, metro corridors and other large civil works — need heavy transport and lifting support that can work around live construction sites and tight project timelines.",
      "We've supported precast girder launching, segment placement and heavy structural moves for infrastructure contractors, coordinating cranes and trailers as one integrated team rather than separate vendors.",
      "As India's infrastructure pipeline continues to expand, we've built the fleet and crew experience to support large-scale civil projects from foundation work through to final structural placement.",
    ],
  },
];

export function getSectorByParam(param) {
  return BUSINESS_SECTORS.find((sector) => sector.param === param) || null;
}
