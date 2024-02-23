// function aa()
// {
//     return "hello"
// }

// const ab=new aa();
// console.log(ab)

// let person = { name: "rohan" };
// const member = [person]; //we are just changing the index not a property
// person = null;

// console.log(member);

let person1 = { name: "rohan" };
const member1 = [person1]; //we are just changing the index not a property
person1.name = null;

console.log(member1);