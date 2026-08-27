import BookingSection from "../BookingSection/BookingSection";
import FaqSection from "../FaqSection/FaqSection";
import HeroSection from "../HeroSection/HeroSection";
import InsightsSection from "../InsightsSection/InsightsSection";
import NewsletterSection from "../NewsletterSection/NewsletterSection";
import PackagesSection from "../PackagesSection/PackagesSection";
import PromiseSection from "../PromiseSection/PromiseSection";
import SelfCareSection from "../SelfCareSection/SelfCareSection";
import ServicesGiftSection from "../ServicesGiftSection/ServicesGiftSection";
import SignatureExperiencesSection from "../SignatureExperiencesSection/SignatureExperiencesSection";
import StatsSection from "../StatsSection/StatsSection";
import SustainabilitySection from "../SustainabilitySection/SustainabilitySection";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";

const RootHomePage = () => {
  return (
    <>
      <div id="home" className="scroll-mt-20">
        <HeroSection />
      </div>

      <PromiseSection />

      <div id="experiences" className="scroll-mt-20">
        <SignatureExperiencesSection />
      </div>

      <SelfCareSection />

      <StatsSection />

      <div id="packages" className="scroll-mt-20">
        <PackagesSection />
      </div>

      <TestimonialsSection />

      <SustainabilitySection />

      <div id="gift-card" className="scroll-mt-20">
        <ServicesGiftSection />
      </div>

      <FaqSection />

      <div id="insights" className="scroll-mt-20">
        <InsightsSection />
      </div>

      <BookingSection />

      <NewsletterSection />
    </>
  );
};

export default RootHomePage;
