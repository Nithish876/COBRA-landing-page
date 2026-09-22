import { create } from 'zustand';
import type { ThemeMode, EffectiveTheme, ThemeState } from '../types';

const STORAGE_KEY = 'cobra_theme_mode';

const getSystemTheme = (): EffectiveTheme => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const resolveEffectiveTheme = (mode: ThemeMode): EffectiveTheme => {
  if (mode === 'system') {
    return getSystemTheme();
  }
  return mode;
};

const applyThemeToDOM = (theme: EffectiveTheme) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  if (theme === 'dark') {
    root.classList.add('dark');
    root.classList.remove('light');
  } else {
    root.classList.add('light');
    root.classList.remove('dark');
  }
};

export const useThemeStore = create<ThemeState>((set, get) => {
  const savedMode = (typeof window !== 'undefined'
    ? (localStorage.getItem(STORAGE_KEY) as ThemeMode) || 'system'
    : 'system') as ThemeMode;

  const initialEffective = resolveEffectiveTheme(savedMode);
  applyThemeToDOM(initialEffective);

  return {
    mode: savedMode,
    effectiveTheme: initialEffective,

    setMode: (mode: ThemeMode) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, mode);
      }
      const effectiveTheme = resolveEffectiveTheme(mode);
      applyThemeToDOM(effectiveTheme);
      set({ mode, effectiveTheme });
    },

    toggleTheme: () => {
      const current = get().effectiveTheme;
      const nextTheme: EffectiveTheme = current === 'dark' ? 'light' : 'dark';
      get().setMode(nextTheme);
    },

    initThemeListener: () => {
      if (typeof window === 'undefined') return () => {};

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleSystemChange = (e: MediaQueryListEvent) => {
        const currentMode = get().mode;
        if (currentMode === 'system') {
          const newEffective: EffectiveTheme = e.matches ? 'dark' : 'light';
          applyThemeToDOM(newEffective);
          set({ effectiveTheme: newEffective });
        }
      };

      mediaQuery.addEventListener('change', handleSystemChange);
      return () => mediaQuery.removeEventListener('change', handleSystemChange);
    },
  };
});
