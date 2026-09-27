import React from 'react';

export const SecuritySection: React.FC = () => {
  return (
    <div className="security-page-wrapper" id="security">
      <div className="security-inner-container">

        {/* Top Centered Icon & Badge */}
        <div className="security-top-badge-group">
          <div className="security-icon-box">
            <img
              src="/assets/COBRA Website - Icons - Security.svg"
              alt="Security Icon"
              style={{ width: '42px', height: '42px', display: 'block' }}
            />
          </div>
          <div className="security-pill-title">
            SECURITY
          </div>
        </div>

        {/* 1. Foundation White Card */}
        <div className="security-foundation-card">
          <h2 className="security-foundation-title">
            SECURITY IS NOT A FEATURE. <span className="text-red">IT'S OUR FOUNDATION.</span>
          </h2>
          <p className="security-foundation-text">
            At <strong>COBRA</strong>, we believe security should never be an afterthought. It should be considered from the very beginning of every product, service, and technology we develop. Our approach to security focuses on protecting the confidentiality, integrity, and availability of data while maintaining a reliable and practical user experience. We follow security-conscious development practices and apply appropriate safeguards across applications, systems, devices, networks, and data.
          </p>
          <p className="security-foundation-text">
            From secure application architecture and access controls to encryption, authentication, privacy protection, and secure data handling, we continuously work to reduce security risks and protect the information entrusted to us.
          </p>
          <p className="security-foundation-highlight">
            Security is built into our technology — not added after it is completed.
          </p>
        </div>

        {/* 2. Two Navy Cards Grid */}
        <div className="security-two-cards-grid">

          {/* Left Card: Protecting What Matters */}
          <div className="security-navy-card">
            <div className="security-navy-content">
              <h3 className="security-navy-title">
                PROTECTING <span className="text-red">WHAT MATTERS</span>
              </h3>
              <p className="security-navy-intro">
                User data deserves protection at every stage of its lifecycle. COBRA follows a layered approach to data protection, combining technology, security practices, and responsible data handling.
              </p>

              <div className="security-approach-subheading">
                Our security approach includes:
              </div>

              <ul className="security-points-list">
                <li>
                  <span className="point-title-red">Data Encryption</span> — Protecting sensitive information through strong encryption technologies.
                </li>
                <li>
                  <span className="point-title-red">Secure Authentication</span> — Using authentication and access control mechanisms to prevent unauthorized access.
                </li>
                <li>
                  <span className="point-title-red">Access Control</span> — Limiting access to information and systems based on legitimate requirements.
                </li>
                <li>
                  <span className="point-title-red">Privacy Protection</span> — Collecting, processing, and handling data responsibly and only for appropriate purposes.
                </li>
                <li>
                  <span className="point-title-red">Secure Storage</span> — Applying appropriate safeguards to protect stored information from unauthorized access or exposure.
                </li>
                <li>
                  <span className="point-title-red">Application Security</span> — Designing applications with security considerations throughout development.
                </li>
                <li>
                  <span className="point-title-red">Device & System Protection</span> — Using security mechanisms to strengthen protection at the device and system levels.
                </li>
                <li>
                  <span className="point-title-red">Secure Communication</span> — Protecting data when it is transmitted between systems where applicable.
                </li>
                <li>
                  <span className="point-title-red">Monitoring & Maintenance</span> — Continuously reviewing and improving security measures as technology and threats evolve.
                </li>
                <li>
                  <span className="point-title-red">Secure Data Handling</span> — Following controlled practices for accessing, processing, transferring, and managing information.
                </li>
              </ul>
            </div>

            {/* Red Bottom Banner */}
            <div className="security-navy-banner-red">
              Minimize unnecessary exposure, prevent unauthorized access, and give users greater confidence in how their information is handled.
            </div>
          </div>

          {/* Right Card: Security by Design */}
          <div className="security-navy-card">
            <div className="security-navy-content">
              <h3 className="security-navy-title">
                SECURITY <span className="text-red">BY DESIGN</span>
              </h3>
              <p className="security-navy-intro">
                <strong>COBRA</strong> does not depend on a single security mechanism. We follow a layered security architecture, where multiple safeguards work together to strengthen overall protection.
              </p>
              <p className="security-navy-intro" style={{ marginTop: '12px' }}>
                Security considerations begin during the planning and architecture stage and continue through development, deployment, operation, and maintenance.
              </p>

              <div className="security-approach-subheading" style={{ marginTop: '20px' }}>
                Our approach can be viewed through multiple security layers:
              </div>

              <ul className="security-points-list">
                <li>
                  <span className="point-title-red">Architecture Security</span> — We design systems with security considerations built into their underlying architecture rather than treating security as an additional component.
                </li>
                <li>
                  <span className="point-title-red">Data Security</span> — Sensitive information is protected using appropriate encryption and secure data-handling mechanisms.
                </li>
                <li>
                  <span className="point-title-red">Identity & Access Security</span> — Authentication and access controls help ensure that only authorized users and processes can access protected resources.
                </li>
                <li>
                  <span className="point-title-red">Application Security</span> — Applications are developed with attention to secure coding, input handling, access control, data protection, and potential attack surfaces.
                </li>
                <li>
                  <span className="point-title-red">Device & Environment Security</span> — Where applicable, security mechanisms at the device, operating system, and environment levels provide additional protection.
                </li>
                <li>
                  <span className="point-title-red">Operational Security</span> — Security does not end when a product is released. We review, maintain, update, and improve our security practices as requirements and threats change.
                </li>
              </ul>
            </div>

            {/* Red Bottom Banner */}
            <div className="security-navy-banner-red">
              No single security measure can address every threat. That is why COBRA combines multiple layers of protection to create a stronger overall security posture.
            </div>
          </div>

        </div>

        {/* 3. Section Heading Divider */}
        <div className="security-trust-divider-heading">
          <span className="text-red">WHY</span> USERS CAN <span className="text-red">TRUST COBRA</span>
        </div>

        {/* 4. Trust Is Earned White Card */}
        <div className="security-trust-card">
          <h3 className="security-trust-card-title">
            TRUST IS EARNED THROUGH <span className="text-red">RESPONSIBLE TECHNOLOGY</span>
          </h3>
          <p className="security-trust-intro">
            Trust should never be demanded. It should be earned through transparency, responsible practices, and consistent protection of user information. COBRA understands that data entrusted to a technology company carries responsibility. We therefore aim to build products and services where security, privacy, and responsible data handling are fundamental considerations.
          </p>

          <div className="security-trust-columns">
            {/* Left Column: Rules & Commitment */}
            <div className="security-trust-left-col">
              <div className="trust-subheading">
                We believe users should have a clear understanding of:
              </div>
              <ol className="trust-numbered-list">
                <li>1) What information is collected</li>
                <li>2) Why information may be required</li>
                <li>3) How information is protected</li>
                <li>4) How information is used</li>
                <li>5) Who may have legitimate access</li>
                <li>6) What security measures are applied</li>
                <li>7) What choices and controls are available to the user</li>
              </ol>

              <p className="trust-subtext">
                We continuously work to strengthen our security practices and adapt to evolving technologies and cybersecurity threats.
              </p>

              <div className="trust-commitment-heading">
                Our Commitment
              </div>
              <p className="trust-commitment-text">
                Your data is not simply information stored inside a system. It represents your privacy, identity, work, and trust. At COBRA, we take that responsibility seriously.
              </p>
            </div>

            {/* Right Column: Graphic Illustration */}
            <div className="security-trust-right-col">
              <div className="security-illustration-container">
                <svg
                  width="260"
                  height="260"
                  viewBox="0 0 260 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="security-graphic-svg"
                >
                  {/* Subtle dotted circular perimeter */}
                  <circle cx="130" cy="130" r="115" stroke="#d0d7de" strokeWidth="1.5" strokeDasharray="4 4" />

                  {/* Server Stack 1 */}
                  <g transform="translate(85, 45)">
                    <rect x="0" y="0" width="90" height="70" rx="6" fill="#FFFFFF" stroke="#022A48" strokeWidth="2.5" />
                    <line x1="0" y1="24" x2="90" y2="24" stroke="#022A48" strokeWidth="2" />
                    <line x1="0" y1="48" x2="90" y2="48" stroke="#022A48" strokeWidth="2" />
                    {/* Server LEDs */}
                    <circle cx="12" cy="12" r="3" fill="#ED3237" />
                    <circle cx="22" cy="12" r="2" fill="#022A48" />
                    <line x1="36" y1="12" x2="76" y2="12" stroke="#022A48" strokeWidth="2" strokeLinecap="round" />

                    <circle cx="12" cy="36" r="3" fill="#022A48" />
                    <circle cx="22" cy="36" r="2" fill="#022A48" />
                    <line x1="36" y1="36" x2="76" y2="36" stroke="#022A48" strokeWidth="2" strokeLinecap="round" />

                    <circle cx="12" cy="60" r="3" fill="#022A48" />
                    <circle cx="22" cy="60" r="2" fill="#ED3237" />
                    <line x1="36" y1="60" x2="76" y2="60" stroke="#022A48" strokeWidth="2" strokeLinecap="round" />
                  </g>

                  {/* Folder with Lock / Gear */}
                  <g transform="translate(50, 130)">
                    <path
                      d="M0 8C0 3.58 3.58 0 8 0H35L47 12H76C80.42 12 84 15.58 84 20V58C84 62.42 80.42 66 76 66H8C3.58 66 0 62.42 0 58V8Z"
                      fill="#FFFFFF"
                      stroke="#022A48"
                      strokeWidth="2.5"
                    />
                    <path d="M0 20H84" stroke="#ED3237" strokeWidth="2.5" />
                    {/* Gear Badge */}
                    <circle cx="72" cy="56" r="14" fill="#FFFFFF" stroke="#ED3237" strokeWidth="2" />
                    <circle cx="72" cy="56" r="5" fill="#ED3237" />
                  </g>

                  {/* Cloud with Encrypted Data Document */}
                  <g transform="translate(135, 140)">
                    <path
                      d="M20 32C12 32 6 26 6 18C6 11 11 5 18 4.2C21 1.6 25 0 29 0C36 0 42 5 43.5 11.5C45.5 10.5 48 10 50.5 10C57 10 62 15 62 21.5C62 22 62 22.5 61.8 23C66 24.5 69 28 69 32"
                      fill="none"
                      stroke="#022A48"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Document inside Cloud */}
                    <rect x="22" y="14" width="34" height="42" rx="4" fill="#FFFFFF" stroke="#022A48" strokeWidth="2" />
                    <line x1="28" y1="24" x2="48" y2="24" stroke="#022A48" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="28" y1="31" x2="48" y2="31" stroke="#022A48" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="28" y1="38" x2="42" y2="38" stroke="#ED3237" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M42 42L48 48L56 36" stroke="#ED3237" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Bottom Bold Tagline Banner */}
        <div className="security-bottom-tagline-container">
          <p className="security-bottom-tagline-text">
            We build technology with security in mind,{' '}
            <span className="security-tagline-pill-red">protect data through multiple layers</span>,
            <br />
            and continuously work to make our systems safer and more{' '}
            <span className="security-tagline-pill-red">trustworthy</span>.
          </p>
        </div>

      </div>
    </div>
  );
};
