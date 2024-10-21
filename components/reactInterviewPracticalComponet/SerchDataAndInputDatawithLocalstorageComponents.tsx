"use client";
import React, { useEffect, useState } from "react";
import { CircleX } from "lucide-react";

const SearchDataAndInputDatawithLocalstorageComponents = () => {
  const [text, setText] = useState<string>(""); // Using string instead of string array
  const [nameData, setNameData] = useState<string[]>([]);
  const [searchData, setSearchData] = useState<string[]>([]);

  const myFind = nameData.filter((value) => text.includes(value));

  const uniqueNameData = Array.from(new Set(nameData)); // Ensure uniqueness

  useEffect(() => {
    const getData = localStorage.getItem("uniqueData");
    if (getData) {
      setNameData(JSON.parse(getData));
    }
  }, []);

  useEffect(() => {
    if (nameData.length > 0) {
      localStorage.setItem("uniqueData", JSON.stringify(uniqueNameData));
    }
  }, [uniqueNameData, nameData.length]);

  // Handle text input changes
  const textHandlerFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setText(value); // Set text as a string
    const searchValue = uniqueNameData.filter((name) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchData(searchValue);
  };

  // Add input value to nameData array
  const addHandlerFunction = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission
    if (text.trim() !== "") {
      setNameData((prev) => [...prev, text.trim()]); // Add trimmed text to array
      setText(""); // Clear input field after adding
      setSearchData([]); // Reset search results
    }
  };

  // Function to delete a name from nameData
  const deleteHandlerFunction = (valueToDelete: string) => {
    const deleteValue = nameData.filter((value) => value !== valueToDelete);
    setNameData(deleteValue);
    // setNameData((prev) => prev.filter((name) => name !== valueToDelete));
  };

  return (
    <form
      onSubmit={addHandlerFunction}
      className="w-full min-h-screen flex flex-col gap-6 justify-center items-center"
    >
      <div className="flex flex-row gap-5">
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={textHandlerFunction}
          className="w-96 h-12 rounded-md border border-gray-300 px-2"
        />
        <button
          type="submit"
          className="px-5 h-12 rounded-md bg-red-600 disabled:bg-gray-600 text-white"
          disabled={
            myFind.length > 0 || text.length === 0 || text[0]?.trim() === ""
          }
        >
          Submit
        </button>
      </div>
      <div className="mt-4 w-96">
        {uniqueNameData.length > 0 ? (
          <div>
            {(searchData.length > 0 ? searchData : uniqueNameData).map(
              (value) => {
                return (
                  <div
                    key={value}
                    className="flex justify-between items-center"
                  >
                    <div className="bg-red-800 text-white p-2 mb-2 rounded-md flex-1 relative">
                      {value}
                      <button
                        type="button"
                        onClick={() => deleteHandlerFunction(value)}
                        className="text-white absolute top-2 right-2"
                      >
                        <CircleX />
                      </button>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        ) : (
          <div>No country found</div>
        )}
      </div>
    </form>
  );
};

export default SearchDataAndInputDatawithLocalstorageComponents;
