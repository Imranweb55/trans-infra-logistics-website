import { ArrowRight } from "lucide-react";
import { PROJECT_CATEGORIES } from "./projectsContent";

export default function ProjectCategories() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600">
            Our Projects
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Successful Deliveries,{" "}
            <span className="text-accent-500">Strong Partnerships</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-500 sm:text-base">
            We take pride in executing some of the most challenging and critical
            projects across diverse industries.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECT_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <article
                key={category.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-navy-950/90 text-accent-500">
                    <Icon size={17} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold leading-snug text-navy-900">
                    {category.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-neutral-500 sm:text-sm">
                    {category.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-navy-600 group-hover:text-accent-600">
                    View Projects
                    <ArrowRight size={13} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
