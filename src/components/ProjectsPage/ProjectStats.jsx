import { useEffect, useRef, useState } from "react";
import { ClipboardCheck, Award, Handshake, Truck, Map } from "lucide-react";

// These figures are specific to this page's "Key Project Statistics" band
// and mirror the supplied UI reference — replace with audited figures
// when available.
const PROJECT_STATS = [
  { icon: ClipboardCheck, value: "1200+", label: "Projects Completed" },
  { icon: Award, value: "30+", label: "Years of Experience" },
  { icon: Handshake, value: "3000+", label: "Client Partnerships" },
  { icon: Truck, value: "2500+", label: "Successful Deliveries" },
  { icon: Map, value: "PAN India", label: "Project Presence" },
];

// Animated counter: parses a value like "1200+", "30+", "PAN India" etc,
// pulls out the leading number, and counts up from 0 -> that number once
// the element scrolls into view. Non-numeric / no-leading-digit values
// (e.g. "PAN India") are just rendered as-is, untouched.
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

export default function ProjectStats() {
  return (
    <section className="w-full bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-navy-900 p-8 sm:p-10">
          <div className="text-center">
            <h2 className="text-lg font-extrabold uppercase tracking-[0.2em] text-white sm:text-xl">
              Key Project Statistics
            </h2>
            <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-accent-500" />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {PROJECT_STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-accent-500 text-accent-500">
                  <Icon size={19} />
                </span>
                <p className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                  <CountUp value={value} />
                </p>
                <p className="mt-1 text-xs text-neutral-300 sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
