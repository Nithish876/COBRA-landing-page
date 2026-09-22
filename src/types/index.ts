export type ThemeMode = 'system' | 'light' | 'dark';
export type EffectiveTheme = 'light' | 'dark';

export interface ThemeState {
  mode: ThemeMode;
  effectiveTheme: EffectiveTheme;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  initThemeListener: () => () => void;
}

export interface NavItem {
  id: string;
  label: string;
  ariaLabel: string;
  badge?: string;
  isAccent?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  ariaLabel: string;
  color: string;
}

export type PageType = 'home' | 'services' | 'about' | 'privacy' | 'modules' | 'contact' | 'settings';

export type ActiveModal = 'settings' | 'explore' | 'contact' | 'info' | 'features' | 'services' | null;

export interface NavState {
  activeItem: string;
  currentPage: PageType;
  pageHistory: PageType[];
  activeModal: ActiveModal;
  isMobileMenuOpen: boolean;
  setCurrentPage: (page: PageType) => void;
  goBack: () => void;
  setActiveItem: (item: string) => void;
  openModal: (modal: ActiveModal) => void;
  closeModal: () => void;
  toggleMobileMenu: () => void;
}
