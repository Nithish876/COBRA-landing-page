import React from 'react';

interface SocialIconProps {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const InstagramIcon: React.FC = () => (
  <img
    src="/assets/Social_Media_Instagram.svg"
    alt="Instagram"
    width="22"
    height="22"
    style={{ display: 'block', width: '22px', height: '22px' }}
  />
);

export const FacebookIcon: React.FC = () => (
  <img
    src="/assets/Social_Media_Facebook.svg"
    alt="Facebook"
    width="22"
    height="22"
    style={{ display: 'block', width: '22px', height: '22px' }}
  />
);

export const YouTubeIcon: React.FC = () => (
  <img
    src="/assets/Social_Media_Youtube.svg"
    alt="YouTube"
    width="22"
    height="22"
    style={{ display: 'block', width: '22px', height: '22px' }}
  />
);

export const WhatsAppIcon: React.FC = () => (
  <img
    src="/assets/Social_Media_WhatsApp_Buzz.svg"
    alt="WhatsApp"
    width="22"
    height="22"
    style={{ display: 'block', width: '22px', height: '22px' }}
  />
);

export const TelegramIcon: React.FC = () => (
  <img
    src="/assets/Social_Media_Telegram.svg"
    alt="Telegram"
    width="22"
    height="22"
    style={{ display: 'block', width: '22px', height: '22px' }}
  />
);

export const XTwitterIcon: React.FC = () => (
  <img
    src="/assets/Social_Media_X.svg"
    alt="X"
    width="22"
    height="22"
    style={{ display: 'block', width: '22px', height: '22px' }}
  />
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

