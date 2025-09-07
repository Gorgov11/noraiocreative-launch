import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from '@/contexts/TranslationContext';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              {t('about.title')} <span className="bg-gradient-primary bg-clip-text text-transparent">NorAiO</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">{t('about.ourStory')}</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed">
                {t('about.storyText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">{t('about.mission')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.missionText')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">{t('about.vision')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.visionText')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">{t('about.leadership')}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-border/50">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">HN</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Hassan Nasr</h3>
                <p className="text-primary font-medium mb-3">AI Expert & Technology Leader</p>
                <Badge variant="secondary">15+ Years Experience</Badge>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">RW</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Robin Wass</h3>
                <p className="text-primary font-medium mb-3">ERP Specialist & Business Strategist</p>
                <Badge variant="secondary">15+ Years Experience</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners & Collaborations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">{t('about.partners')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.partnersText')}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">🇳🇴</span>
                </div>
                <p className="text-sm text-muted-foreground">Norway</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">🇸🇪</span>
                </div>
                <p className="text-sm text-muted-foreground">Sweden</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">🇩🇰</span>
                </div>
                <p className="text-sm text-muted-foreground">Denmark</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">🇦🇪</span>
                </div>
                <p className="text-sm text-muted-foreground">UAE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;