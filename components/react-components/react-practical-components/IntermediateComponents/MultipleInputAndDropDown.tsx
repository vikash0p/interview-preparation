"use client";
import { X } from "lucide-react";
import React, { useState } from "react";

const MultipleInputAndDropDown = () => {
  const initialCountries = [
    "India",
    "Pakistan",
    "Bangladesh",
    "Nepal",
    "Bhutan",
  ];
  const [updatedCountries, setUpdatedCountries] =
    useState<string[]>(initialCountries);
  const [searchCountries, setSearchCountries] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // Update search term without changing selected country
    const filteredCountries = updatedCountries.filter((country) =>
      country.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchCountries(filteredCountries);
  };

  const handleCountrySelect = (country: string) => {
    if (!selectedCountry.includes(country)) {
      setSelectedCountry((prev) => [...prev, country]);
    }
    setShowDropdown(false); // Close dropdown after selecting
    setSearchTerm(""); // Clear search term after selecting
  };

  // Remove a country from the selected countries list
  const handleCountryDelete = (country: string) => {
    setSelectedCountry((prev) => prev.filter((item) => item !== country));
  };

  const SubmitHandlerFunction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const myData = updatedCountries.find((value) => value === searchTerm);
    if (!myData) {
      return setUpdatedCountries((prev) => [...prev, searchTerm]);
    } else {
      alert("The country already exists in the list.");
    }
  };

  return (
    <div className="w-full flex flex-col gap-5 mt-20 items-center">
      <div className="relative w-96">
        <div>
          <div
            className="w-96 min-h-12 border border-black bg-white text-black rounded-sm cursor-pointer "
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {selectedCountry.length > 0 ? (
              <div className="w-full flex flex-wrap gap-2 p-2">
                {selectedCountry.map((count) => {
                  return (
                    <div className="" key={count}>
                      <div className="flex flex-row items-center gap-2 px-2  py-1 rounded-md bg-gray-400">
                        <span>{count} </span>
                        <button
                          onClick={() => handleCountryDelete(count)}
                          className="text-red-600"
                        >
                          <X />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="w-full ps-3 pt-3 flex flex-col justify-center  text-gray-500">
                <span>Search a product</span>
              </div>
            )}
          </div>
        </div>
        {/* Search bar and dropdown */}
        {showDropdown && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 z-10">
            <form action="" onSubmit={SubmitHandlerFunction}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search and Add data"
                className="w-full h-10 px-4 border-b border-gray-300"
              />
              <ul className="max-h-60 overflow-y-auto">
                {updatedCountries.length > 0 ? (
                  (searchCountries.length > 0
                    ? searchCountries
                    : updatedCountries
                  ).map((country) => (
                    <li
                      key={country}
                      onClick={() => handleCountrySelect(country)}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      {country}
                    </li>
                  ))
                ) : (
                  <li
                    onClick={() => handleCountrySelect("No results found")}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    No Result found? Add this Data
                  </li>
                )}
              </ul>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultipleInputAndDropDown;


//! multiple input and dropdown functionality data source

export const multipleInputDataSource = `
import { X } from "lucide-react";
import React, { useState } from "react";

const MultipleInputAndDropDown = () => {
  const initialCountries = [
    "India",
    "Pakistan",
    "Bangladesh",
    "Nepal",
    "Bhutan",
  ];
  const [updatedCountries, setUpdatedCountries] =
    useState<string[]>(initialCountries);
  const [searchCountries, setSearchCountries] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // Update search term without changing selected country
    const filteredCountries = updatedCountries.filter((country) =>
      country.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchCountries(filteredCountries);
  };

  const handleCountrySelect = (country: string) => {
    if (!selectedCountry.includes(country)) {
      setSelectedCountry((prev) => [...prev, country]);
    }
    setShowDropdown(false); // Close dropdown after selecting
    setSearchTerm(""); // Clear search term after selecting
  };

  // Remove a country from the selected countries list
  const handleCountryDelete = (country: string) => {
    setSelectedCountry((prev) => prev.filter((item) => item !== country));
  };

  const SubmitHandlerFunction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const myData = updatedCountries.find((value) => value === searchTerm);
    if (!myData) {
      return setUpdatedCountries((prev) => [...prev, searchTerm]);
    } else {
      alert("The country already exists in the list.");
    }
  };

  return (
    <div className="w-full flex flex-col gap-5 mt-20 items-center">
      <div className="relative w-96">
        <div>
          <div
            className="w-96 min-h-12 border border-black bg-white text-black rounded-sm cursor-pointer "
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {selectedCountry.length > 0 ? (
              <div className="w-full flex flex-wrap gap-2 p-2">
                {selectedCountry.map((count) => {
                  return (
                    <div className="" key={count}>
                      <div className="flex flex-row items-center gap-2 px-2  py-1 rounded-md bg-gray-400">
                        <span>{count} </span>
                        <button
                          onClick={() => handleCountryDelete(count)}
                          className="text-red-600"
                        >
                          <X />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="w-full ps-3 pt-3 flex flex-col justify-center  text-gray-500">
                <span>Search a product</span>
              </div>
            )}
          </div>
        </div>
        {/* Search bar and dropdown */}
        {showDropdown && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 z-10">
            <form action="" onSubmit={SubmitHandlerFunction}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search and Add data"
                className="w-full h-10 px-4 border-b border-gray-300"
              />
              <ul className="max-h-60 overflow-y-auto">
                {updatedCountries.length > 0 ? (
                  (searchCountries.length > 0
                    ? searchCountries
                    : updatedCountries
                  ).map((country) => (
                    <li
                      key={country}
                      onClick={() => handleCountrySelect(country)}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      {country}
                    </li>
                  ))
                ) : (
                  <li
                    onClick={() => handleCountrySelect("No results found")}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    No Result found? Add this Data
                  </li>
                )}
              </ul>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultipleInputAndDropDown;
`;