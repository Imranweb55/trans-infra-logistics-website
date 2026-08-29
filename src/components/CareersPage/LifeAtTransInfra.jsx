import { Users, Award, Handshake } from "lucide-react";
import pileDrivingCrane from "../../assets/images/projects/pile-driving-crane.jpg";
import crawlerCraneSite from "../../assets/images/fleet/crawler-crane-site.jpg";
import bridgeGirderLaunch from "../../assets/images/projects/bridge-girder-launch.jpg";

const STATS = [
  { icon: Users, value: "500+", label: "Employees" },
  { icon: Award, value: "15+", label: "Years of Excellence" },
  { icon: Handshake, value: "Strong", label: "Team Culture" },
];

// The reference shows a lineup, a site conversation, and an indoor meeting
// photo. We don't have an indoor office/meeting photo in the existing
// asset set, so all 3 slots reuse existing on-site crew photos instead —
// swap the third one for a real office photo if you'd like an indoor shot.
const PHOTOS = [
  {
    src: pileDrivingCrane,
    alt: "Trans Infra Logistics crew on a project site",
  },
  { src: crawlerCraneSite, alt: "Trans Infra Logistics team members on site" },
  {
    src: bridgeGirderLaunch,
    alt: "Trans Infra Logistics team coordinating a lift",
  },
];

export default function LifeAtTransInfra() {
  return (
    <section className="w-full bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-navy-900 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <h2 className="text-xl font-extrabold text-white sm:text-2xl">
                Life at <span className="text-accent-500">Trans Infra</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                We believe in creating a workplace where our people can do their
                best work and build a meaningful career.
              </p>

              <div className="mt-6 flex flex-wrap gap-6">
                {STATS.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent-500">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-lg font-extrabold text-white">
                        {value}
                      </p>
                      <p className="text-[11px] text-neutral-400">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {PHOTOS.map((photo) => (
                <div
                  key={photo.src}
                  className="h-32 overflow-hidden rounded-xl sm:h-44"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
