"use client";
import React, { useState } from "react";
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

const MultilevelDropDown = () => {
  const [selectedPerson, setSelectedPerson] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const handlePersonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPerson(event.target.value);
    setSelectedCity("");
  };
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };
  const cities = selectedPerson && data.find((person) => person.name === selectedPerson)?.cities;


  return (
    <div className="w-full flex flex-col justify-center items-center mt-20">
      <label htmlFor="people" className="sr-only">
        Select a person
      </label>
      <select
        name="people"
        id="people"
        className="w-96 h-14 mb-4 bg-zinc-900"
        value={selectedPerson}
        onChange={handlePersonChange}
        aria-label="Select a person"
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
      {cities && cities.length > 0 && (

        <select
          name="cities"
          id="cities"
          className="w-96 h-14 bg-zinc-900"
          value={selectedCity}
          onChange={handleCityChange}
          aria-label="Select a city"
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
export default MultilevelDropDown;



// ! ------------------------------------ multilevel dropdown data source -------------------------------------

export const dropDownMenuDataSource = `
"use client";
import React, { useState } from "react";
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

const MultilevelDropDown = () => {
  const [selectedPerson, setSelectedPerson] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  const handlePersonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPerson(event.target.value);
    setSelectedCity("");
  };
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };
  const cities = selectedPerson && data.find((person) => person.name === selectedPerson)?.cities;


  return (
    <div className="w-full flex flex-col justify-center items-center mt-20">
      <select
        name="people"
        id="people"
        className="w-96 h-14 mb-4 bg-zinc-900"
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
      {cities && cities.length > 0 && (
        <select
          name="cities"
          id="cities"
          className="w-96 h-14 bg-zinc-900"
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
export default MultilevelDropDown;
`;