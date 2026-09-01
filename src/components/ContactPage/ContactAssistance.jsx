import { Headphones, ArrowRight } from "lucide-react";
import { COMPANY } from "../../data/siteData";

export default function ContactAssistance() {
  return (
    <section className="w-full bg-navy-950 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent-500 text-accent-500">
              <Headphones size={20} />
            </span>
            <div>
              <h3 className="text-sm font-bold text-white sm:text-base">
                Need Immediate Assistance?
              </h3>
              <p className="mt-0.5 text-xs text-neutral-400 sm:text-sm">
                Our logistics experts are available 24/7 to support your
                operations.
              </p>
            </div>
          </div>
          <a
            href={`tel:${COMPANY.phone.replace(/\D/g, "")}`}
            className="flex shrink-0 items-center gap-2 rounded-md border border-accent-500/60 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-accent-500 transition hover:bg-accent-500/10"
          >
            Talk to an Expert
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
