import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export const HomeNavIcon: React.FC<IconProps> = ({ size = 36 }) => (
  <img src="/assets/COBRA Website - Icons - Home.svg" alt="Home" width={size} height={size} />
);

export const UndoNavIcon: React.FC<IconProps> = ({ size = 36 }) => (
  <img src="/assets/COBRA Website - Icons - Back.svg" alt="Back" width={size} height={size} />
);

export const SettingsNavIcon: React.FC<IconProps> = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#FF0000" strokeWidth="1.8" strokeDasharray="3 2" />
    <circle cx="12" cy="12" r="5" fill="#FF0000" fillOpacity="0.15" stroke="#FF0000" strokeWidth="1.5" />
    <path d="M12 9.5C11.3 8.8 10 8.8 9.3 9.5C8.6 10.2 8.6 11.5 9.3 12.2L12 14.8L14.7 12.2C15.4 11.5 15.4 10.2 14.7 9.5C14 8.8 12.7 8.8 12 9.5Z" fill="#FF0000" />
  </svg>
);

export const PackageNavIcon: React.FC<IconProps> = ({ size = 36 }) => (
  <img src="/assets/COBRA Website - Icons - Prodcuts.svg" alt="Products" width={size} height={size} />
);

export const TrustBadgeNavIcon: React.FC<IconProps> = ({ size = 36 }) => (
  <img src="/assets/COBRA Website - Icons - Privacy.svg" alt="Privacy" width={size} height={size} />
);

export const ShieldLockNavIcon: React.FC<IconProps> = ({ size = 36 }) => (
  <img src="/assets/COBRA Website - Icons - Security.svg" alt="Security" width={size} height={size} />
);

export const InfoNavIcon: React.FC<IconProps> = ({ size = 36 }) => (
  <img src="/assets/COBRA Website - Icons - About Us.svg" alt="About Us" width={size} height={size} />
);

export const ContactNavIcon: React.FC<IconProps> = ({ size = 36 }) => (
  <img src="/assets/COBRA Website - Icons - Contact Us.svg" alt="Contact Us" width={size} height={size} />
);

export const ServicesNavIcon: React.FC<IconProps> = ({ size = 36 }) => (
  <img src="/assets/COBRA Website - Icons - Services.svg" alt="Services" width={size} height={size} />
);
