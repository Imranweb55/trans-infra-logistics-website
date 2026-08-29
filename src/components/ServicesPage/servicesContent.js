import { Layers, Truck, Construction, Wrench, Warehouse } from "lucide-react";
import hydraulicAxleTrailer from "../../assets/images/services/hydraulic-axle-trailer.jpg";
import crawlerCrane from "../../assets/images/services/crawler-crane.jpg";
import pileDrivingCrane from "../../assets/images/projects/pile-driving-crane.jpg";
import industrialTankLoad from "../../assets/images/fleet/industrial-tank-load.jpg";
import aboutConvoy from "../../assets/images/about-convoy.jpg";

// The 5 services shown as cards on this page and reachable directly from
// the Navbar's "Services" dropdown via the `param` value in the URL
// (e.g. /services?service=surface-transportation). Each has a related
// image (reused from the existing project assets — nothing new) and a
// detailed write-up shown in the centered detail panel below the cards.
export const SERVICE_SECTIONS = [
  {
    param: "overview",
    icon: Layers,
    title: "Services Overview",
    summary:
      "A complete, single-window logistics partner for heavy and oversized cargo.",
    image: aboutConvoy,
    detail: [
      "Trans Infra Logistics brings surface transportation, cranes & lifting equipment, mechanical erection and warehousing support together under one roof, so a single point of contact can plan and run your entire project move.",
      "From the first route survey to final placement at site, our team handles permits, escort coordination, load engineering and on-site supervision — reducing the number of vendors you need to manage and the risk of handoffs going wrong.",
      "Whether it's a single oversized shipment or a multi-month project logistics programme, we scale our fleet, cranes and manpower to match the job.",
    ],
  },
  {
    param: "surface-transportation",
    icon: Truck,
    title: "Surface Transportation",
    summary:
      "Hydraulic axle, low bed, semi low bed, flat bed and wind blade trailers for heavy road haulage.",
    image: hydraulicAxleTrailer,
    detail: [
      "Our surface transportation fleet covers hydraulic axle trailers with puller units, low bed and semi low bed mechanical trailers, flat bed trailers and extendable wind blade trailers — built to move heavy machinery, industrial equipment and oversized cargo safely on Indian highways.",
      "Every movement is planned around route surveys, statutory permits, escort vehicles and real-time tracking, so loads move on schedule and within regulation.",
      "Our drivers and route planners are experienced with the specific challenges of oversized convoys — tight turns, weak bridges, low overhead clearances — and plan around them well before the load leaves the yard.",
    ],
  },
  {
    param: "cranes-equipment",
    icon: Construction,
    title: "Cranes & Equipment",
    summary:
      "Crawler cranes and tyre mounted telescopic cranes for heavy lifts on site.",
    image: crawlerCrane,
    detail: [
      "We operate high-capacity crawler cranes for heavy lifts on construction and industrial sites, alongside tyre mounted telescopic cranes for faster mobilisation and quick-turnaround lifting jobs.",
      "Lifts are planned in advance — ground bearing checks, rigging plans and lift radius calculations — before any crane is mobilised to site, and every operation is run by trained, certified crane operators and riggers.",
      "Equipment is well maintained and regularly inspected, so it's ready to perform reliably even on demanding project timelines.",
    ],
  },
  {
    param: "erection",
    icon: Wrench,
    title: "Erection",
    summary:
      "Mechanical erection and precision placement for structural and industrial components.",
    image: pileDrivingCrane,
    detail: [
      "Our mechanical erection teams handle the precision installation and alignment of heavy structural and industrial components — from girder launching to precast segment placement — coordinating cranes, trailers and rigging crews as one unit.",
      "Each erection job is supervised on site, with load paths and lifting sequences planned around the specific structure being placed, not a one-size-fits-all approach.",
      "We work alongside client engineering teams throughout, so alignment, tolerances and sequencing meet the project's technical requirements.",
    ],
  },
  {
    param: "warehousing",
    icon: Warehouse,
    title: "Warehousing",
    summary:
      "Secure staging, handling and storage support for oversized and heavy cargo.",
    image: industrialTankLoad,
    detail: [
      "Before dispatch or after arrival, oversized and heavy cargo often needs a secure place to stage — our warehousing support covers short and medium-term storage, load consolidation and handling for project cargo.",
      "We coordinate inventory and dispatch scheduling with the rest of a project's logistics plan, so staged cargo moves out in the right sequence for site requirements.",
      "This is particularly useful for multi-shipment projects where components arrive at different times but need to reach site together.",
    ],
  },
];

export function getServiceByParam(param) {
  return (
    SERVICE_SECTIONS.find((service) => service.param === param) ||
    SERVICE_SECTIONS[0]
  );
}
