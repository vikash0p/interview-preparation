"use client";
import React from "react";
import { ReactInterViewQuestionLink } from "@/components/ReactInterview/ReactInterViewQuestionLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ReactLinkData = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2">
      {ReactInterViewQuestionLink.map((value) => {
        // Check if the current link is active by comparing segments

        return (
          <Link
            className={`ps-4 hover:underline ${
              pathname === value.link ? "font-bold text-white underline" : ""}`}
            href={value.link}
            key={value.id}
          >
            <span> {value.id}.</span>
            <span> {value.title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default ReactLinkData;
