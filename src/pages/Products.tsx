import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, Gamepad2, Blocks, Globe, Shield, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      icon: FileText,
      title: "iReceipt / iDocument",
      description: "OCR-based receipt & document scanning with SAF-T compliance support.",
      features: [
        "OCR-based receipt & document scanning",
        "SAF-T compliance support", 
        "Offline-first mobile & web application",
        "Multi-language support (EN/NO/AR)",
        "Secure cloud storage"
      ],
      badges: ["Mobile", "Web", "Compliance"],
      link: "/products/ireceipt"
    },
    {
      icon: Gamepad2,
      title: "AI Legion",
      description: "Community-driven AI strategy game with open-source modding capabilities.",
      features: [
        "Community-driven AI strategy game",
        "Open-source modding & collaboration",
        "Futuristic design & immersive gameplay", 
        "Revenue-sharing for community contributors"
      ],
      badges: ["Gaming", "Open Source", "Community"],
      link: "/products/ai-legion"
    },
    {
      icon: Blocks,
      title: "SaaS Modules",
      description: "Pre-built AI modules for SMEs & enterprises with plug-and-play integrations.",
      features: [
        "Pre-built AI modules for SMEs & enterprises",
        "Chatbots & customer service",
        "Data analytics dashboards",
        "Automated invoicing & reporting",
        "Plug-and-play integrations"
      ],
      badges: ["SaaS", "Enterprise", "AI"],
      link: "/products/saas-modules"
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
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Innovative AI-powered products designed to streamline your business operations 
              and unlock new possibilities for growth and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card 
                  key={product.title}
                  className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-in h-full"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300 mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="flex gap-2 mb-4">
                      {product.badges.map((badge) => (
                        <Badge key={badge} variant="secondary">{badge}</Badge>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6 flex-1">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link to={product.link} className="mt-auto">
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with cutting-edge AI technology and designed for scalability, security, and ease of use.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Scale</h3>
              <p className="text-muted-foreground">
                Products designed to work across different markets, languages, and regulatory environments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
              <p className="text-muted-foreground">
                Built with enterprise-grade security, compliance standards, and data protection protocols.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Mobile-First</h3>
              <p className="text-muted-foreground">
                Optimized for mobile devices with offline capabilities and responsive design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our products in detail or contact us to discuss custom implementations for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              📞 Request Demo
            </Button>
            <Button size="lg" variant="outline">
              💬 Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;