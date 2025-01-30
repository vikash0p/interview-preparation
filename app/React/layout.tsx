"use client";

import { ReactMockData } from "@/utils/data/ReactData/ReactMockData";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import React from "react";

const ReactInterviewQuestionLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const selectedSegment = useSelectedLayoutSegment();

  return (
    <div className="w-full min-h-screen lg:flex lg:pl-1/4">
      {/* Enhanced Sidebar */}
      <div className="lg:w-1/4 h-screen fixed top-20 left-0 bg-gradient-to-b from-gray-900 to-gray-900 py-6 overflow-y-auto custom-scrollbar border-r border-zinc-700">
        <div className="flex flex-col gap-3 px-2">
          <h2 className="text-xl font-bold text-white mb-4 px-4">
            React Interview Questions
          </h2>
          {ReactMockData.map((value) => {
            const isActive =
              pathname === `/React/${value.link}` ||
              selectedSegment === value.link.split("/")[1];

            return (
              <Link
                className={`group px-2 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg--600 text-white shadow-lg"
                    : "hover:bg-zinc-800 text-zinc-300"
                }`}
                href={`/React/${value.link}`}
                key={value.id}
                aria-current={isActive ? "page" : undefined}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`font-medium ${
                      isActive ? "text-white" : "text-zinc-400"
                    }`}
                  >
                    {value.id}.
                  </span>
                  <span className="text-sm">{value.title}</span>
                  {isActive && (
                    <span className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-xl" />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Enhanced Main Content */}
      <div className="lg:w-3/4 ml-auto p-6 lg:pl-8 bg-gradient-to-b from-gray-900 to-gray-900 min-h-screen">
        <div className="prose prose-invert">{children}</div>
      </div>
    </div>
  );
};

export default ReactInterviewQuestionLayout;
