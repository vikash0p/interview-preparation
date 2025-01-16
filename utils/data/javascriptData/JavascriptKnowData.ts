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

console.log("A" - 1); // NaN
"A" - 1; // NaN


console.log("A" + "b");
"A" + "b"; // "Ab"


console.log("A" + 1);
"A" + 1; // "A1"



const a = {};
  const b = {
    name: "viaksh",
  };

  a[b] = {
    name: "varun",
  };
  console.log(a[b]); // { name: 'varun' }


  const a = {};
  const b = {
    name: "viaksh",
  };
  const c = {
    name: "ankit",
  };

  a[b] = {
    name: "varun",
  };
  a[c] = {
    name: "akash",
  };
  console.log(a[b]); //  {name: 'akash'} because [] using the dynamic value



console.log("true" - false); //NaN
console.log("true" - true);//NaN
console.log(0 / 0); //NaN
console.log(NaN + 5); //NaN
console.log(NaN === NaN);//false
console.log(NaN == NaN);//


console.log("abc" + false);//"abcfalse"
console.log(false + "abc");//"falseabc"
console.log(false + "false");//"falsefalse"
console.log(false + "true");//"falsetrue"
console.log(true + "true");//truetrue
console.log(false + false);//0
console.log(false + true);//1


const x = (4, 5, 6);
console.log("x=", x); // x=6



function abc() {} // The function is defined first.
var abc;          // This line has no effect because abc is already defined;
console.log(abc); //[Function: abc]

var abc;
function abc() {}
console.log(abc); //[Function: abc]


function abc() {}
var abc = 10;  // Reassigns abc to 10, overriding the function.
console.log(abc); // 10



`;
