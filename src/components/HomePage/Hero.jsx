import { Link } from "react-router-dom";
import { Phone, MessageCircle, Mail, ArrowRight } from "lucide-react";
import heroBg from "../../assets/landing-page-bg-img/bg-img.png";
import { COMPANY } from "../../data/siteData";

const floatingContacts = [
  {
    icon: Phone,
    label: "Call Us",
    href: `tel:${COMPANY.phone.replace(/\D/g, "")}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: `https://wa.me/${COMPANY.phone.replace(/\D/g, "")}`,
  },
  { icon: Mail, label: "Email Us", href: `mailto:${COMPANY.email}` },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[640px] w-full items-center overflow-hidden bg-navy-950 pt-32 pb-20 sm:min-h-[720px] lg:pt-40"
    >
      {/* Background photograph */}
      <img
        src={heroBg}
        alt="Trans Infra Logistics heavy haulage truck transporting an oversized industrial vessel on the highway"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Gradient overlay for legible text, matching the reference's dark left / lighter right treatment */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-850/85 to-navy-950/20" />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/40" /> */}

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent-500 sm:text-base">
            {COMPANY.tagline}
          </p>
          <h1 className="text-balance text-3xl font-extrabold leading-[1.05] text-white sm:text-3xl lg:text-4xl">
            India’s ODC & Heavy Cargo Transportation with Logistics &
            <br />
            Bigger <span className="text-accent-500">Crane Support</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-200 sm:text-lg lg:text-xl">
            Specialized in heavy lifting, engineered transport &amp; project
            logistics across India and beyond.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="rounded-md bg-accent-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-navy-950 shadow-lg shadow-accent-500/30 transition hover:bg-accent-400"
            >
              Our Services
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-md border border-white/40 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
            >
              Get a Quote
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Floating contact rail — desktop only, matches reference's edge tabs */}
      <div className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 flex-col overflow-hidden rounded-l-xl shadow-lg md:flex">
        {floatingContacts.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target={label === "WhatsApp" ? "_blank" : undefined}
            rel={label === "WhatsApp" ? "noreferrer" : undefined}
            className="group flex w-28 flex-col items-center gap-1.5 border-b border-white/10 bg-navy-900/90 px-3 py-4 text-white transition hover:bg-accent-500 hover:text-navy-950 last:border-b-0"
          >
            <Icon size={18} />
            <span className="text-[11px] font-semibold">{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
