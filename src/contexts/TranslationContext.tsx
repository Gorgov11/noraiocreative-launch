import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import translationService from '../services/translationService';

interface Translations {
  [key: string]: {
    [language: string]: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.solutions': {
    en: 'Solutions',
    no: 'Løsninger',
    sv: 'Lösningar',
    da: 'Løsninger',
    fi: 'Ratkaisut',
    ar: 'الحلول'
  },
  'nav.industries': {
    en: 'Industries',
    no: 'Bransjer',
    sv: 'Branscher',
    da: 'Brancher',
    fi: 'Toimialat',
    ar: 'الصناعات'
  },
  'nav.products': {
    en: 'Products',
    no: 'Produkter',
    sv: 'Produkter',
    da: 'Produkter',
    fi: 'Tuotteet',
    ar: 'المنتجات'
  },
  'nav.resources': {
    en: 'Resources',
    no: 'Ressurser',
    sv: 'Resurser',
    da: 'Ressourcer',
    fi: 'Resurssit',
    ar: 'الموارد'
  },
  'nav.about': {
    en: 'About us',
    no: 'Om oss',
    sv: 'Om oss',
    da: 'Om os',
    fi: 'Tietoa meistä',
    ar: 'من نحن'
  },
  'nav.signIn': {
    en: 'Sign In',
    no: 'Logg inn',
    sv: 'Logga in',
    da: 'Log ind',
    fi: 'Kirjaudu sisään',
    ar: 'تسجيل الدخول'
  },
  'nav.getStarted': {
    en: 'Get started',
    no: 'Kom i gang',
    sv: 'Kom igång',
    da: 'Kom i gang',
    fi: 'Aloita',
    ar: 'ابدأ الآن'
  },

  // Navigation mega menu
  'menu.solutions': { en: 'Solutions', ar: 'الحلول' },
  'menu.solutions.aiAutomation': { en: 'AI Automation', ar: 'أتمتة الذكاء الاصطناعي' },
  'menu.solutions.enterpriseAutomation': { en: 'Enterprise Automation', ar: 'أتمتة المؤسسات' },
  'menu.solutions.processOptimization': { en: 'Process Optimization', ar: 'تحسين العمليات' },
  'menu.solutions.customAi': { en: 'Custom AI Solutions', ar: 'حلول ذكاء اصطناعي مخصصة' },
  'menu.solutions.integration': { en: 'Integration Services', ar: 'خدمات التكامل' },
  'menu.solutions.financialServices': { en: 'Financial Services', ar: 'الخدمات المالية' },
  'menu.solutions.paymentProcessing': { en: 'Payment Processing', ar: 'معالجة المدفوعات' },
  'menu.solutions.financialAnalytics': { en: 'Financial Analytics', ar: 'تحليلات مالية' },
  'menu.solutions.riskManagement': { en: 'Risk Management', ar: 'إدارة المخاطر' },
  'menu.solutions.complianceSuite': { en: 'Compliance Suite', ar: 'مجموعة الامتثال' },

  'menu.industries': { en: 'Industries', ar: 'الصناعات' },
  'menu.industries.financialServices': { en: 'Financial Services', ar: 'الخدمات المالية' },
  'menu.industries.banking': { en: 'Banking', ar: 'الخدمات المصرفية' },
  'menu.industries.insurance': { en: 'Insurance', ar: 'التأمين' },
  'menu.industries.investment': { en: 'Investment', ar: 'الاستثمار' },
  'menu.industries.fintech': { en: 'Fintech', ar: 'التكنولوجيا المالية' },
  'menu.industries.healthcare': { en: 'Healthcare', ar: 'الرعاية الصحية' },
  'menu.industries.hospitals': { en: 'Hospitals', ar: 'المستشفيات' },
  'menu.industries.clinics': { en: 'Clinics', ar: 'العيادات' },
  'menu.industries.pharma': { en: 'Pharmaceuticals', ar: 'الأدوية' },
  'menu.industries.telemedicine': { en: 'Telemedicine', ar: 'الرعاية عن بُعد' },

  'menu.products': { en: 'Products', ar: 'المنتجات' },
  'menu.products.corePlatform': { en: 'Core Platform', ar: 'المنصة الأساسية' },
  'menu.products.noraioStudio': { en: 'NorAiO Studio', ar: 'NorAiO Studio' },
  'menu.products.noraioEngine': { en: 'NorAiO Engine', ar: 'NorAiO Engine' },
  'menu.products.noraioConnect': { en: 'NorAiO Connect', ar: 'NorAiO Connect' },
  'menu.products.noraioAnalytics': { en: 'NorAiO Analytics', ar: 'NorAiO Analytics' },
  'menu.products.aiSolutions': { en: 'AI Solutions', ar: 'حلول الذكاء الاصطناعي' },
  'menu.products.nlp': { en: 'Natural Language Processing', ar: 'معالجة اللغة الطبيعية' },
  'menu.products.vision': { en: 'Computer Vision', ar: 'الرؤية الحاسوبية' },
  'menu.products.predictive': { en: 'Predictive Analytics', ar: 'تحليلات تنبؤية' },
  'menu.products.rpa': { en: 'Robotic Process Automation', ar: 'أتمتة العمليات الروبوتية' },

  'menu.resources': { en: 'Resources', ar: 'الموارد' },
  'menu.resources.learning': { en: 'Learning', ar: 'التعلم' },
  'menu.resources.academy': { en: 'NorAiO Academy', ar: 'أكاديمية NorAiO' },
  'menu.resources.webinars': { en: 'Webinars', ar: 'ندوات عبر الإنترنت' },
  'menu.resources.tutorials': { en: 'Tutorials', ar: 'شروحات' },
  'menu.resources.certification': { en: 'Certification', ar: 'شهادات' },
  'menu.resources.documentation': { en: 'Documentation', ar: 'التوثيق' },
  'menu.resources.aiTerms': { en: 'AI Terminologies', ar: 'مصطلحات الذكاء الاصطناعي' },
  'menu.resources.userGuides': { en: 'User Guides', ar: 'أدلة المستخدم' },
  'menu.resources.faq': { en: 'FAQ', ar: 'الأسئلة الشائعة' },
  
  // Hero Section
  'hero.title1': {
    en: 'SHAPING TOMORROW\'S',
    no: 'FORMER I MORGEN',
    sv: 'FORMAR MORGONDAGENS',
    da: 'FORMER I MORGEN',
    fi: 'MUOVAAMASSA HUOMISTA',
    ar: 'تشكيل مستقبل'
  },
  'hero.title2': {
    en: 'BUSINESSES',
    no: 'FORETAK',
    sv: 'FÖRETAG',
    da: 'VIRKSOMHEDER',
    fi: 'YRITYKSIÄ',
    ar: 'الأعمال'
  },
  'hero.subtitle': {
    en: 'Your Future, Automated.',
    no: 'Din fremtid, automatisert.',
    sv: 'Din framtid, automatiserad.',
    da: 'Din fremtid, automatiseret.',
    fi: 'Tulevaisuutesi, automatisoitu.',
    ar: 'مستقبلك، مؤتمت.'
  },
  'hero.description': {
    en: 'From strategy to execution, we deploy AI solutions that streamline processes, boost efficiency, and give you the edge in a competitive market.',
    no: 'Fra strategi til utførelse, implementerer vi AI-løsninger som strømlinjeformer prosesser, øker effektiviteten og gir deg fordelen i et konkurransepreget marked.',
    sv: 'Från strategi till utförande, implementerar vi AI-lösningar som effektiviserar processer, ökar effektiviteten och ger dig fördelen i en konkurrensutsatt marknad.',
    da: 'Fra strategi til udførelse, implementerer vi AI-løsninger, der strømlinjeformer processer, øger effektiviteten og giver dig fordelene i et konkurrencepræget marked.',
    fi: 'Strategiasta toteutukseen, otamme käyttöön tekoälyratkaisuja, jotka virtaviivaistavat prosesseja, parantavat tehokkuutta ja antavat sinulle edun kilpailullisessa markkinassa.',
    ar: 'من الاستراتيجية إلى التنفيذ، ننشر حلول الذكاء الاصطناعي التي تبسط العمليات وتعزز الكفاءة وتعطيك الميزة في السوق التنافسية.'
  },
  'hero.contactButton': {
    en: 'Contact one of our experts →',
    no: 'Kontakt en av våre eksperter →',
    sv: 'Kontakta en av våra experter →',
    da: 'Kontakt en af vores eksperter →',
    fi: 'Ota yhteyttä asiantuntijoihimme →',
    ar: 'تواصل مع أحد خبرائنا ←'
  },
  'hero.exploreButton': {
    en: '▷ + Explore Solutions',
    no: '▷ + Utforsk løsninger',
    sv: '▷ + Utforska lösningar',
    da: '▷ + Udforsk løsninger',
    fi: '▷ + Tutki ratkaisuja',
    ar: '▷ + استكشف الحلول'
  },

  // Trust Section
  'trust.title': {
    en: 'Supported Applications',
    no: 'Støttede applikasjoner',
    sv: 'Stödda applikationer',
    da: 'Understøttede applikationer',
    fi: 'Tuetut sovellukset',
    ar: 'التطبيقات المدعومة'
  },

  // Stats
  'stats.experience': {
    en: 'Industry Experience',
    no: 'Bransjeerfaring',
    sv: 'Branscherfarenhet',
    da: 'Brancheerfaring',
    fi: 'Toimialakokemus',
    ar: 'خبرة الصناعة'
  },
  'stats.aiDriven': {
    en: 'AI Driven',
    no: 'AI-drevet',
    sv: 'AI-driven',
    da: 'AI-drevet',
    fi: 'AI-vetoinen',
    ar: 'مدفوع بالذكاء الاصطناعي'
  },
  'stats.expertise': {
    en: 'Large-Scale Project Expertise',
    no: 'Storskala prosjekterfaring',
    sv: 'Storskala projekterfarenhet',
    da: 'Storskala projekterfaring',
    fi: 'Suuren mittakaavan projektiosaaminen',
    ar: 'خبرة المشاريع واسعة النطاق'
  },
  'stats.desc.trustGlobally': { en: 'Trust NorAiO globally', ar: 'يثقون بـ NorAiO عالميًا' },
  'stats.desc.inTransactions': { en: 'In financial transactions', ar: 'في المعاملات المالية' },
  'stats.desc.inManual': { en: 'In manual processes', ar: 'في العمليات اليدوية' },
  'stats.desc.reliability': { en: 'Enterprise reliability', ar: 'موثوقية مؤسسية' },

  // CTA Section
  'cta.title1': {
    en: 'Ready to Transform Your',
    ar: 'هل أنت مستعد لتحويل'
  },
  'cta.title2': {
    en: 'Business with AI?',
    ar: 'عملك بالذكاء الاصطناعي؟'
  },
  'cta.subtitle': {
    en: 'Join thousands of companies using NorAiO to automate their business processes and unlock AI-driven insights.',
    ar: 'انضم إلى آلاف الشركات التي تستخدم NorAiO لأتمتة عملياتها وفتح آفاق رؤى مدفوعة بالذكاء الاصطناعي.'
  },
  'cta.benefit.trial': {
    en: '14-day free trial',
    ar: 'تجربة مجانية لمدة 14 يومًا'
  },
  'cta.benefit.noCard': {
    en: 'No credit card required',
    ar: 'لا حاجة لبطاقة ائتمان'
  },
  'cta.benefit.setup': {
    en: 'Setup in under 5 minutes',
    ar: 'إعداد في أقل من 5 دقائق'
  },
  'cta.benefit.support': {
    en: '24/7 expert support',
    ar: 'دعم خبراء 24/7'
  },
  'cta.startTrial': {
    en: 'Start Your Free Trial',
    ar: 'ابدأ تجربتك المجانية'
  },
  'cta.scheduleDemo': {
    en: 'Schedule Demo',
    ar: 'جدولة عرض'
  },
  'cta.questions': {
    en: 'Questions? Contact our sales team at',
    ar: 'أسئلة؟ تواصل مع فريق المبيعات عبر'
  },

  // StatsSection (homepage stats)
  'stats.activeCompanies': {
    en: 'Active Companies'
  },
  'stats.processedMonthly': {
    en: 'Processed Monthly'
  },
  'stats.timeReduction': {
    en: 'Time Reduction'
  },
  'stats.uptimeSla': {
    en: 'Uptime SLA'
  }
};

interface TranslationContextType {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
  translateText: (text: string, context?: string) => Promise<string>;
  isTranslating: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('language') : null;
    return saved || 'en';
  });
  const [isTranslating, setIsTranslating] = useState(false);

  const t = (key: string): string => {
    return translations[key]?.[language] || translations[key]?.['en'] || key;
  };

  const translateText = async (text: string, context?: string): Promise<string> => {
    if (language === 'en') return text;
    
    setIsTranslating(true);
    try {
      const result = await translationService.translateText(text, {
        targetLanguage: language,
        context: context || 'website',
        tone: 'professional'
      });
      return result.translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      return text; // Fallback to original text
    } finally {
      setIsTranslating(false);
    }
  };

  // Persist language, set dir/lang attributes, and notify listeners
  useEffect(() => {
    try {
      window.localStorage.setItem('language', language);
    } catch {}
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      html.lang = language;
      html.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
    const event = new CustomEvent('languageChanged', { detail: { language } });
    window.dispatchEvent(event);
  }, [language]);

  return (
    <TranslationContext.Provider value={{ 
      language, 
      setLanguage, 
      t, 
      translateText, 
      isTranslating 
    }}>
      {children}
    </TranslationContext.Provider>
  );
};
