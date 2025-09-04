'use client';
import React, { useState } from 'react';
import { FiCopy, FiPlay } from 'react-icons/fi';
import Link from 'next/link';

const InteractiveEditor = () => {
  const [copied, setCopied] = useState(false);
const sampleCode = `// Function to greet a user
function greet(name) {
  return "Hello, " + name;
}

// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Function to find the maximum number
function findMax(a, b) {
  return a > b ? a : b;
}

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example usage
console.log(greet("World"));        // Hello, World
console.log(add(5, 3));             // 8
console.log(multiply(4, 6));        // 24
console.log(findMax(10, 20));       // 20
console.log(reverseString("Hello"));// olleH
console.log(isPrime(7));            // true
`;


  const codeLines = sampleCode.split('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl overflow-hidden border bg-gray-950/60 border-gray-700 relative">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-gray-900">
        {/* Left - traffic lights */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        {/* Right - Copy button */}
        <button onClick={handleCopy} className="flex items-center gap-1 px-3 py-1.5 rounded-sm bg-indigo-600 hover:bg-indigo-700 text-gray-300 text-sm transition">
          <FiCopy />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Code Area with Line Numbers */}
      <div className="p-4 font-mono text-sm overflow-y-auto text-gray-300 leading-relaxed" style={{ maxHeight: '450px' }}>
        <pre className="flex">
          <code className="w-full">
            {codeLines.map((line, i) => (
              <div key={i} className="flex hover:bg-white/10 rounded-sm transition px-1">
                <span className="w-10 text-right pr-3 text-gray-600 select-none">{i + 1}</span>
                <span className="whitespace-pre">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Bottom Bar */}
      <div className="absolute right-0 h-20 left-0 bottom-0  flex justify-between items-center px-4 py-2 text-xs border-t border-gray-700 bg-gray-900 text-gray-400">
        <span>Language: JavaScript</span>
        <Link href="/code-playground">
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1.5 rounded-sm hover:bg-indigo-700 transition text-sm shadow">
            <FiPlay /> Go to Playground
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InteractiveEditor;
