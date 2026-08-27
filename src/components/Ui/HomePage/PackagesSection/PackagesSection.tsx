"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Flower2, HeartPulse, Sparkles, Users } from "lucide-react";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";

const PACKAGES = [
  {
    icon: HeartPulse,
    title: "Relaxation Massage",
    tagline: "Full body relax & unwind",
    price: "79.99",
    duration: "60 Minutes Session",
    features: ["Full Body Massage", "Aromatherapy", "Stress Relief"],
  },
  {
    icon: Sparkles,
    title: "Detox Therapy",
    tagline: "Cleanse & refresh",
    price: "94.99",
    duration: "75 Minutes Session",
    features: ["Herbal Body Wrap", "Lymphatic Drainage", "Skin Refresh"],
  },
  {
    icon: Flower2,
    title: "Aromatherapy",
    tagline: "Mind & body balance",
    price: "69.99",
    duration: "50 Minutes Session",
    features: ["Essential Oil Blend", "Scalp Massage", "Calming Ritual"],
  },
  {
    icon: Users,
    title: "Couple's Spa",
    tagline: "Relax together",
    price: "149.99",
    duration: "90 Minutes Session",
    features: ["Two Therapists", "Side-by-Side Suite", "Champagne Toast"],
  },
];

const PackagesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = PACKAGES[activeIndex];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SlideLeft>
          <span className="text-xs font-semibold tracking-widest text-brand-600 uppercase">
            Choose Your Plan
          </span>
          <h2 className="mt-3 text-3xl leading-tight font-bold text-brand-900 sm:text-4xl">
            Affordable Wellness Packages
          </h2>

          <div className="mt-8 space-y-3">
            {PACKAGES.map(({ icon: Icon, title, tagline }, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={title}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
                    isActive
                      ? "border-brand-600 bg-brand-50"
                      : "border-brand-900/10 bg-white hover:border-brand-600/30"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition ${
                      isActive
                        ? "bg-brand-600 text-white"
                        : "bg-cream-100 text-brand-600"
                    }`}
                  >
                    <Icon size={19} />
                  </span>
                  <div>
                    <p className="font-bold text-brand-900">{title}</p>
                    <p className="text-xs text-brand-900/60">{tagline}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </SlideLeft>

        <SlideRight className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-brand-900 p-8 shadow-xl sm:p-10">
            <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gold-400/20 blur-3xl" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-gold-400 uppercase">
                  {active.title}
                </span>
                <p className="mt-5 text-brand-100/70">{active.duration}</p>
                <p className="mt-2 flex items-baseline gap-1 text-white">
                  <span className="text-4xl font-bold sm:text-5xl">
                    ${active.price}
                  </span>
                </p>

                <ul className="mt-8 space-y-3">
                  {active.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-brand-100/90"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                        <Check size={13} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="mt-9 w-full rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
                >
                  Book Now
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </SlideRight>
      </div>
    </section>
  );
};

export default PackagesSection;
