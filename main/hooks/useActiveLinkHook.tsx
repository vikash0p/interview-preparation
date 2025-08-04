'use client';
import { usePathname } from 'next/navigation';

export const useActiveLinkHook = () => {
  const pathname = usePathname();

  const getActiveStatus = (link: string) => {
    if (link === '/') return pathname === '/';
    return pathname === link || pathname.startsWith(link + '/');
  };

  return {
    getActiveStatus,
  };
};
