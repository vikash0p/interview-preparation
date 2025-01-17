"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SyntaxHighlighter = dynamic(() =>
  import("react-syntax-highlighter").then((mod) => mod.Prism)
);

const ReactSynHighlighter = ({ exampleCode }: { exampleCode: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(exampleCode)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="-z-50">
      <div className="w-full rounded-lg shadow-lg p-6 relative">
        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300"
        >
          {copied ? "Copied!" : "Copy"}
        </button>

        {/* React Syntax Highlighter Component */}
        {SyntaxHighlighter && (
          <SyntaxHighlighter
            language="jsx"
            style={oneDark}
            className="rounded-md"
          >
            {exampleCode}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  );
};

export default ReactSynHighlighter;
