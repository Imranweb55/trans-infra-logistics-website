import { Phone, Mail, Clock } from "lucide-react";
import heroImage from "../../assets/landing-page-bg-img/contact-bg-img.jpg";
import { COMPANY } from "../../data/siteData";

const QUICK_INFO = [
  {
    icon: Phone,
    title: "Call Us",
    lines: [COMPANY.phone],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [COMPANY.email],
  },
  {
    icon: Clock,
    title: "24/7 Support",
    lines: ["Always Available"],
  },
];

// Reuses the same photograph used across the rest of the site (no
// new/edited image) as the diagonal-cut hero image on the right.
export default function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-50 pt-32 lg:pt-40">
      {/* Faint dotted world-map texture, matching the reference */}
      <div
        className="pointer-events-none absolute inset-0 text-navy-900/5 bg-dot-grid"
        aria-hidden="true"
      />

      <div className="relative grid lg:grid-cols-2">
        {/* Text content */}
        <div className="px-4 pb-14 pt-4 sm:px-6 lg:px-10 lg:pb-24 lg:pt-10 xl:pl-16">
          <div className="max-w-lg">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600">
              Contact Us
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] text-navy-900 sm:text-5xl">
              Let's Move
              <br />
              Forward Together
            </h1>
            <span className="mt-4 block h-1 w-16 rounded-full bg-accent-500" />
            <p className="mt-5 text-sm leading-relaxed text-neutral-500 sm:text-base">
              Have a question, need a quote, or want to discuss your next big
              project? Our team is here to help you with reliable solutions.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {QUICK_INFO.map(({ icon: Icon, title, lines }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 sm:flex-col sm:items-start"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900/5 text-navy-900">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy-900">{title}</p>
                    {lines.map((line) => (
                      <p key={line} className="text-xs text-neutral-500">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diagonal-cut photo */}
        <div
          className="relative hidden h-full min-h-[26rem] lg:block"
          style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <img
            src={heroImage}
            alt="Trans Infra Logistics heavy haulage truck transporting an oversized industrial vessel on the highway"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        {/* Mobile/tablet: plain (non-diagonal) image below the text */}
        <div className="h-56 w-full overflow-hidden sm:h-72 lg:hidden">
          <img
            src={heroImage}
            alt="Trans Infra Logistics heavy haulage truck transporting an oversized industrial vessel on the highway"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
