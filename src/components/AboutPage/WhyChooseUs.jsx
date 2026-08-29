import {
  CheckCircle2,
  ShieldCheck,
  Truck,
  Layers,
  Users,
  Clock,
} from "lucide-react";
import hydraulicAxleTrailer from "../../assets/images/services/hydraulic-axle-trailer.jpg";
import crawlerCrane from "../../assets/images/services/crawler-crane.jpg";
import precastSegmentLift from "../../assets/images/projects/precast-segment-lift.jpg";
import industrialTankLoad from "../../assets/images/fleet/industrial-tank-load.jpg";
import { STATS } from "../../data/siteData";

const STRENGTHS = [
  "Specialized in heavy haulage & project logistics",
  "Modern fleet with advanced technology",
  "Experienced professionals & skilled operators",
  "Pan India presence with strong network",
  "Customized solutions for complex requirements",
  "24/7 support with real-time tracking",
];

const GALLERY = [
  {
    src: hydraulicAxleTrailer,
    alt: "Hydraulic axle trailer carrying an oversized load",
  },
  { src: crawlerCrane, alt: "Crawler crane on a project site" },
  {
    src: precastSegmentLift,
    alt: "Flatbed trailer transporting a large precast steel structure",
  },
  {
    src: industrialTankLoad,
    alt: "Prime mover transporting an industrial tank",
  },
];

const STAT_ICONS = [ShieldCheck, Truck, Layers, Users, Clock];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr_0.8fr] lg:items-start">
          {/* Bullet list */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600">
              Our Strength
            </p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              Why Clients <span className="text-accent-500">Choose</span>
              <br />
              Trans Infra Logistics
            </h2>
            <ul className="mt-6 space-y-3">
              {STRENGTHS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-accent-500"
                  />
                  <span className="text-sm text-neutral-600 sm:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 gap-4">
            {GALLERY.map((photo) => (
              <div
                key={photo.src}
                className="h-40 overflow-hidden rounded-xl sm:h-48"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Stats sidebar */}
          <div className="rounded-2xl bg-navy-900 p-6 sm:p-7">
            <ul className="space-y-5">
              {STATS.map((stat, index) => {
                const Icon = STAT_ICONS[index % STAT_ICONS.length];
                // Reference design labels the last stat "Support Available" —
                // shown here without editing the shared STATS data source.
                const label =
                  stat.label === "Support" ? "Support Available" : stat.label;
                return (
                  <li key={stat.label} className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent-500">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-xl font-extrabold text-white sm:text-2xl">
                        {stat.value}
                      </p>
                      <p className="text-xs text-neutral-300 sm:text-sm">
                        {label}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
