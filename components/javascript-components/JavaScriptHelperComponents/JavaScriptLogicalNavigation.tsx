"use client";


import React from "react";
import { JavaScriptLogicalInterface } from "../../../main/types/types";

import { Link } from 'next-view-transitions';
import { usePathname,  } from "next/navigation";
import { JavaScriptLogicalData } from "@/main/data/javascriptData/JavaScriptLogicalData";
const JavaScriptLogicalNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-3">
      {JavaScriptLogicalData.map((question: JavaScriptLogicalInterface) => {
        const isActive = pathname.includes(question.link);

        return (
          <Link
            href={`/Javascript/logical/${question.link}`}
            key={question.id}
            className={`${
              isActive ? "text-indigo-600 font-semibold" : "text-gray-300"
            } hover:text-indigo-500 transition-colors`}
          >
           {question.id}.  {question.title}
          </Link>
        );
      })}
    </div>
  );
};

export default JavaScriptLogicalNavigation;
