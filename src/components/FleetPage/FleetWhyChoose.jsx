import { Boxes, Gauge, Users, Clock, MapPin } from "lucide-react";

const REASONS = [
  { icon: Boxes, title: "Modern & Well Maintained Fleet" },
  { icon: Gauge, title: "High Load Capacity & Versatility" },
  { icon: Users, title: "Experienced Operators & Technicians" },
  { icon: Clock, title: "Timely Delivery Assurance" },
  { icon: MapPin, title: "Pan India Availability" },
];

export default function FleetWhyChoose() {
  return (
    <section className="w-full bg-white pb-8 sm:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-6 sm:p-8">
          {/* Decorative diagonal line texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 14px)",
            }}
            aria-hidden="true"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-500">
                Why Choose Our Fleet?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Our modern fleet, experienced operators and strong maintenance
                support ensure your cargo reaches safely, on time, every time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-5">
              {REASONS.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-accent-500 text-accent-500">
                    <Icon size={18} />
                  </span>
                  <p className="text-[11px] font-semibold leading-tight text-white sm:text-xs">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
