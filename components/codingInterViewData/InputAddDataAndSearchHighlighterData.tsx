export const InputAddDataAndSearchHighlighterData = `
"use client";
import React, { useState } from "react";

const InputAddDataAndSearchData = () => {
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
    setSearchTerm(e.target.value); // Update search term without changing selected country
    const filteredCountries = updatedCountries.filter((country) =>
      country.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchCountries(filteredCountries);
  };

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setShowDropdown(false); // Close dropdown after selecting
    setSearchTerm(""); // Clear search term after selecting
  };

  const SubmitHandlerFunction = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const myData = updatedCountries.find((value) => value === searchTerm);
    console.log("🚀 ~ file: page.tsx:37 ~ myData:", typeof myData);
    if (!myData) {
      return setUpdatedCountries((prev) => [...prev, searchTerm]);
    } else {
      console.log("🚀 ~ The country already exists in the list.");
      alert("The country already exists in the list.");
    }
    // if(searchCountries && !updatedCountries.includes(searchTerm)){
    //   setUpdatedCountries((prev)=>[...prev,searchTerm])
    // }
  };

  return (
    <div className="w-full min-h-screen flex flex-col gap-5 mt-20 items-center">
      <div className="relative w-96">
        {/* Input field to display selected country */}
        <input
          type="text"
          value={selectedCountry}
          readOnly
          onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown visibility
          placeholder="Select a country"
          className="w-full h-12 px-4 border border-gray-300 rounded cursor-pointer"
        />

        {/* Search bar */}
        {showDropdown && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 z-10">
            <form action="" onSubmit={SubmitHandlerFunction}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search..."
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

export default InputAddDataAndSearchData;

`;