import ReactLinkData from "@/utils/data/ReactLinkData";
import React from "react";

const ReactInterviewQuestionLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full min-h-screen lg:flex lg:pl-1/4">
      {/* Sidebar */}
      <div className="lg:w-1/4 h-screen fixed top-20 left-0 bg-zinc-900 py-5  overflow-y-scroll">
        <ReactLinkData />
      </div>

      {/* Main Content */}
      <div className="lg:w-3/4 ml-auto p-5 lg:pl-8">{children}</div>
    </div>
  );
};

export default ReactInterviewQuestionLayout;
