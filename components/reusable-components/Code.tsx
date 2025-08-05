'use client';
import React, { useState } from 'react';
import { FiCopy, FiCheck, FiChevronUp, FiChevronDown } from 'react-icons/fi';

const Code = ({ data, toggleOpen, open }: { data: string; open: boolean; toggleOpen: () => void }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(data).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="w-full mx-auto max-w-4xl group">
      <div className="bg-[#0d1117] rounded-md border   overflow-hidden custom-scrollbar">
        {/* Header with controls */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#181d28]">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleOpen}
              className="flex items-center gap-1.5 text-neutral-300 hover:text-white px-3 py-1.5 rounded-md transition-colors duration-200"
            >
              {open ? <FiChevronUp /> : <FiChevronDown />}
              <span className="text-sm">{open ? 'Collapse' : 'Expand'}</span>
            </button>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-neutral-300 hover:text-white px-3 py-1.5 rounded-md transition-colors duration-200"
              aria-label="Copy code"
            >
              {copied ? (
                <>
                  <FiCheck className="text-green-500" />
                  <span className="text-sm text-green-500">Copied!</span>
                </>
              ) : (
                <>
                  <FiCopy />
                  <span className="text-sm">Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code area */}
        <div
          className={`transition-[max-height,opacity,transform] duration-300 ease-&lsqb;cubic-bezier(0.4,0,0.2,1)&rsqb; overflow-hidden ${
            open ? 'max-h-[2000px] opacity-100 translate-y-0' : 'max-h-64 opacity-95 translate-y-1'
          }`}
          style={{ willChange: 'transform, opacity, max-height' }}
        >
          <pre className="p-4 text-sm text-neutral-200 font-mono leading-relaxed">
            <code className="text-wrap text-teal-500">{data}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Code;
