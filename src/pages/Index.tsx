import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import SolutionsSection from "@/components/SolutionsSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ChatbotToggle from "@/components/ChatbotToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <TrustSection />
      <SolutionsSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <ChatbotToggle />
    </div>
  );
};

export default Index;
