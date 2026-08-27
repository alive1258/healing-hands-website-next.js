import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flower2, Leaf, Sparkles, Users } from "lucide-react";
import PageFadeIn from "@/src/components/Common/Animaation/PageFadeIn";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";

const HERO_IMAGE = "/images/wellness-placeholder.jpg";

const TRUST_ITEMS = [
  {
    icon: Leaf,
    title: "Natural Therapies",
    description: "100% natural & safe",
  },
  {
    icon: Users,
    title: "Expert Therapists",
    description: "Certified & experienced",
  },
  {
    icon: Sparkles,
    title: "Peaceful Environment",
    description: "Relaxing & comfortable",
  },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-cream-100 pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-16 h-64 w-64 rounded-full bg-gold-400/20 blur-3xl" />

      <div className="container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <PageFadeIn>
          <h1 className="text-4xl leading-[1.1] font-bold text-brand-900 sm:text-5xl lg:text-6xl">
            Find Your Balance,
            <br />
            <span className="text-brand-600">Feel the Difference</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-900/70 md:text-lg">
            Rejuvenate your body, calm your mind, and uplift your soul with
            our personalized wellness therapies.
          </p>

          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link
              href="/#experiences"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 sm:w-auto"
            >
              Explore Services
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-brand-600 px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-600 hover:text-white sm:w-auto"
            >
              Book Appointment
            </Link>
          </div>
        </PageFadeIn>

        <SlideRight className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-square overflow-hidden rounded-[3rem] rounded-tl-none shadow-xl sm:aspect-4/5">
            <Image
              src={HERO_IMAGE}
              alt="Healing Hands wellness spa"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm">
                <Flower2 size={36} strokeWidth={1.25} className="text-brand-700" />
              </span>
            </div>
          </div>
          <span className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full border-8 border-cream-100 bg-brand-100 sm:block" />
        </SlideRight>
      </div>

      <div className="container relative mt-14 md:mt-20">
        <SlideUp>
          <div className="grid grid-cols-1 gap-6 rounded-2xl bg-white p-6 shadow-sm sm:grid-cols-3 sm:gap-4 sm:p-8">
            {TRUST_ITEMS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-900">{title}</p>
                  <p className="text-xs text-brand-900/60">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default HeroSection;
