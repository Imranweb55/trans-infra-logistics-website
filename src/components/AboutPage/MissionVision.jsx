import { Play } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="w-full bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 rounded-2xl bg-navy-900 p-8 sm:p-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-500">
              Our Mission
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-200 sm:text-base">
              To deliver safe, reliable and innovative transport &amp; logistics
              solutions that empower businesses to achieve their goals and
              contribute to nation building.
            </p>
          </div>

          {/* Decorative divider icon — purely visual, no video attached */}
          <div
            className="mx-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-white/30 text-white"
            aria-hidden="true"
          >
            <Play size={22} className="ml-0.5" />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-500">
              Our Vision
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-200 sm:text-base">
              To be India's most trusted and preferred partner for heavy
              transport and project logistics, recognized for excellence,
              innovation and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
