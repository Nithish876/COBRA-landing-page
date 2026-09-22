import React from 'react';
import { useNavStore } from '../../stores/useNavStore';

export const SecurityPitch: React.FC = () => {
  const setCurrentPage = useNavStore((state) => state.setCurrentPage);

  return (
    <div className="hero-right-column" id="security-pitch">
      <h1 className="headline-uncompromised">
        UNCOMPROMISED
      </h1>
      <div className="headline-security">
        SECURITY
      </div>

      <div className="tagline-group">
        <div className="tagline-item">
          <span>YOUR DATA</span>
          <span className="tagline-dot" />
          <span>YOUR CONTROL</span>
        </div>
        <div className="tagline-item">
          <span>NO ADS</span>
          <span className="tagline-dot" />
          <span>NO THIRD-PARTY SHARING</span>
        </div>
      </div>

      <button
        id="explore-cobra-btn"
        className="btn-explore"
        onClick={() => setCurrentPage('privacy')}
        aria-label="Explore COBRA Cyber Vault"
      >
        <span>Explore COBRA</span>
      </button>
    </div>
  );
};
