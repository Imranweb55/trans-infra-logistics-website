import { Link } from "react-router-dom";
import { Truck, Users, MapPin, Clock, ShieldCheck } from "lucide-react";
import heroBg from "../../assets/landing-page-bg-img/service-bg-img.png";

const BADGES = [
  { icon: Truck, label: "Advanced Fleet & Equipment" },
  { icon: Users, label: "Expert & Skilled Professionals" },
  { icon: MapPin, label: "Pan India Network" },
  { icon: Clock, label: "On-time Delivery" },
  { icon: ShieldCheck, label: "Safety & Compliance Assured" },
];

// Reuses the same background photograph as the Home and About Us hero
// sections (no new/edited image) — swap this file for a dedicated
// Services banner image later if you'd like a different one.
export default function ServicesHero() {
  return (
    <section className="relative flex min-h-[520px] w-full items-center overflow-hidden bg-navy-950 pt-32 pb-14 sm:min-h-[560px] lg:pt-40">
      <img
        src={heroBg}
        alt="Trans Infra Logistics heavy haulage truck transporting an oversized industrial vessel on the highway"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/20" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 text-xs font-semibold text-neutral-400"
          >
            <Link to="/" className="hover:text-accent-500">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-neutral-300">Services</span>
          </nav>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-accent-500">
            Our Services
          </p>
          <h1 className="text-balance text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl lg:text-5xl">
            End-to-End Logistics Solutions That{" "}
            <span className="text-accent-500">Move Your World Forward</span>
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-neutral-300 sm:text-base">
            From heavy haulage to specialized transport, we deliver tailored
            logistics solutions with precision, safety and unmatched
            reliability.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
            {BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent-500/40 text-accent-500">
                  <Icon size={15} />
                </span>
                <span className="text-[11px] font-semibold leading-tight text-white sm:text-xs">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
