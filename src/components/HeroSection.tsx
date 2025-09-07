import { Button } from "@/components/ui/button";
import MaterialIcon from "@/components/MaterialIcon";
import HeroVideo from "./HeroVideo";
import { useTranslation } from '@/contexts/TranslationContext';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-white">
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-gray-900">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {t('hero.title1')}
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                {t('hero.title2')}
              </span>
            </h1>
            
            <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600 mb-4">
                {t('hero.subtitle')}
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                {t('hero.description')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Button 
                size="lg" 
                className="bg-blue-600 text-white hover:bg-blue-700 hover:shadow-strong transition-all duration-300 group hover:scale-105"
              >
                {t('hero.contactButton')}
                <MaterialIcon name="arrow_forward" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-gray-700 bg-white/50 hover:bg-gray-100 hover:text-gray-900 backdrop-blur-sm hover:scale-105 transition-all duration-300"
              >
                <MaterialIcon name="play_arrow" size={20} className="mr-2" />
                {t('hero.exploreButton')}
              </Button>
            </div>

            {/* Key Statistics */}
            <div className="flex items-center space-x-8 mt-12 text-gray-700 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-gray-900">30 Years</div>
                <div className="text-sm text-gray-600">Industry Experience</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">AI Driven</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-gray-900">€2B+</div>
                <div className="text-sm text-gray-600">Large-Scale Project Expertise</div>
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <HeroVideo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;