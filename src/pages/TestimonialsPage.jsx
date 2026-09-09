import TestimonialsHero from "../components/TestimonialsPage/TestimonialsHero";
import TestimonialCards from "../components/TestimonialsPage/TestimonialCards";

// Testimonials page — hero carousel with synced content, followed by a
// paginated grid of client testimonial cards. Navbar and Footer are
// shared/global and rendered by App.jsx, not here.
export default function TestimonialsPage() {
  return (
    <main className="w-full">
      <TestimonialsHero />
      <TestimonialCards />
    </main>
  );
}
