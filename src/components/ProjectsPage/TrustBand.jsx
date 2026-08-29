// Real client logo files supplied by the user at
// src/assets/images/projects/clients-images/client01.png ... client25.png.
// import.meta.glob picks up every file in that folder automatically, so
// this component doesn't need updating if logos are added/removed later —
// just keep the same "clientNN.png" naming.
const clientLogoModules = import.meta.glob(
  "../../assets/images/projects/clients-images/*.png",
  { eager: true, import: "default" },
);

const CLIENT_LOGOS = Object.keys(clientLogoModules)
  .sort()
  .map((path) => clientLogoModules[path]);

// Display names for accessible alt text, in the same order as the supplied
// UI reference (Gamesa, ReGen Powertech, Suzlon ... Metco). This assumes
// client01–client25.png were saved in that same order — if your files are
// in a different order, just reorder this list to match.
const CLIENT_NAMES = [
  "Gamesa",
  "ReGen Powertech",
  "Suzlon",
  "SE Logistics",
  "Scania",
  "Inox Wind",
  "Prolec GE Weg Group",
  "Prime Meiden",
  "Crompton Greaves",
  "Transformers & Rectifiers India Ltd",
  "Indotech",
  "Greensol Power",
  "Prime Group",
  "BGR Energy",
  "Madhucon",
  "Jaypee Group",
  "Larsen & Toubro",
  "IVRCL",
  "Herrenknecht",
  "Gammon",
  "Simplex Infrastructures",
  "Eversendai",
  "Hindustan Cargo Pvt Ltd",
  "deugro",
  "Metco",
];

export default function TrustBand() {
  return (
    <section className="w-full bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-600">
            Our Valued Clients
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Trusted by <span className="text-accent-500">Industry Leaders</span>{" "}
            Worldwide
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {CLIENT_LOGOS.map((logo, index) => (
            <div
              key={logo}
              className="flex h-20 items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 py-3 transition hover:shadow-md"
            >
              <img
                src={logo}
                alt={CLIENT_NAMES[index] || `Client logo ${index + 1}`}
                loading="lazy"
                className="max-h-10 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
