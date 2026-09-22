import React, { useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { HeroSection } from './components/hero/HeroSection';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { ModulesPage } from './pages/ModulesPage';
import { ContactPage } from './pages/ContactPage';
import { SettingsPage } from './pages/SettingsPage';
import { useThemeStore } from './stores/useThemeStore';
import { useNavStore } from './stores/useNavStore';

export const App: React.FC = () => {
  const initThemeListener = useThemeStore((state) => state.initThemeListener);
  const currentPage = useNavStore((state) => state.currentPage);

  useEffect(() => {
    const cleanup = initThemeListener();
    return cleanup;
  }, [initThemeListener]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage />;
      case 'about':
        return <AboutPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'modules':
        return <ModulesPage />;
      case 'contact':
        return <ContactPage />;
      case 'settings':
        return <SettingsPage />;
      case 'home':
      default:
        return <HeroSection />;
    }
  };

  return (
    <Layout>
      {renderCurrentPage()}
    </Layout>
  );
};

export default App;
