"use client";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ModelOne = ({
  open,
  toggleOpen,
  data,
  heading,
}: {
  open: boolean;
  toggleOpen: () => void;
  data: string;
  heading: string;
}) => {
  return (
    <div>
      {/* Modal Overlay */}
      <div
        className={`fixed inset-0 flex items-center justify-center bg-black/70 z-40 transition-opacity duration-500 ease-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleOpen}
      >
        {/* Modal Content */}
        <div
          className={`bg-black text-gray-200 max-w-7xl w-full h-[700px] rounded-lg shadow-2xl transition-transform duration-500 ease-out transform border-2 border-indigo-600 ${
            open ? "scale-100" : "scale-75"
          } ${!open ? "opacity-0" : "opacity-100"}`}
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700 bg-neutral-900 rounded-t-lg">
            <h2 className="text-lg font-semibold">{heading} </h2>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-200 transition-colors"
              onClick={toggleOpen}
            >
              <AiOutlineClose size={24} />
            </button>
          </div>

          {/* Modal Body */}
          <div
            className="overflow-auto px-6 py-2 h-[92%] rounded-b-lg  scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-700 custom-scrollbar"
            style={{ overflowY: "scroll" }}
          >
            <pre className="text-sm whitespace-pre-wrap">
              <code className="text-gray-300">{data}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelOne;
