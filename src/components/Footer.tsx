import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import CookieConsent from './CookieConsent';
import { useTranslation } from '@/contexts/TranslationContext';

const Footer = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Check if user has already given consent
    const consentGiven = localStorage.getItem('cookie-consent-given');
    if (!consentGiven) {
      // Show cookie consent after a short delay
      const timer = setTimeout(() => {
        setShowCookieConsent(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCookieSettings = () => {
    setShowCookieConsent(true);
  };
  const footerSections = [
    {
      title: t('menu.solutions'),
      links: [
        { name: t('menu.solutions.enterpriseAutomation'), href: "/solutions" },
        { name: t('menu.solutions.financialAnalytics'), href: "/solutions" },
        { name: t('menu.solutions.complianceSuite'), href: "/solutions" },
        { name: t('menu.solutions.integration'), href: "/solutions" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: t('nav.about'), href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: t('menu.resources.faq'), href: "/faq" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: t('menu.resources'),
      links: [
        { name: t('menu.resources.academy'), href: "/academy" },
        { name: t('menu.resources.aiTerms'), href: "/ai-terminologies" },
        { name: "Help Center", href: "/help" },
        { name: "Status Page", href: "/status" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Security", href: "/security" },
        { name: "Compliance", href: "/compliance" }
      ]
    }
  ];

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <a href="http://127.0.0.1:8080" className="hover:opacity-80 transition-opacity">
                <img 
                  src="/noraio-logo.png" 
                  alt="NorAiO Logo" 
                  className="h-10 w-auto"
                />
              </a>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  GitHub
                </a>
              </div>
              <button
                onClick={handleCookieSettings}
                className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors text-left text-sm"
              >
                <Shield size={16} />
                <span>Cookie Settings</span>
              </button>
            </div>
          </div>

          {/* Footer links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 NorAiO AS All rights reserved - Oslo
          </p>
          <p className="text-white/60 text-sm mt-4 md:mt-0">
            Built with AI-first technology
          </p>
        </div>
      </div>

      {/* Cookie Consent Modal */}
      <CookieConsent 
        isOpen={showCookieConsent} 
        onClose={() => setShowCookieConsent(false)} 
      />
    </footer>
  );
};

export default Footer;