export const JavascriptCodingData = [
  {
    id: "1",
    link: "reverse-a-string",
    question: "Reverse a String in JavaScript",
    code: `const str1 = "HelloWorld";
const output = str1.split("").reverse().join("");
console.log("Reversed String:", output);`,
    explanation:
      "The string is split into an array of characters using `split('')`, reversed using `reverse()`, and joined back to form the reversed string using `join('')`.",
  },
  {
    id: "2",
    link: "find-largest-number-in-array",
    question: "Find the Largest Number in an Array",
    code: `const numbers = [3, 8, 12, 5, 15, 7];
const largest = Math.max(...numbers);
console.log("Largest Number:", largest);`,
    explanation:
      "The `Math.max()` function finds the largest number in an array. The spread operator (`...`) is used to pass array elements as individual arguments.",
  },

  {
    id: "3",
    link: "reverse-words-in-string",
    question: "Reverse the Words in a String",
    code: `const str = "my name is a javascript string";
const outputString = str.split(" ").reverse().join(" ");
console.log("Reversed Words in String:", outputString);`,
    explanation:
      "The string is split into an array of words using `split(' ')`, reversed using `reverse()`, and joined back with spaces using `join(' ')` to form a new string with words in reverse order.",
  },
  {
    id: "4",
    link: "find-length-of-string",
    question: "How do you find the length of a string?",
    code: `const str1 = "How do you find the length of a string";
console.log("Length of the string:", str1.length);`,
    explanation:
      "The `length` property of a string returns the total number of characters in the string, including spaces and punctuation.",
  },
];
