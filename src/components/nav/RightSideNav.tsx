import React, { useState } from 'react';
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
import { useNavStore } from '../../stores/useNavStore';
import type { PageType } from '../../types';

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
    <div className="smart-key-nav-item" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      {/* Tooltip with Right-to-Left Reveal Animation */}
      {isHovered && (
        <div className="nav-tooltip-container" role="tooltip">
          <span className="nav-tooltip-text">{label}</span>
          <div className="nav-tooltip-arrow" />
        </div>
      )}

      {/* Nav Icon Button */}
      <button
        id={`nav-btn-${id}`}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={label}
        className={`smart-key-nav-btn ${isActive ? 'is-active' : ''}`}
        style={{
          background: isActive ? 'rgba(2, 42, 72, 0.08)' : 'transparent',
          border: 'none',
          borderRadius: '12px',
          boxShadow: 'none',
          outline: 'none',
          padding: 'clamp(5px, 0.5vw, 8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative',
          opacity: isActive ? 1 : isHovered ? 0.95 : 0.75,
          transform: isHovered ? 'scale(1.15)' : isActive ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease, background-color 0.2s ease',
        }}
      >
        {icon}
      </button>
    </div>
  );
};

export const RightSideNav: React.FC = () => {
  const currentPage = useNavStore((state) => state.currentPage);
  const setCurrentPage = useNavStore((state) => state.setCurrentPage);
  const goBack = useNavStore((state) => state.goBack);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  return (
    <nav className="right-nav-rail smart-key-rail" aria-label="Smart Key Navigation">
      <div className="smart-key-rail-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(4px, 0.5vh, 10px)' }}>
        {/* 1. Home */}
        <NavButton
          id="home"
          label="Home"
          icon={<HomeNavIcon />}
          isActive={currentPage === 'home'}
          onClick={() => navigateTo('home')}
        />

        {/* 2. Back / Previous */}
        <NavButton
          id="undo"
          label="Back / Previous"
          icon={<UndoNavIcon />}
          isActive={false}
          onClick={goBack}
        />

        {/* 3. Services */}
        <NavButton
          id="services"
          label="Services"
          icon={<ServicesNavIcon />}
          isActive={currentPage === 'services'}
          onClick={() => navigateTo('services')}
        />

        {/* 4. Products */}
        <NavButton
          id="products"
          label="Products"
          icon={<PackageNavIcon />}
          isActive={currentPage === 'products' || currentPage === 'modules'}
          onClick={() => navigateTo('products')}
        />

        {/* 5. Cyber Vault Security */}
        <NavButton
          id="shield"
          label="Cyber Vault Security"
          icon={<ShieldLockNavIcon />}
          isActive={currentPage === 'security'}
          onClick={() => navigateTo('security')}
        />

        {/* 6. Zero-Knowledge Trust & Privacy */}
        <NavButton
          id="trust"
          label="Trust & Privacy"
          icon={<TrustBadgeNavIcon />}
          isActive={currentPage === 'privacy'}
          onClick={() => navigateTo('privacy')}
        />

        {/* 7. About COBRA */}
        <NavButton
          id="info"
          label="About COBRA"
          icon={<InfoNavIcon />}
          isActive={currentPage === 'about'}
          onClick={() => navigateTo('about')}
        />

        {/* 8. Contact Us */}
        <NavButton
          id="contact"
          label="Contact & Support"
          icon={<ContactNavIcon />}
          isActive={currentPage === 'contact'}
          onClick={() => navigateTo('contact')}
        />
      </div>
    </nav>
  );
};

export default RightSideNav;
