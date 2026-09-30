import React from 'react';
import { PrivacyApproachDiagram } from '../components/privacy/PrivacyApproachDiagram';
import cobraCyberVaultLogo from '../assets/COBRA_cyber_vault_hero_section.svg';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="privacy-page-wrapper" id="privacy">
      <div className="privacy-inner-container">

        {/* Top Centered Icon & Badge */}
        <div className="privacy-top-badge-group">
          <div className="privacy-icon-box">
            <img
              src="/assets/COBRA Website - Icons - Privacy.svg"
              alt="Privacy Icon"
              style={{ width: '42px', height: '42px', display: 'block' }}
            />
          </div>
          <div className="privacy-pill-title">
            PRIVACY
          </div>
        </div>

        {/* 1. Foundation White Card */}
        <div className="privacy-foundation-card">
          <h2 className="privacy-foundation-title">
            PRIVACY IS NOT A FEATURE. <span className="text-red">IT IS OUR RESPONSIBILITY.</span>
          </h2>
          <p className="privacy-foundation-text">
            Privacy is the responsible collection, use, storage and handling of information entrusted to a technology company. In the IT industry, privacy means understanding what information is required, why it is required, how it is processed, who can access it, and how long it should be retained. At <strong>COBRA</strong>, we believe privacy should be built into technology from the beginning — not added after a product is completed. Our approach is based on data minimization, purpose-based processing, controlled access, confidentiality and user awareness.
          </p>
          <p className="privacy-foundation-text" style={{ marginTop: '14px' }}>
            We aim to collect only the information necessary to provide our products and services, use it only for legitimate purposes, and provide users with clear control and understanding of how their information is handled.
          </p>
        </div>

        {/* 2. Circular Infographic & Approach Text: Our Approach to Data Privacy */}
        <div className="privacy-approach-section-card">
          <h3 className="privacy-approach-heading">
            OUR APPROACH <span className="text-red">TO DATA PRIVACY</span>
          </h3>

          <div className="privacy-diagram-section">
            <PrivacyApproachDiagram />
          </div>

          <p className="privacy-approach-narrative">
            COBRA treats privacy as a fundamental responsibility across our products, services and internal technology practices. We design our systems with privacy in mind and carefully consider what information is collected, where it is processed, why it is needed and who should have access to it. We avoid unnecessary collection of personal information and aim to keep data handling limited to its intended purpose. Our privacy practices are supported by controlled access, data minimization, secure processing, responsible retention and transparent communication. Where user information is required to operate a service, we work to ensure that it is handled appropriately and protected against unauthorized access or misuse.
          </p>
          <div className="privacy-approach-quote-box">
            Privacy is not simply about keeping information hidden. It is about giving information the right purpose, the right protection and the right level of control.
          </div>
        </div>

        {/* 3. Section Heading Divider */}
        <div className="privacy-section-heading-divider">
          WHY USERS CAN <span className="text-red">TRUST COBRA</span>
        </div>

        {/* 4. White Card: Why Users Can Trust COBRA (Detailed Policy Principles) */}
        <div className="privacy-principles-card">
          <p className="privacy-principles-intro">
            COBRA builds privacy into the foundation of its technology. Our products and services are designed with multiple privacy considerations rather than depending on a single protection mechanism.
          </p>

          <div className="privacy-principles-list">
            <div className="privacy-principle-item">
              <strong className="principle-title">Data Minimization</strong>
              <p className="principle-desc">
                We aim to collect and process only the information necessary for the intended product or service.
              </p>
            </div>

            <div className="privacy-principle-item">
              <strong className="principle-title">Purpose Limitation</strong>
              <p className="principle-desc">
                Information provided for one purpose should not automatically become available for unrelated purposes. Data handling is designed around its intended use.
              </p>
            </div>

            <div className="privacy-principle-item">
              <strong className="principle-title">Access Control</strong>
              <p className="principle-desc">
                Access to information is restricted according to authorization and operational requirements. Not every system, process or person needs access to every piece of information.
              </p>
            </div>

            <div className="privacy-principle-item">
              <strong className="principle-title">Data Protection</strong>
              <p className="principle-desc">
                Where sensitive information is handled, appropriate technical safeguards are applied to help prevent unauthorized access, alteration, disclosure or loss.
              </p>
            </div>

            <div className="privacy-principle-item">
              <strong className="principle-title">User Control</strong>
              <p className="principle-desc">
                We believe users should understand what information they provide and why it is required. Wherever applicable, users are given appropriate choices and controls over their information.
              </p>
            </div>

            <div className="privacy-principle-item">
              <strong className="principle-title">Privacy in Our Products</strong>
              <p className="principle-desc">
                COBRA products are designed with privacy considerations at the product level — from data collection and processing to storage, access and deletion.
              </p>
            </div>

            <div className="privacy-principle-item">
              <strong className="principle-title">Privacy in Our Services</strong>
              <p className="principle-desc">
                Our people, processes and technology are expected to follow responsible information-handling practices. Privacy is therefore not limited to software; it extends to the way COBRA delivers its services and works with customer information.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Tagline Banner */}
        <div className="privacy-tagline-statement">
          PRIVACY BY DESIGN MEANS WE <span className="text-red">CONSIDER PRIVACY</span> BEFORE THE DATA IS HANDLED — NOT AFTER.
        </div>

        {/* 6. Section: COBRA CYBER VAULT */}
        <div className="privacy-cyber-vault-heading">
          COBRA <span className="text-red">CYBER VAULT</span>
        </div>

        <div className="privacy-cyber-vault-grid">
          {/* Left Column: Cyber Vault Card */}
          <div className="privacy-vault-card-col">
            <div className="hero-center-column" style={{ width: '100%', maxWidth: 'clamp(280px, 24vw, 380px)' }}>
              <img
                src={cobraCyberVaultLogo}
                alt="COBRA Cyber Vault"
                className="hero-vault-logo"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          {/* Right Column: Navy Card with Red Banner */}
          <div className="privacy-vault-text-col">
            <div className="security-navy-card" style={{ height: '100%' }}>
              <div className="security-navy-content" style={{ padding: '36px 32px' }}>
                <p className="security-navy-intro" style={{ marginBottom: '16px' }}>
                  <strong>COBRA Cyber Vault</strong> represents our approach to protecting the most sensitive information within the COBRA technology ecosystem. It is designed around a layered protection philosophy where sensitive information is not treated as ordinary data. Protection is considered across the entire information lifecycle — from collection and processing to storage, access and eventual removal.
                </p>
                <p className="security-navy-intro">
                  The Cyber Vault concept combines controlled access, strong authentication, encryption where appropriate, restricted data exposure, secure processing practices and monitoring-oriented controls to create multiple barriers against unauthorized access. Rather than relying on a single security mechanism, COBRA follows a defence-in-depth approach: if one layer is challenged, additional layers remain in place to provide further protection.
                </p>
              </div>

              {/* Red Bottom Banner */}
              <div className="security-navy-banner-red">
                Keep sensitive information protected, limit unnecessary exposure, and give authorized users the appropriate level of access.
              </div>
            </div>
          </div>
        </div>

        {/* 7. Tagline under Cyber Vault */}
        <div className="privacy-tagline-statement" style={{ margin: '36px 0 28px 0' }}>
          COBRA <span className="text-red">CYBER VAULT</span> IS PART OF OUR BROADER COMMITMENT TO BUILDING <span className="text-red">TECHNOLOGY</span>
          <br />
          WHERE <span className="text-red">PRIVACY AND PROTECTION</span> ARE CONSIDERED <span className="text-red">FUNDAMENTAL</span> — NOT OPTIONAL.
        </div>

        {/* 8. Section: WHY TRUST COBRA */}
        <div className="privacy-section-heading-divider">
          WHY <span className="text-red">TRUST COBRA</span>
        </div>

        <div className="privacy-trust-card">
          <h3 className="privacy-trust-card-title">
            TRUST IS EARNED THROUGH <span className="text-red">RESPONSIBLE TECHNOLOGY, TRANSPARENCY AND CONSISTENT PRACTICES</span> — NOT THROUGH PROMISES ALONE.
          </h3>
          <p className="privacy-trust-intro">
            At <strong>COBRA</strong>, we believe your information should never be treated as something that simply belongs inside a database. It represents your identity, your work, your personal information and, in many cases, information that matters deeply to you.
          </p>

          <div className="trust-commitments-block">
            <div className="trust-subheading" style={{ marginBottom: '14px' }}>
              That is why we follow a privacy-first approach across our products and services. We work to:
            </div>
            <ul className="trust-bullet-points">
              <li>• Collect information responsibly and avoid unnecessary data collection.</li>
              <li>• Use information for its intended and legitimate purposes.</li>
              <li>• Restrict access to authorized systems and users.</li>
              <li>• Apply appropriate protection to sensitive information.</li>
              <li>• Build privacy considerations into our products from the beginning.</li>
              <li>• Minimize unnecessary exposure of user information.</li>
              <li>• Communicate clearly about how information is handled.</li>
              <li>• Continuously improve our privacy and protection practices as our technology evolves.</li>
            </ul>

            <p className="trust-subtext" style={{ marginTop: '20px', fontWeight: 600 }}>
              Our commitment is not to ask users to trust COBRA blindly.
            </p>
          </div>
        </div>

        {/* 9. Bottom Tagline Banner */}
        <div className="privacy-bottom-tagline-container">
          <p className="privacy-bottom-tagline-text">
            OUR GOAL IS TO BUILD TECHNOLOGY THAT GIVES USERS A REASON TO TRUST US.
            <br />
            BECAUSE AT COBRA, PRIVACY IS NOT MERELY A POLICY — IT IS A RESPONSIBILITY
            <br />
            <span className="security-tagline-pill-red" style={{ marginTop: '10px' }}>
              WE BUILD INTO OUR TECHNOLOGY.
            </span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPage;
