import { Quote, Star, User } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";

interface Testimonial {
  name: string;
  designation: string;
  description: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Emily Johnson",
    designation: "Guest",
    description:
      "The best spa experience ever! I feel completely relaxed and refreshed.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    designation: "Guest",
    description:
      "Amazing therapists and peaceful environment. Highly recommended.",
    rating: 5,
  },
  {
    name: "Sophie Williams",
    designation: "Guest",
    description: "It's my favorite place for relaxation and self care.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="overflow-hidden bg-cream-100 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
            Real People, Real Results
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => {
            const isFeatured = i === 1;
            return (
              <SlideUp key={testimonial.name} delay={i + 1} className="h-full">
                <div
                  className={`h-full rounded-2xl p-6 shadow-sm transition ${
                    isFeatured
                      ? "border-2 border-brand-600/30 bg-brand-50 sm:-translate-y-3"
                      : "border border-brand-900/10 bg-white"
                  }`}
                >
                  <Quote size={22} className="text-brand-300" />

                  <p className="mt-4 text-sm leading-relaxed text-brand-900/70">
                    &ldquo;{testimonial.description}&rdquo;
                  </p>

                  <div className="mt-4 flex gap-1 text-gold-500">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <Star key={j} size={13} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-3 border-t border-brand-900/10 pt-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                      <User size={15} />
                    </span>
                    <div className="text-left">
                      <p className="text-sm font-bold text-brand-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-brand-900/50">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </SlideUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
