import React from 'react';
import useScrollAnimation from '@/hooks/use-scroll-animation';
import useCounter from '@/hooks/use-counter';
import { useTranslation } from '@/contexts/TranslationContext';

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useTranslation();
  const stats = [
    {
      number: 15000,
      suffix: "+",
      label: t('stats.activeCompanies'),
      description: t('stats.desc.trustGlobally')
    },
    {
      number: 2.5,
      prefix: "$",
      suffix: "B+",
      label: t('stats.processedMonthly'),
      description: t('stats.desc.inTransactions')
    },
    {
      number: 90,
      suffix: "%",
      label: t('stats.timeReduction'),
      description: t('stats.desc.inManual')
    },
    {
      number: 99.9,
      suffix: "%",
      label: t('stats.uptimeSla'),
      description: t('stats.desc.reliability')
    }
  ];

  // Counter hooks for each stat
  const companyCount = useCounter({ 
    end: stats[0].number, 
    duration: 2000, 
    startOnMount: false,
    delay: isVisible ? 200 : 0
  });
  
  const processedCount = useCounter({ 
    end: stats[1].number, 
    duration: 2000, 
    startOnMount: false,
    delay: isVisible ? 400 : 0
  });
  
  const timeCount = useCounter({ 
    end: stats[2].number, 
    duration: 2000, 
    startOnMount: false,
    delay: isVisible ? 600 : 0
  });
  
  const uptimeCount = useCounter({ 
    end: stats[3].number, 
    duration: 2000, 
    startOnMount: false,
    delay: isVisible ? 800 : 0
  });

  const counters = [companyCount, processedCount, timeCount, uptimeCount];

  // Start animations when section becomes visible
  React.useEffect(() => {
    if (isVisible) {
      counters.forEach(counter => counter.startAnimation());
    }
  }, [isVisible]);

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const counter = counters[index];
            const displayValue = stat.prefix 
              ? `${stat.prefix}${counter.count.toFixed(stat.number % 1 !== 0 ? 1 : 0)}${stat.suffix}`
              : `${counter.count.toFixed(stat.number % 1 !== 0 ? 1 : 0)}${stat.suffix}`;
            
            return (
              <div 
                key={stat.label}
                className={`text-center text-gray-900 hover:scale-110 transition-transform duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ 
                  animationDelay: isVisible ? `${index * 0.1}s` : '0s',
                  animationFillMode: 'forwards'
                }}
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
                  {displayValue}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;