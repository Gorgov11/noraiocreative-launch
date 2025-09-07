import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import MegaMenu from './MegaMenu';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '@/contexts/TranslationContext';

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { t } = useTranslation();

  const menuData = {
    solutions: {
      title: t('menu.solutions'),
      sections: [
        {
          title: t('menu.solutions.aiAutomation'),
          items: [
            { title: t('menu.solutions.enterpriseAutomation'), href: "/solutions/enterprise" },
            { title: t('menu.solutions.processOptimization'), href: "/solutions/process" },
            { title: t('menu.solutions.customAi'), href: "/solutions/custom" },
            { title: t('menu.solutions.integration'), href: "/solutions/integration" }
          ]
        },
        {
          title: t('menu.solutions.financialServices'),
          items: [
            { title: t('menu.solutions.paymentProcessing'), href: "/solutions/payments" },
            { title: t('menu.solutions.financialAnalytics'), href: "/solutions/analytics" },
            { title: t('menu.solutions.riskManagement'), href: "/solutions/risk" },
            { title: t('menu.solutions.complianceSuite'), href: "/solutions/compliance" }
          ]
        }
      ]
    },
    industries: {
      title: t('menu.industries'),
      sections: [
        {
          title: t('menu.industries.financialServices'),
          items: [
            { title: t('menu.industries.banking'), href: "/industries/banking" },
            { title: t('menu.industries.insurance'), href: "/industries/insurance" },
            { title: t('menu.industries.investment'), href: "/industries/investment" },
            { title: t('menu.industries.fintech'), href: "/industries/fintech" }
          ]
        },
        {
          title: t('menu.industries.healthcare'),
          items: [
            { title: t('menu.industries.hospitals'), href: "/industries/hospitals" },
            { title: t('menu.industries.clinics'), href: "/industries/clinics" },
            { title: t('menu.industries.pharma'), href: "/industries/pharma" },
            { title: t('menu.industries.telemedicine'), href: "/industries/telemedicine" }
          ]
        }
      ]
    },
    products: {
      title: t('menu.products'),
      sections: [
        {
          title: t('menu.products.corePlatform'),
          items: [
            { title: t('menu.products.noraioStudio'), href: "/products/studio" },
            { title: t('menu.products.noraioEngine'), href: "/products/engine" },
            { title: t('menu.products.noraioConnect'), href: "/products/connect" },
            { title: t('menu.products.noraioAnalytics'), href: "/products/analytics" }
          ]
        },
        {
          title: t('menu.products.aiSolutions'),
          items: [
            { title: t('menu.products.nlp'), href: "/products/nlp" },
            { title: t('menu.products.vision'), href: "/products/vision" },
            { title: t('menu.products.predictive'), href: "/products/predictive" },
            { title: t('menu.products.rpa'), href: "/products/rpa" }
          ]
        }
      ]
    },
    resources: {
      title: t('menu.resources'),
      sections: [
        {
          title: t('menu.resources.learning'),
          items: [
            { title: t('menu.resources.academy'), href: "/academy" },
            { title: t('menu.resources.webinars'), href: "/webinars" },
            { title: t('menu.resources.tutorials'), href: "/tutorials" },
            { title: t('menu.resources.certification'), href: "/certification" }
          ]
        },
        {
          title: t('menu.resources.documentation'),
          items: [
            { title: t('menu.resources.aiTerms'), href: "/ai-terminologies" },
            { title: t('menu.resources.academy'), href: "/academy" },
            { title: t('menu.resources.userGuides'), href: "/docs/guides" },
            { title: t('menu.resources.faq'), href: "/faq" }
          ]
        }
      ]
    }
  };

  const handleMouseEnter = (menuKey: string) => {
    setActiveMenu(menuKey);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="http://127.0.0.1:8080" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img 
              src="/noraio-logo.png" 
              alt="NorAiO Logo" 
              className="h-10 w-auto"
            />
          </a>

          {/* Navigation Links with Mega Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(menuData).map(([key, menu]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors py-2">
                  <span>{menu.title}</span>
                  <ChevronDown size={16} className={`transition-transform ${activeMenu === key ? 'rotate-180' : ''}`} />
                </button>
                <MegaMenu
                  title={menu.title}
                  sections={menu.sections}
                  isOpen={activeMenu === key}
                  onClose={() => setActiveMenu(null)}
                />
              </div>
            ))}
            <a href="/about" className="text-white/80 hover:text-white transition-colors">
              {t('nav.about')}
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="ghost" className="hidden sm:inline-flex text-white hover:text-white/80">
              {t('nav.signIn')}
            </Button>
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white">
              {t('nav.getStarted')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;