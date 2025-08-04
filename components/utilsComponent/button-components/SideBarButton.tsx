'use client';
import { useSidebarStore } from '@/main/zustand/store/useSidebarStore';
import React from 'react';
import { FiSidebar, FiX } from 'react-icons/fi';

export const SideBarButton = () => {
  const { toggleSidebar, isSidebarOpen } = useSidebarStore();
  return (
    <button
      type="button"
      onClick={toggleSidebar}
      className=" flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-2 py-2 rounded shadow transition-all"
    >
      {isSidebarOpen ? <FiX className="text-lg" /> : <FiSidebar className="text-lg" />}
    </button>
  );
};
