import React from 'react';
import { Link } from 'react-router-dom';

interface MenuSection {
  title: string;
  items: { title: string; href: string }[];
}

interface MegaMenuProps {
  title: string;
  sections: MenuSection[];
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ title, sections, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-6 px-8 z-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    to={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm block py-1"
                    onClick={onClose}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
