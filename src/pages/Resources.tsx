import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, FileText, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from '@/contexts/TranslationContext';

const Resources = () => {
  const { t } = useTranslation();
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Blog",
      description: "Stay updated with the latest insights on AI, automation, and digital transformation.",
      items: [
        "Articles on AI adoption",
        "Digital transformation strategies", 
        "Industry spotlights (finance, real estate, healthcare)"
      ],
      link: "/resources/blog",
      badge: "Latest Updates"
    },
    {
      icon: Users,
      title: "Case Studies",
      description: "Real-world success stories from our clients across different industries.",
      items: [
        "Real Estate: Reduced tenant onboarding time by 50%",
        "Healthcare: Automated patient scheduling saving 200+ hours monthly",
        "Finance: Improved compliance reporting by 40%"
      ],
      link: "/resources/case-studies",
      badge: "Success Stories"
    },
    {
      icon: FileText,
      title: "Whitepapers",
      description: "In-depth reports and insights on industry trends and digital transformation.",
      items: [
        "AI readiness assessments",
        "Digital transformation ROI reports",
        "Future of industry automation (sector-specific insights)"
      ],
      link: "/resources/whitepapers",
      badge: "Expert Insights"
    }
  ];

  const featuredContent = [
    {
      title: "The Ultimate Guide to AI Implementation in Healthcare",
      category: "Healthcare",
      readTime: "15 min read",
      description: "Learn how healthcare organizations can leverage AI to improve patient outcomes and operational efficiency."
    },
    {
      title: "Digital Transformation ROI: Measuring Success",
      category: "Business Strategy", 
      readTime: "12 min read",
      description: "A comprehensive framework for measuring and maximizing return on investment in digital transformation initiatives."
    },
    {
      title: "Real Estate Automation: A Complete Case Study",
      category: "Real Estate",
      readTime: "8 min read", 
      description: "How a leading real estate company reduced onboarding time by 50% using our automation solutions."
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
              {t('resources.title')} <span className="bg-gradient-primary bg-clip-text text-transparent">{t('resources.subtitle')}</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('resources.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {resourceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.title}
                  className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-in h-full"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <Badge variant="secondary">{category.badge}</Badge>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6 flex-1">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <Link to={category.link} className="mt-auto">
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      >
                        Explore {category.title}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Featured Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              {t('resources.featuredContent')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredContent.map((content, index) => (
                <Card 
                  key={content.title}
                  className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/30"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline">{content.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {content.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                      {content.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {content.description}
                    </p>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="p-0 h-auto font-medium text-primary hover:text-primary/80"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {t('resources.stayUpdated')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('resources.newsletterDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-border bg-background text-foreground"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              {t('resources.subscribe')}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;