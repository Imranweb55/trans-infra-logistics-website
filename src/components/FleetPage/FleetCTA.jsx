import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function FleetCTA() {
  return (
    <section className="w-full pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-neutral-100 p-8 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">
              Have a Transport Requirement?
            </h2>
            <p className="mt-2 max-w-md text-sm text-neutral-500 sm:text-base">
              Let's move your business forward with the right equipment and the
              right team.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-md bg-accent-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-navy-950 shadow-lg shadow-accent-500/20 transition hover:bg-accent-400"
            >
              Get a Quote
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-md border border-navy-900/20 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-navy-900 transition hover:bg-navy-900/5"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
