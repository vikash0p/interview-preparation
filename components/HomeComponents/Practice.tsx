import React from "react";

const Practice = () => {
  return (
    <section id="practiceArea" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="el-dmjkujkz">
        <div className="text-center mb-16" id="el-866dcu50">
          <h2
            className="text-4xl font-bold text-gray-200 mb-4 animate__animated animate__fadeIn"
            id="el-54t8fz9l"
          >
            Practice Area
          </h2>
          <p
            className="text-lg text-neutral-400 animate__animated animate__fadeIn"
            id="el-h1sja1qn"
          >
            Interactive coding environment and problem-solving platform
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="el-ct3ilrta">
          {/* Interactive Code Editor */}
          <div
            className="bg-neutral-900 rounded-xl p-6 animate__animated animate__fadeInLeft"
            id="el-f2w10ile"
          >
            <div
              className="flex items-center justify-between mb-4"
              id="el-7unuzdag"
            >
              <div className="flex space-x-2" id="el-yvw4avn2">
                <div
                  className="w-3 h-3 rounded-full bg-red-500"
                  id="el-6p2ay16w"
                />
                <div
                  className="w-3 h-3 rounded-full bg-yellow-500"
                  id="el-42so4vhp"
                />
                <div
                  className="w-3 h-3 rounded-full bg-green-500"
                  id="el-r8z741un"
                />
              </div>
              <select
                className="bg-neutral-800 text-white px-3 py-1 rounded-md text-sm"
                id="el-prahqbj9"
              >
                <option id="el-treu8qos">JavaScript</option>
                <option id="el-ue67bvvb">Python</option>
                <option id="el-bshcjnza">Java</option>
                <option id="el-sibhnfiq">C++</option>
              </select>
            </div>
            <div
              className="font-mono bg-neutral-800 p-4 rounded-lg text-white text-sm h-96 overflow-y-auto"
              id="el-x28iai0l"
            >
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
            <div className="flex justify-end mt-4 space-x-3" id="el-witi5182">
              <button
                className="px-4 py-2 bg-neutral-800 text-white rounded-md hover:bg-neutral-700 transition-colors"
                id="el-9zr5wkvh"
              >
                Reset
              </button>
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                id="el-nnbuf2as"
              >
                Run Code
              </button>
            </div>
          </div>
          {/* Practice Features */}
          <div
            className="space-y-6 animate__animated animate__fadeInRight"
            id="el-golnu48e"
          >
            <div
              className="border border-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow"
              id="el-xsp1bc4u"
            >
              <h3
                className="text-xl font-semibold mb-4 flex items-center"
                id="el-0t2pehp7"
              >
                <span
                  className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3"
                  id="el-0xifz51x"
                >
                  <svg
                    className="w-5 h-5 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    id="el-dxikyef8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      id="el-mj10ggpd"
                    />
                  </svg>
                </span>
                Real-time Compilation
              </h3>
              <p className="text-neutral-400" id="el-tivg8whi">
                Write and execute code in real-time with support for multiple
                programming languages.
              </p>
            </div>
            <div
              className="border border-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow"
              id="el-dk4jis42"
            >
              <h3
                className="text-xl font-semibold mb-4 flex items-center"
                id="el-1bgab1pi"
              >
                <span
                  className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3"
                  id="el-pkf9ze2l"
                >
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    id="el-h9j3nwe2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      id="el-ltoyxpo7"
                    />
                  </svg>
                </span>
                Test Cases
              </h3>
              <p className="text-neutral-400" id="el-7vu49fx7">
                Run your solution against multiple test cases to ensure
                correctness.
              </p>
            </div>
            <div
              className="border border-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow"
              id="el-ka185g9p"
            >
              <h3
                className="text-xl font-semibold mb-4 flex items-center"
                id="el-s2lnifrf"
              >
                <span
                  className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3"
                  id="el-c0xp8iu1"
                >
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    id="el-z4lldvwy"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                      id="el-d8o9cutg"
                    />
                  </svg>
                </span>
                Performance Analysis
              </h3>
              <p className="text-neutral-400" id="el-bp7c2rie">
                Get detailed insights about your code performance, including
                run-times time and space complexity.
              </p>
            </div>
            <button
              className="w-full mt-6 bg-neutral-900 text-white py-3 rounded-xl hover:bg-neutral-800 transition-colors"
              id="el-yf6uydyq"
            >
              View More Practice Questions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Practice;
