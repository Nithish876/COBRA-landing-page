import React from 'react';
import { SecureNoteLogo } from '../components/icons/SecureNoteLogo';
import { useNavStore } from '../stores/useNavStore';

const securityMechanisms = [
  'AES-256 encryption',
  'Secure account identity',
  'Master Password protection',
  'Biometric authentication',
  'Device-level protection',
  'Automatic app locking',
  'Secure encrypted backup',
  'Screenshot protection',
  'Memory protection',
  'Protected backup & restore process',
];

export const ProductsPage: React.FC = () => {
  const openModal = useNavStore((state) => state.openModal);

  const handleExploreClick = () => {
   
    openModal('explore');
  };

  return (
    <div className="products-page-wrapper" id="products">
      <div className="products-inner-container">

         
        <div className="products-top-badge-group">
          <div className="products-icon-box">
            <img
              src="/assets/COBRA Website - Icons - Prodcuts.svg"
              alt="Products Icon"
              style={{ width: '42px', height: '42px', display: 'block' }}
            />
          </div>
          <div className="products-pill-title">
            PRODUCTS
          </div>
        </div>

        {/* 1. Foundation White Card: Technology We Build */}
        <div className="products-foundation-card">
          <h2 className="products-foundation-title">
            <span className="text-navy">TECHNOLOGY WE BUILD.</span>{' '}
            <span className="text-red">SECURITY YOU CAN TRUST.</span>
          </h2>

          <div className="products-foundation-text-group">
            <p className="products-foundation-text">
              <strong>COBRA</strong> is an IT-focused technology company dedicated to developing practical, reliable, and secure digital solutions for modern needs. Our work covers a broad range of technology areas, including software and application development, mobile applications, websites, cloud and data solutions, cybersecurity, privacy, automation, and other digital technologies.
            </p>
            <p className="products-foundation-text">
              We believe technology should be built with a clear purpose — not simply to function, but to solve real problems, improve everyday experiences, and provide lasting value. Quality, reliability, usability, security, and privacy are important parts of our development approach, helping us create solutions that people and businesses can use with confidence.
            </p>
            <p className="products-foundation-text">
              Alongside technology services, COBRA also develops its own products to address practical needs. Whether we build solutions for clients or create our own products, our approach remains the same: useful technology, thoughtful design, dependable performance, and security at the core.
            </p>
          </div>
        </div>

        {/* Product Logo / Brand Separator */}
        <div className="products-brand-divider">
          <SecureNoteLogo size={46} />
        </div>

        {/* 2. Middle Dark Navy Card: Secure NOTE Showcase */}
        <div className="products-secure-note-card">
          <h3 className="products-secure-note-title">
            <span style={{ color: '#FFFFFF' }}>OUR NOTES.</span>{' '}
            <span className="text-red">YOUR PRIVACY. YOUR CONTROL.</span>
          </h3>

          <div className="products-secure-note-grid">
            {/* Left Column: Comprehensive Product Details */}
            <div className="products-secure-note-content">
              <p className="products-navy-para">
                Secure NOTE is COBRA's own secure digital note application, created for people who want a private and reliable place to keep their important information.
              </p>
              <p className="products-navy-para">
                Unlike ordinary note-taking applications, Secure NOTE was designed with a security-first approach. From account identity and encryption to device protection and secure backup, the application is built to keep your information protected throughout its lifecycle.
              </p>
              <p className="products-navy-para">
                Secure NOTE works offline, helping keep your personal notes away from unnecessary online exposure. Your information is protected using modern encryption and multiple layers of security designed to provide stronger protection for your valuable data.
              </p>

              <h4 className="products-navy-subheading">Security at Every Layer</h4>
              <p className="products-navy-subtext">
                Secure NOTE incorporates multiple protection mechanisms, including:
              </p>

              <ol className="products-security-numbered-list">
                {securityMechanisms.map((mech, idx) => (
                  <li key={idx} className="products-security-list-item">
                    <span className="products-list-num">{idx + 1})</span> {mech}
                  </li>
                ))}
              </ol>

              <div className="products-goal-highlight">
                <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>The goal is simple: </span>
                <strong style={{ color: '#FFFFFF' }}>
                  Your information should belong to you — and its protection should come first.
                </strong>
              </div>

              <h4 className="products-navy-subheading">Built for Real People</h4>
              <p className="products-navy-para" style={{ marginBottom: 0 }}>
                Secure NOTE isn't designed only for technology experts. It is designed for everyday people who need a secure place for their personal notes, important information, records and other valuable digital content. Whether you use it for everyday notes or information you consider important, Secure NOTE gives you a dedicated environment where privacy and security are treated as fundamental features, not optional extras.
              </p>
            </div>

            {/* Right Column: Smartphone Mockup with Real Mobile App Screenshot */}
            <div className="products-phone-column">
              <div className="products-phone-mockup">
                {/* Speaker & Front Camera Hole */}
                <div className="products-phone-notch-bar">
                  <div className="products-phone-speaker" />
                  <div className="products-phone-camera" />
                </div>

                {/* Screen Container */}
                <div className="products-phone-screen">
                  <img
                    src="/assets/mobile_app_screenshot.png"
                    alt="Secure NOTE Mobile App Screenshot"
                    className="products-phone-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Centered Explore Button at Bottom */}
          <div className="products-explore-btn-wrapper">
            <button
              id="btn-explore-secure-note"
              className="products-explore-btn"
              onClick={handleExploreClick}
              aria-label="Explore Secure NOTE"
            >
              Explore Secure NOTE
            </button>
          </div>
        </div>

        {/* 3. Bottom White Card: Technology With Purpose */}
        <div className="products-purpose-card">
          <h2 className="products-purpose-title">
            <span className="text-navy">TECHNOLOGY</span>{' '}
            <span className="text-red">WITH PURPOSE</span>
          </h2>

          <p className="products-purpose-text">
            <strong>COBRA</strong> brings together IT expertise, quality-focused services and its own technology products under one vision: to create technology people can depend on. From developing digital solutions for clients to building our own products such as Secure NOTE, we focus on practical innovation, reliable performance and strong security.
          </p>

          <p className="products-purpose-highlight">
            <span className="text-navy">Your IT needs deserve technology built with purpose — and a </span>
            <span className="text-red">partner you can trust.</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProductsPage;
