"use client";

import { JavaScriptLogicalData } from "@/utils/data/JavaScriptData/JavaScriptLogicalData";
import React from "react";
import { JavaScriptLogicalInterface } from "../../../utils/types/types";
import Link from "next/link";
import { usePathname,  } from "next/navigation";

const JavaScriptLogicalNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-3">
      {JavaScriptLogicalData.map((question: JavaScriptLogicalInterface) => {
        const isActive = pathname.includes(question.link);

        return (
          <Link
            href={`/JavaScript/logical/${question.link}`}
            key={question.id}
            className={`${
              isActive ? "text-indigo-600 font-semibold" : "text-gray-300"
            } hover:text-indigo-500 transition-colors`}
          >
            {question.title}
          </Link>
        );
      })}
    </div>
  );
};

export default JavaScriptLogicalNavigation;
