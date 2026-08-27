import { Award, Clock, Smile, Sparkles } from "lucide-react";
import ZoomIn from "@/src/components/Common/Animaation/ZoomIn";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";

const STATS = [
  { icon: Smile, value: "1,250+", label: "Happy Clients" },
  { icon: Clock, value: "10+", label: "Years of Experience" },
  { icon: Award, value: "95%", label: "Client Satisfaction" },
  { icon: Sparkles, value: "30+", label: "Expert Therapists" },
];

const StatsSection = () => {
  return (
    <section className="bg-cream-100 py-16 md:py-20">
      <div className="container">
        <SlideUp className="mb-12 text-center">
          <span className="text-xs font-semibold tracking-widest text-brand-600 uppercase">
            Wellness in Numbers
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-900 sm:text-4xl">
            Our Numbers Speak
          </h2>
        </SlideUp>

        <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, value, label }) => (
            <ZoomIn key={label}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-brand-900/10 bg-white px-4 py-8 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Icon size={24} />
                </span>
                <p className="mt-4 text-2xl font-bold text-brand-900 sm:text-3xl">
                  {value}
                </p>
                <p className="mt-1 text-sm text-brand-900/60">{label}</p>
              </div>
            </ZoomIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
