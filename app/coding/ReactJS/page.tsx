import { CodingLinkData } from "@/utils/data/CodingLinkData";
import Link from "next/link";
import React from "react";

const CodingInterviewQuestion = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen py-20 px-5 flex flex-wrap gap-6 justify-center">
      {CodingLinkData.map((value) => (
        <Link
          className="flex flex-col items-center justify-center border border-gray-800 shadow-md rounded-lg p-6 w-64 text-center transition-transform transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-300"
          href={`/coding/ReactJS/${value.id}`}
          key={value.id}
        >
          <h2 className="text-2xl font-semibold text-gray-300 mb-2">
            {value.name}
          </h2>
          <p className="text-sm text-gray-400">
            Click to explore more about {value.name}.
          </p>
        </Link>
      ))}
    </div>
  );
};

export default CodingInterviewQuestion;
