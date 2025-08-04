'use client';

import { useEffect } from 'react';
import { RiErrorWarningFill, RiRefreshLine, RiHomeLine } from 'react-icons/ri';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const errorCode = error.digest || 'ERR_GLOBAL_500';

  useEffect(() => {
    // Log error to analytics service
    console.error('Global Error:', error);
  }, [error]);

  const handleReset = () => {
    reset();
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <html lang="en" className="h-full">
      <head>
        <title>Oops! Something went wrong</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="We encountered an unexpected issue. Please try again or contact support." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          body {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #f8fafc;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            min-height: 100vh;
            margin: 0;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
          }
          .error-container {
            max-width: 90%;
            width: 100%;
            padding: 2rem;
            border-radius: 1rem;
            background: rgba(15, 23, 42, 0.8);
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
            animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .error-icon {
            font-size: 5rem;
            color: #f87171;
            margin-bottom: 1.5rem;
            animation: pulse 2s infinite;
          }
          h1 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #f8fafc;
            margin-bottom: 1rem;
            background: linear-gradient(90deg, #f87171 0%, #fb923c 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .error-message {
            font-size: 1.2rem;
            color: #cbd5e1;
            max-width: 600px;
            margin: 0 auto 1.5rem;
          }
          .error-code {
            display: inline-block;
            background: rgba(248, 113, 113, 0.1);
            color: #f87171;
            font-family: 'Fira Code', monospace;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            margin: 0.5rem 0;
            border: 1px solid rgba(248, 113, 113, 0.3);
          }
          .action-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 2rem;
            flex-wrap: wrap;
          }
          button {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.8rem 1.8rem;
            border-radius: 0.75rem;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.2s ease;
            border: none;
          }
          .primary-btn {
            background: linear-gradient(90deg, #5047e5 0%, #7c3aed 100%);
            color: white;
            box-shadow: 0 4px 15px rgba(80, 71, 229, 0.3);
          }
          .primary-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(80, 71, 229, 0.4);
          }
          .secondary-btn {
            background: rgba(30, 41, 59, 0.7);
            color: #cbd5e1;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          .secondary-btn:hover {
            background: rgba(30, 41, 59, 1);
            transform: translateY(-2px);
          }
          .support-link {
            margin-top: 2rem;
            color: #94a3b8;
            font-size: 0.9rem;
          }
          .support-link a {
            color: #60a5fa;
            text-decoration: none;
          }
          .support-link a:hover {
            text-decoration: underline;
          }
          @media (max-width: 640px) {
            .error-container {
              padding: 1.5rem;
            }
            h1 {
              font-size: 2rem;
            }
            .error-icon {
              font-size: 3.5rem;
            }
            .action-buttons {
              flex-direction: column;
              align-items: center;
            }
            button {
              width: 100%;
              justify-content: center;
            }
          }
        `}</style>
      </head>
      <body>
        <div className="error-container">
          <RiErrorWarningFill className="error-icon" />
          <h1>Oops! Something went wrong</h1>

          <p className="error-message">
            We encountered an unexpected issue while loading the application. This might be temporary, so please try
            again.
          </p>

          <p>
            Error Code: <span className="error-code">{errorCode}</span>
          </p>

          <div className="action-buttons">
            <button className="primary-btn" onClick={handleReset} aria-label="Retry loading the application">
              <RiRefreshLine /> Try Again
            </button>

            <button className="secondary-btn" onClick={handleGoHome} aria-label="Go to homepage">
              <RiHomeLine /> Go to Homepage
            </button>
          </div>

          <p className="support-link">
            Need help? <a href="mailto:support@example.com">Contact our support team</a>
          </p>
        </div>
      </body>
    </html>
  );
}
