import { Building2, ArrowRight } from "lucide-react";
import { COMPANY } from "../../data/siteData";

const FULL_ADDRESS = `${COMPANY.address.line1}, ${COMPANY.address.line2}, ${COMPANY.address.line3}`;
const ENCODED_ADDRESS = encodeURIComponent(FULL_ADDRESS);

export default function LocationMap() {
  return (
    <div className="relative h-full min-h-[26rem] overflow-hidden rounded-2xl border border-neutral-200">
      {/* Real embedded map centered on the company's actual registered
          office — this is a plain query-based embed, so it doesn't need
          a Google Maps API key. */}
      <iframe
        title="Trans Infra Logistics location"
        src={`https://www.google.com/maps?q=${ENCODED_ADDRESS}&output=embed`}
        className="absolute inset-0 h-full w-full grayscale-[30%]"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Office info overlay card */}
      <div className="absolute bottom-4 left-4 right-4 flex items-start gap-3 rounded-xl bg-white p-4 shadow-lg sm:right-auto sm:max-w-xs">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-500/15 text-accent-600">
          <Building2 size={20} />
        </span>
        <div>
          <h3 className="text-sm font-bold text-navy-900">{COMPANY.name}</h3>
          <p className="mt-1 text-xs leading-relaxed text-neutral-500">
            {COMPANY.address.line1}, {COMPANY.address.line2},{" "}
            {COMPANY.address.line3}
          </p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${ENCODED_ADDRESS}`}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-accent-600"
          >
            Get Directions
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
