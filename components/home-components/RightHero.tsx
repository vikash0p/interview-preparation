'use client';
import React, { useState } from 'react';
import { FaCheck, FaChevronLeft, FaChevronRight, FaRegCopy } from '@/main/icons/react-icons';
import { HeroRightData } from '@/main/data/home/HeroRightData';

const RightHero = () => {
  const [copied, setCopied] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNavigation = (direction: 'prev' | 'next') => {
    setCurrentQuestion(prev =>
      direction === 'next'
        ? (prev + 1) % HeroRightData.length
        : (prev - 1 + HeroRightData.length) % HeroRightData.length
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentQuestion(index);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(HeroRightData[currentQuestion].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="basis-1/2 ">
      <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/70 backdrop-blur-md border border-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            {['red', 'yellow', 'green'].map(color => (
              <div key={color} className={`w-3 h-3 rounded-full bg-${color}-500`} />
            ))}
          </div>
          <div className=" text-sm">
            <span>
              Question {currentQuestion + 1}/{HeroRightData.length}
            </span>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          aria-label="Previous question"
          onClick={() => handleNavigation('prev')}
          className="absolute -left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-indigo-800 hover:bg-indigo-700 transition-colors z-10"
        >
          <FaChevronLeft className="text-white" />
        </button>
        <button
          type="button"
          aria-label="Next question"
          onClick={() => handleNavigation('next')}
          className="absolute -right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-indigo-800 hover:bg-indigo-700 transition-colors z-10"
        >
          <FaChevronRight className="text-white" />
        </button>

        {/* Main Content */}
        <h3 className=" text-lg sm:text-xl font-semibold leading-relaxed mb-4">
          {HeroRightData[currentQuestion].question}
        </h3>

        <div className="relative">
          <pre className="bg-gray-950 h-72  p-4 rounded-sm text-sm text-wrap overflow-x-auto">
            <code>{HeroRightData[currentQuestion].code}</code>
          </pre>
          <div className="absolute top-2 right-2 group">
            <button
              type="button"
              aria-label="Copy code to clipboard"
              onClick={handleCopy}
              className="p-2 rounded-sm bg-indigo-800 hover:bg-indigo-700 transition-colors"
            >
              {copied ? <FaCheck className="text-green-400" /> : <FaRegCopy className="text-white" />}
            </button>
            <span className="absolute top-full mt-1 text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              {copied ? 'Copied!' : 'Copy'}
            </span>
          </div>
        </div>

        <div className="mt-4 p-3 bg-black/70 rounded-sm text-sm  min-h-16 border border-indigo-400">
          {HeroRightData[currentQuestion].explanation}
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-3 mt-6">
          {(() => {
            const total = HeroRightData.length;
            let indices = [];
            let start = 0;

            if (total <= 5) {
              indices = Array.from({ length: total }, (_, i) => i);
            } else {
              start = Math.max(0, Math.min(currentQuestion - 2, total - 5));
              indices = Array.from({ length: 5 }, (_, i) => start + i);
            }

            return indices.map(index => (
              <button
                type="button"
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to question ${index + 1}`}
                className={`w-4 h-4 rounded-full transition-all duration-200 ${
                  currentQuestion === index
                    ? 'bg-indigo-500 scale-125 shadow-md'
                    : 'bg-neutral-600 hover:bg-neutral-400'
                }`}
              />
            ));
          })()}
        </div>
      </div>
    </section>
  );
};

export default RightHero;
