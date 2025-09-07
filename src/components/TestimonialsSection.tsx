import { Card, CardContent } from "@/components/ui/card";
import MaterialIcon from "@/components/MaterialIcon";
import { useTranslation } from '@/contexts/TranslationContext';
const TestimonialsSection = () => {
  const { t } = useTranslation();
  const testimonials = [{
    name: "Sarah Chen",
    role: "CFO",
    company: "TechFlow Industries",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b152be5c?w=64&h=64&fit=crop&crop=face",
    content: "NorAiO transformed our business operations completely. We've reduced manual processing time by 85% and our accuracy has improved dramatically.",
    rating: 5
  }, {
    name: "Marcus Rodriguez",
    role: "Finance Director",
    company: "Global Dynamics",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    content: "The AI-powered insights have been game-changing for our strategic planning. We can now forecast with confidence and make data-driven decisions.",
    rating: 5
  }, {
    name: "Emily Watson",
    role: "VP of Finance",
    company: "Innovate Corp",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=face",
    content: "Implementation was seamless and the ROI was evident within the first month. The team at NorAiO provided exceptional support throughout.",
    rating: 5
  }];
  return <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('testimonials.title')}
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              {t('testimonials.subtitle')}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <Card key={testimonial.name} className="hover:shadow-medium transition-all duration-300 border-border/50 animate-fade-in" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <MaterialIcon key={i} name="star" size={20} className="text-yellow-400" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={`${testimonial.name}, ${testimonial.role} at ${testimonial.company}`} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-border/20 shadow-sm"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random&color=fff`;
                    }}
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">NorAio - Where Nordic Innovation meets Ai.</p>
          <div className="flex flex-wrap justify-center gap-4 opacity-60">
            <span className="text-sm">Startups</span>
            <span className="text-sm">•</span>
            <span className="text-sm">Mid-market</span>
            <span className="text-sm">•</span>
            <span className="text-sm">Enterprise</span>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;