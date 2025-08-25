'use client';
import React from 'react';
import {  FaRedo, FaHome,  } from '@/main/icons/react-global-icons';
import { ErrorIcon } from "./ErrorIcon";

export const SlugError = () => {


  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl   overflow-hidden relative">
        <div className="p-8 md:p-10 text-center">


         <ErrorIcon />

          <h2 className="text-3xl font-bold text-gray-100 mb-3">Problem Loading Content</h2>

          <p className="text-gray-400 mb-6 max-w-md mx-auto">Something went wrong. Please refresh the page or contact support if the issue continues.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg flex items-center justify-center gap-2  hover:bg-indigo-700 transition-colors duration-500 ease-in-out "
            >
              <FaRedo />
              Reload Page
            </button>

            <button onClick={() => (window.location.href = '/')} className="px-6 py-3  border-2 border-gray-400 hover:border-gray-100 hover:text-white hover:bg-indigo-600 text-gray-400 rounded-lg flex items-center justify-center gap-2 transition-colors duration-500 ease-in-out ">
              <FaHome />
              Go to Homepage
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};
