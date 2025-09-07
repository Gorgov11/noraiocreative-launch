import { Button } from "@/components/ui/button";
import MaterialIcon from "@/components/MaterialIcon";
import { useTranslation } from '@/contexts/TranslationContext';

const CTASection = () => {
  const { t } = useTranslation();
  const benefits = [
    t('cta.benefit.trial'),
    t('cta.benefit.noCard'),
    t('cta.benefit.setup'),
    t('cta.benefit.support')
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-cyan/20 via-transparent to-transparent"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t('cta.title1')}
            <span className="block bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
              {t('cta.title2')}
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            {t('cta.subtitle')}
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit}
                className="flex items-center space-x-3 text-gray-700 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MaterialIcon name="check_circle" size={20} className="text-brand-cyan flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-brand-navy hover:bg-white/90 hover:shadow-strong transition-all duration-300 group text-lg px-8 py-4"
            >
              {t('cta.startTrial')}
              <MaterialIcon name="arrow_forward" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-black bg-white/90 hover:bg-white/10 hover:text-white backdrop-blur-sm text-lg px-8 py-4"
            >
              {t('cta.scheduleDemo')}
            </Button>
          </div>

          <p className="text-white/60 text-sm mt-6">
            {t('cta.questions')}{" "}
            <a href="mailto:sales@noraio.com" className="text-brand-cyan hover:underline">
              sales@noraio.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;