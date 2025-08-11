'use client';

import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prism-themes/themes/prism-holi-theme.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';

interface CodeHighlighterProps {
  code: string;
  language?: 'javascript' | 'typescript' | 'css' | 'markup';
}

export const ReusableCodeHighlighter: React.FC<CodeHighlighterProps> = ({ code, language = 'javascript' }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  return (
    <div className="w-full overflow-x-auto rounded-lg" style={{ fontSize: `13px` }}>
      <pre className={`line-numbers language-${language} leading-relaxed`} style={{ minWidth: 'fit-content' }}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};
