import type { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
