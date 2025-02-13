"use client";

import { useCallback, useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";

// Define the type for the props
interface LinkInterface {
  link: string;
  question: string;
  answer: string;
  code?: string;
}

interface JavaScriptMockSingleClientProps {
  singleData: LinkInterface;
}

export default function JavaScriptMockSingleClient({
  singleData,
}: JavaScriptMockSingleClientProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8"></div>

        <article className="space-y-8">
          <header>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              {singleData.question}
            </h1>
          </header>

          <section className="space-y-6">
            <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed">
              <pre className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-wrap">
                <code> {singleData.answer}</code>
              </pre>
            </div>

            {singleData.code && (
              <div className="relative group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-mono text-gray-400">
                    JavaScript Example
                  </span>
                  <button
                    onClick={() => handleCopy(singleData.code!)}
                    className="flex items-center gap-2 px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {copied ? (
                      <>
                        <FaCheck className="text-green-400" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <FaCopy />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <pre className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 overflow-x-auto">
                  <code className="block font-mono text-sm leading-loose text-purple-300">
                    {singleData.code}
                  </code>
                </pre>
              </div>
            )}
          </section>
        </article>
      </div>
    </div>
  );
}
