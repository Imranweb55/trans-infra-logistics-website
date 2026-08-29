// The supplied UI reference shows a "Trusted by Industry Leaders" strip
// with named real companies' logos (L&T, Adani, Tata, etc.). We have no
// evidence of an actual business relationship with any specific named
// company, and reproducing their logos would also raise trademark
// concerns — so this is shown as generic industries served instead.
const INDUSTRIES = [
  "Energy & Power",
  "Infrastructure & Construction",
  "Oil & Gas",
  "Ports & Marine",
  "Manufacturing",
  "Renewable Energy",
];

export default function IndustriesServed() {
  return (
    <section className="w-full border-t border-neutral-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
          Industries We Serve
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {INDUSTRIES.map((industry) => (
            <span
              key={industry}
              className="text-sm font-bold uppercase tracking-wide text-neutral-400"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
