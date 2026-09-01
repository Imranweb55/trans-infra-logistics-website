import ContactHero from "../components/ContactPage/ContactHero";
import GetInTouch from "../components/ContactPage/GetInTouch";
import OurOffice from "../components/ContactPage/OurOffice";
import ContactAssistance from "../components/ContactPage/ContactAssistance";

// Contact page — matches the supplied UI reference's layout, coloring and
// section order (hero, form + map, office info, assistance strip).
// Navbar and Footer are shared/global and rendered by App.jsx, not here.
export default function ContactPage() {
  return (
    <main className="w-full">
      <ContactHero />
      <GetInTouch />
      <OurOffice />
      <ContactAssistance />
    </main>
  );
}
