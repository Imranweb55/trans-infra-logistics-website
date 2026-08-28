import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/**
 * Lightweight placeholder for nav pages that don't have their final design
 * yet (About Us, Services, Fleet, Clients Projects, Careers, Contact Us).
 * Navbar and Footer stay the same everywhere — only this content area is
 * blank, ready to be designed page by page later.
 */
export default function PlaceholderPage({ eyebrow, title }) {
  return (
    <main className="flex min-h-[70vh] w-full items-center justify-center px-4 py-28 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-extrabold text-navy-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-neutral-500 sm:text-base">
          This page is on its way. Content for this section will be added here.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy-950 transition hover:bg-accent-400"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
