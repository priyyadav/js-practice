// var hits;
// {
//     let count = 0;
//     hits = function getCurrent(){

//         return count+1;
//     };
// }
// console.log(hits());     // 1
// console.log(hits());       // 2
// console.log(hits());      // 3

// eg-2

// var studentName = "Frank";

// var greeting = function hello() {
//     console.log(
//         `Hello, ${ studentName }!`
//     );
// }

// studentName = "Suzy";

// greeting();

// it will local ffor lexical scope

// eg3

// var keeps = [];

// for (var i = 0; i < 3; i++) {
//     keeps[i] = function keepI(){
//         return i;
//     };
// }

// keeps[0]();   // 3 -- WHY!?
// keeps[1]();   // 3
// keeps[2]();   // 3

// // because of var varaible it is global and function scope

// var keeps = [];
