"use client";

import Accordion from "@/components/GlobalComponents/Accordion";
import React from "react";

const ReactInterviewQuestionLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  return (
    <div className="w-full min-h-screen lg:flex lg:pl-1/4">
      {/* Sidebar */}
      <div className="lg:w-1/4 h-screen fixed top-24 left-0  bg-zinc-900  overflow-y-scroll  custom-scrollbar ">
        <Accordion />
      </div>

      {/* Main Content */}
      <div className="lg:w-3/4 ml-auto p-5 lg:pl-8">{children}</div>
    </div>
  );
};

export default ReactInterviewQuestionLayout;
