'use client';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import Editor from '@monaco-editor/react';
import React, { useState } from 'react';

const InteractiveEditor = () => {
  const [code, setCode] = useState(`// Example: var, let, const
var x = 10;
x = 20;
console.log("x:", x);

let y = 15;
y = 25;
console.log("y:", y);

const z = 30;
console.log("z:", z);`);

  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      const capturedLogs: string[] = [];
      const customConsole = {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        log: (...args: any[]) => capturedLogs.push(args.join(' ')),
      };

      const runner = new Function('console', code);
      runner(customConsole);
      setOutput(capturedLogs.join('\n'));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setOutput(err.toString());
    }
  };

  const resetCode = () => {
    setCode('');
    setOutput('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#181d28] rounded-2xl p-6 shadow-2xl"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
        </div>
        <span className="text-sm text-gray-400">JavaScript</span>
      </div>

      {/* Monaco Editor */}
      <div className="h-96 border rounded-sm overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          value={code}
          theme="vs-dark"
          onChange={value => setCode(value || '')}
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            automaticLayout: true,
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            wrappingIndent: 'indent',
            lineNumbers: 'on',
          }}
        />
      </div>

      {/* Console Output */}
      <div className="mt-6 p-4 bg-gray-900 rounded-sm">
        <div className="text-sm text-gray-400 mb-2">Console Output:</div>
        <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
          {output || '/* Output will appear here */'}
        </pre>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-4 space-x-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={resetCode}
          className="px-4 py-2 bg-gray-700 text-white rounded-sm hover:bg-gray-600 transition-colors"
        >
          Reset
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={runCode}
          className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-sm hover:from-indigo-700 hover:to-purple-700 transition-colors flex items-center"
        >
          Run Code
          <FaChevronRight className="ml-2 w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default InteractiveEditor;
