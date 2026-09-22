import React from 'react';

export const ContactPage: React.FC = () => {
  return (
    <main className="page-main-content" style={{ animation: 'fadeIn 0.3s ease-out' }}>
      <div className="page-inner-container">
        
        {/* Page Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{
            display: 'inline-block',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: 'var(--accent-red)',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}>
            Get in Touch
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '14px',
            lineHeight: 1.15,
          }}>
            Contact & Support
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            maxWidth: '820px',
            lineHeight: 1.6,
          }}>
            Have questions regarding COBRA Cyber Vault, custom software development, or enterprise deployment? Reach out directly to our engineering team.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '36px',
        }}>

          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: 'var(--shadow-card)',
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: 800,
              color: 'var(--accent-red)',
              letterSpacing: '0.08em',
              marginBottom: '8px',
              textTransform: 'uppercase',
            }}>
              Direct Inquiry
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              Official Email
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
              For general inquiries, software project evaluations, and customer assistance.
            </p>
            <a
              href="mailto:support@cobra.security"
              style={{
                display: 'inline-block',
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--accent-red)',
                textDecoration: 'none',
              }}
            >
              support@cobra.security →
            </a>
          </div>

          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: 'var(--shadow-card)',
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: 800,
              color: 'var(--accent-red)',
              letterSpacing: '0.08em',
              marginBottom: '8px',
              textTransform: 'uppercase',
            }}>
              Instant Community
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              Telegram Channel
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
              Real-time project updates, release notes, and community announcements.
            </p>
            <a
              href="https://t.me/CobraCyberVault"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--accent-red)',
                textDecoration: 'none',
              }}
            >
              @CobraCyberVault →
            </a>
          </div>

          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: 'var(--shadow-card)',
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: 800,
              color: 'var(--accent-red)',
              letterSpacing: '0.08em',
              marginBottom: '8px',
              textTransform: 'uppercase',
            }}>
              Enterprise Solutions
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              Enterprise & Custom Dev
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
              Discuss custom software development, cloud infrastructure, or enterprise cyber vault deployment.
            </p>
            <a
              href="mailto:enterprise@cobra.security"
              style={{
                display: 'inline-block',
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--accent-red)',
                textDecoration: 'none',
              }}
            >
              enterprise@cobra.security →
            </a>
          </div>

        </div>

        {/* PGP / Cryptographic Verification Card */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '16px',
          padding: '28px',
          boxShadow: 'var(--shadow-card)',
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '8px',
          }}>
            Cryptographic Verification
          </h3>
          <p style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            marginBottom: '14px',
            lineHeight: 1.6,
          }}>
            All security advisories and official software binaries released by COBRA are cryptographically signed with our master GPG key.
          </p>
          <div style={{
            backgroundColor: 'var(--bg-page)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '8px',
            padding: '12px 16px',
            fontFamily: 'monospace',
            fontSize: '12.5px',
            color: 'var(--text-muted)',
            wordBreak: 'break-all',
          }}>
            PGP Fingerprint: 4E9B C281 91A0 F318 64B0 098A 24C1 889F 112E DB90
          </div>
        </div>

      </div>
    </main>
  );
};
