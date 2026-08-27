import Link from "next/link";
import { ArrowRight, Droplet, Flame, Leaf, Sparkle } from "lucide-react";
import ZoomIn from "@/src/components/Common/Animaation/ZoomIn";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";

const EXPERIENCES = [
  {
    icon: Leaf,
    title: "Aromatherapy Massage",
    description: "Essential oils to soothe your senses",
  },
  {
    icon: Flame,
    title: "Hot Stone Therapy",
    description: "Warm stones melt away muscle tension",
  },
  {
    icon: Droplet,
    title: "Herbal Body Detox",
    description: "Natural herbs cleanse and refresh",
  },
  {
    icon: Sparkle,
    title: "Deep Tissue Massage",
    description: "Targeted relief for deep-set tension",
  },
];

const SignatureExperiencesSection = () => {
  return (
    <section className="bg-cream-100 py-16 md:py-24">
      <div className="container">
        <SlideUp className="mb-12 text-center">
          <span className="text-xs font-semibold tracking-widest text-brand-600 uppercase">
            Our Signature Experiences
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            Tailored Just for You
          </h2>
        </SlideUp>

        <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
          {EXPERIENCES.map(({ icon: Icon, title, description }, i) => (
            <ZoomIn key={title} className="group">
              <div className="overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-linear-to-br from-brand-100 via-brand-50 to-cream-100">
                  <Icon
                    size={44}
                    strokeWidth={1.5}
                    className="text-brand-600 transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-3 left-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 text-xs font-bold text-brand-700">
                    {i + 1}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-bold text-brand-900">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-brand-900/60 sm:text-sm">
                    {description}
                  </p>
                </div>
              </div>
            </ZoomIn>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:text-brand-900"
          >
            View All Experiences
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignatureExperiencesSection;
