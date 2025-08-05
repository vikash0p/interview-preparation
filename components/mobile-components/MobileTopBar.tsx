'use client';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';
import { LuUser } from 'react-icons/lu'; // 👈 import from react-icons

export const MobileTopBar = () => {
  return (
    <div className="border-gray-800 lg:hidden flex justify-between items-center px-1 pt-3">
      <Link href="/" className="flex items-center" aria-label="Home">
        <Image src="/favicon/interViewPraplogo.png" alt="logo" className="size-10" width={40} height={40} />
        <h1 className="font-semibold text-xl ps-1">InterViewPrap</h1>
      </Link>

      <Link
        href="/login"
        className="flex items-center gap-1 px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors bg-gradient-to-r from-gray-950 to-gray-800 rounded-md"
        aria-label="Login"
      >
        <LuUser className="h-4 w-4" />
        <span>Login</span>
      </Link>
    </div>
  );
};
