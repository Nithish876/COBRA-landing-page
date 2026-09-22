import React from 'react';
import { useThemeStore } from '../../stores/useThemeStore';
import type { ThemeMode } from '../../types';

export const ThemeToggle: React.FC = () => {
  const { mode, effectiveTheme, setMode } = useThemeStore();

  const options: { mode: ThemeMode; label: string; icon: string }[] = [
    { mode: 'system', label: 'Auto (System)', icon: '⚙️' },
    { mode: 'light', label: 'Light', icon: '☀️' },
    { mode: 'dark', label: 'Dark', icon: '🌙' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>
        Appearance Mode ({effectiveTheme.toUpperCase()} active)
      </div>
      <div
        style={{
          display: 'inline-flex',
          backgroundColor: 'var(--bg-page)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px',
          padding: '4px',
          gap: '4px',
        }}
      >
        {options.map((opt) => {
          const isSelected = mode === opt.mode;
          return (
            <button
              key={opt.mode}
              onClick={() => setMode(opt.mode)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: isSelected ? 'var(--btn-bg)' : 'transparent',
                color: isSelected ? 'var(--btn-text)' : 'var(--text-muted)',
                fontFamily: 'var(--font-primary)',
                fontSize: '13px',
                fontWeight: isSelected ? 600 : 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <span>{opt.icon}</span>
              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
