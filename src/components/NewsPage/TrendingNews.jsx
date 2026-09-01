import {
  Newspaper,
  Briefcase,
  Layers,
  Zap,
  Leaf,
  Award,
  ArrowRight,
} from "lucide-react";
import { FEATURED_ARTICLE, TRENDING_ARTICLES, CATEGORIES } from "./newsContent";

const CATEGORY_ICONS = { Newspaper, Briefcase, Layers, Zap, Leaf, Award };

export default function TrendingNews() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-extrabold uppercase tracking-wide text-navy-900 sm:text-xl">
          Trending News
        </h2>
        <span className="mt-3 block h-1 w-14 rounded-full bg-accent-500" />

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr_0.9fr]">
          {/* Featured article */}
          <a
            href={FEATURED_ARTICLE.href}
            className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-xl"
          >
            <img
              src={FEATURED_ARTICLE.image}
              alt={FEATURED_ARTICLE.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent" />
            <div className="relative p-6">
              <span className="inline-block rounded bg-accent-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-navy-950">
                {FEATURED_ARTICLE.badge}
              </span>
              <p className="mt-4 text-xs text-neutral-300">
                {FEATURED_ARTICLE.date}
              </p>
              <h3 className="mt-2 text-xl font-extrabold leading-snug text-white sm:text-2xl">
                {FEATURED_ARTICLE.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-300">
                {FEATURED_ARTICLE.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-accent-500">
                Read More
                <ArrowRight size={13} />
              </span>
            </div>
          </a>

          {/* Secondary articles */}
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
            {TRENDING_ARTICLES.map((article) => (
              <div
                key={article.title}
                className="flex flex-col gap-2 sm:flex-row sm:gap-3"
              >
                <div className="h-20 w-full shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-20">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <span className="inline-block rounded bg-accent-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-600">
                    {article.badge}
                  </span>
                  <p className="mt-1 text-[11px] text-neutral-400">
                    {article.date}
                  </p>
                  <h4 className="mt-0.5 text-xs font-bold leading-snug text-navy-900 sm:text-sm">
                    {article.title}
                  </h4>
                  <a
                    href={article.href}
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-accent-600"
                  >
                    Read More
                    <ArrowRight size={11} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Categories sidebar */}
          <div className="rounded-xl border border-neutral-200 p-5">
            <h3 className="text-sm font-extrabold uppercase tracking-wide text-navy-900">
              Categories
            </h3>
            <span className="mt-2 block h-0.5 w-8 rounded-full bg-accent-500" />
            <ul className="mt-4 space-y-3">
              {CATEGORIES.map((category) => {
                const Icon = CATEGORY_ICONS[category.icon];
                return (
                  <li
                    key={category.label}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="flex items-center gap-2.5 text-xs font-semibold text-neutral-600 sm:text-sm">
                      <Icon size={15} className="text-accent-500" />
                      {category.label}
                    </span>
                    <span className="text-xs text-neutral-400">
                      ({category.count})
                    </span>
                  </li>
                );
              })}
            </ul>
            <a
              href="#"
              className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-navy-800"
            >
              View All Categories
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
