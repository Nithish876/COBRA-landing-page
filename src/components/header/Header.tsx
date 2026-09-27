import React from 'react';

export const Header: React.FC = () => {
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('home');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="header-outer-wrapper">
      <header className="site-header-card" id="site-header">
        <div className="header-left">
          <a
            href="#home"
            onClick={handleHomeClick}
            style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            aria-label="Best Software Home"
          >
            <img src="/assets/BEST Logo.svg" alt="BEST Logo" className="header-logo-best" />
          </a>
        </div>
        <div className="header-right">
          <a
            href="#home"
            onClick={handleHomeClick}
            style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            aria-label="COBRA Home"
          >
            <img src="/assets/COBRA Logo.svg" alt="COBRA Logo" className="header-logo-cobra" />
          </a>
        </div>
      </header>
    </div>
  );
};
