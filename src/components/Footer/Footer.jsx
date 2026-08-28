import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Send } from "lucide-react";
// import LogoMark from "./LogoMark";
import {
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
} from "./SocialIcons";
import { COMPANY } from "../../data/siteData";
import { SERVICES } from "../../data/transportData";

const SOCIAL_LINKS = [
  { icon: FacebookIcon, href: COMPANY.social.facebook, label: "Facebook" },
  { icon: LinkedinIcon, href: COMPANY.social.linkedin, label: "LinkedIn" },
  { icon: InstagramIcon, href: COMPANY.social.instagram, label: "Instagram" },
  { icon: YoutubeIcon, href: COMPANY.social.youtube, label: "YouTube" },
];

const COMPANY_LINKS = [
  { label: "About Us", to: "/about" },
  { label: "Our Fleet", to: "/fleet" },
  { label: "Clients Projects", to: "/projects" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();
    // No newsletter backend is wired up yet — connect a real mailing-list
    // service before going live.
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-navy-950 pt-16 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              {/* <LogoMark className="h-9 w-9" /> */}
              <span className="leading-none">
                <span className="block text-base font-extrabold text-white">
                  TRANS INFRA
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.25em] text-neutral-400">
                  LOGISTICS
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              {COMPANY.name} is a trusted name in specialised transport and
              heavy lifting. We move heavy loads with precision, safety and
              reliability.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-neutral-300 transition hover:bg-accent-500 hover:text-navy-950"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <Link
                    to="/services"
                    className="text-sm text-neutral-400 transition hover:text-accent-500"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-neutral-400 transition hover:text-accent-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent-500" />
                <span>
                  {COMPANY.address.line1}, {COMPANY.address.line2},{" "}
                  {COMPANY.address.line3}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-accent-500" />
                <a
                  href={`tel:${COMPANY.phone.replace(/\D/g, "")}`}
                  className="hover:text-accent-500"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-accent-500" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-accent-500"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>

            <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-white">
              Newsletter
            </h3>
            <p className="mt-2 text-xs text-neutral-400">
              Subscribe for updates on our projects and fleet.
            </p>
            <form onSubmit={handleSubscribe} className="mt-3 flex gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-accent-500"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-9 w-10 shrink-0 items-center justify-center rounded-md bg-accent-500 text-navy-950 transition hover:bg-accent-400"
              >
                <Send size={15} />
              </button>
            </form>
            {subscribed && (
              <p
                className="mt-2 text-xs font-semibold text-emerald-400"
                role="status"
              >
                Subscribed — thank you!
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-neutral-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-accent-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent-500">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-accent-500">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
