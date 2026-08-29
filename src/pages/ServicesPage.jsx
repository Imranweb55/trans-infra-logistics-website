import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import ServicesHero from "../components/ServicesPage/ServicesHero";
import ServiceCards from "../components/ServicesPage/ServiceCards";
import ServiceDetail from "../components/ServicesPage/ServiceDetail";
import ServicesStats from "../components/ServicesPage/ServicesStats";
import IndustriesWeServe from "../components/ServicesPage/IndustriesWeServe";
import ServicesCTA from "../components/ServicesPage/ServicesCTA";
import { SERVICE_SECTIONS } from "../components/ServicesPage/servicesContent";

const VALID_PARAMS = SERVICE_SECTIONS.map((service) => service.param);

// Services page — matches the supplied UI reference's layout, coloring and
// section order. The top card grid uses the 5 named services requested
// (Services Overview, Surface Transportation, Cranes & Equipment, Erection,
// Warehousing) instead of the reference's vehicle-type cards. Clicking a
// card — or a "Services" sub-item in the Navbar dropdown, which links to
// /services?service=<param> — updates the centered detail panel below with
// that service's own image and full write-up.
export default function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedParam = searchParams.get("service");
  // Derived directly from the URL on every render — no separate state to
  // keep in sync, so a Navbar dropdown click while already on this page
  // (which only changes the query string) updates the panel immediately.
  const activeParam = VALID_PARAMS.includes(requestedParam)
    ? requestedParam
    : "overview";
  const detailRef = useRef(null);

  const handleSelect = (param) => {
    setSearchParams({ service: param }, { replace: true });
    detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="w-full">
      <ServicesHero />
      <ServiceCards activeParam={activeParam} onSelect={handleSelect} />
      <ServiceDetail ref={detailRef} activeParam={activeParam} />
      <ServicesStats />
      <IndustriesWeServe />
      <ServicesCTA />
    </main>
  );
}
