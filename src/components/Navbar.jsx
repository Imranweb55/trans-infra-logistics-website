import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/logos/trans-infra-logo.png";
import { COMPANY, NAV_LINKS } from "../data/siteData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu whenever the viewport is resized back to desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative whitespace-nowrap pb-1 text-[13px] font-semibold uppercase tracking-normal transition-colors ${
      isActive ? "text-accent-500" : "text-navy-900 hover:text-accent-500"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-wide ${
      isActive
        ? "bg-accent-500/10 text-accent-600"
        : "text-navy-900 hover:bg-navy-900/5"
    }`;

  return (
    // Fixed to the viewport (not just the top of the document) so the bar
    // stays visible the entire time the page is scrolled, on every page.
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-2xl bg-white/95 px-4 py-2 shadow-lg shadow-navy-950/10 backdrop-blur-sm lg:px-6">
          {/* Official company logo (image) */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="Trans Infra Logistics"
              className="h-10 w-auto object-contain sm:h-12"
            />
          </Link>

          {/* Desktop nav links — centered with breathing room on both sides */}
          <nav className="hidden flex-1 items-center justify-center gap-5 lg:mx-8 lg:flex xl:gap-7">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={navLinkClass}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-accent-500" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Phone + CTA (desktop) */}
          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <a
              href={`tel:${COMPANY.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 text-navy-900"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900/5 text-accent-600">
                <Phone size={16} />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold">{COMPANY.phone}</span>
                <span className="block text-[11px] text-neutral-500">
                  24/7 Support
                </span>
              </span>
            </a>
            <Link
              to="/contact"
              className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-navy-950 shadow-sm shadow-accent-500/40 transition hover:bg-accent-400"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900/5 text-navy-900 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown panel */}
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
            isOpen ? "mt-2 max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 rounded-2xl bg-white/95 p-4 shadow-lg shadow-navy-950/10 backdrop-blur-sm">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setIsOpen(false)}
                className={mobileNavLinkClass}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 flex items-center justify-between gap-3 border-t border-neutral-200 pt-3">
              <a
                href={`tel:${COMPANY.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-sm font-bold text-navy-900"
              >
                <Phone size={16} className="text-accent-600" />
                {COMPANY.phone}
              </a>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-accent-500 px-4 py-2 text-xs font-bold uppercase tracking-wide text-navy-950"
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
