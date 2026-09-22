import { create } from 'zustand';
import type { ThemeMode, EffectiveTheme, ThemeState } from '../types';

const STORAGE_KEY = 'cobra_theme_mode';

// Dark theme is currently disabled as per project requirements
const applyThemeToDOM = (theme: EffectiveTheme) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  root.classList.add('light');
  root.classList.remove('dark');
};

export const useThemeStore = create<ThemeState>((set) => {
  // Always lock to light mode for now
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, 'light');
  }
  applyThemeToDOM('light');

  return {
    mode: 'light',
    effectiveTheme: 'light',

    setMode: (mode: ThemeMode) => {
      // Dark theme disabled: keep light mode
      if (mode === 'dark') {
        return;
      }
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, 'light');
      }
      applyThemeToDOM('light');
      set({ mode: 'light', effectiveTheme: 'light' });
    },

    toggleTheme: () => {
      // Dark theme is disabled; toggle is a no-op
      applyThemeToDOM('light');
      set({ mode: 'light', effectiveTheme: 'light' });
    },

    initThemeListener: () => {
      applyThemeToDOM('light');
      return () => {};
    },
  };
});

