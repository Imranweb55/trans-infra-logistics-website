import { FLEET_ITEMS } from "./fleetContent";

export default function FleetGrid() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-wide text-navy-900 sm:text-3xl">
            Our Complete Fleet
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-accent-500" />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {FLEET_ITEMS.map((item) => {
            // const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-32 w-full overflow-hidden sm:h-36">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  {/* <span className="absolute bottom-2 left-1/2 flex h-9 w-9 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-navy-900 text-accent-500 shadow-md">
                    <Icon size={16} />
                  </span> */}
                </div>
                <div className="p-4 pt-6 text-center">
                  <h3 className="text-sm font-bold leading-snug text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-accent-600">
                    {item.count}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
