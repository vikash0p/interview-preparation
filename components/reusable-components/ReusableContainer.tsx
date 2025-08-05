'use client';
import React, { useState } from 'react';
import ModelOne from '../global-components/GlobalModel';
import { FiBook, FiTarget, FiInfo, FiCode } from 'react-icons/fi';
import CodePreview from '../global-components/CodePreview';
export interface LinkInterface {
  id: string;
  name: string;
  url: string;
  component: React.ReactNode;
  data: string;
  level: string;
  description: string;
  tags: string[];
  estimatedTime: number;
  prerequisites: string[];
  objectives: string[];
  tips: string;
  challenges: string | string[];
}
const ReusableContainer = ({ data }: { data: LinkInterface }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-5">
        <h2 className="text-2xl font-semibold text-white">{data.name}</h2>
        <button
          onClick={toggleOpen}
          className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 transition rounded-md text-white font-medium shadow-md"
        >
          View Full Code
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-6">
        {/* Left Section */}
        <div className="space-y-6">
          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <FiCode className="text-blue-400" />
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-600/20 rounded-full text-sm text-blue-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Learning Objectives */}
          <div>
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <FiTarget className="text-purple-400" />
              Learning Objectives
            </h3>
            <ul className="space-y-2 mt-2">
              {data.objectives.map((obj, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <span className="text-emerald-400">▹</span> {obj}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Tips & Challenges */}
          <div>
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <FiInfo className="text-rose-400" />
              Pro Tips & Challenges
            </h3>
            <div className="bg-gray-800/30 p-4 rounded-md shadow-md mt-2">
              <p className="text-gray-300 mb-2">
                <span className="font-medium text-emerald-400">Tip:</span> {data.tips}
              </p>
              <p className="text-gray-300">
                <span className="font-medium text-rose-400">Challenge:</span> {data.challenges}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Live Preview */}
          <div className="border border-gray-700 rounded-md p-4 bg-gray-800/20 shadow-md">
            <h3 className="text-lg font-semibold text-white mb-4">Live Preview</h3>
            <div className="min-h-[200px] flex items-center justify-center bg-gray-900 rounded-md p-4">
              {data.component}
            </div>
          </div>

          {/* Prerequisites */}
          <div>
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <FiBook className="text-amber-400" />
              Prerequisites
            </h3>
            <ul className="space-y-2 mt-2">
              {data.prerequisites.map((preq, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <span className="text-emerald-400">•</span> {preq}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Code Modal */}
      <ModelOne open={open} toggleOpen={toggleOpen} data={data.data} heading={data.name} />

      {/*-------------------------------------- add the editor react component here --------------------------------- */}

      <CodePreview data={data.data} />
    </div>
  );
};

export default ReusableContainer;
