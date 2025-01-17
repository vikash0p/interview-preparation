import ReactSynHighlighter from "@/components/GlobalComponents/SyntextHiglighter";
import React from "react";

const exampleCode = `
import React from 'react';

const Greeting = ({ name, age }) => {
  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold text-blue-700">Hello, {name}!</h2>
      <p className="text-gray-700">You are {age} years old.</p>
    </div>
  );
};

export default Greeting;
`;
const PropsInReact = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Props in React</h1>
      <p>
        In React, props (short for `properties`) are used to pass data from one
        component to another, specifically from a parent component to a child
        component. Props are read-only, meaning they cannot be modified by the
        child component; they are used to display dynamic content or make
        components reusable.
      </p>
      <div className="mt-10">
        <h2 className="text-2xl font-bold ">Key Points about Props:</h2>

        <ul className="list-disc list-inside mt-5 mb-6 space-y-2">
          <li>
            Props are passed down from the parent component to the child
            component.
          </li>
          <li>
            Props are immutable, meaning the child component cannot change them.
          </li>
          <li>Props are passed as attributes in JSX.</li>
          <li>Props help in making components dynamic and reusable.</li>
        </ul>
      </div>
      <ReactSynHighlighter exampleCode={exampleCode} />
    </div>
  );
};

export default PropsInReact;
