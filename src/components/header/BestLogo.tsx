import React from 'react';

interface BestLogoProps {
  className?: string;
}

export const BestLogo: React.FC<BestLogoProps> = ({ className = '' }) => {
  return (
    <div 
      className={`best-logo-wrapper ${className}`}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', userSelect: 'none' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '2px', lineHeight: 1 }}>
        <svg
          width="110"
          height="52"
          viewBox="0 0 110 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Best Logo"
          style={{ overflow: 'visible' }}
        >
          {/* Stem of B */}
          <path
            d="M6 14C6 9.5 9.5 6 14 6H24C28 6 31 8 32 11C30.5 12.5 29.5 14.5 29.5 17C29.5 20.5 32 23 35.5 23.5C36 27.5 33 32 27 32H14C9.5 32 6 28.5 6 24V14Z"
            fill="var(--text-primary)"
          />
          {/* Red Heart as top of B */}
          <path
            d="M24 7C22.5 4.5 19.5 3.5 17 5C14.5 6.5 14 9.5 15.5 12L24 20L32.5 12C34 9.5 33.5 6.5 31 5C28.5 3.5 25.5 4.5 24 7Z"
            fill="#ED3237"
          />
          {/* Lower loop opening */}
          <ellipse cx="18" cy="22" rx="4" ry="4" fill="var(--bg-page)" />
          
          {/* Text "est" */}
          <text
            x="36"
            y="26"
            fontFamily="'Outfit', sans-serif"
            fontSize="26"
            fontWeight="800"
            fontStyle="italic"
            letterSpacing="-0.5px"
            fill="var(--text-primary)"
          >
            est
          </text>

          {/* Subtitle 4 lines */}
          <text
            x="6"
            y="37"
            fontFamily="'Outfit', sans-serif"
            fontSize="6.5"
            fontWeight="700"
            letterSpacing="0.8px"
            fill="var(--text-primary)"
          >
            BARKISH
          </text>
          <text
            x="6"
            y="43"
            fontFamily="'Outfit', sans-serif"
            fontSize="6.5"
            fontWeight="700"
            letterSpacing="0.8px"
            fill="var(--text-primary)"
          >
            ELEGANT
          </text>
          <text
            x="6"
            y="49"
            fontFamily="'Outfit', sans-serif"
            fontSize="6.5"
            fontWeight="700"
            letterSpacing="0.8px"
            fill="var(--text-primary)"
          >
            SOFTWARE
          </text>
          <text
            x="6"
            y="55"
            fontFamily="'Outfit', sans-serif"
            fontSize="6.5"
            fontWeight="700"
            letterSpacing="0.8px"
            fill="var(--text-primary)"
          >
            TECHKNOWLEDGY
          </text>
        </svg>
      </div>
    </div>
  );
};
