import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import logo from "../assets/logos/trans-infra-logo.png";
import { COMPANY, NAV_LINKS } from "../data/siteData";

// Dropdown content for specific nav tabs only ("About Us" and "Services").
// Every other tab in NAV_LINKS stays a plain link, untouched.
// "About Us" > "Company Profile"/"History" don't have dedicated sections
// yet, so they link to "/about" for now. "About Us" > "Business Sectors"
// children deep-link into the real About page (/about?sector=<param>),
// which reads that query param and shows the matching sector's detail
// panel. "Services" sub-items deep-link the same way
// (/services?service=<param>).
const NAV_SUBMENUS = {
  "About Us": [
    { label: "Company Profile", to: "/about" },
    { label: "History", to: "/about" },
    {
      label: "Business Sectors",
      to: "/about?sector=wind-energy",
      children: [
        { label: "Wind Energy", to: "/about?sector=wind-energy" },
        { label: "Steel Plants", to: "/about?sector=steel-plants" },
        { label: "Heavy Engineering", to: "/about?sector=heavy-engineering" },
        { label: "Imports & Exports", to: "/about?sector=imports-exports" },
        { label: "Power Plants", to: "/about?sector=power-plants" },
        { label: "Cement Plants", to: "/about?sector=cement-plants" },
        { label: "Infrastructure", to: "/about?sector=infrastructure" },
      ],
    },
  ],
  Services: [
    { label: "Services Overview", to: "/services?service=overview" },
    {
      label: "Surface Transportation",
      to: "/services?service=surface-transportation",
    },
    { label: "Cranes & Equipment", to: "/services?service=cranes-equipment" },
    { label: "Mechanical Erection", to: "/services?service=erection" },
    { label: "Warehousing", to: "/services?service=warehousing" },
  ],
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Mobile accordion state: which top-level label (e.g. "About Us") and
  // which nested item (e.g. "Business Sectors") are currently expanded.
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  // Desktop dropdown state — controlled in JS (not pure CSS :hover) so a
  // click can force-close the panel immediately, instead of it lingering
  // open until the mouse happens to move away.
  const [openDesktopMenu, setOpenDesktopMenu] = useState(null);
  const [openDesktopSubmenu, setOpenDesktopSubmenu] = useState(null);

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

  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenMobileMenu(null);
    setOpenMobileSubmenu(null);
  };

  const closeDesktopMenus = () => {
    setOpenDesktopMenu(null);
    setOpenDesktopSubmenu(null);
  };

  return (
    // Fixed to the viewport (not just the top of the document) so the bar
    // stays visible the entire time the page is scrolled, on every page.
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-[1600px] px-5 pt-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/95 px-5 py-2 shadow-lg shadow-navy-950/10 backdrop-blur-sm lg:px-7">
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

          {/* Desktop nav links — every tab shares the same wrapper box
              (relative + pb-3) so all labels sit at the same baseline,
              whether or not they carry a dropdown. */}
          <nav className="hidden flex-1 items-center justify-center gap-4 lg:mx-6 lg:flex xl:gap-6">
            {NAV_LINKS.map((link) => {
              const submenu = NAV_SUBMENUS[link.label];
              const isMenuOpen = openDesktopMenu === link.label;

              if (!submenu) {
                return (
                  <div key={link.to} className="relative pb-3">
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      className={({ isActive }) =>
                        `${navLinkClass({ isActive })} inline-flex items-center gap-1`
                      }
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
                  </div>
                );
              }

              return (
                <div
                  key={link.to}
                  className="relative pb-3"
                  onMouseEnter={() => setOpenDesktopMenu(link.label)}
                  onMouseLeave={() => {
                    setOpenDesktopMenu(null);
                    setOpenDesktopSubmenu(null);
                  }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={closeDesktopMenus}
                    className={({ isActive }) =>
                      `${navLinkClass({ isActive })} inline-flex items-center gap-1`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        <ChevronDown
                          size={12}
                          className={`mt-0.5 opacity-60 transition-transform ${
                            isMenuOpen ? "rotate-180" : ""
                          }`}
                        />
                        {isActive && (
                          <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-accent-500" />
                        )}
                      </>
                    )}
                  </NavLink>

                  {/* Dropdown panel — vertical list, opens on hover, force-closes on click */}
                  <div
                    className={`absolute left-0 top-full z-40 w-64 transition-all duration-150 ${
                      isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
                    }`}
                  >
                    <div className="flex flex-col gap-0.5 rounded-xl border border-neutral-100 bg-white p-2 shadow-xl">
                      {submenu.map((item) => {
                        const isSubOpen = openDesktopSubmenu === item.label;
                        return item.children ? (
                          <div
                            key={item.label}
                            className="relative"
                            onMouseEnter={() =>
                              setOpenDesktopSubmenu(item.label)
                            }
                            onMouseLeave={() => setOpenDesktopSubmenu(null)}
                          >
                            <Link
                              to={item.to}
                              onClick={closeDesktopMenus}
                              className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-navy-900 transition-colors hover:bg-accent-500/10 hover:text-accent-600"
                            >
                              {item.label}
                              <ChevronRight size={13} className="opacity-60" />
                            </Link>

                            {/* Nested flyout — vertical list, opens to the right */}
                            <div
                              className={`absolute left-full top-0 z-50 w-64 transition-all duration-150 ${
                                isSubOpen
                                  ? "visible opacity-100"
                                  : "invisible opacity-0"
                              }`}
                            >
                              <div className="flex flex-col gap-0.5 rounded-xl border border-neutral-100 bg-white p-2 shadow-xl">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    to={child.to}
                                    onClick={closeDesktopMenus}
                                    className="block w-full rounded-lg px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-navy-900 transition-colors hover:bg-accent-500/10 hover:text-accent-600"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={item.label}
                            to={item.to}
                            onClick={closeDesktopMenus}
                            className="block w-full rounded-lg px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-navy-900 transition-colors hover:bg-accent-500/10 hover:text-accent-600"
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Phone + CTA (desktop) */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex xl:gap-4">
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
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900/5 text-navy-900 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown panel */}
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
            isOpen
              ? "mt-2 max-h-[36rem] overflow-y-auto opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 rounded-2xl bg-white/95 p-4 shadow-lg shadow-navy-950/10 backdrop-blur-sm">
            {NAV_LINKS.map((link) => {
              const submenu = NAV_SUBMENUS[link.label];

              if (!submenu) {
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    onClick={closeMobileMenu}
                    className={mobileNavLinkClass}
                  >
                    {link.label}
                  </NavLink>
                );
              }

              // Nav tab with sub-items — tap to expand vertically (accordion).
              const isExpanded = openMobileMenu === link.label;
              return (
                <div key={link.to}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileMenu(isExpanded ? null : link.label)
                    }
                    aria-expanded={isExpanded}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-wide text-navy-900 transition-colors hover:bg-navy-900/5"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden pl-3 transition-[max-height] duration-300 ${
                      isExpanded ? "max-h-[32rem]" : "max-h-0"
                    }`}
                  >
                    <div className="flex flex-col gap-1 border-l border-neutral-200 py-1 pl-3">
                      {submenu.map((item) =>
                        item.children ? (
                          <div key={item.label}>
                            <button
                              type="button"
                              onClick={() =>
                                setOpenMobileSubmenu(
                                  openMobileSubmenu === item.label
                                    ? null
                                    : item.label,
                                )
                              }
                              aria-expanded={openMobileSubmenu === item.label}
                              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-600 transition-colors hover:bg-navy-900/5"
                            >
                              {item.label}
                              <ChevronDown
                                size={13}
                                className={`transition-transform ${
                                  openMobileSubmenu === item.label
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                            <div
                              className={`overflow-hidden pl-3 transition-[max-height] duration-300 ${
                                openMobileSubmenu === item.label
                                  ? "max-h-[28rem]"
                                  : "max-h-0"
                              }`}
                            >
                              <div className="flex flex-col gap-1 border-l border-neutral-200 py-1 pl-3">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    to={child.to}
                                    onClick={closeMobileMenu}
                                    className="rounded-lg px-3 py-2 text-xs font-medium text-neutral-500 transition-colors hover:bg-navy-900/5 hover:text-accent-600"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={item.label}
                            to={item.to}
                            onClick={closeMobileMenu}
                            className="rounded-lg px-3 py-2 text-xs font-medium text-neutral-600 transition-colors hover:bg-navy-900/5 hover:text-accent-600"
                          >
                            {item.label}
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

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
                onClick={closeMobileMenu}
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
