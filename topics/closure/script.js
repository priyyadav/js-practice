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

// for (var i = 0; i < 3; i++) {
//     // new `j` created each iteration, which gets
//     // a copy of the value of `i` at this moment
//     let j = i;

//     // the `i` here isn't being closed over, so
//     // it's fine to immediately use its current
//     // value in each loop iteration
//     keeps[i] = function keepEachJ(){
//         // close over `j`, not `i`!
//         return j;
//     };
// }
// keeps[0]();   // 0
// keeps[1]();   // 1
// keeps[2]();   // 2

// var keeps = [];

// for (let i = 0; i < 3; i++) {
//     // the `let i` gives us a new `i` for
//     // each iteration, automatically!
//     keeps[i] = function keepEachI(){
//         return i;
//     };
// }
// keeps[0]();   // 0
// keeps[1]();   // 1
// keeps[2]();   // 2

function greetStudent(studentName) {
  return function greeting() {
    console.log(`Hello, ${studentName}!`);
  };
}

let a = greetStudent("Kyle");
a();

// Must be a function involved

// Must reference at least one variable from an outer scope

// Must be invoked in a different branch of the scope chain from the variable(s)

// {
// not necessarily a scope (yet)

// ..

// now we know the block needs to be a scope
//     let thisIsNowAScope = true;

//     for (let i = 0; i < 5; i++) {
//         // this is also a scope, activated each
//         // iteration
//         if (i % 2 == 0) {
//             // this is just a block, not a scope
//             console.log(i);
//         }
//     }
// }
// 0 2 4

// let f = (a) => {
//     let i = 1;
//     let j = 2; //  j will not be included in closure as long as it is not used inside the inner function
//     return ()=> {
//         console.log(i +"a");
//     }
// }

// console.dir(f(1));

// for(let i=0;i<3;i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

// console.log(i);

// for(var  k=0;k<3;k++){
//     ((l)=>{
//         setTimeout(() => {
//             console.log(l);
//         }, 1000);
//     })(k);
// }

// function counter() {
//     var count = 0;

//     return function incrementCounter(){
//         counter++;
//         console.log(counter);
//     }
// }

// console.log(count); // cant do this is privacy

// var counter1 = counter();
// counter1(); // this will increment the counter to 1
// counter1(); // this will increment the counter to 2

// var counter2 = counter(); // this will be a completly new counter the previous.
// counter2(); // 1
// counter2(); // 2

// function foo() {
//     var name = 'Roadside Coder'; // name is a local variable created by foo
//     function displayName() {  // displayName() is the inner function
//       alert(name); // variable used which is declared in the parent function
//     }
//     displayName();
//   }
//   foo();

//  closure has access fo local scope, outer scope, global scope
// first it look for local scope >outer scope>global scope

// let count = 0;
// (function immediate() {
//     let count=0;
//   if (count === 0) {
//     console.dir(immediate)
//     // let count=89 shadowing
//     console.log(count); // Output ?
//   }
//   console.dir(immediate)
//   console.log(count); // Output?
// })();

// var addSix = createBase(6);
// addSix(10);// returns 16
// addSix(21);// returns 27

// function createBase(num)
// {
//     return function addSix(num1)
//     {
//         return num1+num
//     }
// }.

// function find(index) {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }

//   console.log(a[index]);
// }

// console.time("6");
// find(6); // this takes 37ms
// console.timeEnd("6");
// console.time("12");
// find(12); // this takes 135ms
// console.timeEnd("12");

// here evertime ie calculate from start instead 






// function find() {
//     let a = [];
//     for (let i = 0; i < 1000000; i++) {
//       a[i] = i * i;
//     }
//     return function(index)
//     {
//         console.log(a[index]);
//     }
    
//   }
  
//   let cal=find()
//   console.time("6");
//   cal(6); // this takes 37ms
//   console.timeEnd("6");
//   console.time("12");
//   cal(12); // this takes 135ms
//   console.timeEnd("12");
  

// function test()
// {
//     for (var i = 0; i < 3; i++) {
//         setTimeout(function log() {
//           console.log(i); // What is logged?
//         }, 1000);
//       }
// }
// test()



//   3 3 3 because of var is function scope



// function test() {
//     for (var i = 0; i < 3; i++) {
//         (function inner(x) {
//             setTimeout(function log() {
//                 console.log(x);
//             }, 1000);
//         })(i);
//     }
// }
// test();

// function test()
// {
//     for (var i = 0; i < 3; i++) {
//          function inner(i)
//         {
//             setTimeout(function log() {
//                 console.log(i); // What is logged?
//               }, 1000);
//         }
//         inner(i)
//       }
    
// }
// test()





// You can create a function within an outer function (a closure) that 
// allows you to update a private variable but the variable wouldn't be accessible 
// from outside the function without the use of a helper function.


// function outer() {

//     var x = 10;
    
//     function inner() {
    
//     var y = 5;
    
//     console.log(x + y);
    
//     x = 20;
//     // function we have to define data type because on call stack without complete we cannot change the contet
    
//     }
    
//     return inner;
    
//     }
    
//     var innerFunc = outer();
    
//     innerFunc();
    
//     innerFunc();






    function outer() {

        var x = 10;
        
        function inner() {
        
        var y = 5;
        var x = 20;
       
        console.log(x + y,x);
        
        }
        inner ();
        // var x = 20;
        
        
        
        }
        
        var innerFunc = outer();
        
        // innerFunc();

// var is hoisted in function scope but the value is undefined  varx = undefnied but if he got x present in outer funtion

// it will take it from there not undefied but if value is not undefnied it first poririt y is inner function





        // function outer() {

        //     var x = 10;
            
        //     function inner() {
            
        //     var y = 5;
            
        //     console.log(x + y);
            
        //     }
            
        //     return inner;
            
        //     }
            
        //     var innerFunc = outer();
            
        //     innerFunc();




            // function outer() {

            //     var x = 10;
                
            //     function inner() {
                
            //     console.log(x);
                
            //     }
                
            //     x = 20;
                
            //     return inner;
                
            //     }
                
            //     var innerFunc = outer();
                





