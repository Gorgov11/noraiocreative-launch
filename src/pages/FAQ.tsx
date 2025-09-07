import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp, HelpCircle, CheckCircle, ArrowRight } from 'lucide-react';
import MaterialIcon from '@/components/MaterialIcon';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What does NorAio do?",
      answer: "NorAio helps organizations streamline operations and drive innovation by integrating artificial intelligence and automation solutions into their business processes. From strategy and advisory to implementation, we offer tailored solutions that improve efficiency, reduce costs, and unlock new growth opportunities across various industries."
    },
    {
      question: "What types of businesses can benefit from your services?",
      answer: "Our solutions are designed for medium to large enterprises looking to modernize operations, improve decision-making, or automate repetitive workflows. Whether you're in manufacturing, finance, energy, logistics, or IT services, NorAio can customize AI tools to fit your specific business goals and systems."
    },
    {
      question: "How long does it take to implement an AI solution?",
      answer: "The timeline depends on the complexity and scope of the project. A typical automation pilot can be up and running in 4–8 weeks, while full-scale enterprise integrations may take several months. We start with a discovery phase to assess your needs and define a clear roadmap with deliverables and milestones."
    },
    {
      question: "Do I need technical knowledge to work with NorAio?",
      answer: "No technical expertise is required. Our team handles all aspects of AI and automation implementation, and we prioritize clear communication throughout the process. We also provide training and documentation to ensure your team is confident using the solution after deployment."
    },
    {
      question: "How secure is the data used in your AI systems?",
      answer: "Data security is a top priority at NorAio. We follow industry best practices in data encryption, access control, and compliance with regulations like GDPR. Our systems are designed to ensure your data remains protected, whether stored on-premise or in the cloud."
    },
    {
      question: "Can NorAio integrate with our existing IT infrastructure?",
      answer: "Yes. Our solutions are built to be flexible and scalable, with integration capabilities for major ERP systems, CRMs, data lakes, and third-party APIs. We work closely with your IT team to ensure a seamless and secure integration with minimal disruption to your operations."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We conduct workshops and market analysis to define your goals and digital roadmap.",
      icon: "search"
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Wireframes, mockups, and interactive prototypes bring your vision to life.",
      icon: "design_services"
    },
    {
      number: "03",
      title: "Development & Implementation",
      description: "Agile development builds responsive web or mobile solutions with clean, scalable code.",
      icon: "code"
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Comprehensive testing ensures performance, security, and cross-device compatibility.",
      icon: "bug_report"
    },
    {
      number: "05",
      title: "Deployment & Launch",
      description: "We handle rollout, training, and client onboarding.",
      icon: "rocket_launch"
    },
    {
      number: "06",
      title: "Support & Growth",
      description: "Ongoing optimization, monitoring, and improvement post-launch.",
      icon: "trending_up"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Frequently Asked Questions</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get answers to common questions about our
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI and automation solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find comprehensive answers to help you understand how NorAio can transform your business operations with intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-8 pb-6">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                How does our process work?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive process ensures successful AI implementation from start to finish
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <MaterialIcon 
                          name={step.icon} 
                          size={24} 
                          className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300" 
                        />
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Still have questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team of experts is here to help you understand how AI and automation can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 group"
              >
                Contact Our Experts
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/academy"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 group"
              >
                Explore NorAio Academy
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;

