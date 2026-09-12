import { Link } from "react-router-dom";
import {
  Truck,
  Users,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import aboutConvoy from "../../assets/images/about-convoy.jpg";
import { CORE_STRENGTHS, STATS, WHY_CHOOSE_US } from "../../data/siteData";

const ICONS = { Truck, Users, MapPin, Clock, ShieldCheck };

// Homepage-only section: strengths bar, stats bar, "Why choose us" and the
// closing CTA strip. Kept separate from the "About Us" nav page/route,
// which is a distinct (currently blank) page the user will design later.
export default function Highlights() {
  return (
    <section
      id="highlights"
      className="relative w-full overflow-hidden bg-navy-900"
    >
      {/* Faint dotted texture, subtle nod to the reference's world-map background */}
      <div
        className="absolute inset-0 text-white/5 bg-dot-grid"
        aria-hidden="true"
      />
      {/* Decorative diagonal line texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl lg:text-4xl">
          Built for the Toughest Challenges
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {CORE_STRENGTHS.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div key={item.title} className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent-500">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-white sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-300 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="relative z-10 mt-12 grid grid-cols-2 gap-6 rounded-2xl bg-white px-6 py-8 shadow-xl sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-navy-900 sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 rounded-2xl bg-white p-6 shadow-xl sm:p-10 lg:grid-cols-2 lg:p-0">
          <div className="lg:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600">
              Why Choose
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Trans Infra Logistics?
            </h2>
            <ul className="mt-6 space-y-3">
              {WHY_CHOOSE_US.map((point) => (
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
          <div className="h-64 overflow-hidden rounded-xl lg:h-full lg:rounded-l-none lg:rounded-r-2xl">
            <img
              src={aboutConvoy}
              alt="Trans Infra Logistics heavy-haulage convoy transporting an oversized load on a highway"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Closing CTA strip */}
      <div className="relative overflow-hidden border-t border-white/10 bg-navy-950 py-10">
        {/* Decorative diagonal line texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 14px)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-500">
              Have a project in mind?
            </p>
            <h3 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Let's Move It Together.
            </h3>
            <p className="mt-2 max-w-md text-sm text-neutral-300 sm:text-base">
              Share your requirement and our experts will provide the best
              transport solution for you.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex shrink-0 items-center gap-2 rounded-md bg-accent-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-navy-950 shadow-lg shadow-accent-500/20 transition hover:bg-accent-400"
          >
            Get a Free Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
