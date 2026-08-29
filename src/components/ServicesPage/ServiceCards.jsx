import { ArrowRight } from "lucide-react";
import { SERVICE_SECTIONS } from "./servicesContent";

export default function ServiceCards({ activeParam, onSelect }) {
  return (
    <section className="w-full bg-white pt-20 sm:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600 sm:text-base">
            What We Offer
          </p>
          <h2 className="mt-2 text-4xl font-extrabold text-navy-900 sm:text-5xl">
            Our Specialized Logistics{" "}
            <span className="text-navy-600">Services</span>
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-accent-500" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICE_SECTIONS.map((service) => {
            const Icon = service.icon;
            const isActive = service.param === activeParam;
            return (
              <button
                key={service.param}
                type="button"
                onClick={() => onSelect(service.param)}
                aria-pressed={isActive}
                className={`group flex flex-col overflow-hidden rounded-xl border bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                  isActive
                    ? "border-accent-500 ring-1 ring-accent-500"
                    : "border-neutral-200"
                }`}
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-navy-950/85 text-accent-500">
                    <Icon size={17} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold leading-snug text-navy-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-neutral-500 sm:text-sm">
                    {service.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-navy-600 group-hover:text-accent-600">
                    Explore More
                    <ArrowRight size={13} />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
