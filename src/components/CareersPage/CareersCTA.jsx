import { ArrowRight } from "lucide-react";

export default function CareersCTA() {
  return (
    <section className="w-full pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-neutral-100 p-8 sm:p-10 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">
              Ready to Move Your{" "}
              <span className="text-accent-500">Career Forward?</span>
            </h2>
            <p className="mt-2 max-w-md text-sm text-neutral-500 sm:text-base">
              Join a team that moves the world with strength, precision and
              trust.
            </p>
          </div>
          <a
            href="#current-openings"
            className="flex shrink-0 items-center gap-2 rounded-md bg-accent-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-navy-950 shadow-lg shadow-accent-500/20 transition hover:bg-accent-400"
          >
            Explore Opportunities
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
