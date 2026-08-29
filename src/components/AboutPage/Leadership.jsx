import { User } from "lucide-react";
import { LinkedinIcon } from "../Footer/SocialIcons";

// NOTE: no real leadership names, roles, bios or photos were supplied with
// the brief. To avoid inventing identities for a real company, this section
// uses generic role placeholders and icon avatars instead of photographs —
// swap in the real team's names, titles, bios and headshots before publishing.
const LEADERSHIP = [
  { role: "Managing Director" },
  { role: "Operations Director" },
  { role: "Business Development Head" },
  { role: "Technical Head" },
];

export default function Leadership() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600">
            Meet Our Leadership
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">
            The People Behind Our{" "}
            <span className="text-accent-500">Success</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LEADERSHIP.map((person) => (
            <div
              key={person.role}
              className="rounded-xl border border-neutral-200 p-6 text-center shadow-sm"
            >
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
                <User size={34} />
              </span>
              <h3 className="mt-4 text-sm font-bold text-navy-900">
                Leadership Name
              </h3>
              <p className="mt-0.5 text-xs font-semibold text-accent-600">
                {person.role}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                Bio to be added.
              </p>
              <a
                href="#"
                aria-label="LinkedIn profile"
                className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition hover:bg-accent-500 hover:text-navy-950"
              >
                <LinkedinIcon size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
