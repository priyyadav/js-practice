// let obj=
// {
//     a: 10,
//     print()
//     {
//      console.log(this.a)
//     }
// }

// obj.print();

// let obj2=
// {
//     a: 100,
//     print()
//     {
//      console.log(this.a)
//     }
// }
// obj.print.call(obj2);



// function print(b,c)
// {
//     // console.log(args,"args") it will through error
//  console.log(this.a,b,c)
// }

// let obj=
// {
//     a: 10,
// }

// print.call(obj);

// let obj2=
// {
//     a: 100,

// }
// print.call(obj2,10,12);

// print.apply(obj,[10,12])

// let newf=print.bind(obj2);

// newf(10)







// function SetUsername(username){
//     //complex DB calls
//     this.username = username
//     console.log("called");
// }

// function createUser(username, email, password){
//     SetUsername.call(this, username)
   
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai);









// function sayHello(){
//     return "Hello " + this.name;
//   }
  
//   var obj = {name: "Piyush"};
  
// //   it will bind obj to say hello  this this will point to object

//   sayHello.call(obj); //Hello Piyush



//   basically we use a bind() method to call a function with this value. Let's see our initial code in action using bind().


// function sayHello(){
//   return "Hello " + this.name;
// }

// var obj = {name: "Piyush"};

// const helloFn = sayHello.bind(obj);

// console.log(helloFn());







// const person = { name: 'Piyush' };

// function sayHi(age) {
//   return `${this.name} is ${age} years`;
// }

// console.log(sayHi.call(person, 24));   return 24
// console.log(sayHi.bind(person, 24));  return function





// const age = 10;
// var person = {
//     name: "Piyush",
//   age: 20,
//   getAge: function(){
//     return this.age;
//   }
// }

// var person2 = {age:  24};
// console.log(person.getAge.call(person2)) 



// const age = 10;
// var person = {
//     name: "Piyush",
//   age: 20,
//   getAge: function(){
//     return this.age;
//   }
// }

// var person2 = {age:  24};
// console.log(person.getAge.apply(person2)) 


// const age = 10;
// var person = {
//     name: "Piyush",
//   age: 20,
//   getAge: function(){
//     return this.age;
//   }
// }

// var person2 = {age:  24};
// console.log(person.getAge.bind(person2)()) 






// var status = '😎';

// setTimeout(() => {
//   const status = '😍';

//   const data = {
//     status: '🥑',
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus());
// //   console.log(data.getStatus.call(this));   this means on which we are here settimeout is this is refrence is window
// }, 0);



// const animals = [
//     { species: 'Lion', name: 'King' },
//     { species: 'Whale', name: 'Queen' }
//   ];
  
//   function printAnimals(i) {
//       this.print = function() {
//         console.log('#' + i + ' ' + this.species
//                     + ': ' + this.name);
//       }
//       this.print();
//     }

//     for (let i = 0; i < animals.length; i++) {
//         printAnimals.call(animals[i], i); 
//       }


// const array = ['a', 'b'];
// const elements = [0, 1, 2];
// // array.push(elements);

// array.push.apply(array, elements)









// const numbers = [5, 6, 2, 3, 7];

// // using Math.min/Math.max apply

// let max = Math.max.apply(null, numbers); // equal to Math.max

// let min = Math.min.apply(null, numbers); // equal to Math.min 

// // vs. simple loop based algorithm

// max = -Infinity, min = +Infinity;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }


function printThis(params) {
    console.log(this);
}

let anotherObj = {k : 10}

let obj = {

    a: 10,
    b: 20,
    c: printThis,
    d: function (params) {
        console.log(this)
        // printThis(); // gives window obj]
        this.x = this.c.bind(anotherObj);
        this.x();
        // this.c(); // gives obj 
        // console.log(this.c == printThis);
    }
}

// obj.d()
obj.c()

// what will this print // now we can expect that it will print obj object but it will print anotherObject object.
// why is that ? 

// once a function is made by bind it always bind to that part only. so normal rules does not apply.
// obj.x()

function f()
{
    console.log(this)
}

let user = {
    g: f.bind(null),
}

user.g(); // refers to window obj
