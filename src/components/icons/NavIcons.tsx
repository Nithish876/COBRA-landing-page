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
