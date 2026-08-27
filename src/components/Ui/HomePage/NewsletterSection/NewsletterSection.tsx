"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

// TODO: no email backend yet — wire this up to a real mailing list
// provider once one is chosen.
const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-brand-900 py-10">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-white sm:text-xl">
            Subscribe to Our Newsletter
          </h2>
          <p className="mt-1 text-sm text-brand-100/70">
            Get the latest updates, offers and wellness tips.
          </p>
        </div>

        {submitted ? (
          <div className="flex items-center gap-2 text-brand-100">
            <CheckCircle2 size={18} className="text-gold-400" />
            <span className="text-sm font-medium">
              You&apos;re subscribed — welcome to Healing Hands.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-brand-100/50 focus:border-gold-400 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-gold-500 px-5 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
            >
              <Send size={15} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
