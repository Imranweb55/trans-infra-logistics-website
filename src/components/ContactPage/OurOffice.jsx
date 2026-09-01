import { MapPin, Truck, Headphones } from "lucide-react";
import { COMPANY } from "../../data/siteData";

// The supplied UI reference shows a "Our Global Offices" grid listing a
// Middle East, Europe, Asia Pacific and Africa office alongside an India
// head office — Trans Infra Logistics doesn't have evidence of any
// international offices, and the reference's India office address itself
// was a placeholder (Navi Mumbai) rather than the company's real one.
// This section shows the one real registered office instead, alongside
// two honest descriptors of the company's actual reach and support model.
const OFFICE_CARDS = [
  {
    icon: MapPin,
    title: "Registered Office",
    lines: [
      COMPANY.address.line1,
      COMPANY.address.line2,
      COMPANY.address.line3,
    ],
  },
  {
    icon: Truck,
    title: "Operational Reach",
    lines: [
      "Pan India",
      "Serving heavy haulage & project logistics nationwide",
    ],
  },
  {
    icon: Headphones,
    title: "Support Desk",
    lines: ["24/7 Dispatch Support", "Always available for active shipments"],
  },
];

export default function OurOffice() {
  return (
    <section className="w-full bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-navy-900 sm:text-xl">
            Our Office
          </h2>
          <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-accent-500" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {OFFICE_CARDS.map(({ icon: Icon, title, lines }) => (
            <div
              key={title}
              className="rounded-xl border border-neutral-200 p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/15 text-accent-600">
                <Icon size={18} />
              </span>
              <h3 className="mt-3 text-sm font-bold text-navy-900">{title}</h3>
              {lines.map((line) => (
                <p key={line} className="mt-1 text-xs text-neutral-500">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
