import { ShieldCheck, Handshake, Truck, Award, Users } from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "We prioritize safety at every step, ensuring secure operations and peace of mind.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "We operate with honesty, transparency and ethical business practices.",
  },
  {
    icon: Truck,
    title: "Reliability",
    description:
      "Count on us for on-time delivery, every time, without compromising on quality.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do and exceed customer expectations.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Our strength lies in our people and our ability to work together for shared success.",
  },
];

export default function CoreValues() {
  return (
    <section className="w-full bg-navy-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-500">
          Our Core Values
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5 text-center"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent-500 text-accent-500">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-sm font-bold text-white sm:text-base">
                  {value.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-300 sm:text-sm">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
