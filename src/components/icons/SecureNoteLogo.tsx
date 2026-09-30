import React from 'react';

interface SecureNoteLogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export const SecureNoteIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 46,
  className = '',
}) => {
  return (
    <img
      src="/assets/secure-note-logo.svg"
      alt="Secure NOTE Logo"
      width={size}
      height={Math.round((size * 523) / 483)}
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, objectFit: 'contain' }}
    />
  );
};

export const SecureNoteLogo: React.FC<SecureNoteLogoProps> = ({
  size = 40,
  showText = true,
  className = '',
}) => {
  return (
    <div
      className={`products-brand-header ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
      }}
    >
      <SecureNoteIcon size={size} />
      {showText && (
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(24px, 2.5vw, 30px)',
            fontWeight: 800,
            letterSpacing: '0.02em',
            display: 'inline-flex',
            alignItems: 'baseline',
            gap: '6px',
            userSelect: 'none',
          }}
        >
          <span style={{ color: '#ED3237' }}>Secure</span>
          <span style={{ color: '#022A48' }}>NOTE</span>
        </span>
      )}
    </div>
  );
};
