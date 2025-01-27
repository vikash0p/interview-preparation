export const JavaScriptMockData = [
  {
    id: "1",
    question: "What is JavaScript?",
    answer:
      "JavaScript is a lightweight, interpreted programming language used to create interactive web pages.",
    link: "What-is-JavaScript",
  },
  {
    id: "2",
    question: "What are the primitive data types in JavaScript?",
    answer: "String, Number, Boolean, Undefined, Null, Symbol, BigInt.",
    link: "Primitive-Data-Types",
  },
  {
    id: "3",
    question: "What is the difference between '==' and '==='?",
    code: `console.log(5 == '5'); // true
console.log(5 === '5'); // false`,
    answer:
      "'==' checks value equality with type coercion, '===' checks both value and type equality.",
    link: "Difference-between-doubleEqual-and-tripleEqual",
  },
  {
    id: "4",
    question: "What is a closure in JavaScript?",
    code: `function outer() {
let count = 0;
return function inner() {
    count++;
    return count;
};
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2`,
    answer:
      "A closure is a function that retains access to its lexical scope, even when executed outside that scope.",
    link: "What-is-a-closure",
  },
  {
    id: "5",
    question: "What is the 'this' keyword in JavaScript?",
    code: `const obj = {
name: "Alice",
greet() {
    console.log(this.name);
}
};
obj.greet(); // Alice`,
    answer:
      "'this' refers to the object that is currently executing the function.",
    link: "this-keyword",
  },
  {
    id: "6",
    question: "What are promises in JavaScript?",
    code: `const promise = new Promise((resolve, reject) => {
setTimeout(() => resolve("Done!"), 1000);
});
promise.then(console.log);`,
    answer:
      "A Promise is an object representing the eventual completion or failure of an asynchronous operation.",
    link: "Promises",
  },
  {
    id: "7",
    question: "What is the difference between var, let, and const?",
    code: `var x = 1; // Function scoped
let y = 2; // Block scoped
const z = 3; // Block scoped and immutable`,
    answer:
      "'var' is function-scoped, 'let' and 'const' are block-scoped, with 'const' being immutable.",
    link: "var-let-const",
  },
  {
    id: "8",
    question: "What is hoisting in JavaScript?",
    code: `console.log(x); // undefined
            var x = 5;`,
    answer:
      "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope.",
    link: "Hoisting",
  },
  {
    id: "9",
    question: "What is an arrow function?",
    code: `const add = (a, b) => a + b;
console.log(add(2, 3)); // 5`,
    answer:
      "Arrow functions provide a shorter syntax for writing functions and do not have their own 'this'.",
    link: "Arrow-Functions",
  },
  {
    id: "10",
    question: "What is event delegation?",
    code: `document.querySelector("#parent").addEventListener("click", (e) => {
if (e.target && e.target.matches(".child")) {
    console.log("Child clicked!");
}
});`,
    answer:
      "Event delegation allows a parent element to handle events for its child elements using a single handler.",
    link: "Event-Delegation",
  },
  {
    id: "11",
    question:
      "What is the difference between synchronous and asynchronous JavaScript?",
    answer:
      "Synchronous code is executed line by line, while asynchronous code allows for non-blocking execution.",
    link: "Synchronous-vs-Asynchronous",
  },
  {
    id: "12",
    question: "What is the DOM?",
    answer:
      "The Document Object Model (DOM) is a programming interface for HTML and XML documents.",
    link: "DOM",
  },
  {
    id: "13",
    question: "What is the use of `call()`, `apply()`, and `bind()`?",
    code: `const obj = { name: "Alice" };
function greet(greeting) {
console.log(greeting + ", " + this.name + "!");
}
greet.call(obj, "Hello"); // Hello, Alice!
greet.apply(obj, ["Hi"]); // Hi, Alice!
const boundGreet = greet.bind(obj);
boundGreet("Hey"); // Hey, Alice!`,
    answer:
      "`call()` and `apply()` invoke a function with a specific 'this', while `bind()` returns a new function.",
    link: "call-apply-bind",
  },
  {
    id: "14",
    question: "What is the difference between null and undefined?",
    code: `console.log(typeof null); // object
console.log(typeof undefined); // undefined`,
    answer:
"null represents an intentional absence of value, undefined means a variable has been declared but not initialized.",
    link: "null-vs-undefined",
  },
  {
    id: "15",
    question: "What is a JavaScript module?",
    answer:
      "Modules allow you to split your code into reusable pieces and manage dependencies.",
    link: "JavaScript-Modules",
  },
  {
    id: "16",
    question: "What is the spread operator in JavaScript?",
    code: `const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]`,
    answer:
      "The spread operator allows expanding arrays or objects into individual elements.",
    link: "Spread-Operator",
  },
  {
    id: "17",
    question: "What are default parameters in JavaScript?",
    code: `function greet(name = "Guest") {
  console.log(\`Hello, \${name}!\`);
  }
  greet(); // Hello, Guest!`,
    answer:
      "Default parameters allow functions to use default values if no arguments are passed.",
    link: "Default-Parameters",
  },
  {
    id: "18",
    question: "What is an IIFE?",
    code: `(function() {
  console.log("This is an IIFE!");
  })();`,
    answer:
      "An IIFE (Immediately Invoked Function Expression) is a function that runs as soon as it's defined.",
    link: "IIFE",
  },
  {
    id: "19",
    question: "What is async/await in JavaScript?",
    code: `async function fetchData() {
const response = await fetch("https://api.example.com/data");
const data = await response.json();
console.log(data);
}`,
    answer:
      "Async/await provides a way to handle asynchronous operations in a synchronous-like manner.",
    link: "Async-Await",
  },
  {
    id: "20",
    question: "What is the purpose of the `Promise.all` method?",
    code: `const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);
Promise.all([p1, p2, p3]).then(values => console.log(values)); // [1, 2, 3]`,
    answer:
      "`Promise.all` executes multiple promises in parallel and resolves when all of them are resolved.",
    link: "promise-all",
  },
  {
    id: "21",
    question: "What is the `this` keyword in JavaScript?",
    code: `const obj = {
   name: "Alice",
   greet() {
     console.log(this.name);
   }
 };
 obj.greet(); // Alice`,
    answer:
      "`this` refers to the object that is executing the current function.",
    link: "what-is-this-keyword-in-javascript",
  },
  {
    id: "22",
    question: "What is a closure in JavaScript?",
    code: `function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const increment = outer();
console.log(increment()); // 1
console.log(increment()); // 2`,
    answer:
      "A closure is a function that retains access to its outer scope, even after the outer function has executed.",
    link: "what-is-closure-in-javascript",
  },
  {
    id: "24",
    question: "What are default parameters in JavaScript?",
    code: `function greet(name = "Guest") {
  console.log("Hello, " + name);
}
greet(); // Hello, Guest`,
    answer:
      "Default parameters allow functions to have predefined values for parameters if no value is provided.",
    link: "default-parameters-in-javascript",
  },
  {
    id: "25",
    question: "What is the difference between var, let, and const?",
    code: `var x = 10; // Function-scoped, can be redeclared
let y = 20; // Block-scoped, cannot be redeclared
const z = 30; // Block-scoped, immutable`,
    answer:
      "`var` is function-scoped, while `let` and `const` are block-scoped. `const` is also immutable.",
    link: "difference-between-var-let-and-const",
  },
  {
    id: "26",
    question: "What is the purpose of the `typeof` operator?",
    code: `console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"`,
    answer:
      "The `typeof` operator is used to determine the type of a variable or value.",
    link: "purpose-of-typeof-operator",
  },
  {
    id: "27",
    question: "What are arrow functions in JavaScript?",
    code: `const add = (a, b) => a + b;
  console.log(add(2, 3)); // 5`,
    answer:
      "Arrow functions are a shorthand syntax for writing functions. They also do not bind their own `this`.",
    link: "arrow-functions-in-javascript",
  },
  {
    id: "28",
    question: "What is the difference between null and undefined?",
    code: `let a;
console.log(a); // undefined
let b = null;
console.log(b); // null`,
    answer:
      "`undefined` means a variable has been declared but not assigned a value, whereas `null` is an intentional absence of value.",
    link: "difference-between-null-and-undefined",
  },
  {
    id: "29",
    question: "What is the difference between call(), apply(), and bind()?",
    code: `function greet(greeting) {
    console.log(greeting + ", " + this.name);
  }
  const obj = { name: "Ali
  greet.call(obj, "Hello"); // Hello, Alice
  greet.apply(obj, ["Hi"]); // Hi, Alice
  const boundGreet = greet.bind(obj, "Hey");
  boundGreet(); // Hey, Alice`,
    answer:
      "`call()` and `apply()` invoke functions with a specific `this` value, but `apply()` takes an array of arguments. `bind()` returns a new function.",
    link: "difference-between-call-apply-and-bind",
  },
  {
    id: "30",
    question:
      "What is the difference between synchronous and asynchronous programming?",
    answer:
      "Synchronous programming executes code sequentially, blocking further execution until the current task completes, while asynchronous programming allows tasks to run in parallel.",
    code: `// Synchronous
 console.log("Start");
 console.log(
 // Asynchronous
 console.log("Start");
 setTimeout(() => console.log("Async Task"), 1000);
 console.log("End");`,
    link: "difference-between-synchronous-and-asynchronous",
  },
  {
    id: "31",
    question: "What are modules in JavaScript?",
    code: `// Module.js
 export const greet = () => "H
 // Main.js
 import { greet } from './Module.js';
 console.log(greet()); // Hello`,
    answer:
      "Modules allow code to be divided into reusable files, using `export` and `import` syntax.",
    link: "modules-in-javascript",
  },
  {
    id: "32",
    question: "What is an IIFE in JavaScript?",
    code: `(function() {
      console.log("This is an IIFE!");
    })();`,
    answer:
      "An IIFE (Immediately Invoked Function Expression) is a function that is executed immediately after its definition.",
    link: "what-is-iife-in-javascript",
  },
  {
    id: "33",
    question: "What are JavaScript WeakMaps and WeakSets?",
    code: `const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, "value");
console.log(weakMap.get(obj)); // "value"`,
    answer:
      "WeakMaps and WeakSets are similar to Maps and Sets, but their keys must be objects, and they are weakly referenced.",
    link: "weakmaps-and-weaksets-in-javascript",
  },
  {
    id: "34",
    question: "What are JavaScript tags and template literals?",
    code: `const name = "Alice";
console.log(\`Hello, \${name}!\`); // Hello, Alice`,
    answer:
      "Template literals are strings enclosed in backticks, allowing embedded expressions with `${}`.",
    link: "tags-and-template-literals-in-javascript",
  },
  {
    id: "35",
    question: "What is event delegation in JavaScript?",
    code: `document.querySelector("#parent").addEventListener("click", (event) => {
if (event.target && event.target.matches("button.className")) {
  console.log("Button clicked!");
}
});`,
    answer:
      "Event delegation allows you to attach a single event listener to a parent element to handle events for its child elements.",
    link: "what-is-event-delegation-in-javascript",
  },
  {
    id: "36",
    question: "What is the use of Object.create() in JavaScript?",
    code: `const prototypeObj = { greet() { return "Hello!"; } };
const obj = Object.create(prototypeObj);
console.log(obj.greet()); // Hello!`,
    answer:
      "`Object.create()` is used to create a new object with a specified prototype.",
    link: "use-of-object-create-in-javascript",
  },
  {
    id: "37",
    question: "What are JavaScript Proxies?",
    code: `const target = {};
const proxy = new Proxy(target, {
  set(obj, prop, value) {
    if (prop === "age" && value < 0) {
      console.log("Age cannot be negative.");
      return false;
    }
    obj[prop] = value;
    return true;
  }
});
proxy.age = -5; // Age cannot be negative.`,
    answer:
      "Proxies allow you to intercept and customize operations on objects, such as reading, writing, or function calls.",
    link: "what-are-javascript-proxies",
  },
  {
    id: "38",
    question: "What is the difference between shallow copy and deep copy?",
    code: `// Shallow Copy
const obj = { a: 1, b: { c: 2 } };
const shallowCopy = { ...o
// Deep Copy
const deepCopy = JSON.parse(JSON.stringify(obj));`,
    answer:
      "Shallow copy only duplicates the first level of an object, whereas deep copy duplicates all levels.",
    link: "difference-between-shallow-copy-and-deep-copy",
  },
  {
    id: "39",
    question: "What is the difference between sync and async iterators?",
    code: `// Async Iterator Example
const asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next: () => {
        if (i < 3) {
          return Promise.resolve({ value: i++, done: false });
        }
        return Promise.resolve({ done: true });
      }
    };
  }
};
(async () => {
  for await (const value of asyncIterable) {
    console.log(value); // 0, 1, 2
  }
})();`,
    answer:
      "Synchronous iterators use `next()` to produce values immediately, whereas asynchronous iterators return Promises.",
    link: "difference-between-sync-and-async-iterators",
  },
  {
    id: "40",
    question:
      "What is the difference between Object.freeze() and Object.seal()?",
    code: `const obj = { a: 1 };
Object.freeze(obj); // Prevents any changes to the object
Object.seal(obj); // Allows property modification but not addition or deletion`,
    answer:
      "`Object.freeze()` prevents any changes to the object, while `Object.seal()` allows changes to existing properties but disallows adding or deleting properties.",
    link: "difference-between-object-freeze-and-object-seal",
  },
  {
    id: "41",
    question: "What is the purpose of the `reduce()` method in JavaScript?",
    code: `const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10`,
    answer:
      "The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value.",
    link: "purpose-of-reduce-method-in-javascript",
  },
  {
    id: "42",
    question: "What is the purpose of the `Symbol` data type in JavaScript?",
    code: `const uniqueKey = Symbol("key");
const obj = {
  [uniqueKey]: "value"
};
console.log(obj[uniqueKey]); // value`,
    answer:
      "`Symbol` is a primitive data type used to create unique keys for object properties.",
    link: "purpose-of-symbol-data-type-in-javascript",
  },
  {
    id: "43",
    question: "What is the purpose of the `fetch` API?",
    code: `fetch("https://api.example.com/data").then(response => response.json()).then(data => console.log(data));`,
    answer:
      "The `fetch` API is used to make HTTP requests and handle responses, replacing older methods like `XMLHttpRequest`.",
    link: "purpose-of-fetch-api-in-javascript",
  },
  {
    id: "44",
    question: "What is dynamic typing in JavaScript?",
    code: `let value = "Hello"; // String
           value = 42; // Now it's a Number`,
    answer:
      "Dynamic typing allows variables to hold values of different types during runtime.",
    link: "dynamic-typing-in-javascript",
  },
  {
    id: "45",
    question: "What is the purpose of the `setTimeout` function?",
    code: `setTimeout(() => {
console.log("Executed after 2 seconds");
}, 2000);`,
    answer:
      "`setTimeout` is used to execute a function after a specified delay in milliseconds.",
    link: "what-is-the-purpose-of-the-setTimeout-function",
  },
  {
    id: "46",
    question: "What are higher-order functions in JavaScript?",
    code: `const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]`,
    answer:
      "Higher-order functions take other functions as arguments or return them as results.",
    link: "what-are-higher-order-functions-in-javascript",
  },
  {
    id: "47",
    question: "What is the `event.preventDefault()` method?",
    code: `document.querySelector("form").addEventListener("submit", (e) => {
 e.preventDefault();
 console.log("Form submission prevented");
});`,
    answer:
      "`event.preventDefault()` prevents the default behavior of an event, such as navigating away on form submission.",
    link: "what-is-event-preventDefault-method",
  },
  {
    id: "48",
    question: "What is the `event.stopPropagation()` method?",
    code: `document.querySelector(".child").addEventListener("click", (e) => {
e.stopPropagation();
console.log("Child clicked, but event doesn't bubble to parent");
});`,
    answer:
      "`event.stopPropagation()` stops the event from propagating to parent elements.",
    link: "what-is-event-stopPropagation-method",
  },
  {
    id: "49",
    question:
      "What is the difference between mutable and immutable objects in JavaScript?",
    code: `const mutableArray = [1, 2, 3];
      mutableArray.push(4); // Changes original array

      const immutableString = "hello";
      const newString = immutableString.toUpperCase(); // Doesn't modify original string`,
    answer:
      "Mutable objects can be changed after creation, while immutable objects cannot be modified.",
    link: "difference-between-mutable-and-immutable-objects-in-javascript",
  },
  {
    id: "50",
    question: "What is the purpose of the `Map` object in JavaScript?",
    code: `const map = new Map();
map.set("key", "value");
console.log(map.get("key")); // value`,
    answer:
      "`Map` is a collection of key-value pairs where keys can be any data type.",
    link: "purpose-of-map-object-in-javascript",
  },
  {
    id: "51",
    question: "What is the purpose of the `Set` object in JavaScript?",
    code: `const set = new Set([1, 2, 2, 3]);
console.log(set); // Set {1, 2, 3}`,
    answer:
      "`Set` is a collection of unique values, preventing duplicate entries.",
    link: "purpose-of-set-object-in-javascript",
  },
  {
    id: "52",
    question: "What are getters and setters in JavaScript?",
    code: `const obj = {
   _name: "Alice",
   get name() {
     return this._name;
   },
   set name(value) {
     this._name = value;
   }
 };
 obj.name = "Bob";
 console.log(obj.name); // Bob`,
    answer:
      "Getters and setters are methods to get or set the values of an object's properties.",
    link: "what-are-getters-and-setters-in-javascript",
  },
  {
    id: "53",
    question:
      "What are the differences between a `for` loop and a `for...of` loop?",
    code: `const arr = [10, 20, 30];
// for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);

// for...of loop
for (const value of arr) {
  console.log(value);
}`,
    answer:
      "`for` is used for traditional iterations, whereas `for...of` is specifically for iterable objects like arrays.",
    link: "difference-between-for-and-for-of-loops",
  },
  {
    id: "54",
    question:
      "What is the difference between `Object.keys` and `Object.values`?",
    code: `const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // ["a", "b", "c"]
console.log(Object.values(obj)); // [1, 2, 3]`,
    answer:
      "`Object.keys` returns an array of an object's keys, while `Object.values` returns an array of its values.",
    link: "difference-between-object-keys-and-object-values",
  },
  {
    id: "55",
    question: "What is the purpose of the `finally` block in JavaScript?",
    code: `try {
  throw new Error("Something went wrong");
} catch (err) {
  console.log(err.message);
} finally {
  console.log("This always runs");
}`,
    answer:
      "The `finally` block contains code that always runs, regardless of whether an exception is thrown.",
    link: "purpose-of-finally-block-in-javascript",
  },
  {
    id: "56",
    question: "What is a polyfill in JavaScript?",
    code: `if (!Array.prototype.includes) {
Array.prototype.includes = function(value) {
  return this.indexOf(value) !== -1;
};
}`,
    answer:
      "A polyfill is a piece of code that adds support for modern functionality in older JavaScript environments.",
    link: "what-is-a-polyfill-in-javascript",
  },
  {
    id: "57",
    question: "What are destructuring assignments in JavaScript?",
    code: `const [a, b] = [1, 2];
console.log(a, b); // 1, 2
const { name, age } = { name: "Alice", age: 25 };
console.log(name, age); // Alice, 25`,
    answer:
      "Destructuring allows unpacking values from arrays or properties from objects into variables.",
    link: "what-are-destructuring-assignments-in-javascript",
  },
  {
    id: "58",
    question:
      "What is the difference between function declarations and function expressions?",
    code: `function declaration() {
return "Declared Function";

const expression = function() {
  return "Expression Function";
};`,
    answer:
      "Function declarations are hoisted, while function expressions are not.",
    link: "difference-between-function-declarations-and-function-expressions",
  },
  {
    id: "59",
    question: "What is memoization in JavaScript?",
    code: `const memoize = (fn) => {
const cache = {};
return (...args) => {
  const key = JSON.stringify(args);
  if (!cache[key]) {
    cache[key] = fn(...args);
  }
  return cache[key];
};
 };
 const add = (a, b) => a + b;
 const memoizedAdd = memoize(add);
 console.log(memoizedAdd(1, 2)); // 3`,
    answer:
      "Memoization is an optimization technique where the results of expensive function calls are cached.",
    link: "what-is-memoization-in-javascript",
  },
  {
    id: "60",
    question: "What is the `typeof null` in JavaScript?",
    code: `console.log(typeof null); // "object"`,
    answer:
      "`typeof null` returns `object` due to a historical bug in JavaScript.",
    link: "typeof-null-in-javascript",
  },
  {
    id: "61",
    question: "What is hoisting in JavaScript?",
    code: `console.log(a); // undefined
var a = 5;`,
    answer:
      "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.",
    link: "what-is-hoisting-in-javascript",
  },
  {
    id: "62",
    question: "What is the difference between `Array.map` and `Array.forEach`?",
    code: `const arr = [1, 2, 3];
const doubled = arr.map(x => x * 2); // [2, 4, 6]
arr.forEach(x => console.log(x)); // Logs each element`,
    answer:
      "`Array.map` returns a new array, while `Array.forEach` executes a function for each array element without returning anything.",
    link: "difference-between-array-map-and-array-foreach",
  },
  {
    id: "63",
    question: "What are JavaScript mixins?",
    code: `const canFly = {
  fly() {
    console.log("Flying!");
  }
};
const bird = Object.assign({}, canFly);
bird.fly(); // Flying!`,
    answer:
      "Mixins are a way to add reusable behavior to objects by copying properties from one object to another.",
    link: "what-are-javascript-mixins",
  },
  {
    id: "64",
    question: "What are rest parameters in JavaScript?",
    code: `function sum(...numbers) {
return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // 6`,
    answer:
      "Rest parameters allow a function to accept an indefinite number of arguments as an array.",
    link: "what-are-rest-parameters-in-javascript",
  },
  {
    id: "65",
    question: "What is the `this` keyword in JavaScript?",
    code: `const obj = {
  name: "Alice",
  greet() {
    console.log(this.name);
  }
};
obj.greet(); // Alice`,
    answer:
      "`this` refers to the object that is currently executing the function.",
    link: "what-is-this-keyword-in-javascript",
  },
  {
    id: "66",
    question:
      "What is the difference between synchronous and asynchronous JavaScript?",
    code: `console.log("Start");
setTimeout(() => console.log("Async Task"), 1000);
console.log("End");`,
    answer:
      "Synchronous code is executed line-by-line, while asynchronous code allows tasks to run in the background.",
    link: "difference-between-synchronous-and-asynchronous-javascript",
  },
  {
    id: "67",
    question: "What is `debouncing` in JavaScript?",
    code: `function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}
const log = debounce(() => console.log("Debounced"), 500);`,
    answer:
      "Debouncing limits how often a function is executed by delaying it until after a specified delay.",
    link: "what-is-debouncing-in-javascript",
  },
  {
    id: "68",
    question: "What is `throttling` in JavaScript?",
    code: `function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return (...args) => {
    const now = Date.now();
    if (!lastRan || now - lastRan >= limit) {
      func(...args);
      lastRan = now;
    }
  };
}
const log = throttle(() => console.log("Throttled"), 1000);`,
    answer:
      "Throttling ensures a function is called at most once in a specified time period.",
    link: "what-is-throttling-in-javascript",
  },
  {
    id: "69",
    question: "What are promises in JavaScript?",
    code: `const promise = new Promise((resolve, reject) => {
setTimeout(() => resolve("Success"), 1000);
});
promise.then(result => console.log(result));`,
    answer:
      "A promise represents a value that may be available now, or in the future, or never.",
    link: "what-are-promises-in-javascript",
  },
  {
    id: "70",
    question: "What are async/await in JavaScript?",
    code: `async function fetchData() {
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const data = await response.json();
console.log(data);
}
fetchData();`,
    answer:
      "`async/await` allows handling asynchronous operations in a synchronous-looking way.",
    link: "what-are-async-await-in-javascript",
  },
  {
    id: "71",
    question: "What is the event loop in JavaScript?",
    code: `console.log("Start");
setTimeout(() => console.log("Async"), 0);
console.log("End");`,
    answer:
      "The event loop handles asynchronous callbacks and ensures smooth execution of JavaScript code.",
    link: "what-is-the-event-loop-in-javascript",
  },
  {
    id: "72",
    question: "What are default parameters in JavaScript?",
    code: `function greet(name = "Guest") {
  console.log(\`Hello, \${name}!\`);
}
             greet(); // Hello, Guest!`,
    answer:
      "Default parameters allow a function to use default values if no arguments are passed.",
    link: "what-are-default-parameters-in-javascript",
  },
  {
    id: "73",
    question: "What is the difference between `==` and `===`?",
    code: `console.log(5 == "5"); // true
console.log(5 === "5"); // false`,
    answer:
      "`==` checks for value equality with type coercion, while `===` checks for strict equality without coercion.",
    link: "difference-between-==and-===-in-javascript",
  },
  {
    id: "74",
    question: "What is the purpose of `Object.create`?",
    code: `const person = { greet() { console.log("Hello"); } };
const student = Object.create(person);
student.greet(); // Hello`,
    answer:
      "`Object.create` is used to create a new object with a specified prototype object.",
    link: "what-is-the-purpose-of-object-create-in-javascript",
  },
  {
    id: "75",
    question: "What is a `WeakMap` in JavaScript?",
    code: `let obj = {};
const weakMap = new WeakMap();
weakMap.set(obj, "value");
obj = null; // The entry is removed`,
    answer:
      "`WeakMap` is a collection of key-value pairs where keys must be objects and are weakly referenced.",
    link: "what-is-a-weakmap-in-javascript",
  },
  {
    id: "76",
    question: "What is the purpose of the `new` keyword in JavaScript?",
    code: `function Person(name) {
this.name = name;
}
const person = new Person("Alice");`,
    answer:
      "The `new` keyword is used to create instances of an object from a constructor function.",
    link: "what-is-the-purpose-of-new-keyword-in-javascript",
  },
  {
    id: "77",
    question: "What is the difference between shallow copy and deep copy?",
    code: `const obj = { a: 1, b: { c: 2 } };
          const shallow = { ...obj }; // Shallow copy
          const deep = JSON.parse(JSON.stringify(obj)); // Deep copy`,
    answer:
      "A shallow copy copies only the first level, while a deep copy copies all nested objects.",
    link: "difference-between-shallow-copy-and-deep-copy-in-javascript",
  },
  {
    id: "78",
    question: "What is `currying` in JavaScript?",
    code: `const add = (a) => (b) => a + b;
          console.log(add(2)(3)); // 5`,
    answer:
      "Currying transforms a function with multiple arguments into a sequence of functions, each taking one argument.",
    link: "what-is-currying-in-javascript",
  },
  {
    id: "79",
    question: "What are template literals in JavaScript?",
    code: `const name = "Alice";
console.log(\`Hello, \${name}!\`);`,
    answer:
      "Template literals allow embedding expressions in strings using backticks and `${}` syntax.",
    link: "what-are-template-literals-in-javascript",
  },
  {
    id: "80",
    question: "What is the `call` method in JavaScript?",
    code: `const obj = { name: "Alice" };
function greet() {
  console.log(\`Hello, \${this.name}\`);
}
greet.call(obj); // Hello, Alice`,
    answer: "`call` allows invoking a function with a specific `this` value.",
    link: "what-is-the-call-method-in-javascript",
  },
  {
    id: "81",
    question: "What is the difference between `apply` and `call`?",
    code: `const obj = { name: "Alice" };
function greet(age) {
  console.log(\`Hello, \${this.name}. You are \${age} years old.\`);
}
greet.call(obj, 25); // Using arguments directly
greet.apply(obj, [25]); // Using arguments as an array`,
    answer:
      "`call` accepts arguments individually, whereas `apply` accepts arguments as an array.",
    link: "difference-between-apply-and-call-in-javascript",
  },
  {
    id: "82",
    question: "What is a `Proxy` in JavaScript?",
    code: `const handler = {
  get: (obj, prop) => (prop in obj ? obj[prop] : "Not Found")
};
const proxy = new Proxy({ a: 1 }, handler);
console.log(proxy.a); // 1
console.log(proxy.b); // Not Found`,
    answer:
      "`Proxy` is used to define custom behavior for fundamental operations on objects, like getting or setting properties.",
    link: "what-is-a-proxy-in-javascript",
  },
  {
    id: "83",
    question: "What are the differences between `let` and `const`?",
    code: `let a = 10;
a = 20; // Reassignable
const b = 30;
// b = 40; // Error: Assignment to constant variable`,
    answer:
      "`let` allows reassignment, while `const` ensures the variable cannot be reassigned.",
    link: "difference-between-let-and-const-in-javascript",
  },
  {
    id: "84",
    question: "What are JavaScript decorators?",
    code: `function log(target, key, descriptor) {
   const original = descriptor.value;
   descriptor.value = function (...args) {
     console.log(\`Calling \${key}\`);
     return original.apply(this, args);
   };
 }
 class Example {
   @log
   greet() {
     console.log("Hello");
   }
 }
 const obj = new Example();
 obj.greet();`,
    answer:
      "Decorators are special functions that modify the behavior of classes or methods.",
    link: "what-are-javascript-decorators",
  },
];
