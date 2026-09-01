import { useState } from "react";
import { Send, ChevronDown } from "lucide-react";
import { SERVICE_OPTIONS } from "./contactContent";
import { COMPANY } from "../../data/siteData";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // No backend is wired up yet — replace with a real submission handler
    // (API call, email service, etc.) before going live.
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl bg-navy-900 p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-500">
        Send Us a Message
      </p>
      <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
        We'd Love to Hear From You
      </h2>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="sr-only">
              Full Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="Full Name"
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-400 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
            />
          </div>
          <div>
            <label htmlFor="contact-company" className="sr-only">
              Company Name
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              placeholder="Company Name"
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-400 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-email" className="sr-only">
              Email Address
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-400 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className="sr-only">
              Phone Number
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-400 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
            />
          </div>
        </div>

        <div className="relative">
          <label htmlFor="contact-service" className="sr-only">
            Service Required
          </label>
          <select
            id="contact-service"
            name="service"
            defaultValue=""
            className="w-full appearance-none rounded-lg border border-white/15 bg-white/5 px-4 py-3 pr-10 text-sm text-white outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
          >
            <option value="" disabled className="text-neutral-500">
              Service Required
            </option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option} className="text-navy-900">
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-accent-500"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="sr-only">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            placeholder="Message"
            className="w-full resize-none rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-400 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-navy-950 transition hover:bg-accent-400"
        >
          Send Message
          <Send size={15} />
        </button>

        {submitted && (
          <p
            className="text-center text-sm font-semibold text-accent-400"
            role="status"
          >
            Thanks — we've received your message and will get back to you
            shortly. You can also reach us directly at {COMPANY.email}.
          </p>
        )}
      </form>
    </div>
  );
}
