import React from 'react';
import { Modal } from './Modal';
import { ThemeToggle } from './ThemeToggle';
import { ServicesModalContent } from './ServicesModalContent';
import { useNavStore } from '../../stores/useNavStore';

export const ModalsContainer: React.FC = () => {
  const { activeModal, closeModal } = useNavStore();

  return (
    <>
      {/* Services Modal */}
      <Modal
        isOpen={activeModal === 'services'}
        onClose={closeModal}
        title="Our Services"
      >
        <ServicesModalContent />
      </Modal>

      {/* Settings & Theme Modal */}
      <Modal
        isOpen={activeModal === 'settings'}
        onClose={closeModal}
        title="Settings & Preferences"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <ThemeToggle />

          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '6px', color: 'var(--text-primary)' }}>
              Data Sovereignty
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              All encryption keys are derived client-side via WebCrypto Argon2id / AES-256-GCM. 
              No telemetries or private data ever leave your personal device.
            </p>
          </div>
        </div>
      </Modal>

      {/* Explore COBRA Modal */}
      <Modal
        isOpen={activeModal === 'explore'}
        onClose={closeModal}
        title="Explore COBRA Cyber Vault"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            COBRA Cyber Vault redefines personal cyber security with zero-knowledge cryptographic vaults.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
            <div style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-page)' }}>
              <div style={{ fontWeight: 700, color: 'var(--accent-red)', fontSize: '14px', marginBottom: '4px' }}>
                Zero-Knowledge Proofs
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Even COBRA engineers cannot decrypt or view your stored credentials or files.
              </div>
            </div>

            <div style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-page)' }}>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '14px', marginBottom: '4px' }}>
                No Advertisements • No Tracking
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Your attention is yours. We monetize through direct enterprise infrastructure, not personal data selling.
              </div>
            </div>

            <div style={{ padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--border-subtle)', backgroundColor: 'var(--bg-page)' }}>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '14px', marginBottom: '4px' }}>
                Quantum-Resilient Storage
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Prepared for future cryptographic transitions with hybrid post-quantum cipher suites.
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Features Modal */}
      <Modal
        isOpen={activeModal === 'features'}
        onClose={closeModal}
        title="Cyber Vault Modules"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            Integrated security suites engineered for uncompromising privacy:
          </p>
          <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ padding: '10px 14px', borderRadius: '10px', backgroundColor: 'var(--bg-page)', border: '1px solid var(--border-subtle)' }}>
              <strong>Secure Notes & Vault:</strong> End-to-end encrypted secret locker with biometrics.
            </li>
            <li style={{ padding: '10px 14px', borderRadius: '10px', backgroundColor: 'var(--bg-page)', border: '1px solid var(--border-subtle)' }}>
              <strong>Encrypted Backup:</strong> Decentralized, cold-storage compatible automated snapshots.
            </li>
            <li style={{ padding: '10px 14px', borderRadius: '10px', backgroundColor: 'var(--bg-page)', border: '1px solid var(--border-subtle)' }}>
              <strong>Identity Shield:</strong> Real-time breach detection and hardware token verification.
            </li>
          </ul>
        </div>
      </Modal>

      {/* Info Modal */}
      <Modal
        isOpen={activeModal === 'info'}
        onClose={closeModal}
        title="About COBRA & Barkish"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          <p>
            <strong>BARKISH ELEGANT SOFTWARE TECHKNOWLEDGY</strong> is dedicated to crafting next-generation digital privacy architecture.
          </p>
          <p>
            <strong>COBRA</strong> embodies our flagship commitment to uncompromised digital defense:
            giving control completely back to the user without ads, backdoors, or third-party interference.
          </p>
          <div style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '8px' }}>
            Version 2.4.0-release • Built with React, Vite, TypeScript & Zustand
          </div>
        </div>
      </Modal>

      {/* Contact Modal */}
      <Modal
        isOpen={activeModal === 'contact'}
        onClose={closeModal}
        title="Contact & Support"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', color: 'var(--text-secondary)' }}>
          <p>
            Have questions about COBRA Cyber Vault or enterprise security deployment?
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ padding: '10px 14px', borderRadius: '10px', backgroundColor: 'var(--bg-page)', border: '1px solid var(--border-subtle)' }}>
              <strong>Official Email:</strong> support@cobra.security
            </div>
            <div style={{ padding: '10px 14px', borderRadius: '10px', backgroundColor: 'var(--bg-page)', border: '1px solid var(--border-subtle)' }}>
              <strong>Telegram Channel:</strong> @CobraCyberVault
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
