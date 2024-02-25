// let res=[9,8,7,6][1,2]
// console.log(res)
// it will change like it because comma has a lower precedence
// In this case, the comma operator (,) has lower precedence than array indexing ([]). So, it evaluates 1, 2 first.

let res=[9,8,7,6][1,2]
console.log(res)

console.log("ko")
const z = (1,2,3,4,5);
console.log(z); // outputs 5

// it uses the comma operator. In JavaScript, the comma operator evaluates each of its operands (from left to right) and returns the value of the last operand.

null == undefined; // true
undefined == null; // true

[] == ""; // [ ] will be converted into string
[].toString() == "";
"" == ""; // true

"1" == 1; // "1" will be converted into Number
Number("1") == 1
1 == 1 // true