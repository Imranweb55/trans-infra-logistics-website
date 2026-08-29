import { Flag, Truck, Globe2, Settings2, Rocket } from "lucide-react";

// NOTE: exact founding year and milestone history for Trans Infra Logistics
// weren't provided in the brief. These example milestones mirror the
// supplied UI reference's structure/tone — replace the years and copy
// below with the company's real history before publishing.
const MILESTONES = [
  {
    year: "2010",
    icon: Flag,
    title: "The Beginning",
    description: "Started with a single vehicle and a strong commitment.",
  },
  {
    year: "2014",
    icon: Truck,
    title: "Expanding Fleet",
    description: "Added advanced trailers and cranes to our fleet.",
  },
  {
    year: "2018",
    icon: Globe2,
    title: "Nationwide Reach",
    description: "Expanded operations across India with major projects.",
  },
  {
    year: "2022",
    icon: Settings2,
    title: "Tech Integration",
    description:
      "Integrated technology for better planning, tracking & safety.",
  },
  {
    year: "2024+",
    icon: Rocket,
    title: "Future Ready",
    description: "Continuing to grow with innovation and customer trust.",
  },
];

export default function OurJourney() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600">
              Our Journey
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Delivering <span className="text-accent-500">Excellence</span>
              <br />
              Since Day One
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-500 sm:text-base">
              Founded with a vision to deliver world-class heavy transport &amp;
              project logistics solutions, Trans Infra Logistics has grown into
              a reliable partner for industries across India and beyond.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-500 sm:text-base">
              From a single truck to a modern fleet of advanced equipment, our
              journey is built on trust, innovation and an unwavering commitment
              to our clients.
            </p>
          </div>

          {/* Timeline */}
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-5 gap-2">
              {MILESTONES.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.year}
                    className="relative flex flex-col items-center text-center"
                  >
                    {index < MILESTONES.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-1/2 top-5 hidden h-0.5 w-full bg-accent-500/30 sm:block"
                      />
                    )}
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent-500 bg-white text-accent-600 sm:h-11 sm:w-11">
                      <Icon size={18} />
                    </span>
                    <p className="mt-2 text-xs font-extrabold text-navy-900 sm:text-sm">
                      {item.year}
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-tight text-accent-600 sm:text-[11px]">
                      {item.title}
                    </p>
                    <p className="mt-1 hidden text-[11px] leading-snug text-neutral-500 sm:block">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
