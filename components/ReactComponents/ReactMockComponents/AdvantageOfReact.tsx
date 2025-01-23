
import React from "react";

export const AdvantagesOfReact = () => {
  const advantages = [
    "Reusable Components: Reduce code duplication and improve maintainability.",
    "Virtual DOM: Faster UI updates by minimizing actual DOM manipulations.",
    "Fast Rendering: Efficient diffing algorithm for quicker UI rendering.",
    "Unidirectional Data Flow: Predictable data flow that's easier to debug.",
    "Rich Ecosystem: Wide array of libraries, tools, and third-party integrations.",
    "JSX Syntax: HTML-like syntax for more intuitive component structure.",
    "React Hooks: Simplified state and lifecycle management with hooks.",
    "Cross-Platform Development: Build mobile apps with React Native.",
    "Strong Community Support: Plenty of resources and community assistance.",
    "Backward Compatibility: Smooth upgrades without full code rewrites.",
    "SEO-Friendly: Better search engine indexing with server-side rendering.",
  ];

  return (
    <div className="">
      <h2 className="text-2xl font-semibold">
        Advantages of React
      </h2>
      <ul className="list-disc list-inside space-y-2 ">
        {advantages.map((advantage, index) => (
          <li key={index} className="text-lg">
            {advantage}
          </li>
        ))}
      </ul>
    </div>
  );
};
