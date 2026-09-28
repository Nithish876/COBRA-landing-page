import React from 'react';

interface SecureNoteLogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export const SecureNoteIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 42,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={(size * 48) / 42}
      viewBox="0 0 72 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      {/* Main Notebook Cover in Dark Navy */}
      <path
        d="M16 6 C16 3.79 17.79 2 20 2 L50 2 L68 20 L68 78 C68 80.21 66.21 82 64 82 L20 82 C17.79 82 16 80.21 16 78 Z"
        fill="#022A48"
      />

      {/* Folded Top-Right Dog-Ear in Red */}
      <path
        d="M50 2 L68 20 L50 20 Z"
        fill="#ED3237"
      />
      {/* Dog-ear fold shadow / crease line */}
      <path
        d="M50 2 L50 20 L68 20"
        stroke="#022A48"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* 3 White Spiral Rings on Left Spine */}
      {/* Ring 1 (Top) */}
      <path
        d="M8 18 C8 15 14 15 14 18 L22 18 C22 13 4 13 4 18 C4 23 22 23 22 18 L14 18 C14 21 8 21 8 18 Z"
        fill="#FFFFFF"
      />
      <rect x="4" y="16" width="16" height="5" rx="2.5" fill="#FFFFFF" />
      <rect x="8" y="17" width="10" height="3" rx="1.5" fill="#022A48" />

      {/* Ring 2 (Middle) */}
      <rect x="4" y="38" width="16" height="5" rx="2.5" fill="#FFFFFF" />
      <rect x="8" y="39" width="10" height="3" rx="1.5" fill="#022A48" />

      {/* Ring 3 (Bottom) */}
      <rect x="4" y="60" width="16" height="5" rx="2.5" fill="#FFFFFF" />
      <rect x="8" y="61" width="10" height="3" rx="1.5" fill="#022A48" />

      {/* Front Cover Padlock Details */}
      {/* Padlock Shackle */}
      <path
        d="M38 41 V36 C38 33.24 40.24 31 43 31 C45.76 31 48 33.24 48 36 V41"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Padlock Body */}
      <rect
        x="35"
        y="41"
        width="16"
        height="12"
        rx="2"
        fill="#FFFFFF"
      />
      {/* Padlock Keyhole / Red Horizontal Bar & Dot */}
      <circle cx="43" cy="46" r="1.5" fill="#022A48" />
      <path d="M43 47 L43 50" stroke="#022A48" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Red accent slot line under padlock */}
      <rect x="33" y="56" width="20" height="3" rx="1.5" fill="#ED3237" />
    </svg>
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
