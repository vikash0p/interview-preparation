"use client";
import React, { useState } from "react";

const Code = ({ data ,toggleOpen,open}: { data: string,open: boolean ,toggleOpen: () => void }) => {
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
    <div className="w-full mx-auto max-w-4xl h-full">
      <div className="relative h-full">
        <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-700 shadow-lg h-full">
          {/* Header with buttons */}
          <div className="flex items-center justify-between mb-4">
            {/* Traffic lights */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleOpen}
                className="text-white text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded focus:outline-none transition"
              >
                {open ? "Hide full Code" : "Show full Code"}
              </button>
              <button
                onClick={toggleVisibility}
                className="text-white text-sm bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded focus:outline-none transition"
              >
                {isVisible ? "Hide Code" : "Show Code"}
              </button>
              <button
                onClick={handleCopy}
                className={`text-white text-sm px-3 py-1 rounded focus:outline-none transition ${
                  copied
                    ? "bg-green-600 hover:bg-green-500"
                    : "bg-indigo-600 hover:bg-indigo-500"
                }`}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          {/* Code snippet */}
          <div
            className={`overflow-auto rounded-lg bg-neutral-800 p-4 transition-opacity duration-300 h-[92%] custom-scrollbar ${
              isVisible ? "opacity-100" : " opacity-5 pointer-events-none"
            }`}
          >
            <pre className="text-sm text-neutral-200">
              <code>{data}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Code;
