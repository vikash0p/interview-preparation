"use client";
import { CodingLinkData } from "@/utils/data/ReactData/ReactPractical/ReactPracticalData";
import { Link } from 'next-view-transitions';
import React, { useState } from "react";
import { FiChevronRight, FiCode, FiStar } from "react-icons/fi";

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-emerald-500/15 text-emerald-400 ring-emerald-400/30";
    case "Intermediate":
      return "bg-amber-500/15 text-amber-400 ring-amber-400/30";
    case "Advanced":
      return "bg-rose-500/15 text-rose-400 ring-rose-400/30";
    default:
      return "bg-gray-500/15 text-gray-400 ring-gray-400/30";
  }
};

const CodingInterviewQuestion = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [codingData, setCodingData] = useState(CodingLinkData);

  const levels = [
    "All",
    ...Array.from(new Set(CodingLinkData.map((v) => v.level))),
  ];

  const filterCodingLinkData = (level: string) => {
    setSelectedFilter(level);
    setCodingData(
      level === "All"
        ? CodingLinkData
        : CodingLinkData.filter((v) => v.level === level)
    );
  };

  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            <FiCode className="inline mr-3 text-blue-400" />
            React Coding Challenges
          </h1>
          <p className="text-gray-400 text-lg">
            Level up your React skills with hands-on exercises
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => filterCodingLinkData(level)}
              className={`relative px-5 py-2.5 rounded-full font-medium transition-all
        ${
          selectedFilter === level
            ? `${getLevelColor(
                level
              )} ring-2 translate-y-0 shadow-[0_2px_0px_rgba(0,0,0,0.2)]`
            : `bg-gray-800/50 text-gray-300 shadow-[0_4px_0px_rgba(0,0,0,0.3)] hover:shadow-[0_3px_0px_rgba(0,0,0,0.3)] hover:translate-y-[1px]
               border-b-2 ${
                 level === "Beginner"
                   ? "border-emerald-600/50"
                   : level === "Intermediate"
                   ? "border-amber-600/50"
                   : level === "Advanced"
                   ? "border-rose-600/50"
                   : "border-gray-600/50"
               }`
        }
        ${level === "All" && "px-8"}
        active:translate-y-[2px] active:shadow-[0_1px_0px_rgba(0,0,0,0.3)]`}
            >
              {/* 3D effect base */}
              <div className="absolute inset-0 rounded-full opacity-20 pointer-events-none" />

              <span className="relative flex items-center justify-center gap-2">
                {level}
                {level !== "All" && (
                  <span
                    className={`ml-2 px-2 py-1 rounded-full text-xs ${
                      selectedFilter === level
                        ? "bg-white/10 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]"
                        : "bg-gray-700/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
                    }`}
                  >
                    {CodingLinkData.filter((v) => v.level === level).length}
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codingData.map((value) => (
            <Link
              href={`/coding/ReactJS/${value.url}`}
              key={value.id}
              className="group relative bg-gray-800/50 rounded-xl p-6 transition-all hover:bg-gray-800/70 hover:-translate-y-1.5 shadow-xl hover:shadow-gray-900/50"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.name}
                  </h3>
                  <span
                    className={`${getLevelColor(
                      value.level
                    )} px-3 py-1 rounded-full text-sm`}
                  >
                    {value.level}
                  </span>
                </div>
                <FiChevronRight className="text-gray-400 text-xl group-hover:text-blue-400 transition-colors" />
              </div>

              <div className="mt-4 flex items-center text-gray-400 text-sm">
                <FiStar className="mr-1.5" />
                <span>{value.level || "Practical"} Exercise</span>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute -inset-px bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl blur-sm" />
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {codingData.length === 0 && (
          <div className="text-center py-24 text-gray-400">
            No challenges found for this level
          </div>
        )}
      </div>
    </section>
  );
};

export default CodingInterviewQuestion;
