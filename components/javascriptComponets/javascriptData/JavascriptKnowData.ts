export const JavascriptKnowData = `
console.log([]==0); //empty array is coerced  equal to 0
[] == 0; // Step 1: [] is coerced to ""
 "" == 0; // Step 2: "" is coerced to 0
 0 == 0; // true


console.log([]==1); //empty array is coerced  equal to 0
[] == 1; // Step 1: [] is coerced to ""
 "" == 1; // Step 2: "" is coerced to 0
 0 == 1; // false



console.log([]==[]); //empty array is coerced  equal to 0
[] == []; // true


console.log([]=={}); //empty array is coerced  equal to 0
[] == {}; // false

console.log({}==[]); //empty array is coerced  equal to 0
{} == []; // error - syntax error


console.log({}=={}); //empty array is coerced  equal to 0
{} == {}; // true

console.log([] + 10)  //empty array is coerced  equal to 0
[] + 10; // 10 because empty array is coerced to 0 +10 =10;


console.log({} + 10)  //empty object is coerced  equal to 0
{} + 10; // 10 because empty object is coerced to 0 +10 =10;


console.log([] + {});  //0 + 0=0
[] + {}; // 0 + 0=0


console.log([]===1) //strict check both data type and value.
[] === 1; // false

console.log([]===0) //strict check both data type and value.
[] === 0; // false

console.log({}===1) //strict check both data type and value.
{} === 1; // false

console.log({}===0) //strict check both data type and value.
{} === 0; // false




`;
