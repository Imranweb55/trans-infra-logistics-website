import Hero from "../components/HomePage/Hero";
import Services from "../components/HomePage/Services";
import Highlights from "../components/HomePage/Highlights";

// Homepage — matches the supplied UI reference exactly: hero, transport
// solutions grid, then the strengths/stats/why-choose/CTA block.
export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Services />
      <Highlights />
    </main>
  );
}
