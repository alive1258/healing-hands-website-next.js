import Image from "next/image";
import { CircleHelp } from "lucide-react";
import type { QuestionAnswer } from "@/src/redux/api/questionAnswerApi";
import FaqAccordion from "./FaqAccordion";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";

const now = new Date().toISOString();

const FAQS: QuestionAnswer[] = [
  {
    id: "fallback-1",
    question: "What should I wear during the spa?",
    answer:
      "Comfortable, loose-fitting clothing is best. For treatments like massages or body wraps, we provide a robe and disposable undergarments.",
    is_active: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: "fallback-2",
    question: "How early should I arrive?",
    answer:
      "Please arrive 15 minutes before your appointment so you can check in, change, and settle in before your treatment begins.",
    is_active: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: "fallback-3",
    question: "Can I customize my treatment?",
    answer:
      "Absolutely. Let your therapist know about any preferences, sensitivities, or areas of focus and we'll tailor the session for you.",
    is_active: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: "fallback-4",
    question: "Do you offer gift cards?",
    answer:
      "Yes — gift cards are available for any treatment or package and make a great gift for someone who deserves to relax.",
    is_active: true,
    created_at: now,
    updated_at: now,
  },
];

const FaqSection = () => {
  return (
    <section className="bg-cream-100 py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
            Frequently Asked Questions
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-900">
            Your Questions, Answered
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <SlideLeft>
            <FaqAccordion faqs={FAQS} />
          </SlideLeft>

          <SlideRight className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full shadow-lg lg:max-w-none">
            <Image
              src="/images/wellness-placeholder-4.jpg"
              alt="Guest relaxing in the spa lounge"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm">
                <CircleHelp size={36} strokeWidth={1.25} className="text-brand-700" />
              </span>
            </div>
          </SlideRight>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
