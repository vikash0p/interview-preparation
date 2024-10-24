export const JavascriptKnowData = `
console.log([]==0); //empty array is coerced  equal to 0
[] == 0; // Step 1: [] is coerced to ""
 "" == 0; // Step 2: "" is coerced to 0
 0 == 0; // true


console.log([]==1); //empty array is coerced  equal to 0
[] == 1; // Step 1: [] is coerced to ""
 "" == 1; // Step 2: "" is coerced to 0
 0 == 1; // false


console.log("" == 1);
"" == 0; // false because "" is coerced to 0

console.log(0=="");
0 == 0; // true because 0 is coerced to ""

console.log("" === 1);
"" == 0; // false because "" is coerced to 0

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

console.log(+true) //1 because true is coerced to 1
+true; // 1

console.log(+false) //0 because false is coerced to 0
+false; // 0

console.log(!"abc") //false because "abc" is coerced to 0
!"abc"; // false

console.log(!"") //true because "" is coerced to 0
!""; // true

console.log(!![])
!![]; // true because [] is coerced to 0

console.log(!!{})
!!{}; // true because {} is coerced to 0

console.log(!!0)
!!0; // true because 0 is coerced to 0

console.log(!!"")
!!""; // true because "" is coerced to 0

console.log(!!1)
!!1; // true because 1 is coerced to 1

console.log(!!true)
!!true; // true because true is coerced to 1

console.log(!!false)
!!false; // false because false is coerced to 0

console.log(!!"abc")
!!"abc"; // true because "abc" is coerced to 1

console.log(!!"0")
!!"0"; // true because "0" is coerced to 1

console.log(!!"1")
!!"1"; // true because "1" is coerced to 1

console.log(!!"true")
!!"true"; // true because "true" is coerced to 1

console.log(!!"false")
!!"false"; // true because "false" is coerced to 1

console.log(!!" ")
!!" "; // true because " " is coerced to 1

console.log(!!"")
!!""; // true because "" is coerced to 0

console.log(1==="")
1===""; // false





`;
