import React from 'react';

export const ModulesPage: React.FC = () => {
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
            Ecosystem Components
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '14px',
            lineHeight: 1.15,
          }}>
            Cyber Vault Security Modules
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            maxWidth: '820px',
            lineHeight: 1.6,
          }}>
            An integrated suite of modular security components engineered for personal privacy and uncompromising digital defense.
          </p>
        </div>

        {/* Modules Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '36px',
        }}>

          {/* Module 1 */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <div style={{
                fontSize: '12px',
                fontWeight: 800,
                color: 'var(--accent-red)',
                letterSpacing: '0.08em',
                marginBottom: '10px',
              }}>
                MODULE 01
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
                Secure Notes & Secret Locker
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                End-to-end encrypted personal vault for confidential documents, passwords, seed phrases, and notes.
              </p>
              <ul style={{
                margin: 0,
                paddingLeft: '18px',
                fontSize: '13.5px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}>
                <li>AES-256 authenticated encryption with GCM tag verification</li>
                <li>Biometric hardware authentication (TouchID, FaceID, Windows Hello)</li>
                <li>Automatic clipboard wiping and anti-screenshot memory protection</li>
                <li>Offline-first data store—no internet connection required</li>
              </ul>
            </div>
          </div>

          {/* Module 2 */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <div style={{
                fontSize: '12px',
                fontWeight: 800,
                color: 'var(--accent-red)',
                letterSpacing: '0.08em',
                marginBottom: '10px',
              }}>
                MODULE 02
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
                Encrypted Cold Backup
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                Decentralized, air-gapped compatible automated backup snapshots with quantum-resilient signing.
              </p>
              <ul style={{
                margin: 0,
                paddingLeft: '18px',
                fontSize: '13.5px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}>
                <li>Encrypted export to external USB or air-gapped cold storage media</li>
                <li>Customizable automated snapshot intervals with differential pruning</li>
                <li>Zero-knowledge recovery passphrase generation with Argon2id</li>
                <li>Tamper-evident checksum validation on restoration</li>
              </ul>
            </div>
          </div>

          {/* Module 3 */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <div style={{
                fontSize: '12px',
                fontWeight: 800,
                color: 'var(--accent-red)',
                letterSpacing: '0.08em',
                marginBottom: '10px',
              }}>
                MODULE 03
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
                Identity Shield & Token Guard
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                Hardware token verification, credential hygiene audits, and proactive breach alerts.
              </p>
              <ul style={{
                margin: 0,
                paddingLeft: '18px',
                fontSize: '13.5px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}>
                <li>FIDO2 / U2F hardware security key integration</li>
                <li>K-anonymity encrypted hash checks for leaked passwords</li>
                <li>Session activity radar with one-click revocation</li>
                <li>Local breach radar without sending plain hashes to third parties</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Integration Architecture Card */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: 'var(--shadow-card)',
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '12px',
          }}>
            Modular by Design, Unified by Cryptography
          </h3>
          <p style={{
            fontSize: '14.5px',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            margin: 0,
          }}>
            All COBRA modules function independently or interoperate through zero-knowledge IPC protocols. You can enable only the modules you need, retaining total control over your local compute overhead and storage footprint.
          </p>
        </div>

      </div>
    </main>
  );
};
