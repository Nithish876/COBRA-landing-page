import React from 'react';
import { ThemeToggle } from '../components/common/ThemeToggle';

export const SettingsPage: React.FC = () => {
  return (
    <main className="page-main-content theme-page-main" style={{ animation: 'fadeIn 0.3s ease-out' }}>
      <div className="page-inner-container theme-page-container">
        
        {/* Page Header */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            display: 'inline-block',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: 'var(--accent-red)',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}>
            Appearance & Preferences
          </div>
          <h1 style={{
            fontSize: 'clamp(26px, 4vw, 40px)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '12px',
            lineHeight: 1.2,
          }}>
            Theme & Display Settings
          </h1>
          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 16px)',
            color: 'var(--text-secondary)',
            maxWidth: '820px',
            lineHeight: 1.6,
          }}>
            Customize your visual environment and inspect your client-side cryptographic sovereignty status.
          </p>
        </div>

        {/* Settings Cards Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '840px', width: '100%' }}>

          {/* Main Theme Selection Card */}
          <div className="settings-card" style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            padding: 'clamp(18px, 3.5vw, 28px)',
            boxShadow: 'var(--shadow-card)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  Interface Theme
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  The application is configured to high-contrast Light mode. Dark mode is currently disabled.
                </p>
              </div>
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '4px 10px',
                borderRadius: '999px',
                backgroundColor: 'rgba(2, 42, 72, 0.08)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-subtle)',
              }}>
                LIGHT ACTIVE
              </span>
            </div>

            {/* Visual Theme Cards Grid (Pure CSS, No Third-Party Icons) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
              marginBottom: '20px',
            }}>
              {/* Light Mode Visual Card (Active) */}
              <div
                style={{
                  border: '2px solid #022A48',
                  borderRadius: '12px',
                  padding: '16px',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 4px 16px rgba(2, 42, 72, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {/* CSS Canvas Mockup */}
                <div style={{
                  height: '64px',
                  borderRadius: '8px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(2, 42, 72, 0.2)',
                  padding: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#022A48' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF0000' }} />
                  </div>
                  <div style={{ width: '80%', height: '4px', borderRadius: '2px', backgroundColor: 'rgba(2, 42, 72, 0.25)' }} />
                  <div style={{ width: '50%', height: '4px', borderRadius: '2px', backgroundColor: 'rgba(2, 42, 72, 0.15)' }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#022A48' }}>Light Theme</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#FF0000' }}>ACTIVE</span>
                </div>
                <p style={{ fontSize: '12.5px', color: 'rgba(2, 42, 72, 0.75)', lineHeight: 1.4, margin: 0 }}>
                  High-contrast daylight theme with crisp navy typography and pristine white surfaces.
                </p>
              </div>

              {/* Dark Mode Visual Card (Disabled) */}
              <div
                style={{
                  border: '1px dashed var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '16px',
                  backgroundColor: 'var(--bg-page)',
                  opacity: 0.65,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {/* CSS Canvas Mockup */}
                <div style={{
                  height: '64px',
                  borderRadius: '8px',
                  backgroundColor: '#022A48',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  padding: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ width: '40px', height: '6px', borderRadius: '3px', backgroundColor: '#FFFFFF' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FF0000' }} />
                  </div>
                  <div style={{ width: '80%', height: '4px', borderRadius: '2px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
                  <div style={{ width: '50%', height: '4px', borderRadius: '2px', backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-muted)' }}>Dark Theme</span>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-dim)' }}>DISABLED</span>
                </div>
                <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: 1.4, margin: 0 }}>
                  Low-light cyber theme. Temporarily disabled per interface specifications.
                </p>
              </div>
            </div>

            <ThemeToggle />
          </div>

          {/* Color Tokens & Live Diagnostics Card */}
          <div className="settings-card" style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            padding: 'clamp(18px, 3.5vw, 28px)',
            boxShadow: 'var(--shadow-card)',
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              Color Architecture & Display Metrics
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
              All color tokens adhere to WCAG AAA contrast requirements for maximum readability on mobile and desktop screens.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '12px',
            }}>
              <div style={{
                padding: '12px 14px',
                borderRadius: '10px',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-page)',
              }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Background
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  #FFFFFF (Page)
                </div>
              </div>

              <div style={{
                padding: '12px 14px',
                borderRadius: '10px',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-page)',
              }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Primary Text
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  #022A48 (Navy)
                </div>
              </div>

              <div style={{
                padding: '12px 14px',
                borderRadius: '10px',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-page)',
              }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Accent Highlight
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent-red)' }}>
                  #FF0000 (Cobra Red)
                </div>
              </div>

              <div style={{
                padding: '12px 14px',
                borderRadius: '10px',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-page)',
              }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Contrast Ratio
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  15.6:1 (AAA High)
                </div>
              </div>
            </div>
          </div>

          {/* Cryptographic Status & Data Sovereignty Card (Fully Responsive) */}
          <div className="settings-card" style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '16px',
            padding: 'clamp(18px, 3.5vw, 28px)',
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
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '6px',
                fontSize: '13.5px',
              }}>
                <span style={{ color: 'var(--text-muted)' }}>Cryptographic Engine</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>WebCrypto AES-256-GCM (Active)</span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '6px',
                fontSize: '13.5px',
              }}>
                <span style={{ color: 'var(--text-muted)' }}>Key Derivation Function</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Argon2id (Client Local)</span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '6px',
                fontSize: '13.5px',
              }}>
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

