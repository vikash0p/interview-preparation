'use client';

import React from 'react';
import Navbar from './Navbar';
import ScrollToTop from '../global-components/ScrollToTop';
import { MobileNav } from './MobileNav';
import { MobileTopBar } from '../mobile-components/MobileTopBar';
import ReduxProvider from '@/main/redux-toolkit/ReduxProvider';

interface MainLayoutProps {
  readonly children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <ReduxProvider>
      <MobileTopBar />
      <Navbar />
      <MobileNav />
      <main>{children}</main>
      <ScrollToTop />
    </ReduxProvider>
  );
};

export default MainLayout;
