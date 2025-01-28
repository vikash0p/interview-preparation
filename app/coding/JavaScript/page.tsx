"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { JavascriptCodingData } from "@/utils/data/JavaScriptData/JavaScriptCodingData";

const CodingCard = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000); // Reset copied state after 2 seconds
  };

  return (
    <motion.div
      className="grid grid-cols-1 max-w-6xl m-auto gap-5 mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {JavascriptCodingData.map(({ id, question, code }) => (
        <motion.div
          key={id}
          className="relative bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 flex flex-col"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Copy Code Button */}

          {/* Question */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">{question}</h3>
          </div>

          {/* Code Block */}
          <pre className="bg-black bg-opacity-30 rounded-lg p-4 text-sm overflow-auto mb-4 relative">
            <code>{code}</code>

            <button
              onClick={() => handleCopy(id, code)}
              className="absolute top-4 right-4 bg-white text-indigo-600 px-3 py-2 text-sm font-medium rounded-md shadow-md hover:bg-blue-100 transition"
            >
              {copiedId === id ? "Copied!" : "Copy Code"}
            </button>
          </pre>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CodingCard;
