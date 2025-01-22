"use client";
import React, { useState } from "react";

const Code = ({ data }: { data: string }) => {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(data)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="w-full mx-auto h-screen overflow-scroll">
      <div className="relative">
        <div className="relative bg-neutral-800 p-2 rounded-sm border border-neutral-700 shadow-sm">
          <div className="flex items-center justify-between mb-4 sticky top-0 py-3 bg-neutral-800">
            {/* Traffic lights */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleVisibility}
                className="text-white text-sm bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded-sm focus:outline-none transition-all"
              >
                {isVisible ? "Hide" : "Show"}
              </button>
              <button
                onClick={handleCopy}
                className="text-white text-sm bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded-sm focus:outline-none transition-all"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          {/* Code snippet */}
          <pre
            className={`bg-neutral-900 text-neutral-400 p-4 rounded-lg overflow-auto text-sm transition-opacity duration-300 ${
              isVisible ? " text-opacity-100" : "text-opacity-10"
            }`}
          >
            <code>{data}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Code;
