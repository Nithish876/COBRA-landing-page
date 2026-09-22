import React from 'react';

export const AboutPage: React.FC = () => {
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
            Company & Philosophy
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '14px',
            lineHeight: 1.15,
          }}>
            About BARKISH & COBRA
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            maxWidth: '820px',
            lineHeight: 1.6,
          }}>
            BARKISH ELEGANT SOFTWARE TECHKNOWLEDGY is dedicated to building modern, robust, and privacy-first digital systems that protect user autonomy and empower enterprise resilience.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
              marginBottom: '10px',
              textTransform: 'uppercase',
            }}>
              Our Mission
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '12px',
            }}>
              Uncompromising Digital Defense
            </h3>
            <p style={{
              fontSize: '14.5px',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              margin: 0,
            }}>
              In an era of relentless data surveillance, tracking, and opaque third-party monetization, COBRA was founded on a simple conviction: your digital life and private communications should belong exclusively to you.
            </p>
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
              marginBottom: '10px',
              textTransform: 'uppercase',
            }}>
              Core Belief
            </div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '12px',
            }}>
              Technology Built With Purpose
            </h3>
            <p style={{
              fontSize: '14.5px',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              margin: 0,
            }}>
              We believe technology shouldn't just be trendy—it must solve real security and productivity problems without adding needless complexity. Security should be woven into every design decision, not tacked on as a checkbox.
            </p>
          </div>

        </div>

        {/* The 4 Tenets of COBRA */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: 'var(--shadow-card)',
          marginBottom: '36px',
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '20px',
            letterSpacing: '-0.01em',
          }}>
            The Four Foundations of the COBRA Ecosystem
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
          }}>
            {[
              {
                title: '1. Zero-Knowledge Architecture',
                desc: 'All cryptographic keys are generated and held exclusively by you. We cannot read your data even if subpoenaed.'
              },
              {
                title: '2. Zero Telemetry & No Ads',
                desc: 'No tracking pixels, behavioral monitoring, or analytics beacons. Your interaction history stays strictly on your device.'
              },
              {
                title: '3. Offline-First Resilience',
                desc: 'Core applications and vaults remain fully functional without active internet connection, eliminating remote attack surfaces.'
              },
              {
                title: '4. Pure Sovereign Engineering',
                desc: 'Client-side WebCrypto (Argon2id and AES-256-GCM) ensures standard-setting cryptographic robustness.'
              }
            ].map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-page)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '20px',
                }}
              >
                <div style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                }}>
                  {pillar.title}
                </div>
                <div style={{
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.55,
                }}>
                  {pillar.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organization / Build Details */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '16px',
          padding: '24px 28px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
              BARKISH ELEGANT SOFTWARE TECHKNOWLEDGY
            </div>
            <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginTop: '4px' }}>
              COBRA Architecture • Release v2.4.0 • Enterprise Zero-Knowledge Platform
            </div>
          </div>
          <div style={{
            fontSize: '12px',
            padding: '6px 14px',
            borderRadius: '999px',
            backgroundColor: 'rgba(2, 42, 72, 0.06)',
            color: 'var(--text-secondary)',
            fontWeight: 600,
            border: '1px solid var(--border-subtle)',
          }}>
            Audited Client-Side Cryptography
          </div>
        </div>

      </div>
    </main>
  );
};
