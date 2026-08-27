import Image from "next/image";
import Link from "next/link";
import { Gift, Hand, Sparkle, Sparkles, Waves } from "lucide-react";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";
import ZoomIn from "@/src/components/Common/Animaation/ZoomIn";

const SERVICES = [
  { icon: Hand, label: "Body Massage" },
  { icon: Sparkles, label: "Facial Treatments" },
  { icon: Waves, label: "Body Scrubs" },
  { icon: Gift, label: "Wellness Programs" },
];

const ServicesGiftSection = () => {
  return (
    <>
      <section className="bg-white py-16 md:py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SlideLeft>
            <span className="text-xs font-semibold tracking-widest text-brand-600 uppercase">
              Providing Excellent
            </span>
            <h2 className="mt-3 text-3xl leading-tight font-bold text-brand-900 sm:text-4xl">
              Services to Our Clients
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-brand-900/70">
              We offer a wide range of wellness and spa services to relax your
              body and refresh your mind.
            </p>

            <ul className="mt-8 space-y-4">
              {SERVICES.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-brand-900/10 bg-cream-100 px-5 py-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
                    <Icon size={18} />
                  </span>
                  <span className="font-semibold text-brand-900">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </SlideLeft>

          <SlideRight>
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-lg sm:aspect-4/3 lg:aspect-4/5">
              <Image
                src="/images/wellness-placeholder-2.jpg"
                alt="Therapist preparing a wellness treatment"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm">
                  <Sparkle size={36} strokeWidth={1.25} className="text-brand-700" />
                </span>
              </div>
            </div>
          </SlideRight>
        </div>
      </section>

      <section className="py-6 md:py-10">
        <div className="container">
          <ZoomIn>
            <div className="relative overflow-hidden rounded-3xl bg-brand-700 px-6 py-10 sm:px-10 md:px-14 md:py-14">
              <div className="pointer-events-none absolute -top-12 -right-12 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
              <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    Give the Gift of Relaxation
                  </h3>
                  <p className="mt-3 max-w-md text-brand-100/80">
                    Treat your loved ones with our exclusive gift cards.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-gold-400"
                  >
                    Purchase Gift Card
                  </Link>
                </div>

                <div className="flex h-32 w-52 shrink-0 rotate-3 flex-col justify-between rounded-2xl bg-linear-to-br from-gold-400 to-gold-600 p-5 shadow-xl transition hover:rotate-0">
                  <Gift size={22} className="text-brand-900" />
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-brand-900/70 uppercase">
                      Gift Card
                    </p>
                    <p className="text-lg font-bold text-brand-900">
                      Healing Hands
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ZoomIn>
        </div>
      </section>
    </>
  );
};

export default ServicesGiftSection;
