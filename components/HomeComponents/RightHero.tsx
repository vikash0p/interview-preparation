"use client";
import React, { useState, useEffect, useRef,useCallback } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  FaRegCopy,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
const questions = [
  {
    question:
      "What is the difference between var, let, and const in JavaScript?",
    code: `// Example of var, let, and const
var x = 10;
x = 20;

let y = 15;
y = 25;

const z = 30;
// z = 40; // Error`,
    explanation:
      "var has function scope, let/const have block scope. const can't be reassigned.",
  },
  {
    question: "Explain the Virtual DOM in React?",
    code: `// Virtual DOM example
function updateComponent() {
  // Diffing algorithm
  reconcileChanges(prevVDOM, newVDOM);
}`,
    explanation:
      "Virtual DOM is a lightweight copy of the real DOM for efficient updates.",
  },
  {
    question: "What are React hooks?",
    code: `// Example of useState hook
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}`,
    explanation:
      "Hooks are functions that let you use state and lifecycle features in function components.",
  },
  {
    question: "What is closure in JavaScript?",
    code: `// Example of closure
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(outerVariable + " " + innerVariable);
  };
}
const newFunc = outerFunction("Hello");
newFunc("World");`,
    explanation:
      "A closure is a function that remembers variables from its outer scope even after the outer function has executed.",
  },
  {
    question: "How does event delegation work in JavaScript?",
    code: `// Event Delegation Example
document.getElementById("parent").addEventListener("click", function(event) {
  if (event.target && event.target.matches("button")) {
    console.log("Button clicked", event.target);
  }
});`,
    explanation:
      "Event delegation allows handling events at a higher level in the DOM to reduce memory usage and improve performance.",
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    code: `// Example of == vs ===
console.log(5 == "5"); // true (loose equality)
console.log(5 === "5"); // false (strict equality)`,
    explanation:
      "== compares values with type coercion, while === compares both value and type strictly.",
  },
  {
    question: "What is the purpose of useEffect in React?",
    code: `// useEffect example
import { useEffect } from 'react';
function Example() {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);
  return <div>Hello</div>;
}`,
    explanation:
      "useEffect runs side effects in function components, such as fetching data or updating the DOM.",
  },
  {
    question: "Explain async and await in JavaScript?",
    code: `// Async/Await example
async function fetchData() {
  const response = await fetch('https://api.example.com');
  const data = await response.json();
  console.log(data);
}
fetchData();`,
    explanation:
      "async/await is syntax for handling asynchronous operations in a more readable way than Promises.",
  },
  {
    question: "What are the different HTTP request methods?",
    code: `// Example of a GET request
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));`,
    explanation:
      "Common HTTP methods include GET, POST, PUT, DELETE, PATCH, used for CRUD operations.",
  },
  {
    question: "What is the difference between state and props in React?",
    code: `// Example of state vs props
function ChildComponent({ message }) {
  return <p>{message}</p>;
}

function ParentComponent() {
  const [message, setMessage] = useState("Hello");
  return <ChildComponent message={message} />;
}`,
    explanation:
      "State is managed inside a component, while props are passed from a parent to a child component.",
  },
];

const RightHero = () => {
  const [copied, setCopied] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const controls = useAnimation();
  const intervalRef = useRef<NodeJS.Timeout>();

  const startInterval = useCallback(() => {
    intervalRef.current = setInterval(async () => {
      await controls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.3 },
      });
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 },
      });
    }, 5000);
  }, [controls]);

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [startInterval]);

  const handleNavigation = (direction: "prev" | "next") => {
    clearInterval(intervalRef.current);
    setCurrentQuestion((prev) =>
      direction === "next"
        ? (prev + 1) % questions.length
        : (prev - 1 + questions.length) % questions.length
    );
    startInterval();
  };

  const handleDotClick = (index: number) => {
    clearInterval(intervalRef.current);
    setCurrentQuestion(index);
    startInterval();
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(questions[currentQuestion].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="lg:w-1/2 mt-12 lg:mt-0 relative"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl transform rotate-6 blur-xl opacity-30"
        animate={{
          rotate: [6, 3, 6],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="relative bg-gradient-to-r  from-gray-900 to-gray-800 p-8 rounded-2xl border border-neutral-700 shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {["red", "yellow", "green"].map((color) => (
              <motion.div
                key={color}
                className={`w-3 h-3 rounded-full bg-${color}-500`}
                animate={{ scale: [1, 0.8, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 0.5,
                }}
              />
            ))}
          </div>
          <div className="text-neutral-400 text-sm flex items-center gap-2">
            <motion.span
              key={currentQuestion}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Question {currentQuestion + 1}/{questions.length}
            </motion.span>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => handleNavigation("prev")}
            className="absolute -left-14 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors z-10"
          >
            <FaChevronLeft className="text-neutral-400" />
          </button>
          <button
            onClick={() => handleNavigation("next")}
            className="absolute -right-14 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors z-10"
          >
            <FaChevronRight className="text-neutral-400" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-neutral-300 text-base leading-relaxed mb-4">
                {questions[currentQuestion].question}
              </p>

              <div className="relative ">
                <pre className="bg-gray-950 min-h-60 text-neutral-100 p-4 rounded-lg text-sm text-wrap ">
                  <code>{questions[currentQuestion].code}</code>
                </pre>
                <button
                  onClick={handleCopy}
                  className="absolute top-2 right-2 p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
                >
                  {copied ? (
                    <FaCheck className="text-green-400" />
                  ) : (
                    <FaRegCopy className="text-neutral-400" />
                  )}
                </button>
              </div>

              <motion.div
                className="mt-4 p-3 bg-neutral-800 rounded-lg text-sm text-neutral-300 min-h-16 border border-yellow-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {questions[currentQuestion].explanation}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {(() => {
            const total = questions.length;
            let indices = [];
            let start = 0;

            if (total <= 5) {
              indices = Array.from({ length: total }, (_, i) => i);
            } else {
              start = Math.max(0, Math.min(currentQuestion - 2, total - 5));
              indices = Array.from({ length: 5 }, (_, i) => start + i);
            }

            return indices.map((index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentQuestion === index
                    ? "bg-indigo-500 scale-125"
                    : "bg-neutral-600 hover:bg-neutral-400"
                }`}
              />
            ));
          })()}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RightHero;
