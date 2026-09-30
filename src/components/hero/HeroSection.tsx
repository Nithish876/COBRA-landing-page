import React from 'react';
import { PrivacyCallout } from './PrivacyCallout';
import cobraCyberVaultLogo from '../../assets/COBRA_cyber_vault_hero_section.svg';
import { SecurityPitch } from './SecurityPitch';

export const HeroSection: React.FC = () => {
  return (
    <main className="hero-main" id="home">
      <div className="hero-grid">
        <PrivacyCallout />
        <div className="hero-center-column">
          <img
            src={cobraCyberVaultLogo}
            alt="COBRA Cyber Vault"
            className="hero-vault-logo"
          />
        </div>
        <SecurityPitch />
      </div>
    </main>
  );
};

