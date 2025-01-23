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
      {/* Sidebar */}
      <div className="lg:w-1/4 h-screen fixed top-20 left-0 bg-zinc-900 py-5 overflow-y-scroll">
        <div className="flex flex-col gap-2">
          {ReactMockData.map((value) => {
            const isActive =
              pathname === `/React/${value.link}` ||
              selectedSegment === value.link.split("/")[1];

            return (
              <Link
                className={`ps-4 hover:underline ${
                  isActive ? "font-bold text-white underline" : "text-gray-400"
                }`}
                href={`/React/${value.link}`}
                key={value.id}
              >
                <span>{value.id}.</span>
                <span> {value.title}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:w-3/4 ml-auto p-5 lg:pl-8">{children}</div>
    </div>
  );
};

export default ReactInterviewQuestionLayout;
