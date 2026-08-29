import { ShieldCheck, Cpu } from "lucide-react";
import heroBg from "../../assets/landing-page-bg-img/About-us-bg-img.png";

const BADGES = [
  { icon: ShieldCheck, label: "Safe & Reliable Operations" },
  { icon: Cpu, label: "Advanced Fleet & Technology" },
];

// Reuses the exact same background photograph as the homepage hero
// (no new/edited image — same file already used on Home).
export default function AboutHero() {
  return (
    <section className="relative flex min-h-[520px] w-full items-center overflow-hidden bg-navy-950 pt-32 pb-16 sm:min-h-[560px] lg:pt-40">
      <img
        src={heroBg}
        alt="Trans Infra Logistics heavy haulage truck transporting an oversized industrial vessel on the highway"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/20" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-accent-500">
            About Us
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl">
            Built on Strength.
            <br />
            Driven by <span className="text-accent-500">Trust.</span>
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-neutral-200 sm:text-base">
            Trans Infra Logistics is a trusted name in specialized transport
            &amp; heavy lifting solutions. With cutting-edge equipment, skilled
            professionals and a customer-first approach, we deliver safety,
            reliability and excellence in every move.
          </p>

          <div className="mt-7 flex flex-wrap gap-6">
            {BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent-500/40 text-accent-500">
                  <Icon size={18} />
                </span>
                <span className="text-xs font-semibold text-white sm:text-sm">
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
