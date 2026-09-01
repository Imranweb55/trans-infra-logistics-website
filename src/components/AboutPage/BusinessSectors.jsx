import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { BUSINESS_SECTORS } from "./businessSectorsContent";

const VALID_PARAMS = BUSINESS_SECTORS.map((sector) => sector.param);

// About Us > Business Sectors nav dropdown lands here. Selecting a sector
// (from this page's own tabs, or via a Navbar dropdown click that sets
// ?sector=<param> in the URL) swaps the image + write-up in the detail
// panel below — nothing else on the About page changes.
export default function BusinessSectors() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedParam = searchParams.get("sector");
  const activeParam = VALID_PARAMS.includes(requestedParam)
    ? requestedParam
    : BUSINESS_SECTORS[0].param;
  const activeSector = BUSINESS_SECTORS.find((s) => s.param === activeParam);
  const detailRef = useRef(null);

  const handleSelect = (param) => {
    setSearchParams({ sector: param }, { replace: true });
    detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="business-sectors"
      className="w-full bg-neutral-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600">
            Where We Work
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Our Business <span className="text-accent-500">Sectors</span>
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-accent-500" />
        </div>

        {/* Sector tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {BUSINESS_SECTORS.map((sector) => {
            const Icon = sector.icon;
            const isActive = sector.param === activeParam;
            return (
              <button
                key={sector.param}
                type="button"
                onClick={() => handleSelect(sector.param)}
                aria-pressed={isActive}
                className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold uppercase tracking-wide transition sm:text-sm ${
                  isActive
                    ? "border-accent-500 bg-accent-500 text-navy-950"
                    : "border-neutral-200 bg-white text-neutral-600 hover:border-accent-500/50 hover:text-accent-600"
                }`}
              >
                <Icon size={15} />
                {sector.title}
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div
          ref={detailRef}
          className="mt-10 scroll-mt-28 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
        >
          <div className="grid lg:grid-cols-2">
            <div className="h-64 w-full overflow-hidden lg:h-full">
              <img
                src={activeSector.image}
                alt={activeSector.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-500/15 text-accent-600">
                  <activeSector.icon size={20} />
                </span>
                <h3 className="text-xl font-extrabold text-navy-900 sm:text-2xl">
                  {activeSector.title}
                </h3>
              </div>
              <div className="mt-5 space-y-3">
                {activeSector.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm leading-relaxed text-neutral-600 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
