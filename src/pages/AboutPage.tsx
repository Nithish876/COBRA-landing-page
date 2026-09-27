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
            TECHNOLOGY BUILT WITH PURPOSE. <span className="text-red">SECURITY BUILT ON TRUST.</span>
          </h2>
          <p className="about-foundation-text">
            At <strong>COBRA</strong>, we believe that technology should be built with clarity, purpose, and integrity. In a digital environment where data and digital systems touch nearly every aspect of business and life, users deserve solutions that are reliable, practical, and secure. We focus on developing software, applications, platforms, and security solutions that help users solve problems, automate workflows, and operate with greater confidence.
          </p>
          <p className="about-foundation-text">
            Our philosophy is simple: technology should serve users, not exploit them. Privacy and security should not be afterthoughts — they should be foundational.
          </p>
        </div>

        {/* 2. Mission & Vision Badges and Two Navy Cards */}
        <div className="about-mission-vision-grid">

          {/* Left Column: Mission */}
          <div className="about-card-with-badge-col">
            {/* Top Mission Floating Badge */}
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

            {/* Navy Card: Mission */}
            <div className="about-navy-card">
              <div className="about-navy-content">
                <h3 className="about-navy-title">
                  BUILDING A <span className="text-red">SAFER AND</span>
                  <br />
                  <span className="text-red">SMARTER</span> DIGITAL FUTURE
                </h3>
                <p className="about-navy-text">
                  Our mission is to build robust, practical technology solutions that empower users while protecting their privacy and ensuring security across their digital operations.
                </p>
                <p className="about-navy-text">
                  We strive to develop software, applications, and tools that simplify workflows, solve problems, and help businesses operate more effectively without compromising security or user privacy.
                </p>
                <p className="about-navy-text">
                  COBRA aims to be a trusted technology partner for users and businesses who value privacy-conscious development, secure architecture, and dependable digital systems.
                </p>

                {/* Hands Holding Shield Graphic */}
                <div className="about-shield-graphic-container">
                  <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Glowing Red Shield */}
                    <g transform="translate(42, 10)">
                      <path
                        d="M28 0L56 12V32C56 50 44 64 28 70C12 64 0 50 0 32V12L28 0Z"
                        fill="#ED3237"
                        stroke="#FFFFFF"
                        strokeWidth="2.5"
                      />
                      {/* Checkmark */}
                      <path
                        d="M18 34L25 41L38 28"
                        stroke="#FFFFFF"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    {/* Supporting Hands Silhouette */}
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

              {/* Red Bottom Button Bar */}
              <div className="about-navy-bottom-bar">
                <span className="about-pill-mini-button"></span>
              </div>
            </div>
          </div>

          {/* Right Column: Vision */}
          <div className="about-card-with-badge-col">
            {/* Top Vision Floating Badge */}
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

            {/* Navy Card: Vision */}
            <div className="about-navy-card">
              <div className="about-navy-content">
                <h3 className="about-navy-title">
                  TURNING <span className="text-red">IDEAS INTO</span> RELIABLE
                  <br />
                  <span className="text-red">TECHNOLOGY</span>
                </h3>
                <p className="about-navy-text">
                  We envision a digital world where technology serves users with clarity, transparency, and integrity, and where security and privacy are standard expectations rather than optional additions.
                </p>

                <div className="about-approach-subheading">
                  Our Approach Includes:
                </div>

                <ul className="about-approach-bullets">
                  <li>
                    <span className="bullet-title-red">User-First Design</span> — Ensuring ease of use and accessibility.
                  </li>
                  <li>
                    <span className="bullet-title-red">Security-First Thinking</span> — Building protection into software from day one.
                  </li>
                  <li>
                    <span className="bullet-title-red">Purpose-Driven Development</span> — Solving real problems with purposeful technology.
                  </li>
                  <li>
                    <span className="bullet-title-red">Transparent Communication</span> — Clear and straightforward interactions with users and clients.
                  </li>
                  <li>
                    <span className="bullet-title-red">Reliability & Quality</span> — Building solutions that perform consistently and dependably.
                  </li>
                  <li>
                    <span className="bullet-title-red">Long-Term Support</span> — Standing behind what we build with ongoing care and updates.
                  </li>
                </ul>

                <p className="about-navy-text" style={{ marginTop: '16px' }}>
                  We believe that technology should be an asset that empowers users, not a liability that complicates their lives.
                </p>
              </div>

              {/* Red Bottom Button Bar */}
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
            {/* Left Column: Cyber Vault Card */}
            <div className="about-vault-logo-col">
              <div className="hero-center-column" style={{ width: '100%', maxWidth: '280px' }}>
                <img
                  src={cobraCyberVaultLogo}
                  alt="COBRA Cyber Vault"
                  className="hero-vault-logo"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* Right Column: Security Principles Text */}
            <div className="about-vault-text-col">
              <p className="about-vault-desc-para">
                Security is not something we consider only after a product is developed. It is part of the way we approach technology from the beginning.
              </p>
              <p className="about-vault-desc-para">
                <strong className="text-red">COBRA Cyber Vault</strong> is our dedicated security architecture and protection layer, designed to strengthen the security of COBRA's own products and services.
              </p>
              <p className="about-vault-desc-para">
                It represents our approach to protecting technology through multiple layers of consideration rather than depending on a single protection mechanism.
              </p>
              <p className="about-vault-desc-para">
                From application security and data protection to access control and secure handling of information, we continually work to strengthen our security practices as technologies and threats evolve.
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
          {/* Left Circular Badge */}
          <div className="about-circle-logo-badge">
            <img src={cobraLogo} alt="COBRA Logo" style={{ width: '85%', height: 'auto' }} />
          </div>

          {/* Right Navy Card */}
          <div className="about-customer-navy-card">
            <h4 className="about-customer-lead">
              <strong>COBRA</strong> serves a wide range of customers — from individual users and micro businesses to small and medium organizations and large corporate environments.
            </h4>
            <p className="about-customer-body">
              We also undertake technology solutions and services for projects requiring professional and structured IT capabilities, including eligible government and institutional environments.
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
                <strong className="diff-name">Security-Minded Approach:</strong>
                <p className="diff-desc">
                  Security and privacy are prioritized from the start, not added as an afterthought or optional feature.
                </p>
              </div>
            </div>

            <div className="about-diff-item">
              <span className="diff-bullet-diamond">◆</span>
              <div>
                <strong className="diff-name">Transparent Working:</strong>
                <p className="diff-desc">
                  We believe in clear and honest communication with our users and clients, with no hidden terms or confusing fine print.
                </p>
              </div>
            </div>

            <div className="about-diff-item">
              <span className="diff-bullet-diamond">◆</span>
              <div>
                <strong className="diff-name">Practical Solutions:</strong>
                <p className="diff-desc">
                  We build software and technology that solve practical everyday problems, rather than creating technology for technology's sake.
                </p>
              </div>
            </div>

            <div className="about-diff-item">
              <span className="diff-bullet-diamond">◆</span>
              <div>
                <strong className="diff-name">Custom-Engineered Architecture:</strong>
                <p className="diff-desc">
                  We don't rely solely on off-the-shelf templates; our solutions are planned and designed around the actual requirements of the user or project.
                </p>
              </div>
            </div>

            <div className="about-diff-item">
              <span className="diff-bullet-diamond">◆</span>
              <div>
                <strong className="diff-name">End-to-End Capabilities:</strong>
                <p className="diff-desc">
                  From initial concept and architectural planning to development, deployment, and ongoing maintenance, we handle the full development lifecycle.
                </p>
              </div>
            </div>

            <div className="about-diff-item">
              <span className="diff-bullet-diamond">◆</span>
              <div>
                <strong className="diff-name">Standards-Based Reliability:</strong>
                <p className="diff-desc">
                  Our development and design practices adhere to recognized industry standards, ensuring high quality, performance, and maintainability.
                </p>
              </div>
            </div>

            <div className="about-diff-item">
              <span className="diff-bullet-diamond">◆</span>
              <div>
                <strong className="diff-name">Professional Experience:</strong>
                <p className="diff-desc">
                  Our team brings experience across software development, digital platforms, security engineering, and enterprise IT solutions.
                </p>
              </div>
            </div>

            <div className="about-diff-item">
              <span className="diff-bullet-diamond">◆</span>
              <div>
                <strong className="diff-name">Client-Focused Commitment:</strong>
                <p className="diff-desc">
                  We are dedicated to building long-term relationships with our clients, providing reliable ongoing support and guidance as their needs evolve.
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
            {/* Left Column: Project Document Illustration */}
            <div className="about-project-ill-col">
              <svg width="150" height="150" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Document Sheet */}
                <path
                  d="M30 15C30 9.47715 34.4772 5 40 5H100L130 35V135C130 140.523 125.523 145 120 145H40C34.4772 145 30 140.523 30 135V15Z"
                  fill="#022A48"
                />
                {/* Folded Corner */}
                <path d="M100 5V35H130L100 5Z" fill="#ED3237" />
                {/* Banner with PROJECT text */}
                <rect x="42" y="44" width="76" height="24" rx="3" fill="#FFFFFF" />
                <text x="80" y="60" textAnchor="middle" fill="#022A48" fontSize="12" fontWeight="800" fontFamily="'Outfit', sans-serif">
                  PROJECT
                </text>
                {/* Document Lines */}
                <line x1="44" y1="80" x2="116" y2="80" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                <line x1="44" y1="92" x2="116" y2="92" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                <line x1="44" y1="104" x2="90" y2="104" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />

                {/* Overlapping Red Gear / Badge */}
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

            {/* Right Column: Project Text */}
            <div className="about-project-text-col">
              <p className="about-project-para">
                Every project we take on at <strong>COBRA</strong> receives our full attention, expertise, and commitment. Whether you need a custom application, a modern website, or specialized security architecture, we work closely with you to understand your requirements and deliver a solution that fits your exact needs.
              </p>
              <div className="about-project-subhead">
                We approach every project with:
              </div>
              <ul className="about-project-points">
                <li>• <strong>Attention to Detail</strong> — Understanding the specifics of your operational requirements and user needs.</li>
                <li>• <strong>Professional Engineering</strong> — Applying proven software architecture and development standards.</li>
                <li>• <strong>Commitment to Delivery</strong> — Delivering high-quality solutions on time and within agreed specifications.</li>
              </ul>
              <p className="about-project-para" style={{ marginTop: '16px', fontWeight: 600 }}>
                Our goal is to be a technology partner you can depend on — today, tomorrow, and as your technology requirements continue to evolve.
              </p>
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
              Whether you are looking for custom software development, mobile application design, a modern and responsive website, or specialized security architecture, COBRA is ready to help you bring your ideas to life with clarity, security, and professional engineering.
            </p>
            <p className="about-build-next-para">
              We believe the best technology is built through collaboration. We take the time to understand your vision, your workflow, and your requirements before writing a single line of code.
            </p>
            <p className="about-build-next-para">
              If you have a project in mind, want to explore custom software development, or would like to learn more about our Cyber Vault security architecture, our team is always ready to have a conversation.
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
