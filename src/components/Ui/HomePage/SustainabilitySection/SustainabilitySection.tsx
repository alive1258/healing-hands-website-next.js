import Image from "next/image";
import { ArrowRight, HeartHandshake, Leaf, ShieldCheck, Sprout } from "lucide-react";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";

const HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: "Certified & Experienced Therapists",
    description: "Every session is led by a trained wellness professional.",
  },
  {
    icon: Leaf,
    title: "Natural & Safe Products",
    description: "Only clean, skin-friendly ingredients touch your body.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    description: "Treatments tailored to your unique needs and goals.",
  },
  {
    icon: Sprout,
    title: "Hygienic & Peaceful Environment",
    description: "A calm, spotless space built for real relaxation.",
  },
];

const SustainabilitySection = () => {
  return (
    <section className="bg-cream-100 py-16 md:py-24">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SlideLeft>
          <span className="text-xs font-semibold tracking-widest text-brand-600 uppercase">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl leading-tight font-bold text-brand-900 sm:text-4xl">
            The Healing Hands Difference
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-brand-900/70">
            We combine ancient healing techniques with modern wellness care
            to deliver the best experience for your body and mind.
          </p>

          <ul className="mt-8 space-y-5">
            {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-semibold text-brand-900">{title}</p>
                  <p className="text-sm text-brand-900/60">{description}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="/about"
            className="mt-9 inline-flex items-center gap-2 rounded-lg border-2 border-brand-600 px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-600 hover:text-white"
          >
            Learn More
            <ArrowRight size={16} />
          </a>
        </SlideLeft>

        <SlideRight className="relative">
          <div className="relative aspect-4/5 overflow-hidden rounded-4xl shadow-xl sm:aspect-4/3">
            <Image
              src="/images/wellness-placeholder-3.jpg"
              alt="Therapist providing a relaxing wellness treatment"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm">
                <ShieldCheck size={36} strokeWidth={1.25} className="text-brand-700" />
              </span>
            </div>
          </div>

          <div className="absolute -bottom-6 left-6 flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 shadow-lg sm:left-10">
            <ShieldCheck size={16} className="text-white" />
            <span className="text-xs font-bold tracking-wide text-white uppercase">
              Trusted Care
            </span>
          </div>
        </SlideRight>
      </div>
    </section>
  );
};

export default SustainabilitySection;
