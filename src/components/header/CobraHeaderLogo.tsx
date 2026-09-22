import React from 'react';

interface CobraHeaderLogoProps {
  className?: string;
}

export const CobraHeaderLogo: React.FC<CobraHeaderLogoProps> = ({ className = '' }) => {
  return (
    <div 
      className={`cobra-header-logo ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
      }}
    >
      <img
        src="/assets/COBRA Logo.svg"
        alt="COBRA Logo"
        style={{
          width: 'clamp(140px, 15vw, 200px)',
          height: 'auto',
          display: 'block',
        }}
      />
      
    </div>
  );
};
