import { useState } from "react";
import { Send, Mail } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // No newsletter backend is wired up yet — connect a real mailing-list
    // service before going live.
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="w-full bg-neutral-50 pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent-500 text-navy-950">
              <Mail size={24} />
            </span>
            <div>
              <h3 className="text-base font-extrabold text-navy-900 sm:text-lg">
                Stay Updated with the Latest News
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500 sm:text-sm">
                Subscribe to our newsletter and never miss an update on industry
                trends and company news.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md shrink-0 gap-2"
          >
            <label htmlFor="news-newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="news-newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email address"
              className="w-full rounded-md border border-neutral-200 px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
            />
            <button
              type="submit"
              className="flex shrink-0 items-center gap-2 rounded-md bg-accent-500 px-5 py-3 text-xs font-bold uppercase tracking-wide text-navy-950 transition hover:bg-accent-400"
            >
              Subscribe
              <Send size={14} />
            </button>
          </form>
        </div>
        {subscribed && (
          <p
            className="mt-3 text-center text-xs font-semibold text-emerald-600"
            role="status"
          >
            Subscribed — thank you!
          </p>
        )}
      </div>
    </section>
  );
}
