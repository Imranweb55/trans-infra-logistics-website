import { useEffect, useRef, useState } from "react";
import {
  ClipboardCheck,
  Layers,
  ClipboardList,
  Users,
  Clock,
} from "lucide-react";
import { STATS } from "../../data/siteData";

const STAT_ICONS = [ClipboardCheck, Layers, ClipboardList, Users, Clock];

// Animated counter: parses a stat value like "30+", "3000+", "24/7" etc,
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

export default function ServicesStats() {
  return (
    <section className="w-full bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 rounded-2xl bg-neutral-50 px-6 py-8 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((stat, index) => {
            const Icon = STAT_ICONS[index % STAT_ICONS.length];
            const label =
              stat.label === "Support" ? "Support Available" : stat.label;
            return (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-600">
                  <Icon size={19} />
                </span>
                <div>
                  <p className="text-xl font-extrabold text-navy-900 sm:text-2xl">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="text-xs text-neutral-500">{label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
