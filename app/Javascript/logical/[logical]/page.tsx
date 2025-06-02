import { JavaScriptLogicalData } from "@/main/data/javascriptData/JavaScriptLogicalData";
import React from "react";



export function generateStaticParams() {
  return JavaScriptLogicalData.map((post) => ({
    logical: post.link,
  }));
}

const LogicalSingle = ({ params }: { params: { logical: string } }) => {
  const singleData = JavaScriptLogicalData.find(
    (value) => String(value.link) === params.logical
  );

  if (!singleData) {
    return <div>No content available</div>;
  }

  // Check if content is a string
  if (typeof singleData.content === "string") {
    return (
      <div className="p-4">
        <pre className="bg-gray-900 text-white p-4 rounded">
          <code>{singleData.content}</code>
        </pre>
      </div>
    );
  }

  // Check if content is an array
  if (Array.isArray(singleData.content)) {
    return (
      <div>
        {singleData.content.map((item, index) => (
          <div key={index} className="mb-4">
            <h2 className="font-bold text-lg">{item.question}</h2>
            <pre className="bg-gray-900 text-white p-4 rounded">
              <code>{item.code}</code>
            </pre>
            <p className="mt-2">{item.answer}</p>
          </div>
        ))}
      </div>
    );
  }

  return <div>No content available</div>;
};

export default LogicalSingle;
