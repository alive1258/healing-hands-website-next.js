"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Clock, Mail, Phone, Sparkles } from "lucide-react";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";

const SERVICES = [
  "Relaxation Massage",
  "Detox Therapy",
  "Aromatherapy",
  "Couple's Spa",
  "Facial Treatment",
];

const TIME_SLOTS = [
  "9:00 AM",
  "11:00 AM",
  "1:00 PM",
  "3:00 PM",
  "5:00 PM",
];

// TODO: no bookings backend wired up yet — connect this form to the real
// appointment API once one is available.
const BookingSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="scroll-mt-20 bg-cream-100 py-16 md:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SlideLeft>
          <span className="text-xs font-semibold tracking-widest text-brand-600 uppercase">
            Ready to Relax?
          </span>
          <h2 className="mt-3 text-3xl leading-tight font-bold text-brand-900 sm:text-4xl">
            Book Your Appointment Today
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-brand-900/70">
            Book your session now and experience true relaxation.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href="tel:+12345670090"
              className="flex items-center gap-3 font-medium text-brand-900 transition hover:text-brand-600"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-600">
                <Phone size={16} />
              </span>
              +1 234 567 0090
            </a>
            <a
              href="mailto:info@healinghands.com"
              className="flex items-center gap-3 font-medium text-brand-900 transition hover:text-brand-600"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-600">
                <Mail size={16} />
              </span>
              info@healinghands.com
            </a>
          </div>

          <div className="relative mt-8 hidden aspect-[16/10] overflow-hidden rounded-2xl shadow-md sm:block">
            <Image
              src="/images/wellness-placeholder-2.jpg"
              alt="Spa reception with towels and candles"
              fill
              sizes="45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm">
                <Sparkles size={28} strokeWidth={1.25} className="text-brand-700" />
              </span>
            </div>
          </div>
        </SlideLeft>

        <SlideRight>
          <div className="rounded-3xl bg-white p-6 shadow-lg sm:p-8">
            <h3 className="text-xl font-bold text-brand-900">
              Book an Appointment
            </h3>

            {submitted ? (
              <p className="mt-6 rounded-xl bg-brand-50 px-4 py-6 text-center font-medium text-brand-700">
                Thank you! We&apos;ll confirm your appointment shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-brand-900/15 px-4 py-3 text-sm text-brand-900 placeholder:text-brand-900/40 focus:border-brand-600 focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full rounded-lg border border-brand-900/15 px-4 py-3 text-sm text-brand-900 placeholder:text-brand-900/40 focus:border-brand-600 focus:outline-none"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    className="w-full rounded-lg border border-brand-900/15 px-4 py-3 text-sm text-brand-900 placeholder:text-brand-900/40 focus:border-brand-600 focus:outline-none"
                  />
                  <select
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-brand-900/15 px-4 py-3 text-sm text-brand-900/70 focus:border-brand-600 focus:outline-none"
                  >
                    <option value="" disabled>
                      Select Service
                    </option>
                    {SERVICES.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="relative flex items-center rounded-lg border border-brand-900/15 px-4 py-3 focus-within:border-brand-600">
                    <Calendar size={16} className="mr-2 shrink-0 text-brand-900/40" />
                    <input
                      type="date"
                      required
                      className="w-full text-sm text-brand-900 focus:outline-none"
                    />
                  </label>
                  <label className="relative flex items-center rounded-lg border border-brand-900/15 px-4 py-3 focus-within:border-brand-600">
                    <Clock size={16} className="mr-2 shrink-0 text-brand-900/40" />
                    <select
                      required
                      defaultValue=""
                      className="w-full bg-transparent text-sm text-brand-900/70 focus:outline-none"
                    >
                      <option value="" disabled>
                        Select Time
                      </option>
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-700"
                >
                  Book Now
                </button>
              </form>
            )}
          </div>
        </SlideRight>
      </div>
    </section>
  );
};

export default BookingSection;
