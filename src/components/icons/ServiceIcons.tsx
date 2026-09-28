import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

//  Mobile App Development Icon
export const MobileAppIcon: React.FC<IconProps> = ({ size = 64, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Phone Frame */}
    <rect x="18" y="6" width="28" height="52" rx="6" stroke="#022A48" strokeWidth="2.5" fill="#FFFFFF" />
    {/* Screen Header in Red */}
    <rect x="22" y="12" width="20" height="7" rx="2" fill="#ED3237" />
    {/* Speaker slit & home bar */}
    <rect x="28" y="8" width="8" height="2" rx="1" fill="#022A48" />
    <rect x="27" y="52" width="10" height="2.5" rx="1.25" fill="#022A48" />
    {/* App Elements / Code on Screen */}
    <path d="M25 28 L22 32 L25 36" stroke="#022A48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M39 28 L42 32 L39 36" stroke="#022A48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M34 26 L30 38" stroke="#ED3237" strokeWidth="2" strokeLinecap="round" />
    {/* App grid cards */}
    <rect x="22" y="42" width="9" height="6" rx="1.5" fill="#022A48" />
    <rect x="33" y="42" width="9" height="6" rx="1.5" fill="#ED3237" />
  </svg>
);

//  Software & Application Development Icon
export const SoftwareDevIcon: React.FC<IconProps> = ({ size = 64, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Monitor Frame */}
    <rect x="8" y="10" width="48" height="34" rx="4" stroke="#022A48" strokeWidth="2.5" fill="#FFFFFF" />
    {/* Stand & Base */}
    <path d="M32 44 V52" stroke="#022A48" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M22 52 H42" stroke="#022A48" strokeWidth="2.5" strokeLinecap="round" />
    {/* Code Brackets in Red and Navy */}
    <path d="M22 23 L16 27 L22 31" stroke="#022A48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42 23 L48 27 L42 31" stroke="#022A48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M34 20 L30 34" stroke="#ED3237" strokeWidth="2.5" strokeLinecap="round" />
    {/* Bottom status bar */}
    <rect x="8" y="38" width="48" height="6" rx="0" fill="#022A48" />
    <circle cx="14" cy="41" r="1.5" fill="#ED3237" />
  </svg>
);

//  Website Development Icon
export const WebsiteDevIcon: React.FC<IconProps> = ({ size = 64, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Browser Window */}
    <rect x="8" y="12" width="48" height="40" rx="5" stroke="#022A48" strokeWidth="2.5" fill="#FFFFFF" />
    {/* Browser Header Bar */}
    <path d="M8 22 H56" stroke="#022A48" strokeWidth="2" />
    {/* Window Controls */}
    <circle cx="15" cy="17" r="2" fill="#ED3237" />
    <circle cx="21" cy="17" r="2" fill="#022A48" />
    <circle cx="27" cy="17" r="2" fill="#022A48" />
    {/* Layout Blocks */}
    <rect x="14" y="27" width="16" height="18" rx="2" fill="#022A48" />
    <rect x="34" y="27" width="16" height="8" rx="2" fill="#ED3237" />
    <rect x="34" y="38" width="16" height="7" rx="2" stroke="#022A48" strokeWidth="1.5" fill="#FFFFFF" />
    {/* Gear symbol in red on corner */}
    <circle cx="48" cy="44" r="6" stroke="#ED3237" strokeWidth="2" fill="#FFFFFF" />
    <circle cx="48" cy="44" r="2" fill="#ED3237" />
  </svg>
);

// UI/UX Design & Digital Experience Icon
export const UiUxDesignIcon: React.FC<IconProps> = ({ size = 64, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Tablet Device */}
    <rect x="12" y="10" width="34" height="44" rx="4" stroke="#022A48" strokeWidth="2.5" fill="#FFFFFF" />
    {/* Interface Layers */}
    <rect x="17" y="16" width="24" height="6" rx="2" fill="#022A48" />
    <rect x="17" y="25" width="10" height="12" rx="2" fill="#ED3237" />
    <rect x="29" y="25" width="12" height="5" rx="1.5" fill="#022A48" />
    <rect x="29" y="32" width="12" height="5" rx="1.5" stroke="#022A48" strokeWidth="1" />
    {/* Pointer Finger / Touching Hand in Red */}
    <g transform="translate(32, 28)">
      <circle cx="12" cy="12" r="10" stroke="#ED3237" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M4 14 L12 6 C13 5 15 5 16 6 C17 7 17 9 16 10 L14 12 L20 12 C21.5 12 22 13 22 14.5 C22 16 21 17 19.5 17 L17 17 L21 21 C22 22 21.5 24 20 25 L14 26 L10 21 Z" fill="#ED3237" stroke="#022A48" strokeWidth="1.5" />
    </g>
  </svg>
);

// IT Support & Technical Solutions Icon
export const ItSupportIcon: React.FC<IconProps> = ({ size = 64, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Big Gear */}
    <circle cx="32" cy="28" r="14" stroke="#022A48" strokeWidth="2.5" fill="#FFFFFF" />
    <circle cx="32" cy="28" r="6" fill="#022A48" />
    {/* Gear teeth */}
    <path d="M32 10 V14 M32 42 V46 M14 28 H18 M46 28 H50 M19 15 L22 18 M42 38 L45 41 M19 41 L22 38 M42 18 L45 15" stroke="#022A48" strokeWidth="3" strokeLinecap="round" />
    {/* Crossed Wrench in Red */}
    <path d="M20 46 L38 28" stroke="#ED3237" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="19" cy="47" r="3" fill="#ED3237" />
    {/* Headset arc */}
    <path d="M12 34 C12 18 52 18 52 34" stroke="#022A48" strokeWidth="2" strokeLinecap="round" />
    <rect x="8" y="32" width="6" height="12" rx="3" fill="#ED3237" />
    <rect x="50" y="32" width="6" height="12" rx="3" fill="#ED3237" />
    {/* Mic Boom */}
    <path d="M50 40 C50 48 44 54 36 54" stroke="#022A48" strokeWidth="2" strokeLinecap="round" />
    <circle cx="34" cy="54" r="2.5" fill="#022A48" />
  </svg>
);

// Cloud Computing & Data Solutions Icon
export const CloudSolutionsIcon: React.FC<IconProps> = ({ size = 64, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Cloud Outline */}
    <path
      d="M20 30 C16 30 13 33 13 37 C13 41 16 44 20 44 H45 C49 44 52 41 52 37 C52 33 49 30 45 30 C45 23 39 18 32 18 C26 18 21 23 20 30 Z"
      stroke="#022A48"
      strokeWidth="2.5"
      fill="#FFFFFF"
    />
    {/* Server Database Stack in Red & Navy */}
    <rect x="23" y="27" width="18" height="5" rx="2" fill="#ED3237" />
    <rect x="23" y="34" width="18" height="5" rx="2" fill="#022A48" />
    {/* Sync / Transfer Arrows */}
    <path d="M30 46 V55 M30 55 L26 51 M30 55 L34 51" stroke="#ED3237" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M38 53 V44 M38 44 L34 48 M38 44 L42 48" stroke="#022A48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

//  Network & Infrastructure Solutions Icon
export const NetworkInfrastructureIcon: React.FC<IconProps> = ({ size = 64, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Central Switch / Router in Navy */}
    <rect x="20" y="12" width="24" height="14" rx="3" fill="#022A48" />
    <circle cx="26" cy="19" r="1.5" fill="#ED3237" />
    <circle cx="32" cy="19" r="1.5" fill="#FFFFFF" />
    <circle cx="38" cy="19" r="1.5" fill="#FFFFFF" />
    {/* Antennas */}
    <path d="M26 12 L22 6" stroke="#022A48" strokeWidth="2" strokeLinecap="round" />
    <path d="M38 12 L42 6" stroke="#022A48" strokeWidth="2" strokeLinecap="round" />
    {/* Bus Line */}
    <path d="M32 26 V38 M14 38 H50" stroke="#022A48" strokeWidth="2" />
    {/* Node 1 in Red */}
    <path d="M14 38 V44" stroke="#022A48" strokeWidth="2" />
    <rect x="8" y="44" width="12" height="10" rx="2" stroke="#ED3237" strokeWidth="2" fill="#FFFFFF" />
    {/* Node 2 in Navy */}
    <path d="M32 38 V44" stroke="#022A48" strokeWidth="2" />
    <rect x="26" y="44" width="12" height="10" rx="2" fill="#022A48" />
    {/* Node 3 in Red */}
    <path d="M50 38 V44" stroke="#022A48" strokeWidth="2" />
    <rect x="44" y="44" width="12" height="10" rx="2" stroke="#ED3237" strokeWidth="2" fill="#FFFFFF" />
  </svg>
);

// Cybersecurity & Data Protection Icon
export const CybersecurityIcon: React.FC<IconProps> = ({ size = 64, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Server Tower on Left */}
    <rect x="10" y="24" width="16" height="28" rx="3" stroke="#022A48" strokeWidth="2" fill="#FFFFFF" />
    <path d="M10 33 H26 M10 42 H26" stroke="#022A48" strokeWidth="1.5" />
    <circle cx="15" cy="28.5" r="1.5" fill="#ED3237" />
    <circle cx="15" cy="37.5" r="1.5" fill="#022A48" />
    <circle cx="15" cy="46.5" r="1.5" fill="#ED3237" />
    {/* Defense Shield on Right */}
    <path
      d="M32 14 L46 8 L60 14 V28 C60 40 46 48 46 48 C46 48 32 40 32 28 Z"
      fill="#022A48"
    />
    <path
      d="M36 17 L46 12 L56 17 V28 C56 37 46 44 46 44 C46 44 36 37 36 28 Z"
      fill="#ED3237"
    />
    {/* Padlock on Shield */}
    <rect x="42" y="26" width="8" height="7" rx="1.5" fill="#FFFFFF" />
    <path d="M44 26 V23 C44 21.9 44.9 21 46 21 C47.1 21 48 21.9 48 23 V26" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Business Automation & System Integration Icon
export const BusinessAutomationIcon: React.FC<IconProps> = ({ size = 64, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Robot / Automation Core */}
    <rect x="22" y="16" width="20" height="20" rx="4" stroke="#022A48" strokeWidth="2.5" fill="#FFFFFF" />
    {/* Eyes in Red */}
    <circle cx="28" cy="24" r="2.5" fill="#ED3237" />
    <circle cx="36" cy="24" r="2.5" fill="#ED3237" />
    {/* Digital Mouth Bar */}
    <path d="M27 30 H37" stroke="#022A48" strokeWidth="2" strokeLinecap="round" />
    {/* Antenna in Red */}
    <path d="M32 16 V10" stroke="#022A48" strokeWidth="2" strokeLinecap="round" />
    <circle cx="32" cy="8" r="2.5" fill="#ED3237" />
    {/* Automation Workflow Connectors & Gears */}
    <path d="M12 26 H22 M42 26 H52" stroke="#ED3237" strokeWidth="2" strokeLinecap="round" />
    <circle cx="10" cy="26" r="3" fill="#022A48" />
    <circle cx="54" cy="26" r="3" fill="#022A48" />
    {/* Process Pipeline below */}
    <path d="M32 36 V46" stroke="#022A48" strokeWidth="2" />
    <rect x="18" y="46" width="28" height="10" rx="3" fill="#022A48" />
    <path d="M24 51 H40" stroke="#ED3237" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2" />
  </svg>
);

//  Digital Transformation & Technology Consulting Icon
export const DigitalTransformationIcon: React.FC<IconProps> = ({ size = 64, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Transformation Gear Base */}
    <circle cx="28" cy="34" r="14" stroke="#022A48" strokeWidth="2.5" fill="#FFFFFF" />
    <circle cx="28" cy="34" r="5" fill="#022A48" />
    <path d="M28 16 V20 M28 48 V52 M10 34 H14 M42 34 H46 M15 21 L18 24 M38 44 L41 47 M15 47 L18 44 M38 24 L41 21" stroke="#022A48" strokeWidth="2.5" strokeLinecap="round" />
    {/* Ascending Transformation Arrow in Red */}
    <path d="M22 46 L38 20 M38 20 H28 M38 20 V30" stroke="#ED3237" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    {/* Forward Tech Nodes */}
    <circle cx="48" cy="16" r="3.5" fill="#022A48" />
    <circle cx="54" cy="28" r="2.5" fill="#ED3237" />
    <path d="M38 20 L48 16 M48 16 L54 28" stroke="#022A48" strokeWidth="1.5" strokeDasharray="2 2" />
  </svg>
);
