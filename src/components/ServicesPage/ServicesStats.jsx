import {
  ClipboardCheck,
  Layers,
  ClipboardList,
  Users,
  Clock,
} from "lucide-react";
import { STATS } from "../../data/siteData";

const STAT_ICONS = [ClipboardCheck, Layers, ClipboardList, Users, Clock];

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
                    {stat.value}
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
