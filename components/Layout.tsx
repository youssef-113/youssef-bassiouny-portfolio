import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import DynamicBackground from './DynamicBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <DynamicBackground />
      <Navbar />
      <main className="flex-grow pt-20 px-4 sm:px-6 lg:px-8 w-full z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;