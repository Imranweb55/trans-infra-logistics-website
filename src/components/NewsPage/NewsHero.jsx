import { Link } from "react-router-dom";
import { Newspaper, Building2, Settings2, Zap } from "lucide-react";
import heroBg from "../../assets/landing-page-bg-img/bg-img.png";

const BADGES = [
  { icon: Newspaper, label: "Industry Insights" },
  { icon: Building2, label: "Company Updates" },
  { icon: Settings2, label: "Logistics Trends" },
  { icon: Zap, label: "Transport Innovation" },
];

// Reuses the same background photograph as every other page (no
// new/edited image) — swap this file for a dedicated News banner image
// later if you'd like a different one.
export default function NewsHero() {
  return (
    <section className="relative flex min-h-[480px] w-full items-center overflow-hidden bg-navy-950 pt-32 pb-14 sm:min-h-[520px] lg:pt-40">
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
            <span className="text-neutral-300">News</span>
          </nav>

          <h1 className="text-balance text-4xl font-extrabold uppercase leading-[1.1] text-white sm:text-5xl">
            News &amp; <span className="text-accent-500">Insights</span>
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-neutral-200 sm:text-base">
            Stay updated with the latest trends, insights, and innovations
            shaping the logistics and heavy transport industry.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            {BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent-500/40 text-accent-500">
                  <Icon size={16} />
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
