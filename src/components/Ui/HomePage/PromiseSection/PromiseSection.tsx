import Link from "next/link";
import { ArrowRight, Flower2, Gem, Sparkles, Wind } from "lucide-react";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";

const VALUES = [
  {
    icon: Wind,
    title: "Relax & Unwind",
    description: "Relieve stress and relax your body",
  },
  {
    icon: Sparkles,
    title: "Detox & Rejuvenate",
    description: "Purify your body and boost your energy",
  },
  {
    icon: Gem,
    title: "Balance & Restore",
    description: "Restore balance and inner peace",
  },
  {
    icon: Flower2,
    title: "Beauty & Glow",
    description: "Enhance your natural beauty and glow",
  },
];

const PromiseSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <SlideLeft>
          <span className="text-xs font-semibold tracking-widest text-brand-600 uppercase">
            Complete Healing Experience
          </span>
          <h2 className="mt-3 text-3xl leading-tight font-bold text-brand-900 sm:text-4xl">
            Wellness for
            <br />
            Body, Mind &amp; Soul
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-brand-900/70">
            Our holistic therapies and treatments are designed to bring
            harmony to your life.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </SlideLeft>

        <div className="grid grid-cols-2 gap-5">
          {VALUES.map(({ icon: Icon, title, description }, i) => (
            <SlideUp key={title} delay={i + 1}>
              <div className="h-full rounded-2xl border border-brand-900/10 bg-cream-100 p-6 transition hover:border-brand-600/30 hover:shadow-md">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 font-bold text-brand-900">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-900/60">
                  {description}
                </p>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
