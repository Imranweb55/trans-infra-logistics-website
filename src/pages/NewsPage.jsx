import NewsHero from "../components/NewsPage/NewsHero";
import TrendingNews from "../components/NewsPage/TrendingNews";
import LatestUpdates from "../components/NewsPage/LatestUpdates";
import InTheMedia from "../components/NewsPage/InTheMedia";
import NewsletterSignup from "../components/NewsPage/NewsletterSignup";

// News page — matches the supplied UI reference's layout, coloring and
// section order (hero, trending news + categories, latest updates,
// in-the-media, newsletter signup). Navbar and Footer are shared/global
// and rendered by App.jsx, not here.
export default function NewsPage() {
  return (
    <main className="w-full">
      <NewsHero />
      <TrendingNews />
      <LatestUpdates />
      <InTheMedia />
      <NewsletterSignup />
    </main>
  );
}
