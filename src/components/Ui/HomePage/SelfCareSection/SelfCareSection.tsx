import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Heart } from "lucide-react";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";

const HIGHLIGHTS = [
  "Personalized wellness programs",
  "Natural & premium products",
  "Dedicated care for your well-being",
];

const SelfCareSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SlideLeft className="order-2 lg:order-1">
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-lg sm:aspect-4/3 lg:aspect-4/5">
            <Image
              src="/images/wellness-placeholder-4.jpg"
              alt="Guest enjoying a relaxing facial treatment"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm">
                <Heart size={36} strokeWidth={1.25} className="text-brand-700" />
              </span>
            </div>
          </div>
        </SlideLeft>

        <SlideRight className="order-1 lg:order-2">
          <span className="text-xs font-semibold tracking-widest text-brand-600 uppercase">
            Empower Your Wellness
          </span>
          <h2 className="mt-3 text-3xl leading-tight font-bold text-brand-900 sm:text-4xl">
            Self Care is
            <br />
            Self Love
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-brand-900/70">
            Take time for yourself and let us help you relax, refresh and
            recharge.
          </p>

          <ul className="mt-8 space-y-4">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Check size={14} />
                </span>
                <span className="font-medium text-brand-900/80">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/services"
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Discover More
            <ArrowRight size={16} />
          </Link>
        </SlideRight>
      </div>
    </section>
  );
};

export default SelfCareSection;
