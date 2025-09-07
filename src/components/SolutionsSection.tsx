import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MaterialIcon from "@/components/MaterialIcon";
import useScrollAnimation from '@/hooks/use-scroll-animation';

const SolutionsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const solutions = [
    {
      iconName: "corporate_fare",
      title: "Enterprise Automation",
      description: "Complete financial workflow automation for large organizations with complex structures.",
      features: ["Multi-entity management", "Advanced approval workflows", "Custom integrations"],
      buttonText: "Learn More"
    },
    {
      iconName: "credit_card",
      title: "Payment Processing",
      description: "Streamlined payment operations with AI-powered fraud detection and optimization.",
      features: ["Global payment support", "Real-time fraud detection", "Automated reconciliation"],
      buttonText: "Explore Payments"
    },
    {
      iconName: "analytics",
      title: "Financial Analytics",
      description: "Deep insights and predictive analytics to drive strategic financial decisions.",
      features: ["Predictive forecasting", "Custom dashboards", "Real-time reporting"],
      buttonText: "View Analytics"
    },
    {
      iconName: "verified_user",
      title: "Compliance Suite",
      description: "Comprehensive compliance management with automated regulatory reporting.",
      features: ["Global compliance", "Automated reporting", "Risk assessment"],
      buttonText: "Check Compliance"
    }
  ];

  return (
    <section ref={ref} id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Comprehensive Solutions for
            <span className="block bg-gradient-primary bg-clip-text text-transparent animate-gradient-x">
              Every Business Need
            </span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            From enterprise automation to compliance management, our AI-powered solutions 
            adapt to your unique business requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
              <Card 
                key={solution.title}
                className={`group bg-white border-gray-200 hover:border-blue-300 hover:scale-105 transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ 
                  animationDelay: isVisible ? `${index * 0.15}s` : '0s',
                  animationFillMode: 'forwards'
                }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <MaterialIcon 
                      name={solution.iconName}
                      size={32}
                      className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                      
                      <ul className="space-y-2 mb-6">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={feature} className={`flex items-center text-sm text-gray-500 transition-all duration-500 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: isVisible ? `${(index * 0.15) + (featureIndex * 0.1)}s` : '0s', animationFillMode: 'forwards' }}>
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        variant="outline" 
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                      >
                        {solution.buttonText}
                        <MaterialIcon name="arrow_forward" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;