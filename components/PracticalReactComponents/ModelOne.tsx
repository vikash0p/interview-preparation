"use client";
import React, { useState } from "react";

const ModelOne = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <button
          type="button"
          className="px-8 py-2 bg-gray-900 text-white rounded-md"
          onClick={() => setOpen(true)}
        >
          Open
        </button>
      </div>
      {/* Modal */}
      <div
        className={`fixed inset-0 flex items-center justify-center bg-black/70 z-40 transition-opacity duration-500 ease-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`bg-black text-white w-96 h-96 rounded-md transition-transform duration-500 ease-out transform ${
            open ? "scale-100" : "scale-75"
          } ${!open ? 'opacity-0' :'opacity-100'}`}
        >
          <button
            type="button"
            className="px-8 py-2 bg-gray-900 text-white rounded-md"
            onClick={() => setOpen(false)}
          >
            x
          </button>
          <h1 className="p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius,
            itaque! Aspernatur, dolor quae reiciendis, tempora impedit veniam
            voluptatibus beatae quia nihil, hic culpa! Labore ipsam fugiat
            repellendus.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ModelOne;
