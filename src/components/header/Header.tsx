import React from 'react';
import { useNavStore } from '../../stores/useNavStore';

export const Header: React.FC = () => {
  const setCurrentPage = useNavStore((state) => state.setCurrentPage);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage('home');
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <header className="site-header-attached" id="site-header">
      <div className="header-left">
        <a
          href="#home"
          onClick={handleHomeClick}
          className="header-logo-link"
          aria-label="Best Software Home"
        >
          <img src="/assets/BEST Logo.svg" alt="BEST Logo" className="header-logo-best" />
        </a>
      </div>
      <div className="header-right">
        <a
          href="#home"
          onClick={handleHomeClick}
          className="header-logo-link"
          aria-label="COBRA Home"
        >
          <img src="/assets/COBRA Logo.svg" alt="COBRA Logo" className="header-logo-cobra" />
        </a>
      </div>
    </header>
  );
};

export default Header;
