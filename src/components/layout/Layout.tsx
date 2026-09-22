import React from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { RightSideNav } from '../nav/RightSideNav';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      <RightSideNav />
      {children}
      <Footer />
    </div>
  );
};
