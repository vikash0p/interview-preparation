export const JavaScriptLogicalThird = [
  {
    question: "How do you perform pairwise concatenation of two strings?",
    code: `
// Pairwise concatenation example:
const st1 = 'abcdef';
const str2 = '123456';
const output = st1.split('').map((value1, index) => value1 + str2[index]).join('');
console.log("🚀 ~ Pairwise concatenation result:", output); // Output: a1b2c3d4e5f6
`,
    answer:
      "The code demonstrates how to concatenate corresponding characters from two strings and join them into a single string.",
  },
  {
    question:
      "How do you capitalize the first letter of each word in a string?",
    code: `
// Capitalizing the first letter of each word:
const str = "hello world";
const result = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log("🚀 ~ Capitalized string:", result); // Output: Hello World
`,
    answer:
      "This code splits the string by spaces, capitalizes the first letter of each word, and joins the words back together.",
  },
];
