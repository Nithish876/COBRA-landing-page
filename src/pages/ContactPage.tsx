import React, { useState } from 'react';
import { MapView } from '../components/contact/MapView';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    queryDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName.trim() || !formData.email.trim() || !formData.queryDetails.trim()) {
      setErrorMsg('Please fill in your name, email, and query details.');
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        queryDetails: '',
      });
    }, 600);
  };

  return (
    <div className="contact-section-container" id="contact">
      {/* Section Title */}
      <h2 className="contact-main-heading">
        CONTACT US
      </h2>

      {/* Two Column Grid */}
      <div className="contact-columns-grid">
        
        {/* Left Column: Interactive Map & Address */}
        <div className="contact-map-column">
          <div className="contact-map-wrapper">
            <MapView />
          </div>
          
          <div className="contact-address-block">
            <p className="contact-address-text">
              CHENNAI, TN, INDIA - 600052.
            </p>
            <a href="mailto:contact@cobra.zone" className="contact-email-link">
              contact@cobra.zone
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-column">
          {submitted ? (
            <div className="contact-success-card">
              <div className="success-icon-badge">✓</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '8px' }}>
                Thank You for Reaching Out
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '20px' }}>
                Your inquiry has been received by our security engineering team. We will review your query details and respond promptly.
              </p>
              <button
                type="button"
                className="btn-submit-pill"
                onClick={() => setSubmitted(false)}
                style={{ padding: '8px 24px', fontSize: '13px' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-actual-form">
              {/* Row 1: First Name & Last Name */}
              <div className="form-two-col-row">
                <div className="form-field-group">
                  <label htmlFor="firstName" className="form-red-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="form-rounded-input"
                    required
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="lastName" className="form-red-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="form-rounded-input"
                  />
                </div>
              </div>

              {/* Row 2: E-Mail & Mobile # */}
              <div className="form-two-col-row">
                <div className="form-field-group">
                  <label htmlFor="email" className="form-red-label">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-Mail"
                    className="form-rounded-input"
                    required
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="phone" className="form-red-label">
                    Mobile #
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile #"
                    className="form-rounded-input"
                  />
                </div>
              </div>

              {/* Row 3: Query Details */}
              <div className="form-field-group" style={{ width: '100%' }}>
                <label
                  htmlFor="queryDetails"
                  className="form-query-label"
                >
                  Query Details
                </label>
                <textarea
                  id="queryDetails"
                  name="queryDetails"
                  value={formData.queryDetails}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your query or requirements..."
                  className="form-rounded-textarea"
                  required
                />
              </div>

              {errorMsg && (
                <div style={{ color: 'var(--accent-red)', fontSize: '13px', textAlign: 'center' }}>
                  {errorMsg}
                </div>
              )}

              {/* Row 4: Submit Button */}
              <div className="form-submit-row">
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="btn-submit-pill"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
