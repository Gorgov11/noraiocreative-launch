import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Building2, Zap, BarChart3, Cog, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const solutionCategories = [
    {
      icon: Bot,
      title: "AI & Automation",
      description: "Transform your workflows with intelligent automation and AI-powered solutions.",
      services: [
        "Robotic Process Automation (RPA)",
        "OCR & Smart Document Management", 
        "Workflow & Process Automation",
        "Predictive Analytics & Forecasting",
        "AI-powered Chatbots & Virtual Assistants"
      ],
      link: "/solutions/ai-automation"
    },
    {
      icon: Building2,
      title: "Industry-Specific Solutions",
      description: "Tailored solutions designed for specific industry needs and challenges.",
      services: [
        "Real Estate Solutions",
        "Healthcare Solutions",
        "Finance Solutions", 
        "Oil & Gas Solutions",
        "Manufacturing Solutions"
      ],
      link: "/solutions/industry-specific"
    },
    {
      icon: Palette,
      title: "Digital Marketing & Creative",
      description: "AI-driven creative services and marketing automation solutions.",
      services: [
        "AI-driven content creation",
        "Campaign automation & analytics",
        "Branding & design services",
        "Video production & storytelling with AI"
      ],
      link: "/solutions/marketing-creative"
    },
    {
      icon: Cog,
      title: "ERP & Digital Transformation",
      description: "Complete business transformation with modern ERP and digital solutions.",
      services: [
        "ERP implementation & upgrades",
        "Business process integration",
        "Cloud migration & system optimization",
        "Custom dashboards for data insights"
      ],
      link: "/solutions/erp-transformation"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive <span className="bg-gradient-primary bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              NorAiO delivers end-to-end solutions tailored to industries and business needs. 
              Transform your operations with our AI-powered expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {solutionCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.title}
                  className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300 flex-shrink-0">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground mb-3">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {category.description}
                        </p>
                        
                        <ul className="space-y-2 mb-6">
                          {category.services.map((service) => (
                            <li key={service} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                              {service}
                            </li>
                          ))}
                        </ul>
                        
                        <Link to={category.link}>
                          <Button 
                            variant="outline" 
                            className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can be tailored to your specific needs and industry requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              📞 Book a Consultation
            </Button>
            <Button size="lg" variant="outline">
              💬 Start a Conversation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;