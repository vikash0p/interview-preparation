// InputAndSearch component with background black and text white
"use client";
import React, { useState } from "react";

const InputAndSearch = () => {
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
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const filteredCountries = updatedCountries.filter((country) =>
      country.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchCountries(filteredCountries);
  };

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setShowDropdown(false);
    setSearchTerm("");
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
    <div className="w-full flex flex-col gap-5 mt-20 items-center bg-black text-white">
      <div className="relative w-96">
        <input
          type="text"
          value={selectedCountry}
          readOnly
          onClick={() => setShowDropdown(!showDropdown)}
          placeholder="Select a country"
          className="w-full h-12 px-4 border border-gray-300 rounded cursor-pointer bg-gray-800 text-white"
        />

        {/* Search bar */}
        {showDropdown && (
          <div className="absolute top-full left-0 w-full bg-gray-800 border border-gray-300 z-10">
            <form action="" onSubmit={SubmitHandlerFunction}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search and Add data"
                className="w-full h-10 px-4 border-b border-gray-600 bg-gray-700 text-white"
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
                      className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                    >
                      {country}
                    </li>
                  ))
                ) : (
                  <li
                    onClick={() => handleCountrySelect("No results found")}
                    className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
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

export default InputAndSearch;
