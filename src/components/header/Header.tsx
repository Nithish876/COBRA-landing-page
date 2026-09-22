import React from 'react';
import { useNavStore } from '../../stores/useNavStore';

export const Header: React.FC = () => {
  const setCurrentPage = useNavStore((state) => state.setCurrentPage);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage('home');
  };

  return (
    <header className="site-header" id="site-header">
      <div className="header-left">
        <a
          href="#home"
          onClick={handleHomeClick}
          style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
          aria-label="Best Software Home"
        >
          <img src="/assets/BEST Logo.svg" alt="BEST Logo" style={{ height: '64px' }} />
        </a>
      </div>
      <div className="header-right">
        <a
          href="#home"
          onClick={handleHomeClick}
          style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
          aria-label="COBRA Home"
        >
          <img src="/assets/COBRA Logo.svg" alt="COBRA Logo" style={{ height: '48px' }} />
        </a>
      </div>
    </header>
  );
};
