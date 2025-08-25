'use client';
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

export const ErrorIcon = () => {
  return (
    <div className="my-5 relative flex items-center justify-center" role="img" aria-label="Error">
      <FaExclamationTriangle className="text-7xl text-red-400 drop-shadow-lg relative z-10 animate-pulse" />
    </div>
  );
};
