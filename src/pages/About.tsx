import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">NorAiO</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Where Nordic innovation meets artificial intelligence to transform businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed">
                NorAiO was born from the idea that Nordic innovation and AI technology can transform 
                industries worldwide. With expertise spanning 15+ years, we blend deep technical 
                knowledge with business strategy to deliver solutions that drive real impact.
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
                <h3 className="text-2xl font-bold mb-4 text-primary">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower organizations to scale with AI-driven efficiency, automation, and creativity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A world where human creativity and artificial intelligence unite to build smarter 
                  businesses and better futures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Leadership</h2>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Partners & Collaborations</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trusted by businesses across Norway, Scandinavia, and the Middle East. Supported by 
              innovation funds and government-backed digital transformation initiatives.
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