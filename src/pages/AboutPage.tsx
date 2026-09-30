import React from 'react';
import cobraCyberVaultLogo from '../assets/COBRA_cyber_vault_hero_section.svg';
import cobraLogo from '../assets/COBRA_Logo.svg';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page-wrapper" id="about">
      <div className="about-inner-container">

        {/* Top Centered Icon & Badge */}
        <div className="about-top-badge-group">
          <div className="about-icon-box">
            <img
              src="/assets/COBRA Website - Icons - About Us.svg"
              alt="About Us Icon"
              style={{ width: '42px', height: '42px', display: 'block' }}
            />
          </div>
          <div className="about-pill-title">
            ABOUT US
          </div>
        </div>

        {/* 1. Foundation White Card */}
        <div className="about-foundation-card">
          <h2 className="about-foundation-title">
            TECHNOLOGY BUILT WITH PURPOSE. <span className="text-red">SECURITY BUILT WITH TRUST.</span>
          </h2>
          <p className="about-foundation-text">
            Founded on 13 June 2023 by Mr. BABKRISH, COBRA is a Tamil Nadu-based technology company serving clients and organizations across the world. COBRA was established with a clear purpose: to create reliable technology, deliver meaningful digital solutions, and make security an essential part of everything we build. Our core operations focus on Technology and Cyber Security, supported by expertise in mobile application development, software and application development, website development, data and cloud services.
          </p>
          <p className="about-foundation-text">
            At COBRA, we believe technology should not simply work — it should be secure, dependable, scalable, and built around the real needs of the people who use it.
          </p>
        </div>

        {/* 2. Mission & Vision Badges and Two Navy Cards */}
        <div className="about-mission-vision-grid">

          {/* Left Column: Mission */}
          <div className="about-card-with-badge-col">
            <div className="about-floating-badge">
              <div className="about-badge-icon-box">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ED3237" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" stroke="#022A48" />
                  <circle cx="12" cy="12" r="6" stroke="#ED3237" />
                  <circle cx="12" cy="12" r="2" fill="#ED3237" />
                  <path d="M22 2L15 9" stroke="#ED3237" strokeWidth="2.5" />
                  <path d="M19 2H22V5" stroke="#ED3237" strokeWidth="2" />
                </svg>
              </div>
              <span className="about-badge-label">MISSION</span>
            </div>

            <div className="about-navy-card">
              <div className="about-navy-content">
                <h3 className="about-navy-title">
                  BUILDING A <span className="text-red">SAFER AND</span>
                  <br />
                  <span className="text-red">SMARTER</span> DIGITAL FUTURE
                </h3>
                <p className="about-navy-text">
                  Our vision is to become a trusted technology and cyber security company known for building secure, practical, innovative, and dependable digital solutions.
                </p>
                <p className="about-navy-text">
                  We aim to contribute to a future where individuals, businesses, organizations, and institutions can confidently adopt technology without compromising security, privacy, reliability, or usability.
                </p>
                <p className="about-navy-text">
                  COBRA continuously works toward developing technology that creates long-term value rather than short-term solutions, while making strong security a fundamental part of the digital experience.
                </p>

                <div className="about-shield-graphic-container">
                  <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(42, 10)">
                      <path
                        d="M28 0L56 12V32C56 50 44 64 28 70C12 64 0 50 0 32V12L28 0Z"
                        fill="#ED3237"
                        stroke="#FFFFFF"
                        strokeWidth="2.5"
                      />
                      <path
                        d="M18 34L25 41L38 28"
                        stroke="#FFFFFF"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <path
                      d="M15 75C25 72 38 78 48 85C42 88 30 88 20 85L15 75Z"
                      fill="#FFFFFF"
                      opacity="0.9"
                    />
                    <path
                      d="M125 75C115 72 102 78 92 85C98 88 110 88 120 85L125 75Z"
                      fill="#FFFFFF"
                      opacity="0.9"
                    />
                    <path
                      d="M25 65C32 55 42 62 48 72L38 80C30 76 25 70 25 65Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M115 65C108 55 98 62 92 72L102 80C110 76 115 70 115 65Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </div>
              </div>

              <div className="about-navy-bottom-bar">
                <span className="about-pill-mini-button"></span>
              </div>
            </div>
          </div>

          {/* Right Column: Vision */}
          <div className="about-card-with-badge-col">
            <div className="about-floating-badge">
              <div className="about-badge-icon-box">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ED3237" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6" stroke="#022A48" strokeWidth="2.5" />
                  <path d="M10 22h4" stroke="#022A48" strokeWidth="2.5" />
                  <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6 1 1 1 2 1 3h6c0-1 0-2 1-3 1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z" fill="#022A48" />
                  <line x1="12" y1="6" x2="12" y2="10" stroke="#ED3237" strokeWidth="2" />
                  <circle cx="12" cy="11" r="1.5" fill="#ED3237" />
                </svg>
              </div>
              <span className="about-badge-label">VISION</span>
            </div>

            <div className="about-navy-card">
              <div className="about-navy-content">
                <h3 className="about-navy-title">
                  TURNING <span className="text-red">IDEAS INTO</span> RELIABLE
                  <br />
                  <span className="text-red">TECHNOLOGY</span>
                </h3>
                <p className="about-navy-text">
                  Our mission is to understand real-world challenges and transform them into effective, secure, and user-focused technology solutions.
                </p>

                <div className="about-approach-subheading">
                  We are committed to:
                </div>

                <ul className="about-approach-bullets">
                  <li>
                    <span className="bullet-title-red">Developing technology</span> with security at its foundation.
                  </li>
                  <li>
                    <span className="bullet-title-red">Delivering reliable</span> software, applications, websites, and digital solutions.
                  </li>
                  <li>
                    <span className="bullet-title-red">Providing practical</span> IT solutions for individuals, businesses, organizations, and institutions.
                  </li>
                  <li>
                    <span className="bullet-title-red">Continuously improving</span> our products through innovation and customer feedback.
                  </li>
                  <li>
                    <span className="bullet-title-red">Delivering projects</span> within the agreed requirements and deadlines.
                  </li>
                  <li>
                    <span className="bullet-title-red">Maintaining long-term</span> relationships with our customers beyond project completion.
                  </li>
                  <li>
                    <span className="bullet-title-red">Providing professional</span> support and maintenance to ensure continued stability.
                  </li>
                </ul>

                <p className="about-navy-text" style={{ marginTop: '16px', fontWeight: 600, color: '#FFFFFF' }}>
                  Making quality technology accessible through competitive and transparent pricing.
                </p>
              </div>

              <div className="about-navy-bottom-bar">
                <span className="about-pill-mini-button"></span>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Section: SECURITY AT THE HEART OF COBRA */}
        <div className="about-section-heading">
          <span className="text-red">SECURITY</span> AT THE HEART OF COBRA
        </div>

        <div className="about-security-card">
          <div className="about-security-card-grid">
            <div className="about-vault-logo-col">
              <div className="hero-center-column" style={{ width: '100%', maxWidth: 'clamp(280px, 24vw, 380px)' }}>
                <img
                  src={cobraCyberVaultLogo}
                  alt="COBRA Cyber Vault"
                  className="hero-vault-logo"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            <div className="about-vault-text-col">
              <p className="about-vault-desc-para">
                Security is not something we consider only after a product is developed. It is part of how we approach technology from the beginning.
              </p>
              <p className="about-vault-desc-para">
                <strong className="text-red">COBRA Cyber Vault</strong> is our dedicated security architecture and protection layer, designed to strengthen the security of COBRA's own products and services.
              </p>
              <p className="about-vault-desc-para">
                It represents our approach to protecting technology through multiple security considerations rather than depending on a single protective mechanism.
              </p>
              <p className="about-vault-desc-para">
                From application security and data protection to access control and secure handling of information, we continuously work to strengthen our security practices as technology and threats evolve.
              </p>
            </div>
          </div>
        </div>

        {/* Tagline Statement */}
        <div className="about-security-tagline">
          For COBRA, <span className="text-red">SECURITY IS NOT AN ADDITIONAL FEATURE. IT IS PART OF</span> OUR RESPONSIBILITY.
        </div>

        {/* 4. Red Stadium Banner 1 */}
        <div className="about-stadium-banner">
          <span className="stadium-dot"></span>
          <span className="stadium-banner-text">
            TECHNOLOGY YOU CAN DEPEND ON. SERVICE YOU CAN TRUST.
          </span>
          <span className="stadium-dot"></span>
        </div>

        {/* 5. Customer Reach Block (Circular Logo + Navy Card) */}
        <div className="about-customer-reach-block">
          <div className="about-circle-logo-badge">
            <img src={cobraLogo} alt="COBRA Logo" style={{ width: '85%', height: 'auto' }} />
          </div>

          <div className="about-customer-navy-card">
            <h4 className="about-customer-lead">
              <strong>COBRA</strong> serves a wide range of customers — from individual users and micro businesses to small and medium organizations and large corporate environments.
            </h4>
            <p className="about-customer-body">
              We also undertake technology solutions and services for projects requiring professional and structured IT capabilities, including eligible government and institutional requirements.
            </p>
          </div>
        </div>

        {/* 6. Red Stadium Banner 2 (Methodology) */}
        <div className="about-stadium-banner" style={{ margin: '36px 0 28px 0' }}>
          <span className="stadium-dot"></span>
          <span className="stadium-banner-text">
            Understand → Build → Secure → Deliver → Support
          </span>
          <span className="stadium-dot"></span>
        </div>

        {/* 7. White Card: WHAT MAKES COBRA DIFFERENT? */}
        <div className="about-differentiators-card">
          <h3 className="about-diff-title">
            WHAT MAKES <span className="text-red">COBRA</span> DIFFERENT?
          </h3>

          <div className="about-diff-list">
            <div className="about-diff-item">
              <span className="diff-bullet-diamond">◆</span>
              <div>
                <strong className="diff-name">Security-Focused Technology</strong>
                <p className="diff-desc">
                  Security is considered throughout our development and service approach, supported by our COBRA Cyber Vault security architecture.
                </p>
              </div>
            </div>

            <div className="about-diff-item">
              <span className="diff-bullet-diamond">◆</span>
              <div>
                <strong className="diff-name">Competitive Pricing</strong>
                <p className="diff-desc">
                  We aim to provide professional technology solutions at competitive prices without unnecessarily increasing the customer's investment.
                </p>
              </div>
            </div>

            <div className="about-diff-item">
              <span className="diff-bullet-diamond">◆</span>
              <div>
                <strong className="diff-name">Timely Delivery</strong>
                <p className="diff-desc">
                  We respect the deadlines agreed with our customers and work toward delivering the required product or service within the committed time frame.
                </p>
              </div>
            </div>

            <div className="about-diff-item">
              <span className="diff-bullet-diamond">◆</span>
              <div>
                <strong className="diff-name">We Don't Disappear After Delivery</strong>
                <p className="diff-desc">
                  Project completion is not the end of our relationship. After delivery, COBRA follows up with the customer regularly for one month to ensure that the delivered solution remains stable and continues to meet the agreed requirements.
                </p>
              </div>
            </div>

            <div className="about-diff-item">
              <span className="diff-bullet-diamond">◆</span>
              <div>
                <strong className="diff-name">Flexible Maintenance</strong>
                <p className="diff-desc">
                  Customers can choose maintenance support according to their requirements through Monthly, Quarterly, or Yearly maintenance plans.
                </p>
              </div>
            </div>

            <div className="about-diff-item">
              <span className="diff-bullet-diamond">◆</span>
              <div>
                <strong className="diff-name">Doorstep Demonstration</strong>
                <p className="diff-desc">
                  Where applicable, COBRA provides product and service demonstrations at the customer's location, helping customers understand the solution before making a decision.
                </p>
              </div>
            </div>

            <div className="about-diff-item">
              <span className="diff-bullet-diamond">◆</span>
              <div>
                <strong className="diff-name">Solutions Built Around You</strong>
                <p className="diff-desc">
                  We don't believe every customer needs the same solution. We first understand the requirement, then design the technology around the actual need.
                </p>
              </div>
            </div>

            <div className="about-diff-item">
              <span className="diff-bullet-diamond">◆</span>
              <div>
                <strong className="diff-name">Long-Term Relationship</strong>
                <p className="diff-desc">
                  We aim to build relationships, not merely complete projects. Our goal is to remain a dependable technology partner as our customers grow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 8. White Card: YOUR PROJECT MATTERS TO US */}
        <div className="about-project-matters-card">
          <h3 className="about-project-title">
            YOUR PROJECT <span className="text-red">MATTERS TO US</span>
          </h3>

          <div className="about-project-grid">
            <div className="about-project-ill-col">
              <svg width="150" height="150" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30 15C30 9.47715 34.4772 5 40 5H100L130 35V135C130 140.523 125.523 145 120 145H40C34.4772 145 30 140.523 30 135V15Z"
                  fill="#022A48"
                />
                <path d="M100 5V35H130L100 5Z" fill="#ED3237" />
                <rect x="42" y="44" width="76" height="24" rx="3" fill="#FFFFFF" />
                <text x="80" y="60" textAnchor="middle" fill="#022A48" fontSize="12" fontWeight="800" fontFamily="'Outfit', sans-serif">
                  PROJECT
                </text>
                <line x1="44" y1="80" x2="116" y2="80" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                <line x1="44" y1="92" x2="116" y2="92" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                <line x1="44" y1="104" x2="90" y2="104" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />

                <circle cx="120" cy="125" r="24" fill="#ED3237" stroke="#FFFFFF" strokeWidth="3" />
                <path
                  d="M120 115V119M120 131V135M110 125H114M126 125H130M113 118L116 121M124 129L127 132M113 132L116 129M124 121L127 118"
                  stroke="#FFFFFF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <circle cx="120" cy="125" r="7" fill="#022A48" />
              </svg>
            </div>

            <div className="about-project-text-col">
              <p className="about-project-para">
                When a customer gives COBRA an opportunity, we understand that they are placing their requirements, expectations, time, and investment in our hands.
              </p>
              <p className="about-project-para">
                That responsibility matters to us.
              </p>
              <p className="about-project-para">
                We therefore focus on understanding the requirement clearly, developing the solution professionally, maintaining appropriate security practices, delivering within the agreed timeline, and continuing to support the customer after delivery.
              </p>
              <div className="about-project-objective-box">
                <p className="about-project-quote">
                  Our objective is not simply to say: <em>"The project is completed."</em>
                </p>
                <p className="about-project-quote" style={{ marginTop: '8px', color: 'var(--color-navy)', fontWeight: 700 }}>
                  Our objective is to make sure: <span className="text-red">"The project is working, the customer is satisfied, and the solution continues to serve its purpose."</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 9. Dark Navy Card: BE PART OF WHAT WE BUILD NEXT */}
        <div className="about-build-next-card">
          <div className="about-build-next-content">
            <h3 className="about-build-next-title">
              BE PART <span className="text-red">OF WHAT WE BUILD NEXT</span>
            </h3>
            <p className="about-build-next-para">
              COBRA warmly welcomes investors, business partners, and strategic collaborators who believe in the potential of technology, cyber security, and innovative digital products. Investment opportunities may be considered across our products, services, technology initiatives, and the growth of COBRA itself, subject to applicable business and legal requirements.
            </p>
            <p className="about-build-next-para">
              We believe investors deserve clarity and confidence. Therefore, we are committed to maintaining appropriate legal, regulatory, financial, and business formalities in accordance with applicable laws and requirements.
            </p>
            <p className="about-build-next-para">
              If you are interested in COBRA, our products, services, or future plans, we are always willing to explain our business model, product vision, technology, service structure, growth plans, and investment opportunities clearly.
            </p>
          </div>

          {/* Red Dual Bottom Banner */}
          <div className="about-build-next-banner">
            <div className="banner-left-welcome">
              We welcome questions.
            </div>
            <div className="banner-right-understanding">
              Because a confident investment begins with a clear understanding.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
