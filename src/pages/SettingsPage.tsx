import React from 'react';
import { ThemeToggle } from '../components/common/ThemeToggle';

export const SettingsPage: React.FC = () => {
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
            Preferences & Control
          </div>
          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '14px',
            lineHeight: 1.15,
          }}>
            Settings & Preferences
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            maxWidth: '820px',
            lineHeight: 1.6,
          }}>
            Customize your visual environment and inspect your client-side cryptographic sovereignty status.
          </p>
        </div>

        {/* Settings Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '780px' }}>

          {/* Theme Card */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: 'var(--shadow-card)',
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              Interface Theme
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '20px' }}>
              Select between Light, Dark, or System automated display modes.
            </p>
            <ThemeToggle />
          </div>

          {/* Data Sovereignty Card */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: 'var(--shadow-card)',
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              Cryptographic Status & Data Sovereignty
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
              All encryption keys are derived client-side via WebCrypto Argon2id / AES-256-GCM. No telemetries or private data ever leave your personal device.
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '16px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13.5px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Cryptographic Engine</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>WebCrypto AES-256-GCM (Active)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13.5px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Key Derivation Function</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Argon2id (Client Local)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13.5px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Telemetry Transmission</span>
                <span style={{ color: 'var(--accent-red)', fontWeight: 700 }}>Disabled (0 Outbound Bytes)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
};
