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
  'stats.desc.trustGlobally': { 
    en: 'Trust NorAiO globally', 
    no: 'Stoler på NorAiO globalt',
    sv: 'Litar på NorAiO globalt',
    da: 'Stoler på NorAiO globalt',
    fi: 'Luottaa NorAiO:hon maailmanlaajuisesti',
    ar: 'يثقون بـ NorAiO عالميًا' 
  },
  'stats.desc.inTransactions': { 
    en: 'In financial transactions', 
    no: 'I finansielle transaksjoner',
    sv: 'I finansiella transaktioner',
    da: 'I finansielle transaktioner',
    fi: 'Rahoitustapahtumissa',
    ar: 'في المعاملات المالية' 
  },
  'stats.desc.inManual': { 
    en: 'In manual processes', 
    no: 'I manuelle prosesser',
    sv: 'I manuella processer',
    da: 'I manuelle processer',
    fi: 'Manuaalisissa prosesseissa',
    ar: 'في العمليات اليدوية' 
  },
  'stats.desc.reliability': { 
    en: 'Enterprise reliability', 
    no: 'Bedriftspålitelighet',
    sv: 'Företagspålitlighet',
    da: 'Virksomhedspålidelighed',
    fi: 'Yrityksen luotettavuus',
    ar: 'موثوقية مؤسسية' 
  },

  // CTA Section
  'cta.title1': {
    en: 'Ready to Transform Your',
    no: 'Klar til å transformere din',
    sv: 'Redo att transformera din',
    da: 'Klar til at transformere din',
    fi: 'Valmis muuttamaan',
    ar: 'هل أنت مستعد لتحويل'
  },
  'cta.title2': {
    en: 'Business with AI?',
    no: 'forretning med AI?',
    sv: 'verksamhet med AI?',
    da: 'virksomhed med AI?',
    fi: 'yritystäsi tekoälyllä?',
    ar: 'عملك بالذكاء الاصطناعي؟'
  },
  'cta.subtitle': {
    en: 'Join thousands of companies using NorAiO to automate their business processes and unlock AI-driven insights.',
    no: 'Bli med tusenvis av bedrifter som bruker NorAiO for å automatisere forretningsprosesser og låse opp AI-drevne innsikter.',
    sv: 'Gå med tusentals företag som använder NorAiO för att automatisera sina affärsprocesser och låsa upp AI-drivna insikter.',
    da: 'Tilslut dig tusindvis af virksomheder, der bruger NorAiO til at automatisere deres forretningsprocesser og frigøre AI-drevne indsigter.',
    fi: 'Liity tuhansien yritysten joukkoon, jotka käyttävät NorAiO:ta liiketoimintaprosessien automatisointiin ja tekoälyvetoisen tiedon avaamiseen.',
    ar: 'انضم إلى آلاف الشركات التي تستخدم NorAiO لأتمتة عملياتها وفتح آفاق رؤى مدفوعة بالذكاء الاصطناعي.'
  },
  'cta.benefit.trial': {
    en: '14-day free trial',
    no: '14-dagers gratis prøveperiode',
    sv: '14-dagars gratis provperiod',
    da: '14-dages gratis prøveperiode',
    fi: '14 päivän ilmainen kokeilu',
    ar: 'تجربة مجانية لمدة 14 يومًا'
  },
  'cta.benefit.noCard': {
    en: 'No credit card required',
    no: 'Ingen kredittkort påkrevd',
    sv: 'Inget kreditkort krävs',
    da: 'Intet kreditkort påkrævet',
    fi: 'Korttia ei tarvita',
    ar: 'لا حاجة لبطاقة ائتمان'
  },
  'cta.benefit.setup': {
    en: 'Setup in under 5 minutes',
    no: 'Oppsett på under 5 minutter',
    sv: 'Installation på under 5 minuter',
    da: 'Opsætning på under 5 minutter',
    fi: 'Asennus alle 5 minuutissa',
    ar: 'إعداد في أقل من 5 دقائق'
  },
  'cta.benefit.support': {
    en: '24/7 expert support',
    no: '24/7 ekspertsupport',
    sv: '24/7 expertstöd',
    da: '24/7 ekspertsupport',
    fi: '24/7 asiantuntijatuki',
    ar: 'دعم خبراء 24/7'
  },
  'cta.startTrial': {
    en: 'Start Your Free Trial',
    no: 'Start din gratis prøveperiode',
    sv: 'Starta din gratis provperiod',
    da: 'Start din gratis prøveperiode',
    fi: 'Aloita ilmainen kokeilu',
    ar: 'ابدأ تجربتك المجانية'
  },
  'cta.scheduleDemo': {
    en: 'Schedule Demo',
    no: 'Planlegg demo',
    sv: 'Boka demo',
    da: 'Planlæg demo',
    fi: 'Varaa demo',
    ar: 'جدولة عرض'
  },
  'cta.questions': {
    en: 'Questions? Contact our sales team at',
    no: 'Spørsmål? Kontakt vårt salgsteam på',
    sv: 'Frågor? Kontakta vårt säljteam på',
    da: 'Spørgsmål? Kontakt vores salgsteam på',
    fi: 'Kysymyksiä? Ota yhteyttä myyntitiimiimme',
    ar: 'أسئلة؟ تواصل مع فريق المبيعات عبر'
  },

  // StatsSection (homepage stats)
  'stats.activeCompanies': {
    en: 'Active Companies',
    no: 'Aktive bedrifter',
    sv: 'Aktiva företag',
    da: 'Aktive virksomheder',
    fi: 'Aktiiviset yritykset',
    ar: 'الشركات النشطة'
  },
  'stats.processedMonthly': {
    en: 'Processed Monthly',
    no: 'Behandlet månedlig',
    sv: 'Behandlat månadsvis',
    da: 'Behandlet månedligt',
    fi: 'Käsitelty kuukausittain',
    ar: 'المعالجة الشهرية'
  },
  'stats.timeReduction': {
    en: 'Time Reduction',
    no: 'Tidsreduksjon',
    sv: 'Tidsreduktion',
    da: 'Tidsreduktion',
    fi: 'Aikavähennys',
    ar: 'تقليل الوقت'
  },
  'stats.uptimeSla': {
    en: 'Uptime SLA',
    no: 'Oppetid SLA',
    sv: 'Upptid SLA',
    da: 'Oppetid SLA',
    fi: 'Käytettävyys SLA',
    ar: 'اتفاقية مستوى الخدمة'
  },

  // Features Section
  'features.title': {
    en: 'Powerful Features for',
    no: 'Kraftige funksjoner for',
    sv: 'Kraftfulla funktioner för',
    da: 'Kraftfulde funktioner til',
    fi: 'Tehokkaat ominaisuudet',
    ar: 'ميزات قوية لـ'
  },
  'features.subtitle': {
    en: 'AI & Automation',
    no: 'AI & Automatisering',
    sv: 'AI & Automatisering',
    da: 'AI & Automatisering',
    fi: 'AI & Automaatio',
    ar: 'الذكاء الاصطناعي والأتمتة'
  },
  'features.description': {
    en: 'Discover the comprehensive suite of features designed to revolutionize your business operations.',
    no: 'Oppdag den omfattende funksjonspakken designet for å revolusjonere dine forretningsoperasjoner.',
    sv: 'Upptäck den omfattande funktionspaketen designad för att revolutionera dina affärsoperationer.',
    da: 'Opdag den omfattende funktionspakke designet til at revolutionere dine forretningsoperationer.',
    fi: 'Tutustu kattavaan ominaisuuspakettiin, joka on suunniteltu mullistamaan yritystoimintasi.',
    ar: 'اكتشف مجموعة الميزات الشاملة المصممة لإحداث ثورة في عمليات عملك.'
  },

  // Testimonials Section
  'testimonials.title': {
    en: 'Trusted by Business Leaders',
    no: 'Stolt av forretningsledere',
    sv: 'Förtroende av företagsledare',
    da: 'Stolt af forretningsledere',
    fi: 'Liiketoiminnan johtajien luottamus',
    ar: 'موثوق من قادة الأعمال'
  },
  'testimonials.subtitle': {
    en: 'Worldwide',
    no: 'Verden over',
    sv: 'Världen över',
    da: 'Verden over',
    fi: 'Maailmanlaajuisesti',
    ar: 'عالمياً'
  },
  'testimonials.description': {
    en: 'See how industry leaders are transforming their business operations with AI & automation through NorAiO.',
    no: 'Se hvordan bransjeledere transformerer sine forretningsoperasjoner med AI & automatisering gjennom NorAiO.',
    sv: 'Se hur branschledare transformerar sina affärsoperationer med AI & automatisering genom NorAiO.',
    da: 'Se hvordan brancheledere transformerer deres forretningsoperationer med AI & automatisering gennem NorAiO.',
    fi: 'Katso kuinka toimialan johtajat muuttavat yritystoimintaansa AI:lla ja automaatiolla NorAiO:n kautta.',
    ar: 'شاهد كيف يغير قادة الصناعة عمليات أعمالهم بالذكاء الاصطناعي والأتمتة من خلال NorAiO.'
  },

  // Common page elements
  'page.learnMore': {
    en: 'Learn More',
    no: 'Lær mer',
    sv: 'Läs mer',
    da: 'Lær mere',
    fi: 'Lue lisää',
    ar: 'اعرف المزيد'
  },
  'page.readMore': {
    en: 'Read More',
    no: 'Les mer',
    sv: 'Läs mer',
    da: 'Læs mere',
    fi: 'Lue lisää',
    ar: 'اقرأ المزيد'
  },
  'page.bookConsultation': {
    en: 'Book a Consultation',
    no: 'Bestill konsultasjon',
    sv: 'Boka konsultation',
    da: 'Book en konsultation',
    fi: 'Varaa konsultaatio',
    ar: 'احجز استشارة'
  },
  'page.startConversation': {
    en: 'Start a Conversation',
    no: 'Start en samtale',
    sv: 'Starta en konversation',
    da: 'Start en samtale',
    fi: 'Aloita keskustelu',
    ar: 'ابدأ محادثة'
  },
  'page.requestDemo': {
    en: 'Request Demo',
    no: 'Be om demo',
    sv: 'Begär demo',
    da: 'Anmod om demo',
    fi: 'Pyydä demo',
    ar: 'اطلب عرضاً توضيحياً'
  },
  'page.talkToSales': {
    en: 'Talk to Sales',
    no: 'Snakk med salg',
    sv: 'Prata med försäljning',
    da: 'Snak med salg',
    fi: 'Puhu myynnille',
    ar: 'تحدث مع المبيعات'
  },

  // About Page
  'about.title': {
    en: 'About',
    no: 'Om oss',
    sv: 'Om oss',
    da: 'Om os',
    fi: 'Tietoa meistä',
    ar: 'حول'
  },
  'about.subtitle': {
    en: 'Where Nordic innovation meets artificial intelligence to transform businesses worldwide.',
    no: 'Hvor nordisk innovasjon møter kunstig intelligens for å transformere bedrifter verden over.',
    sv: 'Där nordisk innovation möter artificiell intelligens för att transformera företag världen över.',
    da: 'Hvor nordisk innovation møder kunstig intelligens for at transformere virksomheder verden over.',
    fi: 'Missä pohjoismainen innovaatio kohtaa tekoälyn muuttaakseen yrityksiä maailmanlaajuisesti.',
    ar: 'حيث تلتقي الابتكارات الشمالية بالذكاء الاصطناعي لتحويل الشركات عالمياً.'
  },
  'about.ourStory': {
    en: 'Our Story',
    no: 'Vår historie',
    sv: 'Vår historia',
    da: 'Vores historie',
    fi: 'Tarinamme',
    ar: 'قصتنا'
  },
  'about.storyText': {
    en: 'NorAiO was born from the idea that Nordic innovation and AI technology can transform industries worldwide. With expertise spanning 15+ years, we blend deep technical knowledge with business strategy to deliver solutions that drive real impact.',
    no: 'NorAiO ble født fra ideen om at nordisk innovasjon og AI-teknologi kan transformere bransjer verden over. Med ekspertise som spenner over 15+ år, blander vi dyp teknisk kunnskap med forretningsstrategi for å levere løsninger som skaper reell påvirkning.',
    sv: 'NorAiO föddes från idén att nordisk innovation och AI-teknologi kan transformera branscher världen över. Med expertis som sträcker sig över 15+ år blandar vi djup teknisk kunskap med affärsstrategi för att leverera lösningar som driver verklig påverkan.',
    da: 'NorAiO blev født fra ideen om, at nordisk innovation og AI-teknologi kan transformere brancher verden over. Med ekspertise, der spænder over 15+ år, blander vi dyb teknisk viden med forretningsstrategi for at levere løsninger, der driver reel indvirkning.',
    fi: 'NorAiO syntyi ajatuksesta, että pohjoismainen innovaatio ja AI-teknologia voivat muuttaa toimialoja maailmanlaajuisesti. Yli 15 vuoden asiantuntemuksella yhdistämme syvää teknistä tietoa liiketoimintastrategiaan tuottaaksemme ratkaisuja, jotka tuottavat todellista vaikutusta.',
    ar: 'ولدت NorAiO من فكرة أن الابتكارات الشمالية وتكنولوجيا الذكاء الاصطناعي يمكنها تحويل الصناعات عالمياً. بخبرة تمتد لأكثر من 15 عاماً، ندمج المعرفة التقنية العميقة مع استراتيجية الأعمال لتقديم حلول تحقق تأثيراً حقيقياً.'
  },
  'about.mission': {
    en: 'Mission',
    no: 'Mål',
    sv: 'Uppdrag',
    da: 'Mission',
    fi: 'Tehtävä',
    ar: 'المهمة'
  },
  'about.missionText': {
    en: 'To empower organizations to scale with AI-driven efficiency, automation, and creativity.',
    no: 'Å gi organisasjoner mulighet til å skalere med AI-drevet effektivitet, automatisering og kreativitet.',
    sv: 'Att ge organisationer möjlighet att skala med AI-driven effektivitet, automatisering och kreativitet.',
    da: 'At give organisationer mulighed for at skalere med AI-drevet effektivitet, automatisering og kreativitet.',
    fi: 'Antaa organisaatioille mahdollisuus skaalata AI-vetoisella tehokkuudella, automaatiolla ja luovuudella.',
    ar: 'تمكين المنظمات من التوسع بالكفاءة وال automatization والإبداع المدعوم بالذكاء الاصطناعي.'
  },
  'about.vision': {
    en: 'Vision',
    no: 'Visjon',
    sv: 'Vision',
    da: 'Vision',
    fi: 'Visio',
    ar: 'الرؤية'
  },
  'about.visionText': {
    en: 'A world where human creativity and artificial intelligence unite to build smarter businesses and better futures.',
    no: 'En verden der menneskelig kreativitet og kunstig intelligens forenes for å bygge smartere bedrifter og bedre fremtider.',
    sv: 'En värld där mänsklig kreativitet och artificiell intelligens förenas för att bygga smartare företag och bättre framtider.',
    da: 'En verden, hvor menneskelig kreativitet og kunstig intelligens forenes for at bygge klogere virksomheder og bedre fremtider.',
    fi: 'Maailma, jossa ihmisen luovuus ja tekoäly yhdistyvät rakentamaan älykkäämpiä yrityksiä ja parempia tulevaisuuksia.',
    ar: 'عالم حيث تتحد الإبداع البشري والذكاء الاصطناعي لبناء أعمال أكثر ذكاءً ومستقبل أفضل.'
  },
  'about.leadership': {
    en: 'Leadership',
    no: 'Ledelse',
    sv: 'Ledning',
    da: 'Ledelse',
    fi: 'Johto',
    ar: 'القيادة'
  },
  'about.partners': {
    en: 'Partners & Collaborations',
    no: 'Partnere og samarbeid',
    sv: 'Partners och samarbeten',
    da: 'Partnere og samarbejder',
    fi: 'Kumppanit ja yhteistyö',
    ar: 'الشركاء والتعاون'
  },
  'about.partnersText': {
    en: 'Trusted by businesses across Norway, Scandinavia, and the Middle East. Supported by innovation funds and government-backed digital transformation initiatives.',
    no: 'Stolt av bedrifter over hele Norge, Skandinavia og Midtøsten. Støttet av innovasjonsfond og statlig støttede digitale transformasjonsinitiativer.',
    sv: 'Förtroende av företag över hela Norge, Skandinavien och Mellanöstern. Stöds av innovationsfonder och statligt stödda digitala transformationsinitiativ.',
    da: 'Stolt af virksomheder over hele Norge, Skandinavien og Mellemøsten. Støttet af innovationsfonde og statsstøttede digitale transformationsinitiativer.',
    fi: 'Luottamus yrityksiä ympäri Norjaa, Skandinaviaa ja Lähi-itää. Tuettu innovaatiorahoituksella ja valtion tukemilla digitaalisen muutoksen aloitteilla.',
    ar: 'موثوق من الشركات عبر النرويج والدول الاسكندنافية والشرق الأوسط. مدعوم من صناديق الابتكار ومبادرات التحول الرقمي المدعومة حكومياً.'
  },

  // Solutions Page
  'solutions.title': {
    en: 'Comprehensive',
    no: 'Omfattende',
    sv: 'Omfattande',
    da: 'Omfattende',
    fi: 'Kattava',
    ar: 'شامل'
  },
  'solutions.subtitle': {
    en: 'Solutions',
    no: 'Løsninger',
    sv: 'Lösningar',
    da: 'Løsninger',
    fi: 'Ratkaisut',
    ar: 'الحلول'
  },
  'solutions.description': {
    en: 'NorAiO delivers end-to-end solutions tailored to industries and business needs. Transform your operations with our AI-powered expertise.',
    no: 'NorAiO leverer ende-til-ende løsninger tilpasset bransjer og forretningsbehov. Transformer dine operasjoner med vår AI-drevne ekspertise.',
    sv: 'NorAiO leverer ende-till-ende lösningar anpassade för branscher och affärsbehov. Transformera dina operationer med vår AI-drivna expertis.',
    da: 'NorAiO leverer ende-til-ende løsninger tilpasset brancher og forretningsbehov. Transformer dine operationer med vores AI-drevne ekspertise.',
    fi: 'NorAiO tarjoaa kattavia ratkaisuja, jotka on räätälöity toimialoille ja liiketoimintatarpeille. Muuta toimintasi AI-vetoisella asiantuntemuksellamme.',
    ar: 'NorAiO تقدم حلولاً شاملة مصممة خصيصاً للصناعات واحتياجات الأعمال. حول عملياتك بخبرتنا المدعومة بالذكاء الاصطناعي.'
  },
  'solutions.readyToTransform': {
    en: 'Ready to Transform Your Business?',
    no: 'Klar til å transformere bedriften din?',
    sv: 'Redo att transformera ditt företag?',
    da: 'Klar til at transformere din virksomhed?',
    fi: 'Valmis muuttamaan yrityksesi?',
    ar: 'مستعد لتحويل عملك؟'
  },
  'solutions.ctaDescription': {
    en: "Let's discuss how our solutions can be tailored to your specific needs and industry requirements.",
    no: 'La oss diskutere hvordan våre løsninger kan tilpasses dine spesifikke behov og bransjekrav.',
    sv: 'Låt oss diskutera hur våra lösningar kan anpassas till dina specifika behov och branschkrav.',
    da: 'Lad os diskutere, hvordan vores løsninger kan tilpasses dine specifikke behov og branchekrav.',
    fi: 'Keskustellaan siitä, kuinka ratkaisumme voidaan räätälöidä tarpeisiisi ja toimialavaatimuksiin.',
    ar: 'دعنا نناقش كيف يمكن تخصيص حلولنا لاحتياجاتك ومتطلبات صناعتك المحددة.'
  },

  // Products Page
  'products.title': {
    en: 'Our',
    no: 'Våre',
    sv: 'Våra',
    da: 'Vores',
    fi: 'Meidän',
    ar: 'منتجاتنا'
  },
  'products.subtitle': {
    en: 'Products',
    no: 'Produkter',
    sv: 'Produkter',
    da: 'Produkter',
    fi: 'Tuotteet',
    ar: 'المنتجات'
  },
  'products.description': {
    en: 'Innovative AI-powered products designed to streamline your business operations and unlock new possibilities for growth and efficiency.',
    no: 'Innovative AI-drevne produkter designet for å strømlinjeforme dine forretningsoperasjoner og låse opp nye muligheter for vekst og effektivitet.',
    sv: 'Innovativa AI-drivna produkter designade för att effektivisera dina affärsoperationer och låsa upp nya möjligheter för tillväxt och effektivitet.',
    da: 'Innovative AI-drevne produkter designet til at strømlinjeforme dine forretningsoperationer og låse op nye muligheder for vækst og effektivitet.',
    fi: 'Innovatiiviset AI-vetoiset tuotteet, jotka on suunniteltu virtaviivaistamaan yritystoimintasi ja avaamaan uusia mahdollisuuksia kasvuun ja tehokkuuteen.',
    ar: 'منتجات مبتكرة مدعومة بالذكاء الاصطناعي مصممة لتبسيط عمليات عملك وإطلاق إمكانيات جديدة للنمو والكفاءة.'
  },
  'products.whyChoose': {
    en: 'Why Choose Our Products?',
    no: 'Hvorfor velge våre produkter?',
    sv: 'Varför välja våra produkter?',
    da: 'Hvorfor vælge vores produkter?',
    fi: 'Miksi valita tuotteemme?',
    ar: 'لماذا تختار منتجاتنا؟'
  },
  'products.whyChooseDesc': {
    en: 'Built with cutting-edge AI technology and designed for scalability, security, and ease of use.',
    no: 'Bygget med banebrytende AI-teknologi og designet for skalerbarhet, sikkerhet og brukervennlighet.',
    sv: 'Byggd med banbrytande AI-teknologi och designad för skalbarhet, säkerhet och användarvänlighet.',
    da: 'Bygget med banebrytende AI-teknologi og designet til skalbarhed, sikkerhed og brugervenlighed.',
    fi: 'Rakennettu huipputeknologisella AI:lla ja suunniteltu skaalautuvuudelle, turvallisuudelle ja helppokäyttöisyydelle.',
    ar: 'مبني بأحدث تقنيات الذكاء الاصطناعي ومصمم للقابلية للتوسع والأمان وسهولة الاستخدام.'
  },
  'products.readyToStart': {
    en: 'Ready to Get Started?',
    no: 'Klar til å komme i gang?',
    sv: 'Redo att komma igång?',
    da: 'Klar til at komme i gang?',
    fi: 'Valmis aloittamaan?',
    ar: 'مستعد للبدء؟'
  },
  'products.ctaDescription': {
    en: 'Explore our products in detail or contact us to discuss custom implementations for your business needs.',
    no: 'Utforsk våre produkter i detalj eller kontakt oss for å diskutere tilpassede implementeringer for dine forretningsbehov.',
    sv: 'Utforska våra produkter i detalj eller kontakta oss för att diskutera anpassade implementeringar för dina affärsbehov.',
    da: 'Udforsk vores produkter i detaljer eller kontakt os for at diskutere tilpassede implementeringer for dine forretningsbehov.',
    fi: 'Tutustu tuotteisiimme yksityiskohtaisesti tai ota yhteyttä keskustellaksesi räätälöidyistä toteutuksista liiketoimintatarpeisiisi.',
    ar: 'استكشف منتجاتنا بالتفصيل أو اتصل بنا لمناقشة التطبيقات المخصصة لاحتياجات عملك.'
  },

  // Resources Page
  'resources.title': {
    en: 'Knowledge',
    no: 'Kunnskap',
    sv: 'Kunskap',
    da: 'Viden',
    fi: 'Tieto',
    ar: 'المعرفة'
  },
  'resources.subtitle': {
    en: 'Resources',
    no: 'Ressurser',
    sv: 'Resurser',
    da: 'Ressourcer',
    fi: 'Resurssit',
    ar: 'الموارد'
  },
  'resources.description': {
    en: 'Explore our comprehensive library of insights, case studies, and expert guidance to accelerate your digital transformation journey.',
    no: 'Utforsk vår omfattende bibliotek med innsikter, casestudier og ekspertråd for å akselerere din digitale transformasjonsreise.',
    sv: 'Utforska vårt omfattande bibliotek med insikter, fallstudier och expertvägledning för att påskynda din digitala transformationsresa.',
    da: 'Udforsk vores omfattende bibliotek med indsigter, casestudier og ekspertrådgivning for at accelerere din digitale transformationsrejse.',
    fi: 'Tutustu kattavaan kirjastoomme oivalluksia, tapaustutkimuksia ja asiantuntijaohjeita nopeuttaaksesi digitaalisen muutoksen matkaasi.',
    ar: 'استكشف مكتبتنا الشاملة من الرؤى ودراسات الحالة والإرشاد الخبير لتسريع رحلة التحول الرقمي الخاصة بك.'
  },
  'resources.featuredContent': {
    en: 'Featured Content',
    no: 'Fremhevet innhold',
    sv: 'Utvalt innehåll',
    da: 'Fremhævet indhold',
    fi: 'Esittelyssä oleva sisältö',
    ar: 'المحتوى المميز'
  },
  'resources.stayUpdated': {
    en: 'Stay Updated',
    no: 'Hold deg oppdatert',
    sv: 'Håll dig uppdaterad',
    da: 'Hold dig opdateret',
    fi: 'Pysy ajan tasalla',
    ar: 'ابق محدثاً'
  },
  'resources.newsletterDesc': {
    en: 'Subscribe to our newsletter for the latest insights on AI, automation, and digital transformation.',
    no: 'Abonner på vårt nyhetsbrev for de siste innsiktene om AI, automatisering og digital transformasjon.',
    sv: 'Prenumerera på vårt nyhetsbrev för de senaste insikterna om AI, automatisering och digital transformation.',
    da: 'Tilmeld dig vores nyhedsbrev for de seneste indsigter om AI, automatisering og digital transformation.',
    fi: 'Tilaa uutiskirjeemme saadaksesi uusimmat oivallukset AI:sta, automaatiosta ja digitaalisesta muutoksesta.',
    ar: 'اشترك في نشرتنا الإخبارية للحصول على أحدث الرؤى حول الذكاء الاصطناعي والأتمتة والتحول الرقمي.'
  },
  'resources.subscribe': {
    en: 'Subscribe',
    no: 'Abonner',
    sv: 'Prenumerera',
    da: 'Tilmeld',
    fi: 'Tilaa',
    ar: 'اشترك'
  },

  // Contact Page
  'contact.title': {
    en: 'Get In',
    no: 'Ta kontakt',
    sv: 'Ta kontakt',
    da: 'Kom i kontakt',
    fi: 'Ota yhteyttä',
    ar: 'تواصل معنا'
  },
  'contact.subtitle': {
    en: 'Touch',
    no: 'med oss',
    sv: 'med oss',
    da: 'med os',
    fi: 'meihin',
    ar: 'معنا'
  },
  'contact.description': {
    en: "Ready to transform your business with AI? Let's start the conversation. Our team is here to help you succeed.",
    no: 'Klar til å transformere bedriften din med AI? La oss starte samtalen. Teamet vårt er her for å hjelpe deg å lykkes.',
    sv: 'Redo att transformera ditt företag med AI? Låt oss starta konversationen. Vårt team är här för att hjälpa dig att lyckas.',
    da: 'Klar til at transformere din virksomhed med AI? Lad os starte samtalen. Vores team er her for at hjælpe dig med at lykkes.',
    fi: 'Valmis muuttamaan yrityksesi AI:lla? Aloitetaan keskustelu. Tiimimme on täällä auttamassa sinua menestymään.',
    ar: 'مستعد لتحويل عملك بالذكاء الاصطناعي؟ دعنا نبدأ المحادثة. فريقنا هنا لمساعدتك على النجاح.'
  },
  'contact.sendMessage': {
    en: 'Send Us a Message',
    no: 'Send oss en melding',
    sv: 'Skicka oss ett meddelande',
    da: 'Send os en besked',
    fi: 'Lähetä meille viesti',
    ar: 'أرسل لنا رسالة'
  },
  'contact.ourLocations': {
    en: 'Our Locations',
    no: 'Våre lokasjoner',
    sv: 'Våra platser',
    da: 'Vores lokationer',
    fi: 'Sijaintimme',
    ar: 'مواقعنا'
  },
  'contact.readyToStart': {
    en: 'Ready to Start?',
    no: 'Klar til å starte?',
    sv: 'Redo att börja?',
    da: 'Klar til at starte?',
    fi: 'Valmis aloittamaan?',
    ar: 'مستعد للبدء؟'
  },
  'contact.ctaDescription': {
    en: 'Choose the best way to connect with us based on your needs and timeline.',
    no: 'Velg den beste måten å koble til oss basert på dine behov og tidslinje.',
    sv: 'Välj det bästa sättet att ansluta till oss baserat på dina behov och tidslinje.',
    da: 'Vælg den bedste måde at forbinde til os baseret på dine behov og tidslinje.',
    fi: 'Valitse paras tapa ottaa yhteyttä meihin tarpeidesi ja aikataulun perusteella.',
    ar: 'اختر أفضل طريقة للتواصل معنا بناءً على احتياجاتك والجدول الزمني.'
  },

  // FAQ Page
  'faq.title': {
    en: 'Frequently Asked',
    no: 'Ofte stilte',
    sv: 'Vanliga',
    da: 'Ofte stillede',
    fi: 'Usein kysytyt',
    ar: 'الأسئلة الشائعة'
  },
  'faq.subtitle': {
    en: 'Questions',
    no: 'spørsmål',
    sv: 'frågor',
    da: 'spørgsmål',
    fi: 'kysymykset',
    ar: 'الأسئلة'
  },

  // Academy Page
  'academy.title': {
    en: 'AI Learning',
    no: 'AI-læring',
    sv: 'AI-lärande',
    da: 'AI-læring',
    fi: 'AI-oppiminen',
    ar: 'تعلم الذكاء الاصطناعي'
  },
  'academy.subtitle': {
    en: 'Academy',
    no: 'Akademi',
    sv: 'Akademi',
    da: 'Akademi',
    fi: 'Akatemia',
    ar: 'الأكاديمية'
  },

  // AI Terminologies Page
  'terminologies.title': {
    en: 'AI',
    no: 'AI',
    sv: 'AI',
    da: 'AI',
    fi: 'AI',
    ar: 'الذكاء الاصطناعي'
  },
  'terminologies.subtitle': {
    en: 'Terminologies',
    no: 'Terminologier',
    sv: 'Terminologier',
    da: 'Terminologier',
    fi: 'Terminologiat',
    ar: 'المصطلحات'
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
