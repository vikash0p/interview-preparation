'use client'
import { JavaScriptMockData } from "@/utils/data/javascriptData/JavaScriptMockData";
import { Link } from 'next-view-transitions'
import { useCallback, useState } from "react";
import { FaCheck, FaCopy, FaHome, FaSadTear } from "react-icons/fa";

const JavaScriptMockSingle = ({ params }: { params: { id: string } }) => {
  const [copied, setCopied] = useState(false);
  const singleData = JavaScriptMockData.find(
    (value) => String(value.link) === params.id
  );

  const handleCopy = useCallback(async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  if (!singleData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-6 text-center">
        <div className="max-w-md space-y-6">
          <div className="inline-block bg-gray-800 p-6 rounded-full">
            <FaSadTear className="text-6xl text-purple-500 animate-pulse" />
          </div>
          <h1 className="text-3xl font-bold text-gray-100">
            Content Not Found
          </h1>
          <p className="text-gray-400 text-lg">
            The requested question could not be found. Please check the URL or
            return to the homepage.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200"
            >
              <FaHome className="text-lg" />
              Home
            </Link>
            <Link
              href="/javascript"
              className="flex items-center gap-2 px-6 py-2 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white rounded-lg transition-colors duration-200"
            >
              JavaScript Questions
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
};

export default JavaScriptMockSingle;
