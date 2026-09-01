import AboutHero from "../components/AboutPage/AboutHero";
import OurJourney from "../components/AboutPage/OurJourney";
import CoreValues from "../components/AboutPage/CoreValues";
import BusinessSectors from "../components/AboutPage/BusinessSectors";
import WhyChooseUs from "../components/AboutPage/WhyChooseUs";
import MissionVision from "../components/AboutPage/MissionVision";
import Leadership from "../components/AboutPage/Leadership";
import IndustriesServed from "../components/AboutPage/IndustriesServed";

// About Us page — matches the supplied UI reference's layout, coloring,
// typography and section order. Navbar and Footer are shared/global and
// are rendered by App.jsx, not here.
export default function AboutPage() {
  return (
    <main className="w-full">
      <AboutHero />
      <OurJourney />
      <CoreValues />
      <BusinessSectors />
      <WhyChooseUs />
      <MissionVision />
      <Leadership />
      <IndustriesServed />
    </main>
  );
}
