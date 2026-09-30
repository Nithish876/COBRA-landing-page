import React from 'react';

export const PrivacyApproachDiagram: React.FC = () => {
  return (
    <div className="privacy-diagram-wrapper">
      <div className="privacy-diagram-container">
        
        {/* Central Dual-Colored Circle */}
        <div className="privacy-center-circle">
          {/* Top Red Semicircle */}
          <div className="privacy-center-top">
            <span className="privacy-center-heading-line">OUR APPROACH</span>
            <span className="privacy-center-heading-line">TO DATA PRIVACY</span>
          </div>

          {/* Bottom Navy Semicircle */}
          <div className="privacy-center-bottom">
            <p className="privacy-center-desc">
              <strong>COBRA</strong> treats privacy as a fundamental responsibility across our products, services and internal technology practices. We design our systems with privacy in mind and carefully consider what information is collected, where it is processed, why it is needed and who should have access to it. We avoid unnecessary collection of personal information and aim to keep data handling limited to its intended purpose. Our privacy practices are supported by controlled access, data minimization, secure processing, responsible retention and transparent communication. Where user information is required to operate a service, we work to ensure that it is handled appropriately and protected against unauthorized access or misuse. Privacy is not simply about keeping information hidden. It is about giving information the right purpose, the right protection and the right level of control.
            </p>
          </div>
        </div>

        {/* 8 Surrounding Circular Nodes */}
        {/* 1. Privacy by Design (Top - 12 o'clock) */}
        <div className="privacy-node node-top node-border-red">
          <span>Privacy</span>
          <span>by Design</span>
        </div>

        {/* 2. Data Minimization (Top Right - 1:30 o'clock) */}
        <div className="privacy-node node-top-right node-border-red">
          <span>Data</span>
          <span>Minimization</span>
        </div>

        {/* 3. Purpose Limitation (Right - 3 o'clock) */}
        <div className="privacy-node node-right node-border-navy">
          <span>Purpose</span>
          <span>Limitation</span>
        </div>

        {/* 4. Access Control (Bottom Right - 4:30 o'clock) */}
        <div className="privacy-node node-bottom-right node-border-navy">
          <span>Access</span>
          <span>Control</span>
        </div>

        {/* 5. Data Protection (Bottom - 6 o'clock) */}
        <div className="privacy-node node-bottom node-border-navy">
          <span>Data</span>
          <span>Protection</span>
        </div>

        {/* 6. User Control (Bottom Left - 7:30 o'clock) */}
        <div className="privacy-node node-bottom-left node-border-navy">
          <span>User</span>
          <span>Control</span>
        </div>

        {/* 7. Privacy In Our Products (Left - 9 o'clock) */}
        <div className="privacy-node node-left node-border-navy">
          <span>Privacy In</span>
          <span>Our Products</span>
        </div>

        {/* 8. Privacy In Our Services (Top Left - 10:30 o'clock) */}
        <div className="privacy-node node-top-left node-border-red">
          <span>Privacy In</span>
          <span>Our Services</span>
        </div>

      </div>
    </div>
  );
};
