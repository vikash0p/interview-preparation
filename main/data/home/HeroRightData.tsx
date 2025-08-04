export interface HeroRightDataInterface {
  question: string;
  code: string;
  explanation: string;
}

export const HeroRightData: HeroRightDataInterface[] = [
  {
    question: 'What is the difference between var, let, and const ',
    code: `// Example of var, let, and const
var x = 10;
x = 20;

let y = 15;
y = 25;

const z = 30;
// z = 40; // Error`,
    explanation: "var has function scope, let/const have block scope. const can't be reassigned.",
  },
  {
    question: 'Explain the Virtual DOM in React?',
    code: `// Virtual DOM example
function updateComponent() {
  // Diffing algorithm
  reconcileChanges(prevVDOM, newVDOM);
}`,
    explanation: 'Virtual DOM is a lightweight copy of the real DOM for efficient updates.',
  },
  {
    question: 'What are React hooks?',
    code: `// Example of useState hook
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}`,
    explanation: 'Hooks are functions that let you use state and lifecycle features in function components.',
  },
  {
    question: 'What is closure in JavaScript?',
    code: `// Example of closure
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(outerVariable + " " + innerVariable);
  };
}
const newFunc = outerFunction("Hello");
newFunc("World");`,
    explanation:
      'A closure is a function that remembers variables from its outer scope even after the outer function has executed.',
  },
  {
    question: 'How does event delegation work in JavaScript?',
    code: `// Event Delegation Example
document.getElementById("parent").
addEventListener("click",
function(event) {
  if (event.target && event.target.matches("button")) {
    console.log("Button clicked", event.target);
  }
});`,
    explanation:
      'Event delegation allows handling events at a higher level in the DOM to reduce memory usage and improve performance.',
  },
  {
    question: 'What is the difference between == and === in JavaScript?',
    code: `// Example of == vs ===
console.log(5 == "5"); // true (loose equality)
console.log(5 === "5"); // false (strict equality)`,
    explanation: '== compares values with type coercion, while === compares both value and type strictly.',
  },
  {
    question: 'What is the purpose of useEffect in React?',
    code: `// useEffect example
import { useEffect } from 'react';
function Example() {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);
  return <div>Hello</div>;
}`,
    explanation: 'useEffect runs side effects in function components, such as fetching data or updating the DOM.',
  },
  {
    question: 'Explain async and await in JavaScript?',
    code: `// Async/Await example
async function fetchData() {
  const response = await fetch('https://api.example.com');
  const data = await response.json();
  console.log(data);
}
fetchData();`,
    explanation: 'async/await is syntax for handling asynchronous operations in a more readable way than Promises.',
  },
  {
    question: 'What are the different HTTP request methods?',
    code: `// Example of a GET request
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));`,
    explanation: 'Common HTTP methods include GET, POST, PUT, DELETE, PATCH, used for CRUD operations.',
  },
  {
    question: 'What is the difference between state and props in React?',
    code: `// Example of state vs props
function ChildComponent({ message }) {
  return <p>{message}</p>;
}

function ParentComponent() {
  const [message, setMessage] = useState("Hello");
  return <ChildComponent message={message} />;
}`,
    explanation: 'State is managed inside a component, while props are passed from a parent to a child component.',
  },
];
