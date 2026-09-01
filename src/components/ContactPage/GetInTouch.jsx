import ContactForm from "./ContactForm";
import LocationMap from "./LocationMap";

export default function GetInTouch() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <ContactForm />
          <LocationMap />
        </div>
      </div>
    </section>
  );
}
