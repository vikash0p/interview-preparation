import React from "react";

const Hero = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-between h-full py-12 lg:py-20"
      id="el-paoua4ka"
    >
      <div
        className="lg:w-1/2 space-y-8 animate__animated animate__fadeInLeft"
        id="el-fp5px8u4"
      >
        <h1
          className="text-4xl md:text-4xl lg:text-6xl font-bold leading-tight"
          id="el-48ywjv8b"
        >
          Ace Your Next
          <div
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"
            id="el-03py4ktf"
          >
            Interview
          </div>
        </h1>
        <p className="text-xl text-neutral-300" id="el-f3yu3au2">
          Prepare for technical interviews across multiple domains with our
          comprehensive question bank, mock interviews, and expert guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4" id="el-o9bj8vjr">
          <button
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition-all transform hover:scale-105"
            id="el-xjc7u1sl"
          >
            Start Practicing
          </button>
          <button
            className="px-8 py-4 border border-white hover:bg-neutral-800 rounded-lg font-semibold transition-all"
            id="el-vr3r19te"
          >
            View Questions
          </button>
        </div>
        <div
          className="flex items-center gap-4 text-sm text-neutral-400"
          id="el-xbl68zic"
        >
          <div className="flex items-center" id="el-cdcrnpdq">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="el-f5zz2da5"
            >
              <path
                d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                id="el-6rfhu6z7"
              ></path>
            </svg>
            <span id="el-c8e3cck4">10,000+ Users</span>
          </div>
          <div className="flex items-center" id="el-rbkc174a">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="el-wujbn8ch"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                id="el-9ldwcj2s"
              ></path>
            </svg>
            <span id="el-5o1rkh9u">4.9/5 Rating</span>
          </div>
        </div>
      </div>

      {/* Right Column  */}
      <div
        className="lg:w-1/2 mt-12 lg:mt-0 animate__animated animate__fadeInRight"
        id="el-tuutw40f"
      >
        <div className="relative" id="el-ys02amt4">
          <div
            className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl transform rotate-6 blur-lg opacity-30"
            id="el-1x952eof"
          ></div>
          <div
            className="relative bg-neutral-800 p-8 rounded-2xl border border-neutral-700"
            id="el-fmthelka"
          >
            <div
              className="flex items-center justify-between mb-6"
              id="el-j0oelc2j"
            >
              <div className="flex items-center gap-3" id="el-wze1n6jo">
                <div
                  className="w-3 h-3 rounded-full bg-red-500"
                  id="el-wj6x9umw"
                ></div>
                <div
                  className="w-3 h-3 rounded-full bg-yellow-500"
                  id="el-c75r7c8n"
                ></div>
                <div
                  className="w-3 h-3 rounded-full bg-green-500"
                  id="el-bpr1gnmo"
                ></div>
              </div>
              <div className="text-neutral-400 text-sm" id="el-r557o9qt">
                Interview Question
              </div>
            </div>
            {/* Interview Question Content */}
            <div className="text-neutral-300 text-base leading-relaxed mb-4">
              <p>
                What is the difference between <code>var</code>,{" "}
                <code>let</code>, and <code>const</code> in JavaScript?
              </p>
            </div>
            {/* JavaScript Code Snippet */}
            <pre className="bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>
                {`// Example of var, let, and const in JavaScript

// var: Function scoped, can be re-declared, and hoisted
var x = 10;
x = 20; // Re-assignable
console.log(x); // Output: 20

// let: Block scoped, cannot be re-declared, but re-assignable
let y = 15;
y = 25; // Re-assignable
console.log(y); // Output: 25

// const: Block scoped, cannot be re-declared or re-assigned
const z = 30;
// z = 40; // Error: Assignment to constant variable
console.log(z); // Output: 30`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
