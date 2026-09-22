import React, { useState } from 'react';
import {
  HomeNavIcon,
  UndoNavIcon,
  PackageNavIcon,
  TrustBadgeNavIcon,
  ShieldLockNavIcon,
  InfoNavIcon,
  ContactNavIcon,
  ServicesNavIcon,
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
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      {/* Tooltip */}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            right: 'calc(100% + 12px)',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'var(--color-navy-dark)',
            color: '#FFFFFF',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.02em',
            padding: '2px 6px',
            borderRadius: '8px',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
            pointerEvents: 'none',
            zIndex: 120,
            animation: 'fadeInUp 0.18s ease-out',
          }}
        >
          {label}
          {/* Arrow */}
          <div
            style={{
              position: 'absolute',
              right: '-4px',
              top: '50%',
              transform: 'translateY(-50%) rotate(45deg)',
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--color-navy-dark)',
            }}
          />
        </div>
      )}

      {/* Bare Icon Button - Direct icon rendering without box-like container */}
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
          padding: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative',
          opacity: isActive || isHovered ? 1 : 0.72,
          transform: isHovered ? 'scale(1.15)' : isActive ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease',
        }}
      >
        {icon}
        {/* Subtle active indicator dot (bare, no box) */}
       
      </button>
    </div>
  );
};

export const RightSideNav: React.FC = () => {
  const { currentPage, setCurrentPage, goBack } = useNavStore();

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
  };

  return (
    <nav className="right-nav-rail" aria-label="Quick Actions">
      {/* Top Section */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <NavButton
          id="home"
          label="Home"
          icon={<HomeNavIcon size={36} />}
          isActive={currentPage === 'home'}
          onClick={() => handleNavClick('home')}
        />
        <NavButton
          id="undo"
          label="Back / Previous"
          icon={<UndoNavIcon size={36} />}
          isActive={false}
          onClick={() => goBack()}
        />
      </div>

      {/* Subtle Divider */}
      <div style={{ height: '12px', width: '20px', borderBottom: '1px solid var(--border-subtle)', margin: '0px auto' }} />

      {/* Main Pages Section */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <NavButton
          id="services"
          label="Services"
          icon={<ServicesNavIcon size={36} />}
          isActive={currentPage === 'services'}
          onClick={() => handleNavClick('services')}
        />
        <NavButton
          id="package"
          label="Vault Modules"
          icon={<PackageNavIcon size={36} />}
          isActive={currentPage === 'modules'}
          onClick={() => handleNavClick('modules')}
        />
        <NavButton
          id="trust"
          label="Zero-Knowledge Trust & Privacy"
          icon={<TrustBadgeNavIcon size={36} />}
          isActive={currentPage === 'privacy'}
          onClick={() => handleNavClick('privacy')}
        />
        <NavButton
          id="shield"
          label="Cyber Vault Security"
          icon={<ShieldLockNavIcon size={36} />}
          isActive={false}
          onClick={() => {
            if (currentPage !== 'home') {
              setCurrentPage('home');
              setTimeout(() => {
                const card = document.querySelector('.vault-card-container');
                if (card) {
                  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  card.classList.add('pulse-glow');
                  setTimeout(() => card.classList.remove('pulse-glow'), 1200);
                }
              }, 100);
            } else {
              const card = document.querySelector('.vault-card-container');
              if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.classList.add('pulse-glow');
                setTimeout(() => card.classList.remove('pulse-glow'), 1200);
              }
            }
          }}
        />
        <NavButton
          id="info"
          label="About COBRA"
          icon={<InfoNavIcon size={36} />}
          isActive={currentPage === 'about'}
          onClick={() => handleNavClick('about')}
        />
        <NavButton
          id="contact"
          label="Contact & Support"
          icon={<ContactNavIcon size={36} />}
          isActive={currentPage === 'contact'}
          onClick={() => handleNavClick('contact')}
        />
      </div>
    </nav>
  );
};
