import { create } from 'zustand';
import type { NavState, ActiveModal, PageType } from '../types';

export const useNavStore = create<NavState>((set, get) => ({
  activeItem: 'home',
  currentPage: 'home',
  pageHistory: ['home'],
  activeModal: null,
  isMobileMenuOpen: false,

  setCurrentPage: (page: PageType) => {
    const { currentPage, pageHistory } = get();
    if (currentPage === page) return;
    set({
      currentPage: page,
      activeItem: page,
      pageHistory: [...pageHistory, page],
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  goBack: () => {
    const { pageHistory } = get();
    if (pageHistory.length > 1) {
      const newHistory = [...pageHistory];
      newHistory.pop(); // remove current page
      const previousPage = newHistory[newHistory.length - 1];
      set({
        currentPage: previousPage,
        activeItem: previousPage,
        pageHistory: newHistory,
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      set({ currentPage: 'home', activeItem: 'home' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  setActiveItem: (item: string) => set({ activeItem: item }),
  openModal: (modal: ActiveModal) => set({ activeModal: modal }),
  closeModal: () => set({ activeModal: null }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
}));
