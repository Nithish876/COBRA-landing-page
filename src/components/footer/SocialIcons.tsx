import React from 'react';

interface SocialIconProps {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const InstagramIcon: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFDC80" />
        <stop offset="25%" stopColor="#F77737" />
        <stop offset="50%" stopColor="#F56040" />
        <stop offset="75%" stopColor="#FD1D1D" />
        <stop offset="100%" stopColor="#C13584" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-grad)" />
    <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
  </svg>
);

export const FacebookIcon: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" fill="#1877F2" />
    <path
      d="M13.5 22V13.8H16.2L16.6 10.6H13.5V8.5C13.5 7.6 13.8 6.9 15 6.9H16.7V4.1C16.4 4.1 15.3 4 14 4C11.3 4 9.5 5.7 9.5 8.7V10.6H6.8V13.8H9.5V22H13.5Z"
      fill="white"
    />
  </svg>
);

export const YouTubeIcon: React.FC = () => (
  <svg width="24" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="2" width="26" height="18" rx="5" fill="#FF0000" />
    <polygon points="11,6 18,11 11,16" fill="white" />
  </svg>
);

export const WhatsAppIcon: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#25D366" />
    <path
      d="M17.5 14.5c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7 0-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.2-.7.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6 0 1.6 1.1 3.1 1.3 3.3.2.2 2.3 3.5 5.5 4.9.8.3 1.4.5 1.8.7.8.2 1.5.2 2 .1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.4-.3-.7-.5z"
      fill="white"
    />
  </svg>
);

export const TelegramIcon: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#229ED9" />
    <path
      d="M7 11.8L16.2 8.2C16.6 8 17 8.3 16.9 8.7L15.3 16.2C15.2 16.7 14.7 16.9 14.3 16.6L11.5 14.5L10.1 15.8C9.9 16 9.7 16 9.6 15.8L9.2 13L14.7 9.8C14.9 9.7 14.7 9.4 14.5 9.5L8.5 13.3L7 11.8Z"
      fill="white"
    />
  </svg>
);

export const XTwitterIcon: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" fill="#0F1419" />
    <path
      d="M14.5 6.5H16.8L11.8 12.2L17.7 20H13.1L9.5 15.3L5.4 20H3.1L8.5 13.8L2.9 6.5H7.7L10.9 10.7L14.5 6.5ZM13.7 18.6H15L6.9 7.8H5.5L13.7 18.6Z"
      fill="white"
    />
  </svg>
);

export const SocialButton: React.FC<SocialIconProps> = ({ name, href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Follow COBRA on ${name}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s ease, opacity 0.2s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px) scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
      }}
    >
      {icon}
    </a>
  );
};
