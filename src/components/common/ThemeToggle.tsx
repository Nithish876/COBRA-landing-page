import React from 'react';
import { useThemeStore } from '../../stores/useThemeStore';

export const ThemeToggle: React.FC = () => {
  const { mode, effectiveTheme, setMode } = useThemeStore();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '8px',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--text-secondary)',
      }}>
        <span>Appearance Mode</span>
        <span style={{
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          padding: '2px 8px',
          borderRadius: '999px',
          backgroundColor: 'rgba(2, 42, 72, 0.08)',
          color: 'var(--text-primary)',
        }}>
          {effectiveTheme.toUpperCase()} ACTIVE
        </span>
      </div>

      {/* Responsive Theme Selector (Pure CSS, No Third-Party Icons) */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          backgroundColor: 'var(--bg-page)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px',
          padding: '6px',
        }}
      >
        {/* Light Theme Button (Active) */}
        <button
          type="button"
          onClick={() => setMode('light')}
          aria-pressed={mode === 'light'}
          style={{
            flex: '1 1 120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px solid #022A48',
            backgroundColor: '#022A48',
            color: '#FFFFFF',
            fontFamily: 'var(--font-primary)',
            fontSize: '13px',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          {/* Pure CSS Color Swatch */}
          <span
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '2px solid #FF0000',
              display: 'inline-block',
            }}
          />
          <span>Light Mode</span>
        </button>

        {/* Dark Theme Button (Disabled for now) */}
        <button
          type="button"
          disabled
          aria-disabled="true"
          title="Dark theme is currently disabled"
          style={{
            flex: '1 1 120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px dashed var(--border-subtle)',
            backgroundColor: 'transparent',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-primary)',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'not-allowed',
            opacity: 0.6,
          }}
        >
          {/* Pure CSS Color Swatch */}
          <span
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#022A48',
              border: '1px solid var(--border-subtle)',
              display: 'inline-block',
            }}
          />
          <span>Dark Mode (Disabled)</span>
        </button>
      </div>

      <div style={{ fontSize: '12px', color: 'var(--text-dim)', lineHeight: 1.4 }}>
        Dark theme is temporarily disabled. The interface is locked to high-contrast Light mode.
      </div>
    </div>
  );
};

