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
import heroFallback from "../../assets/images/hero-fallback.jpg";

// All existing project photos, pooled together so each service's carousel
// can pull a few "supporting" images beyond its own primary photo — no new
// images are added anywhere, every file here is already used elsewhere in
// the project.
const ALL_IMAGES = [
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
  heroFallback,
];

// Builds a per-service gallery: the service's own primary photo first,
// then 3 more pulled from the shared pool starting at a different offset
// for each service (based on its index) — so two services never show the
// exact same combination/order of supporting photos.
function buildGallery(primaryImage, offset) {
  const others = ALL_IMAGES.filter((img) => img !== primaryImage);
  const rotated = [
    ...others.slice(offset % others.length),
    ...others.slice(0, offset % others.length),
  ];
  return [primaryImage, ...rotated.slice(0, 3)];
}

// Comprehensive detail content per service, keyed by title (matches
// SERVICES in ../../data/transportData.js, which is left untouched).
export const SERVICE_DETAILS = {
  "Hydraulic Axle Trailers with Puller": {
    gallery: buildGallery(hydraulicAxleTrailer, 0),
    paragraphs: [
      "Our hydraulic axle trailers, paired with dedicated puller units, are built to handle some of the heaviest and most awkwardly shaped loads our clients need moved — industrial vessels, transformers, precast structures and other equipment that a standard trailer simply can't carry.",
      "Independent hydraulic suspension on each axle line lets the platform flex and self-level across uneven yards and road surfaces, keeping the load stable and evenly distributed across every axle. Steering axles allow the combination to navigate tight yard turns and highway curves that a rigid trailer couldn't manage.",
      "Every hydraulic axle movement is planned in advance — axle count, load spread and puller configuration are worked out from the cargo's exact weight and dimensions before the trailer is even mobilised to the loading site.",
    ],
  },
  "Extendable Wind Blade Trailers": {
    gallery: buildGallery(windBladeTrailer, 4),
    paragraphs: [
      "Wind turbine blades are long, awkward, and easily damaged if handled incorrectly — our extendable trailers are purpose-built to adjust their length to match the blade being carried, keeping it properly supported along its full span.",
      "A adjustable rear-steering dolly helps the blade tip track safely through junctions and roundabouts on the route, reducing the swing radius that such a long load would otherwise need.",
      "Our crews plan blade movements around route surveys that check overhead clearances, turning radii and road conditions well before the transport date, since a single blade run often needs a coordinated multi-vehicle escort.",
    ],
  },
  "Low Bed Mechanical Trailers": {
    gallery: buildGallery(lowBedTrailer, 8),
    paragraphs: [
      "Low bed trailers give us a significantly reduced deck height compared to standard trailers, which is exactly what's needed for tall, heavy machinery and oversized cargo that would otherwise exceed legal height limits on a normal flatbed.",
      "The lower centre of gravity also improves stability during transport, which matters for cargo like excavators, industrial presses and fabricated steel structures that can shift the trailer's balance if not properly secured.",
      "We match load-rated ramps, chaining points and securing methods to each specific cargo type, so equipment is locked down correctly for the entire route rather than relying on a one-size-fits-all approach.",
    ],
  },
  "Semi Low Bed Mechanical Trailers": {
    gallery: buildGallery(semiLowBedTrailer, 12),
    paragraphs: [
      "Semi low bed trailers sit between a full low bed and a standard flatbed — offering more ground clearance than a low bed while still keeping deck height low enough for medium-to-heavy loads that need a bit of stability without the full low-bed setup.",
      "This makes them a versatile choice for equipment moves where the site has uneven ground, ramps or loading docks that a very low deck height would struggle to clear.",
      "We deploy semi low bed trailers frequently for industrial equipment relocation and mid-sized structural components where flexibility on site conditions matters as much as load capacity.",
    ],
  },
  "Flat Bed Mechanical Trailers": {
    gallery: buildGallery(flatBedTrailer, 1),
    paragraphs: [
      "Flat bed trailers remain the workhorse of general cargo movement — reliable, durable, and straightforward to load and unload from any side, which is ideal for containers, palletised goods, and industrial materials that don't need a lowered deck.",
      "Because there's no complex ramp or hydraulic system involved, flatbeds are quick to mobilise and turn around, which keeps day-to-day cargo movement efficient across our regional routes.",
      "We run a mixed flatbed fleet sized for everything from single-pallet deliveries to full-length structural steel, matched to the job rather than defaulting to a single trailer size.",
    ],
  },
  "Crawler Cranes": {
    gallery: buildGallery(crawlerCrane, 5),
    paragraphs: [
      "Our crawler cranes handle the heaviest lifts on our project sites — foundation work, precast segment placement, and structural steel erection where a wheeled crane's ground pressure or reach simply wouldn't be enough.",
      "The tracked undercarriage spreads the crane's weight over a wide footprint, letting it work safely on softer ground conditions common at construction and infrastructure sites, without needing extensive ground preparation first.",
      "Every lift starts with a rigging plan — ground bearing checks, lift radius calculations, and load charts are reviewed before the crane ever picks up the load, and our operators are trained and certified specifically for heavy-lift crawler operations.",
    ],
  },
  "Tyre Mounted Telescopic Cranes": {
    gallery: buildGallery(tyreMountedCrane, 9),
    paragraphs: [
      "Tyre mounted telescopic cranes trade some of a crawler crane's raw capacity for speed — they can drive to site under their own power and be set up for a lift in a fraction of the time, which matters when a project has a tight lifting window.",
      "The telescopic boom extends and retracts to adjust reach and height on the fly, giving flexibility for jobs where the exact lift geometry might change once the crew is on site.",
      "We use these cranes for quick-turnaround lifts — equipment installation, short-duration structural placements, and jobs where multiple smaller lifts across a site make a crawler crane's slower mobilisation impractical.",
    ],
  },
};
