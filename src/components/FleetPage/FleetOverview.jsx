import { useEffect, useRef, useState } from "react";
import { FLEET_SUMMARY } from "./fleetContent";

// Animated counter: parses a value like "30+", "3000+", "24/7" etc,
// pulls out the leading number, and counts up from 0 -> that number once
// the element scrolls into view. Non-numeric / no-leading-digit values
// (e.g. "24/7") are just rendered as-is, untouched.
function CountUp({ value, duration = 1500 }) {
  const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : "";
  const isDecimal = match ? match[1].includes(".") : false;

  const [display, setDisplay] = useState(target === null ? value : 0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (target === null || hasAnimated) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const start = performance.now();
            const from = 0;

            const step = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              // easeOutCubic for a nice "settle" feel
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = from + (target - from) * eased;

              setDisplay(isDecimal ? current.toFixed(1) : Math.round(current));

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setDisplay(isDecimal ? target.toFixed(1) : target);
              }
            };

            requestAnimationFrame(step);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, hasAnimated, duration, isDecimal]);

  if (target === null) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function FleetOverview() {
  return (
    <section className="w-full bg-white pt-16 sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600">
              Our Trucks and Trailers
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-500 sm:text-base">
              Our fleet includes all types of SCV, LCV, ICV, and HCV Trucks,
              High Bed Trailers, Semi-Low Bed Trailers, Low Bed Trailers,
              Hydraulic Axles, Extendable Telescopic Trailers, wide range Prime
              Movers, Pullers, Fork Lift Trucks, Telescopic and Crawlers Cranes
              of all Capacities, Man-lifts and Fork Lift Trucks.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-navy-900">
              Below is the list of our current fleet
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {FLEET_SUMMARY.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-neutral-200 p-4 text-center"
                >
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/15 text-accent-600">
                    <Icon size={18} />
                  </span>
                  <p className="mt-2 text-2xl font-extrabold text-navy-900">
                    <CountUp value={value} />
                  </p>
                  <p className="text-xs text-neutral-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
