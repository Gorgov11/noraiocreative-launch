import React from 'react';

interface AppIconProps {
  name: string;
  className?: string;
}

const AppIcon: React.FC<AppIconProps> = ({ name, className = "h-10 w-auto" }) => {
  const getIconSvg = (appName: string) => {
    switch (appName.toLowerCase()) {
      case 'microsoft':
        return (
          <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <rect x="0" y="0" width="11" height="11" fill="#F25022"/>
            <rect x="13" y="0" width="11" height="11" fill="#7FBA00"/>
            <rect x="0" y="13" width="11" height="11" fill="#00A4EF"/>
            <rect x="13" y="13" width="11" height="11" fill="#FFB900"/>
          </svg>
        );
      case 'google':
        return (
          <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        );
      case 'excel':
        return (
          <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <rect x="2" y="2" width="20" height="20" rx="2" fill="#217346"/>
            <path d="M7 6h10v2H7V6zm0 3h10v2H7V9zm0 3h10v2H7v-2zm0 3h10v2H7v-2z" fill="white"/>
            <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">X</text>
          </svg>
        );
      case 'sharepoint':
        return (
          <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <rect x="2" y="2" width="20" height="20" rx="2" fill="#0078D4"/>
            <path d="M8 6h8v2H8V6zm0 3h8v2H8V9zm0 3h8v2H8v-2zm0 3h8v2H8v-2z" fill="white"/>
            <text x="12" y="16" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">S</text>
          </svg>
        );
      case 'power apps':
        return (
          <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <rect x="2" y="2" width="20" height="20" rx="2" fill="#742774"/>
            <path d="M8 6h8v2H8V6zm0 3h8v2H8V9zm0 3h8v2H8v-2zm0 3h8v2H8v-2z" fill="white"/>
            <text x="12" y="16" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">P</text>
          </svg>
        );
      case 'zoom':
        return (
          <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <rect x="2" y="2" width="20" height="20" rx="2" fill="#2D8CFF"/>
            <circle cx="12" cy="12" r="6" fill="white"/>
            <path d="M10 10l4 4m0-4l-4 4" stroke="#2D8CFF" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'sap':
        return (
          <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <rect x="2" y="2" width="20" height="20" rx="2" fill="#0FAAFF"/>
            <rect x="6" y="6" width="3" height="12" fill="white"/>
            <rect x="10.5" y="6" width="3" height="12" fill="white"/>
            <rect x="15" y="6" width="3" height="12" fill="white"/>
            <rect x="6" y="6" width="12" height="3" fill="white"/>
            <rect x="6" y="10.5" width="12" height="3" fill="white"/>
            <rect x="6" y="15" width="12" height="3" fill="white"/>
          </svg>
        );
      default:
        return (
          <div className={`${className} bg-gray-200 rounded flex items-center justify-center text-gray-600 font-bold text-xs`}>
            {name.charAt(0)}
          </div>
        );
    }
  };

  return (
    <div className="filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
      {getIconSvg(name)}
    </div>
  );
};

export default AppIcon;
