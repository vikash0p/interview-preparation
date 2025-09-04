'use client';
import { useTransition, useState } from 'react';
import { FiRefreshCw, FiHome } from 'react-icons/fi';
import { FaExclamationTriangle, FaRegSadTear } from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function HomePageError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const [isPending, startTransition] = useTransition();
  const [isClicked, setIsClicked] = useState(false);

  const handleRetry = () => {
    setIsClicked(true);
    startTransition(() => {
      reset();
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-lg w-full text-center">
        {/* Error icon with pulse background */}
        <div className="relative flex justify-center mb-8">
          <FaExclamationTriangle className="text-7xl text-red-400 relative z-10 animate-pulse" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-red-400 mb-4">Oops! Something went wrong</h1>

        <p className="text-slate-300 leading-relaxed mb-10">We&apos;re sorry for the inconvenience. The home page encountered an unexpected error.</p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleRetry}
            disabled={isPending}
            className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all
              ${isPending || isClicked ? 'bg-indigo-700 opacity-70 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30'}
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950
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
            className="px-6 py-3 rounded-lg font-medium bg-slate-700 hover:bg-slate-600 flex items-center justify-center gap-2
              hover:shadow-md hover:shadow-slate-700/30 transition-all
              focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950
            "
            aria-label="Go back to Home"
          >
            <FiHome />
            <span>Home</span>
          </button>
        </div>
      </div>

      {/* Support message */}
      <div className="mt-12 text-slate-400 text-sm flex items-center gap-2">
        <FaRegSadTear />
        <span>Still having issues? Contact support</span>
      </div>
    </div>
  );
}
