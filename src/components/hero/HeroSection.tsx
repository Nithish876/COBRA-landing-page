import React from 'react';
import { PrivacyCallout } from './PrivacyCallout';
import { CyberVaultCard } from './CyberVaultCard';
import { SecurityPitch } from './SecurityPitch';

export const HeroSection: React.FC = () => {
  return (
    <main className="hero-main" id="home">
      <div className="hero-grid">
        <PrivacyCallout />
        <div className="hero-center-column">
          <CyberVaultCard />
        </div>
        <SecurityPitch />
      </div>
    </main>
  );
};
