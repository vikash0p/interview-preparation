'use client';

import { mobileLink } from '@/main/data/link/mobileLink';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import React from 'react';

export const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-950 border-t border-gray-700 lg:hidden z-50">
      <div className="flex justify-around items-center py-2">
        {mobileLink.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={index}
              href={item.href}
              className={`flex flex-col items-center px-4 py-1 text-xs rounded-md transition-colors ${
                isActive ? 'text-indigo-400' : 'text-gray-300 hover:text-white'
              }`}
              aria-label={item.ariaLabel}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
