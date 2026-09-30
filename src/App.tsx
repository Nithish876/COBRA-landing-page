import React, { useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { HeroSection } from './components/hero/HeroSection';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { SecuritySection } from './pages/SecuritySection';
import { PrivacyPage } from './pages/PrivacyPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { useThemeStore } from './stores/useThemeStore';
import { useNavStore } from './stores/useNavStore';
import type { PageType } from './types';

export const App: React.FC = () => {
  const initThemeListener = useThemeStore((state) => state.initThemeListener);
  const currentPage = useNavStore((state) => state.currentPage);
  const setCurrentPage = useNavStore((state) => state.setCurrentPage);

  useEffect(() => {
    const cleanup = initThemeListener();
    return cleanup;
  }, [initThemeListener]);

  // Sync with URL hash on initial load and on hashchange
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as PageType;
      const validPages: PageType[] = ['home', 'services', 'products', 'security', 'privacy', 'about', 'contact'];
      if (validPages.includes(hash) && hash !== currentPage) {
        setCurrentPage(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [setCurrentPage, currentPage]);

  // Render the current page separately
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage />;
      case 'products':
      case 'modules':
        return <ProductsPage />;
      case 'security':
        return <SecuritySection />;
      case 'privacy':
        return <PrivacyPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return (
          <section id="home" className="page-section hero-section-wrapper">
            <HeroSection />
          </section>
        );
    }
  };

  return (
    <Layout>
      <div key={currentPage} className="single-page-container fade-in-page">
        {renderCurrentPage()}
      </div>
    </Layout>
  );
};

export default App;
