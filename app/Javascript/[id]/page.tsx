import { JavaScriptMockData } from "@/utils/data/JavaScriptData/JavaScriptMockData";
import React from "react";
import { FaSadTear } from "react-icons/fa";

const JavaScriptMockSingle = ({ params }: { params: { id: string } }) => {
  const singleData = JavaScriptMockData.find(
    (value) => String(value.link) === params.id
  );

  if (!singleData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-300">
        <FaSadTear className="text-6xl text-red-500 mb-4" />
        <h1 className="text-2xl font-semibold mb-2">
          Sorry, no data found for this topic.
        </h1>
        <p className="text-lg text-gray-400">
          Please check the topic ID or try searching for another question.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-900 px-6 py-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        {/* Question Section */}
        <h1 className="text-2xl  text-gray-100 mb-6">
          {singleData.question}
        </h1>

        {/* Answer Section */}
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          {singleData.answer}
        </p>

        {/* Code Block */}
        {singleData.code && (
          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 shadow-md overflow-auto mb-6">
            <pre className="whitespace-pre-wrap text-sm leading-loose">
              <code className="text-green-400">{singleData.code}</code>
            </pre>
          </div>
        )}


      </div>
    </div>
  );
};

export default JavaScriptMockSingle;
