import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "./testimonialsContent";

const PAGE_SIZE = 6;
const TOTAL_PAGES = Math.ceil(TESTIMONIALS.length / PAGE_SIZE);

export default function TestimonialCards() {
  const [page, setPage] = useState(0);

  const start = page * PAGE_SIZE;
  const visibleTestimonials = TESTIMONIALS.slice(start, start + PAGE_SIZE);

  const goToPage = (nextPage) => {
    const clamped = Math.max(0, Math.min(TOTAL_PAGES - 1, nextPage));
    setPage(clamped);
    document
      .getElementById("testimonial-cards")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="testimonial-cards"
      className="w-full scroll-mt-28 bg-neutral-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600">
            Client Feedback
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Trusted Across{" "}
            <span className="text-accent-500">Every Sector We Serve</span>
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-accent-500" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleTestimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
            >
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={testimonial.image}
                  alt="Trans Infra Logistics project delivery"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <Quote size={20} className="text-accent-500" />
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                  {testimonial.quote}
                </p>
                <div className="mt-4 border-t border-neutral-100 pt-3">
                  <p className="text-sm font-bold text-navy-900">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-neutral-500">
                    {testimonial.sector}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Manual pagination */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => goToPage(page - 1)}
            disabled={page === 0}
            aria-label="Previous testimonials"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-navy-900 transition hover:border-accent-500 hover:text-accent-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-neutral-200 disabled:hover:text-navy-900"
          >
            <ChevronLeft size={18} />
          </button>

          <span className="text-xs font-bold uppercase tracking-wide text-neutral-500 sm:text-sm">
            Page {page + 1} of {TOTAL_PAGES}
          </span>

          <button
            type="button"
            onClick={() => goToPage(page + 1)}
            disabled={page === TOTAL_PAGES - 1}
            aria-label="Next testimonials"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-navy-900 transition hover:border-accent-500 hover:text-accent-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-neutral-200 disabled:hover:text-navy-900"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
