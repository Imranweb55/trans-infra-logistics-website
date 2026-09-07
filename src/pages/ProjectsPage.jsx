import ProjectsHero from "../components/ProjectsPage/ProjectsHero";
import ProjectCategories from "../components/ProjectsPage/ProjectCategories";
import ProjectStats from "../components/ProjectsPage/ProjectStats";
// import TrustBand from "../components/ProjectsPage/TrustBand";
import ProjectsCTA from "../components/ProjectsPage/ProjectsCTA";

// Projects page — matches the supplied UI reference's layout, coloring and
// section order (hero, project categories, key stats, sectors band,
// closing CTA). Navbar and Footer are shared/global and rendered by
// App.jsx, not here.
export default function ProjectsPage() {
  return (
    <main className="w-full">
      <ProjectsHero />
      <ProjectCategories />
      <ProjectStats />
      {/* <TrustBand /> */}
      <ProjectsCTA />
    </main>
  );
}
