import { Link } from "react-router-dom";
import { Boxes, MapPin, ShieldCheck, Phone } from "lucide-react";
import heroBg from "../../assets/landing-page-bg-img/fleet-bg-img.png";

const BADGES = [
  { icon: Boxes, label: "Well Maintained", sublabel: "Modern & Reliable" },
  { icon: MapPin, label: "Pan India Reach", sublabel: "Wide Network" },
  { icon: ShieldCheck, label: "Safety First", sublabel: "Zero Compromise" },
  { icon: Phone, label: "24/7 Support", sublabel: "Always Available" },
];

// Reuses the same background photograph as Home, About Us and Services
// (no new/edited image) — swap this file for a dedicated Fleet banner
// image later if you'd like a different one.
export default function FleetHero() {
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
            <span className="text-neutral-300">Fleet</span>
          </nav>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-accent-500">
            Our Fleet
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl">
            Powerful Fleet.
            <br />
            <span className="text-accent-500">Reliable</span> Performance.
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-neutral-200 sm:text-base">
            Trans Infra Logistics owns and operates a modern, well-maintained
            fleet to deliver safe, timely and efficient transport solutions for
            every project.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            {BADGES.map(({ icon: Icon, label, sublabel }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent-500/40 text-accent-500">
                  <Icon size={17} />
                </span>
                <span className="leading-tight">
                  <span className="block text-xs font-semibold text-white">
                    {label}
                  </span>
                  <span className="block text-[10px] text-neutral-400">
                    {sublabel}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
