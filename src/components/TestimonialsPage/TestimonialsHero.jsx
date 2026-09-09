import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Quote } from "lucide-react";
import { HERO_SLIDES } from "./testimonialsContent";

// Generic, non-specific client attribution shown under each quote —
// matches HERO_SLIDES order (Wind Energy, Steel & Manufacturing, Heavy
// Engineering, Infrastructure, Power Plants, Cement Industry,
// Imports & Exports, Pan-India Reach). Kept local to this file rather
// than added to testimonialsContent.js, since only this file was asked
// to be touched.
const CLIENT_LABELS = [
  "Powering Renewable Projects with Precision",
  "Built Around Precision & Performance",
  "Engineering Excellence, Delivered Reliably",
  "Keeping Wind Energy Moving",
  "Infrastructure Moves. Progress Moves",
  "Reliability That Keeps Renewable Assets Moving",
  "Precision for Complex Infrastructure",
];

// Same left-to-right slide-carousel mechanics as HomePage/Hero.jsx,
// extended to 8 slides with content that changes in sync with each
// background image (instead of static hero copy).
export default function TestimonialsHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance the background carousel every 3 seconds.
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Left-to-right slide transition: the active slide sits at 0, the one
  // that just finished being active slides fully out to the left, and
  // every other slide waits off-screen to the right so it can slide in.
  const getSlidePosition = (index) => {
    if (index === activeSlide) return "translate-x-0";
    const prevIndex =
      (activeSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    if (index === prevIndex) return "-translate-x-full";
    return "translate-x-full";
  };

  const current = HERO_SLIDES[activeSlide];
  const currentClient = CLIENT_LABELS[activeSlide % CLIENT_LABELS.length];

  return (
    <section
      id="testimonials-hero"
      className="relative flex min-h-[520px] w-full items-center overflow-hidden bg-navy-950 pt-32 pb-20 sm:min-h-[580px] lg:pt-40"
    >
      {/* Background photograph carousel */}
      {HERO_SLIDES.map((slide, index) => (
        <img
          key={slide.image}
          src={slide.image}
          alt={`Trans Infra Logistics — ${slide.sector} project`}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out ${getSlidePosition(
            index,
          )}`}
        />
      ))}
      {/* Gradient overlay — dark on the left for legible text, fading out
          to the right, matching the rest of the site's hero sections. */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/20" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 text-xs font-semibold text-neutral-400"
          >
            <Link to="/" className="hover:text-accent-500">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-neutral-300">Testimonials</span>
          </nav>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-accent-500">
            Client Testimonials
          </p>
          <h1 className="text-balance text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h1>

          {/* Content synced to the active background slide */}
          <div
            className="mt-8 flex flex-col items-start gap-4"
            key={activeSlide}
          >
            <Quote size={28} className="text-accent-500" />
            <p className="max-w-xl text-base leading-relaxed text-neutral-100 sm:text-lg">
              “{current.quote}”
            </p>
            <div>
              <p className="text-base font-bold text-white sm:text-lg">
                {currentClient}
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">
                {current.sector}
              </span>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="mt-8 flex gap-1.5">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  index === activeSlide
                    ? "w-6 bg-accent-500"
                    : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
