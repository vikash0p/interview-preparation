import React from 'react';
import { FaExclamationTriangle, FaRedo, FaHome, FaHeadset } from 'react-icons/fa';

const SlugError = () => {
  const errorCode = 'ERR_404';
  const timestamp = new Date().toLocaleString();

  const copyErrorDetails = () => {
    navigator.clipboard.writeText(`Error Code: ${errorCode}\nTimestamp: ${timestamp}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-purple-600"></div>

        <div className="p-8 md:p-10 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-red-500/20 rounded-full mb-6 mx-auto animate-bounce">
            <FaExclamationTriangle className="text-red-400 text-5xl" />
          </div>

          <h2 className="text-3xl font-bold text-gray-100 mb-3">Problem Loading Content</h2>

          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            We encountered an issue while loading this content. This might be temporary - try reloading the page or
            contact our support team if the problem persists.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/20 transform hover:scale-105 active:scale-95"
            >
              <FaRedo />
              Reload Page
            </button>

            <button
              onClick={() => (window.location.href = '/')}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-gray-100 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95"
            >
              <FaHome />
              Go to Homepage
            </button>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={copyErrorDetails}
                className="text-sm text-gray-400 hover:text-gray-300 flex items-center gap-2"
              >
                <FaHeadset className="text-indigo-400" />
                Copy error details for support
              </button>

              <a
                href="mailto:support@example.com"
                className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 to-red-500 opacity-30"></div>
      </div>
    </div>
  );
};

export default SlugError;
