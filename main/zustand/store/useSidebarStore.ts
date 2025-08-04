import { create } from 'zustand';

interface SidebarStore {
  isSidebarOpen: boolean;
  isMobile: boolean;
  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
  setMobile: (value: boolean) => void;
}

export const useSidebarStore = create<SidebarStore>(set => ({
  isSidebarOpen: true,
  isMobile: false,

  // Toggle sidebar open/close
  toggleSidebar: () => set(state => ({ isSidebarOpen: !state.isSidebarOpen })),

  // Explicitly open the sidebar
  openSidebar: () => set({ isSidebarOpen: true }),

  // Explicitly close the sidebar
  closeSidebar: () => set({ isSidebarOpen: false }),

  // Set mobile state (based on screen width)
  setMobile: (value: boolean) => set({ isMobile: value }),
}));
