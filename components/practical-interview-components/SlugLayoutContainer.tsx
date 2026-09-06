'use client';
import React, { useEffect } from 'react';
import { ISlugLayoutProps } from '@/main/types/practical-interview.types';
import { useSidebarStore } from '@/main/zustand/store/useSidebarStore';
import { SideBarButton } from '../utilsComponent/button-components/SideBarButton';
const SlugLayoutContainer: React.FC<ISlugLayoutProps> = ({ child,  }) => {
  const {  isMobile, closeSidebar, setMobile } = useSidebarStore();

  useEffect(() => {
    const checkIfMobile = () => setMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [setMobile]);

  useEffect(() => {
    if (isMobile) closeSidebar();
  }, [isMobile, closeSidebar]);

  return (
    <section className="min-h-screen flex w-full relative flex-1">


      {/* Main Content */}
      <div className={`flex-1 transition-all duration-500 ease-in-out  `}>
        <div>{isMobile && <SideBarButton />}</div>

        <main className="p-4">{child}</main>
      </div>
    </section>
  );
};

export default SlugLayoutContainer;
