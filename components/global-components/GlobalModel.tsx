'use client';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineCopy } from 'react-icons/ai';
import { FiCheckCircle } from 'react-icons/fi';

interface ModelOneProps {
  open: boolean;
  toggleOpen: () => void;
  data: string;
  heading: string;
}

const ModelOne: React.FC<ModelOneProps> = ({ open, toggleOpen, data, heading }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(data);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        toggleOpen();
      }
    };

    if (open) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, toggleOpen]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ${
        open ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent pointer-events-none'
      }`}
    >
      {/* Modal Container */}
      <div
        className={`relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 max-w-6xl w-full mx-4 rounded-md shadow-2xl transform transition-all duration-300 ${
          open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700 bg-gray-900/50 rounded-t-xl">
          <div>
            <h2 className="text-xl font-bold text-white">{heading}</h2>
            <p className="text-sm text-gray-400 mt-1">Code Snippet</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={copyToClipboard}
              className="p-2 hover:bg-gray-700/30 rounded-md group relative"
              aria-label="Copy code"
            >
              <AiOutlineCopy className="text-xl text-gray-300 hover:text-white transition-colors" />
              {copied && (
                <span className="absolute -top-8 right-0 bg-gray-700 px-2 py-1 rounded-md text-sm flex items-center gap-1">
                  <FiCheckCircle className="text-emerald-400" />
                  Copied!
                </span>
              )}
            </button>
            <button onClick={toggleOpen} className="p-2 hover:bg-gray-700/30 rounded-md" aria-label="Close modal">
              <AiOutlineClose className="text-xl text-gray-300 hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-auto h-[80vh] bg-gray-950/30 custom-scrollbar">
          <pre className="text-sm  ps-6">
            <code className="text-emerald-400">{data}</code>
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-gray-700 bg-gray-900/50 rounded-b-xl">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Press ESC to close</span>
            <div className="flex items-center gap-4 text-gray-400">
              <span>{data.split('\n').length} lines</span>
              <span>{data.length} characters</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelOne;
