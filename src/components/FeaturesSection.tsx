import { Card, CardContent } from "@/components/ui/card";
import MaterialIcon from "@/components/MaterialIcon";
import { useState } from "react";
import useScrollAnimation from '@/hooks/use-scroll-animation';

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const features = [
    {
      iconName: 'psychology',
      title: "AI-Powered Automation",
      description: "Automate 90% of repetitive financial tasks with advanced AI that learns from your business patterns."
    },
    {
      iconName: 'security',
      title: "Enterprise Security", 
      description: "Bank-grade security with SOC 2 compliance, end-to-end encryption, and zero-trust architecture."
    },
    {
      iconName: 'bolt',
      title: "Real-Time Processing",
      description: "Process thousands of transactions per second with real-time analytics and instant notifications."
    },
    {
      iconName: 'trending_up',
      title: "Predictive Analytics",
      description: "Forecast trends, identify opportunities, and make data-driven decisions with AI insights."
    },
    {
      iconName: 'groups',
      title: "Team Collaboration",
      description: "Seamless collaboration tools with role-based access and real-time commenting."
    },
    {
      iconName: 'public',
      title: "Global Compliance",
      description: "Built-in compliance for 50+ countries with automatic regulatory updates."
    }
  ];

  return (
    <section ref={ref} id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Powerful Features for
            <span className="block bg-gradient-primary bg-clip-text text-transparent animate-gradient-x">
              AI & Automation
            </span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Everything you need to streamline business operations with AI automation, 
            from process optimization to enterprise-grade security and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className={`group hover:shadow-medium transition-all duration-500 border-border/50 hover:border-primary/30 hover:scale-105 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ 
                  animationDelay: isVisible ? `${index * 0.1}s` : '0s',
                  animationFillMode: 'forwards'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <MaterialIcon 
                      name={feature.iconName}
                      size={32}
                      className="text-primary group-hover:scale-110 transition-transform duration-300"
                    />
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;