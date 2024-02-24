// function setName() {
//     this.name = 'devkode';
//  }
//  setName();
//  console.log(this.name);


//  function fun(num1) {
//     var num2 = 6;
//     function TDK() {
//         var num3 = 10;
//         console.log(num1 * num2 * num3)
//     }
//     return TDK;
// }

// var TeamDevKode = fun(5)
// TeamDevKode ()


// const animal = {
//     animal_name: "cat",
//     action: function () {
//       console.log(`${this.animal_name} is doing action`);
//     }
//   };
  
// setTimeout(animal.action, 1000);

// const animal = {
//     animal_name: "cat",
//     action: function () {
//       console.log(`${this.animal_name} is doing action`);
//     }
//   };
  
//   setTimeout(function () {
//     animal.action();
//   }, 1000);




//   const animal = {
//     animal_name: "cat",
//     action: function () {
//       console.log(`${this.animal_name} is doing action`);
//     }
//   };
  
// //   let func = animal.action.bind(animal);
// //   setTimeout(func, 1000);
  
// setTimeout(animal.action.call(animal),1000)



// function getFunc() {
//     let value = "Hey !";
  
//     let func = new Function("console.log(value)");
//   console.log(func,"gu")
//     return func;
//   }
 
// //   getFunc()();
  
  

// function getFunc() {
//     let value = "Hey !";
  
//     let func = new Function("console.log(value)");
//   console.log(func,"gu")
//     return func;
//   }

//   when you're using the new Function() constructor,
//  it creates a new function in the global scope, not within the scope where it was defined.

//   getFunc()();

// function bb()
// {
//     console.log("i")
// }
// ba=new bb()
// console.log(ba)



// function getFunc() {
//     let value = "Hello Friends !";
//     let func = () => {
//       alert(value);
//     };
//     return func;
//   }
  
//   getFunc()();
  


// x = 1;
// function func() {
//   this.x = 2;
//   return x;
// }
// let a = new func();
// console.log(a)
// console.log(a.x);

// let arr = Array.from(Array(10).keys());
// function func(a) {
//   console.log(arguments.length);
// }
// func(arr);
// func(...arr);


// While the code attempts to modify arguments[1], it does not actually change the value of 
// the original b argument passed to the function. This is because JavaScript functions create their own local scope, and 
// changes made to the arguments object within the function do not affect the variables outside the function.


// function func(a, b) {
//     arguments[1] = 2;
//     console.log(b);
//   }
//   func(1);




// var x = 3;
// var obj = {
//   x: 2,
//   foo: {
//     x: 1,
//     bar: function () {
//       return this.x;
//     },
//   },
// };
// var func = obj.foo.bar;
// console.log(func());
// console.log(obj.foo.bar())
// this if window object whatever on window object it will look for it



// var foo = function foo() {
//     console.log(foo)
//     console.log(foo)
//     console.log(foo === foo);
// };



//   foo();


function getAge() {
    'use strict';
    age = 21;
    console.log(age);
  }
  
  getAge();
//   reference error



const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);



// hasOwnProperty Method:

// The lines obj.hasOwnProperty('1'); and obj.hasOwnProperty(1); both use the hasOwnProperty method of the object obj. 
// This method checks whether an object has a property with a specific name or key.
// obj.hasOwnProperty('1');: Checks if obj has a property with the key "1"
//  (a string). Since the object has a property named "1", this returns true.
// obj.hasOwnProperty(1);: Checks if obj has a property with the key 1 
// (a number). JavaScript automatically converts the number 1 to a string 
// "1" when using property access, so this also returns true.
// has Method:

// The lines set.has('1'); and set.has(1); both use the has method of the set set. 
// This method checks whether the set contains a specific value.
// set.has('1');: Checks if set contains the value "1" (a string). Since "1" is not present in the set, this returns false.
// set.has(1);: Checks if set contains the value 1 (a number). Sets store values by 
// their coerced string representation, so this checks for 
// the string "1". Since 1 is present in the set, this returns true.



var num = "10";
(function () {
	console.log(num);
  var num = "50";
  console.log(num);}
  )();