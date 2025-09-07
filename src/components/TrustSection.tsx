import useScrollAnimation from '@/hooks/use-scroll-animation';
import AppIcon from '@/components/AppIcon';
import { useTranslation } from '@/contexts/TranslationContext';

const TrustSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useTranslation();
  const applications = [
    { 
      name: "Microsoft", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      fallback: "Microsoft"
    },
    { 
      name: "Google", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      fallback: "Google"
    },
    { 
      name: "Excel", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
      fallback: "Excel"
    },
    { 
      name: "SharePoint", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Microsoft_SharePoint_%282019%E2%80%93present%29.svg",
      fallback: "SharePoint"
    },
    { 
      name: "Power Apps", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Power_Apps_logo.svg",
      fallback: "Power Apps"
    },
    { 
      name: "Zoom", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg",
      fallback: "Zoom"
    },
    { 
      name: "SAP", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
      fallback: "SAP"
    },
  ];

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-xl font-semibold text-gray-800 mb-8 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {t('trust.title')}
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {applications.map((app, index) => (
            <div 
              key={app.name}
              className={`flex items-center justify-center transition-all duration-500 hover:scale-110 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ 
                animationDelay: isVisible ? `${index * 0.1}s` : '0s',
                animationFillMode: 'forwards'
              }}
            >
              <AppIcon name={app.name} className="h-10 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;