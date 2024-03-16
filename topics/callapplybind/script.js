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

