import FleetHero from "../components/FleetPage/FleetHero";
import FleetOverview from "../components/FleetPage/FleetOverview";
import FleetGrid from "../components/FleetPage/FleetGrid";
import FleetWhyChoose from "../components/FleetPage/FleetWhyChoose";
import FleetCTA from "../components/FleetPage/FleetCTA";

// Fleet page — matches the supplied UI reference's layout, coloring and
// section order (hero, fleet summary, complete fleet grid, why-choose
// strip, closing CTA). Navbar and Footer are shared/global and rendered
// by App.jsx, not here.
export default function FleetPage() {
  return (
    <main className="w-full">
      <FleetHero />
      <FleetOverview />
      <FleetGrid />
      <FleetWhyChoose />
      <FleetCTA />
    </main>
  );
}
