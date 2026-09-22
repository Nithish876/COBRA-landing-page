import React from 'react';
import {
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
  WhatsAppIcon,
  TelegramIcon,
  XTwitterIcon,
  SocialButton,
} from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" id="site-footer">
      {/* Left: Follow us and Social Icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: '13px',
            fontWeight: 500,
            color: 'var(--text-muted)',
            letterSpacing: '0.02em',
          }}
        >
          Follow us
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <SocialButton name="Instagram" href="https://instagram.com" icon={<InstagramIcon />} />
          <SocialButton name="Facebook" href="https://facebook.com" icon={<FacebookIcon />} />
          <SocialButton name="YouTube" href="https://youtube.com" icon={<YouTubeIcon />} />
          <SocialButton name="WhatsApp" href="https://whatsapp.com" icon={<WhatsAppIcon />} />
          <SocialButton name="Telegram" href="https://telegram.org" icon={<TelegramIcon />} />
          <SocialButton name="X" href="https://x.com" icon={<XTwitterIcon />} />
        </div>
      </div>

      {/* Right: Copyright notice */}
      <div
        className="footer-copyright"
        style={{
          fontFamily: 'var(--font-primary)',
          fontSize: '13px',
          fontWeight: 400,
          color: 'var(--text-muted)',
          letterSpacing: '0.02em',
        }}
      >
        © {new Date().getFullYear()} COBRA. All rights reserved.
      </div>
    </footer>
  );
};
