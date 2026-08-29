import { Link } from "react-router-dom";
import { TrendingUp, Users, Heart, Sparkles } from "lucide-react";
import heroBg from "../../assets/landing-page-bg-img/bg-img.png";

const BADGES = [
  { icon: TrendingUp, label: "Grow Your Career" },
  { icon: Users, label: "Work with Experts" },
  { icon: Heart, label: "Inclusive Culture" },
  { icon: Sparkles, label: "Make a Real Impact" },
];

// Reuses the same background photograph as Home, About Us, Services,
// Fleet and Projects (no new/edited image) — swap this file for a
// dedicated Careers banner image later if you'd like a different one.
export default function CareersHero() {
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
            className="mb-4 text-xs font-semibold text-accent-500/80"
          >
            <Link to="/" className="hover:text-accent-500">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-accent-500">Careers</span>
          </nav>

          <h1 className="text-balance text-3xl font-extrabold uppercase leading-[1.15] text-white sm:text-4xl lg:text-5xl">
            Build Your Future
            <br />
            With <span className="text-accent-500">Trans Infra</span>
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-neutral-200 sm:text-base">
            Move forward with a team that values your talent, drives innovation,
            and delivers excellence every day.
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
