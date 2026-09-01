import { useState } from "react";
import { ArrowRight, RefreshCw } from "lucide-react";
import { LATEST_UPDATES } from "./newsContent";

export default function LatestUpdates() {
  // No backend/CMS is wired up — this just reveals a "no more articles"
  // message since there's nothing further to load yet.
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full bg-neutral-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-extrabold uppercase tracking-wide text-navy-900 sm:text-xl">
          Latest Updates
        </h2>
        <span className="mt-3 block h-1 w-14 rounded-full bg-accent-500" />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LATEST_UPDATES.map((update) => (
            <article
              key={update.title}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={update.image}
                  alt={update.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs text-neutral-400">{update.date}</p>
                <h3 className="mt-1.5 text-sm font-bold leading-snug text-navy-900">
                  {update.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-neutral-500">
                  {update.excerpt}
                </p>
                <a
                  href={update.href}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-accent-600"
                >
                  Read More
                  <ArrowRight size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="flex items-center gap-2 rounded-md border border-accent-500 px-6 py-3 text-xs font-bold uppercase tracking-wide text-accent-600 transition hover:bg-accent-500/10"
          >
            Load More Articles
            <RefreshCw size={14} />
          </button>
          {expanded && (
            <p className="text-xs text-neutral-400">
              You're all caught up — check back soon for new updates.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
