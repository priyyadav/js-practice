// function decelartion


//  this normal function is hosited inn gec as function and stored as a function
// test()
// function test()
// {
//     console.log("hello js")
// }

// arrow function this is var so it is hosted as variable not a funnction so in gec it will be test1=undefined

// test1()
// var test1=()=>{
//     console.log("arrow funtion")
// }

// test1()
// varaible funtionn

// test2()
// var test1=function()
// {
//     console.log("varaible functio")
// }
// test1()



// iife

// (function multiply(num) {
//     return num * num;
//   })(10);
  


//   (function (x) {
//     return (function (y) {
//       console.log(x);
//     })(2);
//   })(1);





// // function expression

//   var b = function xyz() {
//     console.log("function expression");
//     console.log(b); //can access xyz function like this
//   };
// //   xyz(); 
// b()

// var b = function (param1) {
//     console.log(param1);
//   };
// b("ll")

// higher order function

// function demo()
// {
//     console.log("hi")
// }

// function f(demo)
// {
//     console.log("before callback")
  
//   demo()
//   console.log("after callback")
// }

// f(demo)


//  1+null

// coercion null into a number, and the resulting operation is simply the addition of 3 and 0.


// string to anything will be result to string

// "a"+null

// coeacion null to string 

// let num=[1,2,3,4]

// function withoutparameter(num)
// {
//     // console.log(num*num)
//     // console.log(num)
//     for(let i=0; i<num.length; i++)
//     {
//         num[i]=num[i]*2;
//         console.log(num[i],"i")
//     }
// }

// withoutparameter()
// withoutparameter(4)
// withoutparameter(num)
// console.log(num)

// function arguments

//  diff between array and funtion arguments
// both are like array but funtion argment only length property but all function

// function argms() {
//     console.log(arguments);
//     console.log(arguments.length)
//     for(let i=0; i<arguments.length; i++)
//     {
//         // console.log(arguments[i])
//         console.log(arguments.pop(1))
//     }
//   }
// argms(3, 4, 4, 6, 8, 7);





//  pass as parameter
//  if we pass like this it take first paramenter from arugments lsit take onlt value how many paramtere are defined
// function argms(nums) {
//     console.log(nums);
//     console.log(nums.length)
//     for(let i=0; i<nums.length; i++)
//     {
//         // console.log(arguments[i])
//         // console.log(arguments.pop(1))
//     }
//   }
// argms(3, 4, 4, 6, 8, 7);






// if we want to define take multiple argument then we have to do destructor
// ...nums are rest operator

// function argms(...nums) {
//     console.log(nums,"nums");
//     console.log(nums.length,"length")
//     for(let i=0; i<5; i++)
//     {
//         // console.log(arguments[i])
//         console.log(nums.push(90))
//         console.log(nums)
//     }
//   }
// argms(3, 4, 4, 6, 8, 7);









// const args = () => {
//     //   console.log(arguments); will throw an error
//   };









//   var num1 = 2;
//   num2 = 3;
//   name = "Hello";
  
//   function multifly() {
//     console.log(num1 * num2);
//     console.log("hi")
//   }
//   multifly();







// let num4 = 2;
// num5 = 4;

// function add() {
//   console.log(num4 * num4); 
// }
// add();





// function getScore() {
//     var num1 = 4;
//     num2 = 6;
//     function add() {
//     //   console.log(name + "socred" + (num1 + num2));
//     return num1+num2
//     }
//     return add();
//   }
//   console.log(getScore());






//   function getScore() {
//     var num1 = 4;
//     num2 = 6;
//     var num3=function add() {
//     //   console.log(name + "socred" + (num1 + num2));
//     console.log(num1, "num1", num2)
//     return num1+num2
//     }
//     return num3();
//   }
//   console.log(getScore());








// const ytrewq = (q, w, e, ...numbr,r) => { 
// //spread operator should always be in the end
// console.log(q, w, e, r, numbr);
// };
// ytrewq(3, 4, 5, 6, 7);








// function a() {
//     return "qwerty";
//   }
  
//   function b() {
//     console.log(a()); 
//     // undefined
//   }
//   b();
  
  
  
// function a() {
//     return "qwerty";
//   }
  
//   function b(a) {
//     console.log("before")
//     console.log(a());
//     console.log("after")
//   }
//   b(a);



// function b() {
//     console.log(a());
//   }
//   b();


// function a() {
//     return "qwerty";
//   }
  



// function b() {
//     console.log(test());
//   }
// b();

// let test=function a() {
//     return "priyanl";
//   }

//  test is not intialized

// let test=function a() {
//     return "priyanka";
//   }

// function b() {
//     console.log(test());
//   }
// b();


// function q() {
//     return "asdfghjkl";
//   }
//   function p() {
//     return q();
//   }
//   console.log(p(q));
  


  function calculate(operation, a, b) {
    return operation(a, b);
  }
  function add(a,b) {
    return a+b
    
  }
  console.log(calculate(add,2,4));


