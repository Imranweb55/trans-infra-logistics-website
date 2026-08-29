import { User, MapPin, ArrowRight } from "lucide-react";
import { JOB_OPENINGS } from "./careersContent";
import { COMPANY } from "../../data/siteData";

export default function CurrentOpenings() {
  return (
    <section className="w-full bg-neutral-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">
              Current <span className="text-accent-500">Openings</span>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500 sm:text-base">
              Explore current career opportunities and find the role that fits
              you best.
            </p>
          </div>
          <a
            href="#current-openings"
            className="flex shrink-0 items-center gap-2 rounded-md border border-navy-900/20 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-navy-900 transition hover:bg-navy-900/5"
          >
            View All Openings
            <ArrowRight size={14} />
          </a>
        </div>

        <div
          id="current-openings"
          className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm"
        >
          {JOB_OPENINGS.map((job, index) => (
            <div
              key={job.title}
              className={`flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6 ${
                index !== JOB_OPENINGS.length - 1
                  ? "border-b border-neutral-100"
                  : ""
              }`}
            >
              <div className="flex items-center gap-4 sm:w-64 sm:shrink-0">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-accent-500">
                  <User size={19} />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-navy-900">
                    {job.title}
                  </h3>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-neutral-500">
                    <MapPin size={12} />
                    {job.location}
                  </p>
                </div>
              </div>

              <p className="flex-1 text-xs leading-relaxed text-neutral-500 sm:text-sm">
                {job.description}
              </p>

              <div className="text-xs text-neutral-500 sm:w-28 sm:shrink-0">
                <span className="block font-semibold text-navy-900">
                  Experience
                </span>
                {job.experience}
              </div>

              <a
                href={`mailto:${COMPANY.email}?subject=Application - ${encodeURIComponent(job.title)}`}
                className="shrink-0 rounded-md bg-accent-500 px-5 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-navy-950 transition hover:bg-accent-400"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
