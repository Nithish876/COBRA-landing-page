import React from 'react';

export const PrivacyCallout: React.FC = () => {
  return (
    <div className="hero-left-column" id="privacy-statement">
      <h2 
        className="hero-statement"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontStyle: 'italic',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          lineHeight: 1.45,
        }}
      >
        <span>COBRA NEVER</span>
        <br />
        <span>
          SEES, READS <span className="accent-or" style={{ color: 'var(--accent-red)', fontStyle: 'normal', fontWeight: 800 }}>OR</span>
        </span>
        <br />
        <span>ACCESSES YOUR DATA.</span>
      </h2>
    </div>
  );
};
