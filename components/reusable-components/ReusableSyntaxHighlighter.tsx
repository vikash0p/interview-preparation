'use client';

import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const ReusableSyntaxHighlighter: React.FC<{ codeString: string }> = ({ codeString }) => {
  return (
    <div className="w-full overflow-x-auto rounded-md shadow-md">
      <SyntaxHighlighter
        language="jsx"
        showLineNumbers
        // wrapLines
        // wrapLongLines
        customStyle={{
          fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)', // Responsive font size
          fontFamily: 'Menlo, Monaco, "Courier New", monospace',
          // background: 'transparent', // Let theme style handle it
          margin: 0,
          padding: '1rem',
          minWidth: '100%', // Prevent squishing
        }}
        style={irBlack}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};
