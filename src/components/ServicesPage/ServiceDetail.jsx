import { forwardRef } from "react";
import { getServiceByParam } from "./servicesContent";

const ServiceDetail = forwardRef(function ServiceDetail({ activeParam }, ref) {
  const service = getServiceByParam(activeParam);
  const Icon = service.icon;

  return (
    <section ref={ref} className="w-full scroll-mt-28 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-lg">
          <div className="h-56 w-full overflow-hidden sm:h-72">
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-500/15 text-accent-600">
                <Icon size={20} />
              </span>
              <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">
                {service.title}
              </h2>
            </div>

            <div className="mt-6 space-y-4">
              {service.detail.map((paragraph, index) => (
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
    </section>
  );
});

export default ServiceDetail;
