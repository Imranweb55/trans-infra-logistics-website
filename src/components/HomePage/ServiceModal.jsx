import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SERVICE_DETAILS } from "./serviceGallery";

export default function ServiceModal({ service, onClose }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const detail = SERVICE_DETAILS[service.title];
  const gallery = detail?.gallery ?? [service.image];

  // Auto-advance the carousel every 4 seconds while the modal is open.
  useEffect(() => {
    if (gallery.length <= 1) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % gallery.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [gallery.length]);

  // Lock background scroll and allow closing with Escape while open.
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const goTo = (index) => {
    setActiveSlide((index + gallery.length) % gallery.length);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={service.title}
        onClick={(event) => event.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-md transition hover:bg-white"
        >
          <X size={18} />
        </button>

        {/* Image carousel */}
        <div className="relative h-56 w-full shrink-0 overflow-hidden bg-navy-950 sm:h-72">
          {gallery.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`${service.title} — photo ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />

          {gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(activeSlide - 1)}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-navy-900 transition hover:bg-white"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => goTo(activeSlide + 1)}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-navy-900 transition hover:bg-white"
              >
                <ChevronRight size={16} />
              </button>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {gallery.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Go to photo ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      index === activeSlide
                        ? "w-5 bg-accent-500"
                        : "w-1.5 bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Detail content */}
        <div className="overflow-y-auto p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-navy-900 sm:text-2xl">
            {service.title}
          </h2>
          <div className="mt-4 space-y-3">
            {(detail?.paragraphs ?? [service.description]).map(
              (paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-neutral-600 sm:text-base"
                >
                  {paragraph}
                </p>
              ),
            )}
          </div>

          <Link
            to="/contact"
            onClick={onClose}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy-950 transition hover:bg-accent-400"
          >
            Get a Quote
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
