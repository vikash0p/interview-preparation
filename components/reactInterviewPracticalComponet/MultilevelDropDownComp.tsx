"use client";
import React, { useState } from "react";

// Sample data for persons and their cities
const data = [
  {
    name: "John",
    value: 100,
    cities: ["New York", "Los Angeles", "Chicago"],
  },
  {
    name: "Alice",
    value: 200,
    cities: ["San Francisco", "Houston", "Dallas"],
  },
  {
    name: "Bob",
    value: 150,
    cities: ["Miami", "Atlanta", "Orlando"],
  },
  {
    name: "Eve",
    value: 250,
    cities: ["Seattle", "Denver", "Boston"],
  },
  {
    name: "Charlie",
    value: 175,
    cities: ["Las Vegas", "San Diego", "Phoenix"],
  },
];

const MultilevelDropDownComp = () => {
  const [selectedPerson, setSelectedPerson] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  // Handler for person selection
  const handlePersonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPerson(event.target.value);
    setSelectedCity(""); // Reset the city selection when a new person is selected
  };

  // Handler for city selection
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  // Get cities for the selected person
  const cities =
    selectedPerson &&
    data.find((person) => person.name === selectedPerson)?.cities;
//   const name =
//     selectedPerson &&
//     data.find((person) => person.name === selectedPerson)?.value;
// //   console.log("🚀 ~ file: page.tsx:51 ~ name:", name);
//   console.log("🚀 ~ file: page.tsx:50 ~ cities:", cities);

  return (
    <div className="w-full flex flex-col justify-center items-center mt-20">
      {/* Person Selection Dropdown */}
      <select
        name="people"
        id="people"
        className="w-96 h-14 mb-4"
        value={selectedPerson}
        onChange={handlePersonChange}
      >
        <option value="" disabled>
          Select a person
        </option>
        {data.map((person) => (
          <option key={person.name} value={person.name}>
            {person.name}
          </option>
        ))}
      </select>

      {/* City Selection Dropdown */}
      {cities && cities.length > 0 && (
        <select
          name="cities"
          id="cities"
          className="w-96 h-14"
          value={selectedCity}
          onChange={handleCityChange}
        >
          <option value="" disabled>
            Select a city
          </option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}
      <div>
        {selectedPerson} <span>{selectedCity} </span>
      </div>
    </div>
  );
};

export default MultilevelDropDownComp;
