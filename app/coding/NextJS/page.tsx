"use client";
import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const FileUpload: React.FC = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (): void => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      console.log("Files dropped:", files[0]);
      setFile(files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (files && files[0]) {
      console.log("Files selected:", files[0]);
      setFile(files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (file) {
      console.log("Submitting file:", file);
      // Add your form submission logic here
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div
          className={`w-96 h-36 border-2 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
            isDragging
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-white"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <FaCloudUploadAlt className="w-10 h-10 text-gray-500" />
          <p className="text-sm text-gray-500 mt-2">
            {isDragging
              ? "Drop your file here"
              : "Drag and drop your file here"}
          </p>
          <p className="text-xs text-gray-400">or click to select a file</p>
          <input
            type="file"
            name="file"
            id="file"
            required
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleFileChange}
          />
        </div>
        {file && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Selected file:</p>
            <p className="text-gray-800 font-medium">{file.name}</p>
          </div>
        )}
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Upload File
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
