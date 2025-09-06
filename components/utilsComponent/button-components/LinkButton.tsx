'use client';

import { Link } from 'next-view-transitions';
import clsx from 'clsx';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  ariaLabel: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export default function LinkButton({ href, children, ariaLabel, variant = 'primary', size = 'md', disabled = false, className }: LinkButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-md rounded-md font-medium';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 shadow-md',
    outline: 'border border-indigo-400 text-indigo-400 hover:bg-indigo-600 hover:text-white hover:scale-105',
    ghost: 'text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 hover:scale-105',
  };

  const disabledClasses = 'opacity-60 cursor-not-allowed hover:scale-100 hover:bg-inherit hover:text-inherit shadow-none';

  const combinedClasses = clsx(baseClasses, sizeClasses[size], variantClasses[variant], disabled && disabledClasses, className);

  return (
    <Link href={disabled ? '#' : href} aria-label={ariaLabel} aria-disabled={disabled} tabIndex={disabled ? -1 : 0} className={combinedClasses}>
      {children}
    </Link>
  );
}
