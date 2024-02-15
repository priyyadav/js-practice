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

const user = {
    firstName: 'Piyush!',
    getName() {
      const firstName = 'Jen!';
      return this.firstName;
    }
  };
  console.log(user.getName()); // What is logged?
  