// var a = 5

//  global object all over and access
//  var is assoiciated with global object
// console.log(this.a);

//  let and const  is assoiciated with script object
// let b=5;
// console.log(this.b)

//

this.a = 5;
// function test()
// {
//     console.log(this.a)
// }
// test()

// const user = {
//      name: 'Piyush Agarwal!',
//      logMessage()
//       { console.log(this,"i");
//       } };

// // user.logMessage()
// setTimeout(user.logMessage, 1000);

// const obj2 = {
//     a: 10,
//     getuser() {
//         console.log(this);
//     },
//     letuser: () => {
//         console.log(this);
//     }
// };

// obj2.getuser();
// obj2.letuser()

// const obj2 = {
//     a: 10,
//     getuser() {
//         console.log(this);
//         b:90;
//         this.f=function()
//         {
//             console.log("letin",this);
//         }
//         this.f()

//     },
//     letuser: () => {
//         console.log(this);
//     }
// };

// obj2.getuser();
// obj2.letuser()

// const obj2 = {
//     a: 10,
//     getuser() {
//         console.log(this);
//         b:90;
//         f=function()
//         {
//             console.log("letin",this);
//         }
//         f()

//     },
//     letuser: () => {
//         console.log(this);
//     }
// };

// obj2.getuser();
// obj2.letuser()

//  normal function it call on any reference then it will point to that object but it will not point any referent then
// it will for window object

// arrow function looks for parent funtion this it parent refer to any object thwn arrow function have same this keywor

// const obj2 = {
//     a: 10,
//     getuser() {
//         console.log(this);
//         b:90;
//         f=()=>
//         {
//             console.log("letin",this);
//         }
//         f()

//     },
//     letuser: () => {
//         console.log(this);
//     }
// };

// obj2.getuser();
// obj2.letuser();

// const obj2 = {
//   a: 10,
//   getuser() {
//     console.log(this);
//     b: 90;
//     f = () => {
//       console.log("letin", this);
//     };
//     f();
//   },
//   letuser: () => {
//     console.log(this);
//   },
// };

// obj2.getuser();
// setTimeout(obj2.getuser, 1000);

// .obj2.getuset as a callback not obj method

// how this is working not know

// setTimeout(function () {
//   obj2.getuser;
// }, 1000);

// here it is called as obj method

// obj2.letuser();

// function test() {
//   let obj = {
//     a: "ko",

//     grt: () => {
//       console.log(this, "lol");
//     },
//   };
//   obj.grt();
// }
// test();

//  00

// var length = 4;
// function callback() {
//   console.log(this.length);
// }
// const object = {
//   length: 5,
//   method(callback) {
//     callback();
//   },
// };
// object.method(callback, 1, 2);

//  window object

// var length = 4;
// function callback() {
//   console.log(this.length);
// }
// const object = {
//   length: 5,
//   method() {
//     arguments[0]();
//   },
// };
// object.method(callback, 1, 2);

// 3 [callback,1,2] it refer to array length

// var calc = {
//   total: 0,
//   add(a) {
//     this.total += a;
//     return this;
//   },
//   subtract(a) {
//     this.total -= a;
//     return this;
//   },
//   multiply(a) {
//     this.total *= a;
//     return this;
//   },
// };

// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total);

//

// const user = {
//   name: "Piyush",
//   greet() {
//     return `Hello, ${this.name}!`;
//   },
//   farewell: () => {
//     return `Goodbye, ${this.name}!`;
//   },
// };
// console.log(user.greet()); // What is logged? 
// console.log(user.farewell()); // What is logged?



// 


// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }
  
//   let userf = makeUser();
  
//   alert( userf.ref.name ); // What's the result?
// console.log(userf)



// function makeUser() {
//     return {
//       name: "John",
//       refj(){
//               return this
//       } 
//     };
//   }
  
//   let userf = makeUser();
  
// //   alert( userf.ref.name ); // What's the result?
// console.log(userf.refj.name,"kohs" )
// console.log(userf.refj().name,"ko" )



// 

// const user = {
//     firstName: 'Piyush!',
//     getName() {
//       const firstName = 'Jen!';
//       return this.firstName;
//     }
//   };
//   console.log(user.getName()); // What is logged?

//   function hi()
//   {
//     setTimeout(()=>
//     {
//       console.log(this.name ,"ko")
//     },1000)
//   }

//   hi.call({name:"priyank"})
  





//   Yes, you're correct. In JavaScript, when a function is defined, it captures its surrounding
//    context, including the value of this at the time of its definition. This captured context is retained 
//   even if the function is called in a different context (like as a callback to setTimeout), 
//   creating a closure over that context.

// However, when a method of an object is passed as a callback, it loses its original context 
// (the object it belongs to) unless you explicitly bind it or use arrow functions. This 
// is because functions in JavaScript are not bound to any specific context by default 
// when passed as callbacks; their this context depends on how they are called.

// Here's a summary:

// Functions (including anonymous functions) retain their context (closure)
//  when defined, so their this context remains intact even when called as callbacks, unless explicitly bound.

// Methods of objects, when passed as callbacks, lose their context. If you want 
// to maintain the context of the object within the method, you need to bind the method
//  to the object or use arrow functions, which capture the this value lexically.



// function hi()
// {
//   console.log(this)
//   return ()=>
//   {
//     console.log(this,"this")
  
//     setTimeout(()=>
//     {
//       console.log(this.name ,"ko",this)
//     },1000)
//   }

// }

// let a=hi.call({name:"priyank"})
// console.dir(a)
// a()



// function hi()
// {
//   console.log(this)
//   return function y()
//   {
//     console.log(this,"this")
  
//     setTimeout(()=>
//     {
//       console.log(this.name ,"ko",this)
//     },1000)
//   }

// }

// let y=hi.call({name:"priyank"})
// console.dir(y)
// y()



// function hi() {
//   console.log(this); 
  
//   return function y() {
//     console.log(this, "this"); 
//     setTimeout(() => {
//       console.log(this.name, "ko", this); 
//     }, 1000);
//   }
// }

// let y = hi.call({name: "priyank"});
// console.dir(y); 
// y();


// function hi() {
//   console.log(this); // Logs {name: "priyank"}

//   return function y() {
//     console.log(this, "this"); // Logs {name: "priyank"} (closure created)
//     setTimeout(function() { // Use regular function to bind "this"
//       console.log(this.name, "ko", this); // Logs "priyank", "ko", {name: "priyank"}
//     }, 1000);
//   };
// }

// let y = hi.call({name: "priyank"});
// console.dir(y); // Logs Function y bound to {name: "priyank"}
// y();    



function hi({name}) {
  console.log(this,"hi"); // Logs undefined, as there's no explicit context passed
  const self = this; // window

  return function y() {
    console.log(this, "this"); 
    setTimeout(function() {
      console.log(self.name, "ko", self); 
    }, 1000); 
  };
}

let y = hi({name: "priyank"});
console.dir(y); // Logs Function y
y(); // Logs "priyank ko { name: 'priyank' 




// You're correct. In JavaScript, the value of this within a closure is not determined by lexical 
// scope, but rather by how the function containing the closure is called.

// Let's clarify:

// Lexical Scope: Refers to how variable names are resolved in nested functions. Inner functions
// have access to variables in their outer scope, even after the outer function has finished executing.
//  This is what allows closures to "close over" variables and retain access to them.

// this Binding: The value of this is determined by how a function is called, not where the function 
// is defined. Regular functions (not arrow functions) get their this value dynamically based on the context of the function call.

// In the context of a closure, the value of this is not determined by lexical scope, but rather by 
// the context in which the outer function is called. This means that this inside a closure will 
// typically refer to the global object (in non-strict mode) or undefined (in strict mode), unless the outer function was called 
// with a specific context using methods like call, apply, or bind.