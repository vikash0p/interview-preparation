import React from "react";

const limitations = [
  {
    id: 1,
    title: "No Lifecycle Methods (Pre-Hooks)",
    description:
      "Before hooks, functional components lacked access to lifecycle methods like componentDidMount and componentWillUnmount. This has been addressed with hooks like useEffect.",
  },
  {
    id: 2,
    title: "Performance Considerations",
    description:
      "Functional components may re-render more frequently if not optimized with hooks like useCallback and useMemo. They can be less efficient than class components if not handled properly.",
  },
  {
    id: 3,
    title: "Complex State Management",
    description:
      "Managing complex state logic can be trickier in functional components, requiring hooks like useReducer and useContext, which may add more boilerplate code.",
  },
  {
    id: 4,
    title: "Referencing this",
    description:
      "Functional components don’t have access to the this keyword, unlike class components. Instead, useRef is used to reference DOM elements or mutable values.",
  },
  {
    id: 5,
    title: "Event Handling",
    description:
      "Event handlers can require extra steps to optimize performance in functional components, particularly when using useCallback to memoize functions.",
  },
  {
    id: 6,
    title: "Larger Component Trees",
    description:
      "Functional components encourage splitting code into smaller pieces, which can lead to deep component trees, making them harder to manage.",
  },
  {
    id: 7,
    title: "Overuse of Hooks",
    description:
      "Overuse of hooks in large applications can increase complexity and make code harder to maintain, especially if several hooks are needed in a single component.",
  },
  {
    id: 8,
    title: "No Error Boundaries",
    description:
      "Functional components cannot have error boundaries directly. Error boundaries are class component-only features.",
  },
];

const FunctionalComponentLimitations = () => {
  return (
    <div className="p-6  min-h-screen">
      <h1 className="text-2xl font-bold mb-4  ">
        Limitations of Functional Components
      </h1>
      <div className="">
        {limitations.map((limitation) => (
          <div
            key={limitation.id}
            className="p-6  "
          >
            <h2 className="text-xl font-semibold  mb-2">
              {limitation.title}
            </h2>
            <p className="">{limitation.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunctionalComponentLimitations;
