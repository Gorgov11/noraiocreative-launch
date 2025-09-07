import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe, Loader2 } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
  { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, isTranslating } = useTranslation();
  const selectedLanguage = languages.find(lang => lang.code === language) || languages[0];

  const handleLanguageChange = (language: Language) => {
    setLanguage(language.code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isTranslating}
        className="flex items-center space-x-2 text-white hover:text-white/80 disabled:opacity-50"
      >
        {isTranslating ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <Globe size={16} />
        )}
        <span className="hidden sm:inline">{selectedLanguage.flag}</span>
        <span className="hidden md:inline">{selectedLanguage.name}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                selectedLanguage.code === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
