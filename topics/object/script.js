// function aa()
// {
//     return "hello"
// }

// const ab=new aa();
// console.log(ab)

// let person = { name: "rohan" };
// const member = [person]; 
// person = null;

// console.log(member);

// let person1 = { name: "rohan" };
// const member1 = [person1]; 
// person1.name = null;

// console.log(member1);

// Object :-    objects are used to store keyed collections of various data and more complex entities.
// In JavaScript, an object can be created using a literal notation or by constructor function.

// Literals and properties  

// const abhi = {
//     name: "Abhishek",
//     age: 23,
// }


// // // get
// console.log(abhi);
// console.log(abhi.name);
// console.log(abhi["age"]);


// // edit or update
// abhi.name = "Abhishek Chauhan";
// abhi.class = 10;  // this will add the property 'class' in the object is there class already in object it will update classs other wise create new key and value
// console.log(abhi);

// // // delete
// delete abhi.age;
// console.log(abhi["age"]);  undefined


// You get null when you explicitly set a variable's value to null or when a method returns null.
// You get undefined when you try to access a variable that has been declared but not assigned a 
// value, when you try to access a nonexistent object property, or when a function doesn't return a value explicitly.
// It's important to note that in JavaScript, both null and undefined are falsy values, 
// which means they evaluate to false in a boolean context.



// // Computed properties :-   We can use square brackets in an object literal, when creating an object. That’s called computed properties.

// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {
//     [fruit]: 5, // the name of the property is taken from the variable fruit
// };
// alert(bag.apple);


