'use client';

import { useEffect, useTransition, useState } from 'react';
import { FiAlertTriangle, FiRefreshCw, FiHome } from 'react-icons/fi';
import { FaRegSadTear } from 'react-icons/fa';

export default function HomePageError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const [isPending, startTransition] = useTransition();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    console.error('Home Page Error:', error);
  }, [error]);

  const handleRetry = () => {
    setIsClicked(true);
    startTransition(() => {
      reset(); // Using Next.js reset instead of full reload
    });
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <div className="max-w-lg w-full bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 shadow-2xl shadow-slate-950/50 animate-fade-in">
        {/* Error icon with pulse animation */}
        <div className="mx-auto mb-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping opacity-75"></div>
            <FiAlertTriangle className="text-red-500 text-5xl relative z-10" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-red-400 mb-3 flex items-center justify-center gap-2">
          Oops! Something went wrong
        </h1>

        <p className="text-slate-300 mb-8">
          We&lsquo;re sorry for the inconvenience. The home page encountered an unexpected error.
        </p>

        {/* Error details (collapsed by default) */}
        <details className="w-full mb-8 bg-slate-900/50 rounded-lg overflow-hidden border border-slate-700">
          <summary className="p-3 text-slate-400 cursor-pointer flex items-center">
            <span className="mr-2">Technical details</span>
          </summary>
          <div className="p-4 text-left text-sm border-t border-slate-700">
            <p className="font-mono text-red-300 break-words mb-2">{error.message}</p>
            {error.digest && <p className="text-slate-400 text-xs">Digest: {error.digest}</p>}
          </div>
        </details>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleRetry}
            disabled={isPending}
            className={`
              px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2
              ${
                isPending || isClicked
                  ? 'bg-indigo-600 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20'
              }
              transform ${!isPending && 'hover:-translate-y-0.5'}
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900
            `}
            aria-label="Retry loading home page"
          >
            {isPending || isClicked ? (
              <>
                <FiRefreshCw className="animate-spin" />
                <span>Retrying...</span>
              </>
            ) : (
              <>
                <FiRefreshCw />
                <span>Try Again</span>
              </>
            )}
          </button>

          <button
            onClick={() => (window.location.href = '/')}
            className="
              px-6 py-3 rounded-xl font-medium transition-all duration-300
              bg-slate-700 hover:bg-slate-600 flex items-center justify-center gap-2
              transform hover:-translate-y-0.5
              focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900
            "
          >
            <FiHome />
            <span>Home</span>
          </button>
        </div>
      </div>

      <div className="mt-12 text-slate-500 flex items-center">
        <FaRegSadTear className="mr-2" />
        <span>Still having issues? Contact support</span>
      </div>
    </div>
  );
}
