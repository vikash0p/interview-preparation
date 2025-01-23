"use client";
import React, { useEffect, useState } from "react";
import { CircleX } from "lucide-react";
const SearchAndInputWithLocalStorage = () => {
  const [text, setText] = useState<string>("");
  const [nameData, setNameData] = useState<string[]>([]);
  const [searchData, setSearchData] = useState<string[]>([]);

  const myFind = nameData.filter((value) => text.includes(value));

  const uniqueNameData = Array.from(new Set(nameData));

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

  const textHandlerFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setText(value);
    const searchValue = uniqueNameData.filter((name) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchData(searchValue);
  };

  const addHandlerFunction = (event: React.FormEvent) => {
    event.preventDefault();
    if (text.trim() !== "") {
      setNameData((prev) => [...prev, text.trim()]);
      setText("");
      setSearchData([]);
    }
  };

  const deleteHandlerFunction = (valueToDelete: string) => {
    const deleteValue = nameData.filter((value) => value !== valueToDelete);
    setNameData(deleteValue);
  };

  return (
    <form
      onSubmit={addHandlerFunction}
      className="w-full  flex flex-col gap-6 justify-center items-center"
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
          className="px-5 h-12 rounded-md bg-indigo-600 disabled:bg-gray-600 text-white"
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
                    <div className="bg-gray-300 text-black p-2 mb-2 rounded-md flex-1 relative">
                      {value}
                      <button
                        type="button"
                        onClick={() => deleteHandlerFunction(value)}
                        className="text-black absolute top-2 right-2"
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

export default SearchAndInputWithLocalStorage;



// !Search and Input with Local Storage

export const searchAndInputWithLocalStorageDataSource = `"use client";
import React, { useEffect, useState } from "react";
import { CircleX } from "lucide-react";
const SearchAndInputWithLocalStorage = () => {
  const [text, setText] = useState<string>("");
  const [nameData, setNameData] = useState<string[]>([]);
  const [searchData, setSearchData] = useState<string[]>([]);

  const myFind = nameData.filter((value) => text.includes(value));

  const uniqueNameData = Array.from(new Set(nameData));

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

  const textHandlerFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setText(value);
    const searchValue = uniqueNameData.filter((name) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchData(searchValue);
  };

  const addHandlerFunction = (event: React.FormEvent) => {
    event.preventDefault();
    if (text.trim() !== "") {
      setNameData((prev) => [...prev, text.trim()]);
      setText("");
      setSearchData([]);
    }
  };

  const deleteHandlerFunction = (valueToDelete: string) => {
    const deleteValue = nameData.filter((value) => value !== valueToDelete);
    setNameData(deleteValue);
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
          className="px-5 h-12 rounded-md bg-indigo-600 disabled:bg-gray-600 text-white"
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
                    <div className="bg-gray-300 text-black p-2 mb-2 rounded-md flex-1 relative">
                      {value}
                      <button
                        type="button"
                        onClick={() => deleteHandlerFunction(value)}
                        className="text-black absolute top-2 right-2"
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

export default SearchAndInputWithLocalStorage;`;