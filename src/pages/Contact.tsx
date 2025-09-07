import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Briefcase, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "General Contact",
      description: "Get in touch for general inquiries and support",
      details: "info@noraio.com",
      link: "/contact/general"
    },
    {
      icon: MapPin,
      title: "Our Locations", 
      description: "Visit us at our offices in Oslo and Dubai",
      details: "Oslo, Norway (HQ) • Dubai, UAE",
      link: "/contact/locations"
    },
    {
      icon: Briefcase,
      title: "Careers",
      description: "Join our team and shape the future of AI",
      details: "Open positions & internships",
      link: "/contact/careers"
    }
  ];

  const locations = [
    {
      city: "Oslo",
      country: "Norway",
      type: "Headquarters",
      flag: "🇳🇴",
      address: "Innovation District, Oslo",
      phone: "+47 XX XXX XXX",
      hours: "Mon-Fri: 9:00-17:00 CET"
    },
    {
      city: "Dubai", 
      country: "UAE",
      type: "Expansion Office",
      flag: "🇦🇪",
      address: "Business Bay, Dubai",
      phone: "+971 X XXX XXXX",
      hours: "Sun-Thu: 9:00-17:00 GST"
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
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to transform your business with AI? Let's start the conversation. 
              Our team is here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card 
                  key={method.title}
                  className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-in text-center"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300 mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    <p className="text-primary font-medium mb-6">
                      {method.details}
                    </p>
                    
                    <Link to={method.link}>
                      <Button 
                        variant="outline" 
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-center mb-8">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input 
                        type="text"
                        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input 
                        type="text"
                        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Inquiry Category
                    </label>
                    <select className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Solutions</option>
                      <option>Products</option>
                      <option>Partnerships</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Our Locations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <Card 
                key={location.city}
                className="border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{location.flag}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {location.city}, {location.country}
                        </h3>
                        <Badge variant="secondary">{location.type}</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Phone className="h-5 w-5" />
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Clock className="h-5 w-5" />
                      <span>{location.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose the best way to connect with us based on your needs and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              📞 Book a Consultation
            </Button>
            <Button size="lg" variant="outline">
              💬 Start Live Chat
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;