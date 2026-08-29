import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ctaBg from "../../assets/images/about-convoy.jpg";

export default function ProjectsCTA() {
  return (
    <section className="w-full pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={ctaBg}
            alt="Trans Infra Logistics heavy-haulage convoy transporting an oversized load on a highway"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/85" />

          <div className="relative flex flex-col items-start justify-between gap-6 p-8 sm:p-10 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                Have a Project in Mind?
              </h2>
              <p className="mt-2 max-w-md text-sm text-neutral-200 sm:text-base">
                Let's collaborate to move your most critical cargo with safety,
                efficiency and reliability.
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
                className="flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
              >
                Talk to Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
