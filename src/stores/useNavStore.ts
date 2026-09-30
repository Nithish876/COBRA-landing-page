import { create } from 'zustand';
import type { NavState, ActiveModal, PageType } from '../types';

export const useNavStore = create<NavState>((set, get) => ({
  activeItem: 'home',
  currentPage: 'home',
  pageHistory: ['home'],
  activeModal: null,
  isMobileMenuOpen: false,

  setCurrentPage: (page: PageType, pushToHistory = true) => {
    const { currentPage, pageHistory } = get();
    if (currentPage === page) return;
    const newHistory = pushToHistory ? [...pageHistory, page] : pageHistory;
    set({
      currentPage: page,
      activeItem: page,
      pageHistory: newHistory,
    });
    if (window.location.hash.replace('#', '') !== page) {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  goBack: () => {
    const { pageHistory } = get();
    let targetPage: PageType = 'home';
    let newHistory: PageType[] = ['home'];

    if (pageHistory.length > 1) {
      newHistory = [...pageHistory];
      newHistory.pop(); // remove current page
      targetPage = newHistory[newHistory.length - 1];
    }

    set({
      currentPage: targetPage,
      activeItem: targetPage,
      pageHistory: newHistory,
    });

    if (window.location.hash.replace('#', '') !== targetPage) {
      window.location.hash = targetPage;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  setActiveItem: (item: string) => set({ activeItem: item }),
  openModal: (modal: ActiveModal) => set({ activeModal: modal }),
  closeModal: () => set({ activeModal: null }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
}));
