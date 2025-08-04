'use client';
import React from 'react';
import { useSidebarStore } from '@/main/zustand/store/useSidebarStore';
import { useParams } from 'next/navigation';
import { SideBarButton } from '../utilsComponent/button-components/SideBarButton';

export const SideBarHeader = () => {
  const { isSidebarOpen } = useSidebarStore();
  const params = useParams();

  const technology = params.technology as string;

  return (
    <div
      className={`flex items-center justify-between w-full sticky top-0 z-50   ${
        isSidebarOpen ? 'pe-3 bg-gray-900 py-4 ' : 'ps-4 py-2'
      } `}
    >
      {isSidebarOpen && <h2 className="text-xl font-semibold capitalize text-white">{technology} Questions</h2>}
      <SideBarButton />
    </div>
  );
};
