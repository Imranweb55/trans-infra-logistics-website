import { WHY_JOIN_ITEMS } from "./careersContent";

export default function WhyJoinUs() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">
            Why Join <span className="text-accent-500">Trans Infra</span>{" "}
            Logistics?
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-accent-500" />
          <p className="mt-4 text-sm leading-relaxed text-neutral-500 sm:text-base">
            We are more than a logistics company. We are problem solvers,
            innovators, and industry leaders working together to build the
            future of heavy transport.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {WHY_JOIN_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-neutral-200 p-5 text-center shadow-sm"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/10 text-accent-600">
                  <Icon size={24} />
                </span>
                <h3 className="mt-4 text-sm font-bold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
