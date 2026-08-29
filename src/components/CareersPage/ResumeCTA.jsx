import { Send, Mail } from "lucide-react";
import { COMPANY } from "../../data/siteData";

export default function ResumeCTA() {
  return (
    <section className="w-full bg-neutral-50 pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8 lg:flex-row">
          <div>
            <h3 className="text-lg font-extrabold text-navy-900 sm:text-xl">
              Don't see the right role?
            </h3>
            <p className="mt-1.5 max-w-md text-sm leading-relaxed text-neutral-500">
              Share your resume with us and we'll reach out when the right
              opportunity comes along.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-6">
            <a
              href={`mailto:${COMPANY.email}?subject=Resume%20Submission`}
              className="flex items-center gap-2 rounded-md bg-navy-900 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-navy-800"
            >
              Submit Your Resume
              <Send size={15} />
            </a>
            <span
              aria-hidden="true"
              className="hidden h-14 w-14 items-center justify-center rounded-full bg-accent-500/10 text-accent-500 sm:flex"
            >
              <Mail size={26} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
