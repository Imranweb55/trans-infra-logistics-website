import { ArrowRight } from "lucide-react";
import { MEDIA_MENTIONS } from "./newsContent";

export default function InTheMedia() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-navy-900 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">
                In the News
              </p>
              <h2 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
                Trans Infra Logistics in the Media
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                See what leading publications are saying about our achievements
                and industry contributions.
              </p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
              >
                View All Media Coverage
                <ArrowRight size={14} />
              </a>
            </div>

            <div className="grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              {MEDIA_MENTIONS.map((mention) => (
                <div key={mention.name}>
                  <h3 className="text-base font-extrabold uppercase tracking-wide text-white">
                    {mention.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                    {mention.description}
                  </p>
                  <a
                    href={mention.href}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-accent-500"
                  >
                    Read Article
                    <ArrowRight size={12} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
