import CareersHero from "../components/CareersPage/CareersHero";
import WhyJoinUs from "../components/CareersPage/WhyJoinUs";
import CurrentOpenings from "../components/CareersPage/CurrentOpenings";
import ResumeCTA from "../components/CareersPage/ResumeCTA";
import LifeAtTransInfra from "../components/CareersPage/LifeAtTransInfra";
import CareersCTA from "../components/CareersPage/CareersCTA";

// Careers page — matches the supplied UI reference's layout, coloring and
// section order (hero, why-join cards, current openings, resume CTA,
// life-at-company, closing CTA). Navbar and Footer are shared/global and
// rendered by App.jsx, not here.
export default function CareersPage() {
  return (
    <main className="w-full">
      <CareersHero />
      <WhyJoinUs />
      <CurrentOpenings />
      <ResumeCTA />
      <LifeAtTransInfra />
      <CareersCTA />
    </main>
  );
}
