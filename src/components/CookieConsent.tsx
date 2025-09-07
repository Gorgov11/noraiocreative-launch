import React, { useState, useEffect } from 'react';
import { X, Cookie, Check, BarChart3, MessageSquare, Shield } from 'lucide-react';

interface CookieConsentProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ isOpen, onClose }) => {
  const [analyticalCookies, setAnalyticalCookies] = useState(false);
  const [marketingCookies, setMarketingCookies] = useState(false);

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedAnalytical = localStorage.getItem('analytical-cookies');
    const savedMarketing = localStorage.getItem('marketing-cookies');
    
    if (savedAnalytical) setAnalyticalCookies(JSON.parse(savedAnalytical));
    if (savedMarketing) setMarketingCookies(JSON.parse(savedMarketing));
  }, []);

  const handleSavePreferences = () => {
    localStorage.setItem('analytical-cookies', JSON.stringify(analyticalCookies));
    localStorage.setItem('marketing-cookies', JSON.stringify(marketingCookies));
    localStorage.setItem('cookie-consent-given', 'true');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Your cookie settings</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-6 leading-relaxed">
            We take good care of you and your data. You can read more about how we use cookies, 
            the third parties who set cookies and update your cookie settings here.
          </p>

          {/* Cookie Options */}
          <div className="space-y-4">
            {/* How we use cookies */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-center space-x-3">
                <Cookie className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-900">How we use cookies</span>
              </div>
              <div className="text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Necessary cookies */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-medium text-gray-900">We use necessary cookies</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-500">Required</span>
              </div>
            </div>

            {/* Analytical cookies */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-900">Accept analytical cookies</span>
              </div>
              <button
                onClick={() => setAnalyticalCookies(!analyticalCookies)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  analyticalCookies ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    analyticalCookies ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Marketing cookies */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-gray-900">Accept marketing cookies</span>
              </div>
              <button
                onClick={() => setMarketingCookies(!marketingCookies)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  marketingCookies ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    marketingCookies ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSavePreferences}
                className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">
              Privacy by openli
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

