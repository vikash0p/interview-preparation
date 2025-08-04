'use client';
import React, { useState } from 'react';
import { FaCopy, FaLightbulb } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { toast } from 'react-toastify';
import { ISlugDataProps } from '../../../main/types/practical-interview.types';

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  toast.success('Copied to clipboard!', {
    position: 'bottom-right',
    autoClose: 2000,
  });
};

const SlugSolution: React.FC<ISlugDataProps> = ({ data }) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="space-y-8">
      <div className="p-5 bg-indigo-500/10 rounded-sm border border-indigo-500/30">
        <div className="flex items-start gap-4">
          <FaLightbulb className="text-indigo-400 text-xl mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-indigo-400 mb-2">Before You Look</h3>
            <p className="text-gray-300 leading-relaxed">
              Try solving the problem yourself first! You will learn much more by attempting it before viewing the
              solution.
            </p>
          </div>
        </div>
      </div>

      {!showSolution ? (
        <div className="text-center py-12">
          <button
            onClick={() => setShowSolution(true)}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-sm font-medium transition-colors shadow-lg hover:shadow-indigo-500/20"
          >
            Reveal Solution
          </button>
          <p className="text-gray-400 mt-4 text-sm">This will show the complete solution code</p>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">Solution Code</h2>
            <button
              onClick={() => copyToClipboard(data.solutionCode)}
              className="flex items-center gap-2 px-3 py-1.5 text-xs bg-gray-800 hover:bg-gray-700 rounded-sm transition-colors"
            >
              <FaCopy /> Copy
            </button>
          </div>
          <div className="rounded-sm overflow-hidden border border-gray-800">
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
              showLineNumbers
              customStyle={{
                margin: 0,
                borderRadius: '0.75rem',
                background: '#1e1e2d',
                fontSize: '14px',
              }}
            >
              {data.solutionCode}
            </SyntaxHighlighter>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlugSolution;
