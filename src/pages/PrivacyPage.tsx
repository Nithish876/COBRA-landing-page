import React from 'react';

export const PrivacyPage: React.FC = () => {
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
            Zero-Knowledge Trust
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '14px',
            lineHeight: 1.15,
          }}>
            Privacy & Cryptographic Sovereignty
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            maxWidth: '820px',
            lineHeight: 1.6,
          }}>
            At COBRA, privacy is not an adjustable policy or marketing slogan—it is a mathematical guarantee enforced by client-side zero-knowledge cryptography.
          </p>
        </div>

        {/* Feature Cards Grid */}
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '14px',
            }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--accent-red)', letterSpacing: '0.08em' }}>
                CLIENT-SIDE DERIVATION
              </span>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-red)' }} />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px' }}>
              Zero-Knowledge Proofs
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Your encryption keys are derived on your local hardware using Argon2id and never transmitted over the network. Not even COBRA engineers or cloud operators can decrypt or view your stored credentials, notes, or files.
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '14px',
            }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--accent-red)', letterSpacing: '0.08em' }}>
                NO SURVEILLANCE
              </span>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-red)' }} />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px' }}>
              No Advertisements • No Tracking
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Your attention and identity belong entirely to you. We do not integrate third-party ad networks, telemetry trackers, or profiling algorithms. We monetize through enterprise software licenses, not personal data brokerage.
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '14px',
            }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--accent-red)', letterSpacing: '0.08em' }}>
                FUTURE-READY
              </span>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-red)' }} />
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '10px' }}>
              Quantum-Resilient Storage
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Prepared for future cryptographic transitions with hybrid post-quantum cipher suites and authenticated AES-256-GCM containers, ensuring your archived secrets remain tamper-proof indefinitely.
            </p>
          </div>

        </div>

        {/* Data Handling Principles Table / Callout */}
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
            marginBottom: '16px',
          }}>
            Our Non-Negotiable Privacy Commitments
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              {
                label: 'Telemetry Collection',
                policy: 'ZERO. We do not gather device identifiers, keystroke dynamics, or navigation logs.',
              },
              {
                label: 'Cloud Sync Architecture',
                policy: 'OPTIONAL & CLIENT-ENCRYPTED. Data is encrypted prior to any outbound transmission; servers store only blind cipher blobs.',
              },
              {
                label: 'Government or Subpoena Requests',
                policy: 'MATHEMATICALLY IMPOSSIBLE TO COMPLY. We hold no private keys, passwords, or recovery seeds.',
              },
              {
                label: 'Data Portability & Deletion',
                policy: 'COMPLETE CONTROL. Export your unencrypted archives or securely wipe all local partitions in one click.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  padding: '16px',
                  backgroundColor: 'var(--bg-page)',
                  borderRadius: '10px',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent-red)' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {item.policy}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};
