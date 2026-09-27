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
            Privacy is often treated as an after-thought, an optional feature, or a legal policy. At <strong>COBRA</strong>, we believe privacy should be an essential principle that guides how we design, build, and deploy technology. Our technology is built with respect for user privacy, ensuring that individuals retain control over their personal information and how it is handled. At COBRA, we focus on privacy by design, which means privacy considerations are embedded into our development process from the very beginning, rather than treated as an afterthought.
          </p>
          <p className="privacy-foundation-highlight">
            Our goal is to build technology that gives users a reason to trust us. Because at COBRA, privacy is not merely a policy — it is a responsibility we build into our technology.
          </p>
        </div>

        {/* 2. Circular Infographic: Approach to Data Privacy */}
        <div className="privacy-diagram-section">
          <PrivacyApproachDiagram />
        </div>

        {/* 3. Section Heading Divider */}
        <div className="privacy-section-heading-divider">
          WHY USERS CAN <span className="text-red">TRUST COBRA</span>
        </div>

        {/* 4. White Card: Why Users Can Trust COBRA (Detailed Policy Principles) */}
        <div className="privacy-principles-card">
          <p className="privacy-principles-intro">
            COBRA follows transparent and responsible data practices. We want our users to know how their data is handled and what measures are in place to protect it. Here are some key ways we protect user privacy:
          </p>

          <div className="privacy-principles-list">
            <div className="privacy-principle-item">
              <strong className="principle-title">Data Minimization:</strong>
              <p className="principle-desc">
                We only collect the personal data that is necessary for the service to function, and we do not collect excessive or unnecessary data.
              </p>
            </div>

            <div className="privacy-principle-item">
              <strong className="principle-title">Purpose Limitation:</strong>
              <p className="principle-desc">
                Personal data is used only for the purpose for which it was originally collected, and is not repurposed or shared for unrelated reasons without explicit user consent.
              </p>
            </div>

            <div className="privacy-principle-item">
              <strong className="principle-title">Access Control:</strong>
              <p className="principle-desc">
                Access to personal data is restricted to authorized personnel who have a legitimate business need, and security controls are in place to prevent unauthorized access or disclosure.
              </p>
            </div>

            <div className="privacy-principle-item">
              <strong className="principle-title">Data Protection:</strong>
              <p className="principle-desc">
                All stored and transmitted data is protected using appropriate encryption and security measures to prevent unauthorized access, alteration, or loss.
              </p>
            </div>

            <div className="privacy-principle-item">
              <strong className="principle-title">User Control:</strong>
              <p className="principle-desc">
                Users have control over their personal data, including the right to access, correct, or delete their information, and can manage their privacy preferences within our products.
              </p>
            </div>

            <div className="privacy-principle-item">
              <strong className="principle-title">Privacy In Our Products:</strong>
              <p className="principle-desc">
                COBRA products are designed with user privacy in mind from the ground up, with built-in features that protect user data and prevent unnecessary data collection.
              </p>
            </div>

            <div className="privacy-principle-item">
              <strong className="principle-title">Privacy In Our Services:</strong>
              <p className="principle-desc">
                Our consulting, development, and professional services also adhere to strict privacy guidelines, ensuring that client data is handled with the utmost care and confidentiality.
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
            <div className="hero-center-column" style={{ width: '100%', maxWidth: '320px' }}>
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
                  <strong>COBRA Cyber Vault</strong> is the culmination of our approach to privacy and security. Built from the ground up to provide users with a secure and private digital experience, Cyber Vault utilizes advanced zero-knowledge encryption protocols to ensure that only the user can access their data. With Cyber Vault, users can store sensitive information, documents, and credentials with complete confidence.
                </p>
                <p className="security-navy-intro">
                  With Cyber Vault, users can store, organize, and manage sensitive personal and business information without fear of unauthorized access or data exposure. The zero-knowledge architecture means that even COBRA servers cannot view or access your stored data, giving users true data sovereignty. Whether you are an individual looking to secure personal credentials or an enterprise managing sensitive data, Cyber Vault provides the tools and security you need.
                </p>
              </div>

              {/* Red Bottom Banner */}
              <div className="security-navy-banner-red">
                Sensitive information is protected, giving users peace of mind and complete control over the appropriate level of privacy.
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
            At <strong>COBRA</strong>, we believe that trust is earned, not given. We are committed to demonstrating our trustworthiness through open and transparent practices, responsible data management, and a culture of accountability in everything we build and do.
          </p>

          <div className="trust-commitments-block">
            <div className="trust-subheading" style={{ marginBottom: '14px' }}>
              We believe users should know who has access to their data and under what circumstances:
            </div>
            <ul className="trust-bullet-points">
              <li>• We never sell personal data to third parties.</li>
              <li>• We do not use personal data for advertising or marketing without explicit consent.</li>
              <li>• We do not track users across websites or across third-party services.</li>
              <li>• Security is treated as a priority at every stage of development, testing, and deployment.</li>
              <li>• We conduct regular security assessments, audits, and code reviews to identify and fix vulnerabilities.</li>
              <li>• Data is encrypted at rest and in transit using robust, industry-standard cryptographic algorithms.</li>
              <li>• Users retain ownership and control over their personal data at all times.</li>
              <li>• Our privacy policy is written in clear, understandable language, without convoluted legalese.</li>
            </ul>

            <p className="trust-subtext" style={{ marginTop: '20px', fontWeight: 600 }}>
              Our commitment to user privacy and trust is ongoing, not a one-time gesture.
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
