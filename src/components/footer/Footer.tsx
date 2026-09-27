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
    <div className="footer-outer-wrapper">
      <footer className="site-footer-card" id="site-footer">
        {/* Left: Follow us and Social Icons */}
        <div className="footer-left-group">
          <span className="footer-follow-label">
            Follow us
          </span>
          <div className="footer-social-icons">
            <SocialButton name="Instagram" href="https://instagram.com" icon={<InstagramIcon />} />
            <SocialButton name="Facebook" href="https://facebook.com" icon={<FacebookIcon />} />
            <SocialButton name="YouTube" href="https://youtube.com" icon={<YouTubeIcon />} />
            <SocialButton name="WhatsApp" href="https://whatsapp.com" icon={<WhatsAppIcon />} />
            <SocialButton name="Telegram" href="https://telegram.org" icon={<TelegramIcon />} />
            <SocialButton name="X" href="https://x.com" icon={<XTwitterIcon />} />
          </div>
        </div>

        {/* Right: Copyright notice */}
        <div className="footer-copyright-text">
          © 2026 COBRA. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
