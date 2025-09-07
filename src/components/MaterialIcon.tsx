import React from 'react';

interface MaterialIconProps {
  name: string;
  className?: string;
  size?: number;
  filled?: boolean;
}

const MaterialIcon = ({ name, className = "", size = 24, filled = false }: MaterialIconProps) => {
  return (
    <span 
      className={`material-symbols-outlined ${className}`}
      style={{ 
        fontSize: `${size}px`,
        fontVariationSettings: filled ? '"FILL" 1' : '"FILL" 0'
      }}
    >
      {name}
    </span>
  );
};

export default MaterialIcon;