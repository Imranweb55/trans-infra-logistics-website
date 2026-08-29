import { ClipboardCheck, Award, Handshake, Truck, Map } from "lucide-react";

// These figures are specific to this page's "Key Project Statistics" band
// and mirror the supplied UI reference — replace with audited figures
// when available.
const PROJECT_STATS = [
  { icon: ClipboardCheck, value: "1200+", label: "Projects Completed" },
  { icon: Award, value: "15+", label: "Years of Experience" },
  { icon: Handshake, value: "500+", label: "Client Partnerships" },
  { icon: Truck, value: "2500+", label: "Successful Deliveries" },
  { icon: Map, value: "PAN India", label: "Project Presence" },
];

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
                  {value}
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
