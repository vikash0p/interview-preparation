'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";

type Strategy = {
  title: string;
  definition: string;
  useCases: string[];
  advantages: string[];
  disadvantages: string[];
};

type Strategies = {
  [key: string]: Strategy;
};

type ComparisonRow = {
  feature: string;
  csr: string;
  ssr: string;
  ssg: string;
  isr: string;
};

const RenderingStrategies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("csr");

  const strategies: Strategies = {
    csr: {
      title: "Client-Side Rendering (CSR)",
      definition:
        "CSR renders content entirely on the browser. The server sends a minimal HTML file with JavaScript, which renders the rest dynamically.",
      useCases: [
        "Highly interactive apps",
        "Single-page applications (SPAs)",
        "Projects where SEO is not critical",
      ],
      advantages: [
        "Reduced server load",
        "Dynamic updates without page reloads",
      ],
      disadvantages: [
        "Slower initial page load",
        "Poor SEO for non-rendered content",
      ],
    },
    ssr: {
      title: "Server-Side Rendering (SSR)",
      definition:
        "SSR generates HTML on the server for each request, delivering a fully-rendered page to the client.",
      useCases: [
        "SEO-critical applications",
        "Dynamic content that changes per request",
      ],
      advantages: [
        "Faster first paint",
        "Better SEO since content is fully rendered",
      ],
      disadvantages: [
        "Increased server load",
        "Slower page transitions compared to CSR",
      ],
    },
    ssg: {
      title: "Static Site Generation (SSG)",
      definition:
        "SSG pre-renders pages at build time, creating static HTML files that are served to the client.",
      useCases: [
        "Content that changes infrequently",
        "High-performance marketing pages",
        "Blogs and documentation",
      ],
      advantages: [
        "Extremely fast page loads",
        "Reduced server costs",
        "Great SEO",
      ],
      disadvantages: ["Rebuild required to reflect content changes"],
    },
    isr: {
      title: "Incremental Static Regeneration (ISR)",
      definition:
        "ISR combines SSG with periodic revalidation to update static content without requiring a full rebuild.",
      useCases: [
        "Dynamic content with high-performance needs",
        "E-commerce platforms",
        "News sites",
      ],
      advantages: ["Combines speed and flexibility", "Reduced build times"],
      disadvantages: [
        "Complex revalidation logic",
        "Potential for stale content",
      ],
    },
  };

  const comparisonTable: ComparisonRow[] = [
    {
      feature: "Rendering Time",
      csr: "Client-side",
      ssr: "Server-side",
      ssg: "Build-time",
      isr: "Build-time + Revalidate",
    },
    {
      feature: "Performance",
      csr: "Slower initial",
      ssr: "Fast initial",
      ssg: "Fastest",
      isr: "Fast and updated",
    },
    { feature: "SEO", csr: "Poor", ssr: "Great", ssg: "Great", isr: "Great" },
    {
      feature: "Data Freshness",
      csr: "Immediate",
      ssr: "Real-time",
      ssg: "Stale until rebuild",
      isr: "Stale until revalidate",
    },
    {
      feature: "Use Case",
      csr: "SPAs, dashboards",
      ssr: "Dynamic pages",
      ssg: "Blogs, docs",
      isr: "Dynamic static sites",
    },
  ];

  return (
    <div className="p-4">
      {/* Tabs */}
      <div className="flex space-x-4 border-b-2 mb-4">
        {Object.keys(strategies).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`py-2 px-4 text-sm font-medium border-b-2 transition-colors duration-300 ${
              activeTab === key
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-200 hover:text-blue-500"
            }`}
          >
            {strategies[key].title}
          </button>
        ))}
      </div>

      {/* Strategy Details */}
      <div className="mt-4">
        {Object.entries(strategies).map(([key, strategy]) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: activeTab === key ? 1 : 0,
              y: activeTab === key ? 0 : 20,
            }}
            transition={{ duration: 0.4 }}
            className={`${activeTab === key ? "block" : "hidden"}`}
          >
            <div className="border rounded-lg shadow-md p-4">
              <h2 className="text-xl font-bold mb-2 flex items-center">
                <span>{strategy.title}</span>
              </h2>
              <p className="mb-4 text-gray-200">{strategy.definition}</p>
              <h3 className="text-lg font-semibold text-blue-600">
                Use Cases:
              </h3>
              <ul className="list-disc ml-5 mb-4">
                {strategy.useCases.map((useCase, index) => (
                  <li key={index} className="text-gray-200">
                    {useCase}
                  </li>
                ))}
              </ul>
              <h3 className="text-lg font-semibold text-green-600">
                Advantages:
              </h3>
              <ul className="list-disc ml-5 mb-4">
                {strategy.advantages.map((advantage, index) => (
                  <li key={index} className="text-gray-200">
                    {advantage}
                  </li>
                ))}
              </ul>
              <h3 className="text-lg font-semibold text-red-600">
                Disadvantages:
              </h3>
              <ul className="list-disc ml-5">
                {strategy.disadvantages.map((disadvantage, index) => (
                  <li key={index} className="text-gray-200">
                    {disadvantage}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-200 p-2">Feature</th>
                <th className="border border-gray-200 p-2">CSR</th>
                <th className="border border-gray-200 p-2">SSR</th>
                <th className="border border-gray-200 p-2">SSG</th>
                <th className="border border-gray-200 p-2">ISR</th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-200 transition-colors duration-200"
                >
                  <td className="border border-gray-200 p-2 font-semibold text-gray-200">
                    {row.feature}
                  </td>
                  <td className="border border-gray-200 p-2 text-gray-200">
                    {row.csr}
                  </td>
                  <td className="border border-gray-200 p-2 text-gray-200">
                    {row.ssr}
                  </td>
                  <td className="border border-gray-200 p-2 text-gray-200">
                    {row.ssg}
                  </td>
                  <td className="border border-gray-200 p-2 text-gray-200">
                    {row.isr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RenderingStrategies;
