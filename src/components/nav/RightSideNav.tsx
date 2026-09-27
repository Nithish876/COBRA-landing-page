import React, { useState, useEffect } from 'react';
import {
  HomeNavIcon,
  UndoNavIcon,
  ServicesNavIcon,
  PackageNavIcon,
  ShieldLockNavIcon,
  TrustBadgeNavIcon,
  InfoNavIcon,
  ContactNavIcon,
} from '../icons/NavIcons';

interface NavButtonProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ id, label, icon, onClick, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      {/* Tooltip */}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            right: 'calc(100% + 10px)',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#022A48',
            color: '#FFFFFF',
            fontSize: '11.5px',
            fontWeight: 600,
            letterSpacing: '0.02em',
            padding: '4px 8px',
            borderRadius: '6px',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
            pointerEvents: 'none',
            zIndex: 150,
          }}
        >
          {label}
          {/* Arrow */}
          <div
            style={{
              position: 'absolute',
              right: '-3px',
              top: '50%',
              transform: 'translateY(-50%) rotate(45deg)',
              width: '6px',
              height: '6px',
              backgroundColor: '#022A48',
            }}
          />
        </div>
      )}

      {/* Nav Icon Button */}
      <button
        id={`nav-btn-${id}`}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={label}
        style={{
          background: 'none',
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: 0,
          boxShadow: 'none',
          outline: 'none',
          padding: '2px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative',
          opacity: isActive ? 1 : isHovered ? 0.95 : 0.72,
          transform: isHovered ? 'scale(1.12)' : isActive ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease',
        }}
      >
        {icon}
      </button>
    </div>
  );
};

export const RightSideNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrollHistory, setScrollHistory] = useState<string[]>(['home']);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setScrollHistory((prev) => [...prev, sectionId]);
    }
  };

  const handleBack = () => {
    if (scrollHistory.length > 1) {
      const nextHistory = [...scrollHistory];
      nextHistory.pop(); // remove current
      const prevSection = nextHistory[nextHistory.length - 1] || 'home';
      setScrollHistory(nextHistory);
      const el = document.getElementById(prevSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(prevSection);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    }
  };

  // Observe which section is currently centered in viewport
  useEffect(() => {
    const sectionIds = ['home', 'services', 'modules', 'security', 'privacy', 'about', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollPosition >= top - 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="right-nav-rail" aria-label="Page Sections Navigation">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
        {/* 1. Home */}
        <NavButton
          id="home"
          label="Home"
          icon={<HomeNavIcon size={30} />}
          isActive={activeSection === 'home'}
          onClick={() => scrollToSection('home')}
        />

        {/* 2. Back / Previous */}
        <NavButton
          id="undo"
          label="Back / Previous"
          icon={<UndoNavIcon size={30} />}
          isActive={false}
          onClick={handleBack}
        />

        {/* 3. Services */}
        <NavButton
          id="services"
          label="Services"
          icon={<ServicesNavIcon size={30} />}
          isActive={activeSection === 'services'}
          onClick={() => scrollToSection('services')}
        />

        {/* 4. Vault Modules */}
        <NavButton
          id="package"
          label="Vault Modules"
          icon={<PackageNavIcon size={30} />}
          isActive={activeSection === 'modules'}
          onClick={() => scrollToSection('modules')}
        />

        {/* 5. Cyber Vault Security */}
        <NavButton
          id="shield"
          label="Cyber Vault Security"
          icon={<ShieldLockNavIcon size={30} />}
          isActive={activeSection === 'security'}
          onClick={() => scrollToSection('security')}
        />

        {/* 6. Zero-Knowledge Trust & Privacy */}
        <NavButton
          id="trust"
          label="Trust & Privacy"
          icon={<TrustBadgeNavIcon size={30} />}
          isActive={activeSection === 'privacy'}
          onClick={() => scrollToSection('privacy')}
        />

        {/* 7. About COBRA */}
        <NavButton
          id="info"
          label="About COBRA"
          icon={<InfoNavIcon size={30} />}
          isActive={activeSection === 'about'}
          onClick={() => scrollToSection('about')}
        />

        {/* 8. Contact Us */}
        <NavButton
          id="contact"
          label="Contact & Support"
          icon={<ContactNavIcon size={30} />}
          isActive={activeSection === 'contact'}
          onClick={() => scrollToSection('contact')}
        />
      </div>
    </nav>
  );
};
