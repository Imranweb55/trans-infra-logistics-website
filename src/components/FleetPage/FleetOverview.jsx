import { FLEET_SUMMARY } from "./fleetContent";

export default function FleetOverview() {
  return (
    <section className="w-full bg-white pt-16 sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600">
              Our Trucks and Trailers
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-500 sm:text-base">
              Our fleet includes all types of SCV, LCV, ICV, and HCV Trucks,
              High Bed Trailers, Semi-Low Bed Trailers, Low Bed Trailers,
              Hydraulic Axles, Extendable Telescopic Trailers, wide range Prime
              Movers, Pullers, Fork Lift Trucks, Telescopic and Crawlers Cranes
              of all Capacities, Man-lifts and Fork Lift Trucks.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-navy-900">
              Below is the list of our current fleet
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {FLEET_SUMMARY.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-neutral-200 p-4 text-center"
                >
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/15 text-accent-600">
                    <Icon size={18} />
                  </span>
                  <p className="mt-2 text-2xl font-extrabold text-navy-900">
                    {value}
                  </p>
                  <p className="text-xs text-neutral-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
