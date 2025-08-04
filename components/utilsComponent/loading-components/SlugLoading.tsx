'use client';
import React from 'react';

export const SlugLoading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-indigo-600 animate-bounce"></div>
        <p className="text-gray-400">Loading challenge...</p>
      </div>
    </div>
  );
};
