import { ArrowRight, ShieldCheck } from "lucide-react";
import { SERVICES } from "../../data/transportData";

export default function Services() {
  return (
    <section id="services" className="w-full bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600 sm:text-base">
            Our Specialised
          </p>
          <h2 className="mt-2 text-4xl font-extrabold text-navy-900 sm:text-5xl">
            Transport Solutions
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-accent-500" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold leading-snug text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500 sm:text-base">
                  {service.description}
                </p>
                <span className="mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent-500/15 text-accent-600 transition group-hover:bg-accent-500 group-hover:text-navy-950">
                  <ArrowRight size={15} />
                </span>
              </div>
            </article>
          ))}

          {/* Signature dark card, matching the reference's closing tile */}
          <article className="flex flex-col justify-center rounded-xl bg-navy-900 p-6 text-center text-white shadow-sm">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent-500 text-accent-500">
              <ShieldCheck size={26} />
            </span>
            <h3 className="mt-4 text-lg font-extrabold leading-snug">
              Safety. Precision.
              <br />
              Performance.
            </h3>
            <p className="mt-2 text-sm text-neutral-300">
              Every load is important. Every delivery is our commitment.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
