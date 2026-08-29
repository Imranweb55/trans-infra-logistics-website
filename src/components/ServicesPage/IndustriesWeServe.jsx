import { CheckCircle2 } from "lucide-react";
import { Building2, Fuel, Wind, Factory } from "lucide-react";
import bridgeGirderLaunch from "../../assets/images/projects/bridge-girder-launch.jpg";
import industrialTankLoad from "../../assets/images/fleet/industrial-tank-load.jpg";
import windTurbineTransport from "../../assets/images/fleet/wind-turbine-transport.jpg";
import crawlerCraneSite from "../../assets/images/fleet/crawler-crane-site.jpg";

const SECTORS = [
  "Infrastructure & Construction",
  "Oil & Gas",
  "Power & Energy",
  "Wind Energy",
  "Manufacturing & Steel",
  "Mining & Heavy Engineering",
];

const INDUSTRY_CARDS = [
  {
    icon: Building2,
    title: "Infrastructure & Construction",
    description:
      "Supporting mega projects with safe and efficient heavy transportation solutions.",
    image: bridgeGirderLaunch,
  },
  {
    icon: Fuel,
    title: "Oil & Gas",
    description:
      "Reliable logistics support for exploration, drilling and pipeline projects.",
    image: industrialTankLoad,
  },
  {
    icon: Wind,
    title: "Wind Energy",
    description:
      "Specialized trailers for the safe transport of wind turbine components.",
    image: windTurbineTransport,
  },
  {
    icon: Factory,
    title: "Heavy Engineering",
    description:
      "Moving oversized and heavy equipment with precision and care.",
    image: crawlerCraneSite,
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="w-full bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600">
              Industries We Serve
            </p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              Powering Industries
              <br />
              Across India
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-500 sm:text-base">
              We serve a wide range of industries with customized transport and
              lifting solutions.
            </p>
            <ul className="mt-5 space-y-2.5">
              {SECTORS.map((sector) => (
                <li key={sector} className="flex items-center gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="shrink-0 text-accent-500"
                  />
                  <span className="text-sm text-neutral-600">{sector}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {INDUSTRY_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group relative h-56 overflow-hidden rounded-xl sm:h-64"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />
                  <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent-500 text-navy-950">
                    <Icon size={18} />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <h3 className="text-xs font-bold leading-snug text-white sm:text-sm">
                      {card.title}
                    </h3>
                    <p className="mt-1 hidden text-[11px] leading-snug text-neutral-300 sm:block">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
