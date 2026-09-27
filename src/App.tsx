import React, { useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { HeroSection } from './components/hero/HeroSection';
import { ServicesPage } from './pages/ServicesPage';
import { ModulesPage } from './pages/ModulesPage';
import { SecuritySection } from './pages/SecuritySection';
import { PrivacyPage } from './pages/PrivacyPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { useThemeStore } from './stores/useThemeStore';

export const App: React.FC = () => {
  const initThemeListener = useThemeStore((state) => state.initThemeListener);

  useEffect(() => {
    const cleanup = initThemeListener();
    return cleanup;
  }, [initThemeListener]);

  return (
    <Layout>
      {/* 1. Hero / Home Section */}
      <section id="home" className="page-section hero-section-wrapper">
        <HeroSection />
      </section>

      {/* 2. Services Section */}
      <section id="services" className="page-section">
        <ServicesPage />
      </section>

      {/* 3. Vault Modules Section */}
      <section id="modules" className="page-section">
        <ModulesPage />
      </section>

      {/* 4. Cyber Vault Security Section */}
      <section id="security" className="page-section">
        <SecuritySection />
      </section>

      {/* 5. Zero-Knowledge Trust & Privacy Section */}
      <section id="privacy" className="page-section">
        <PrivacyPage />
      </section>

      {/* 6. About COBRA Section */}
      <section id="about" className="page-section">
        <AboutPage />
      </section>

      {/* 7. Contact Us Section with MapView & Form */}
      <section id="contact" className="page-section">
        <ContactPage />
      </section>
    </Layout>
  );
};

export default App;
