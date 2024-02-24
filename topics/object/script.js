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










// Object references and copying :-     One of the fundamental differences
//  of objects versus primitives is that objects are stored and copied “by reference”, 
//  whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.
// A variable assigned to an object stores not the object itself, but its 
// “address in memory” – in other words “a reference” to it.

// let message = "Hello!";
// let phrase = message;    //both have same value but both store in diffrent addresh 
// delete message;
// console.log(phrase);




// // Comparison by reference :-   Two objects are equal only if they are the same object.

// let a = {};
// let b = a; // copy the reference
// alert(a == b); // true, both variables reference the same object
// alert(a === b); // true, both variables reference the same object and the same type

// let c = {};
// let d = {}; // two independent objects
// alert(c == d); // false
// let person = { name: "rohan" };
// const member = [person]; 
// person = null;

// console.log(member);




// // // Object references and copying :-     One of the fundamental differences of objects versus primitives
//  is that objects are stored and copied “by reference”, whereas primitive 
//  values: strings, numbers, booleans, etc – are always copied “as a whole value”.
// // // A variable assigned to an object stores not the object itself, 
// but its “address in memory” – in other words “a reference” to it.

// let message = "Hello!";
// let phrase = message;    //both have same value but both store in diffrent addresh 
// delete message;
// console.log(phrase);


// // Comparison by reference :-   Two objects are equal only if they are the same object.

// let a = {};
// let b = a; // copy the reference
// alert(a == b); // true, both variables reference the same object
// alert(a === b); // true, both variables reference the same object and the same type

// let c = {};
// let d = {}; // two independent objects
// alert(c == d); // false



// // Cloning and merging, Object.assign  :-   copying an object variable creates one more reference to the same object.

// let user = {
//     name: "John",
//     age: 30
// };

// let clone = {};     // the new empty object
// // let's copy all user properties into it
// for (let key in user) {
//     clone[key] = user[key];
// }

// // now clone is a fully independent object with the same content
// clone.name = "Pete"; // changed the data in it
// console.log(user.name); // still John in the original object



// // Nested cloning   :-  Until now we assumed that all properties 
// of user are primitive. But properties can be references to other objects.

// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };

// console.log(user.sizes.height); // 182


// let user1 = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };
// let clone = Object.assign(user1, user);
// object.assing create a shallow copy but not for nest if has nnested object or array it pass by refernce

// you have two objects: user and user1. When you use Object.assign(user1, user), you're 
// creating a shallow copy of the properties from user and merging them into user1. However, 
// this copy only affects the top-level properties, not nested objects like sizes.
// user.name="priyanka";
// console.log(user1,"user1","user" ,user,"clone",clone)
// user.name="priyanka";
// console.log(user.sizes === clone.sizes); true it mean it onlt refernce to object
// console.log(user.name === clone.name); true
// true, same object
// console.log(user === clone); // false, same object
// console.log(user1===clone)
// user1.name="priyanka"
// console.log(user1,clone) store reference in it
// user and clone share sizes
// it means 
// user.sizes.width = 60;    // change a property from one place
// console.log(clone.sizes.width); // 60, get the result from the other one


// The structuredClone() method in JavaScript provides a way to create
//  a deep copy of an object, meaning it copies all its
//   properties and nested structures independently

// // structuredClone :-   The call structuredClone(object) clones the object with all nested properties.

// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };

// let clone = structuredClone(user);
// console.log(user.sizes === clone.sizes); // false, different objects
// // user and clone are totally unrelated now
// user.sizes.width = 60;    // change a property from one place
// console.log(clone.sizes.width); // 50, not related



// Garbage collection :-    when an object is no longer referenced by any code in your program, it becomes eligible

// Declare an object 
// var object_1 = {
//     object_2: {
//         object_3: 7
//     }
// };
// console.log("1", object_1)
// // In this example, create two objects 
// // One object is referred by another  
// // as one of its properties. Currently,  
// // none can be garbage collected 

// // The "object_4" variable is the second 
// // thing that has a reference to the object 
// var object_4 = object_1;
// console.log("4", object_4)
// // The object that was originally in  
// // "object_1" has a unique reference  
// // embodied by the "object_4" variable 
// object_1 = 1;

// //Reference to "object_2" property of 
// // the object. This object now has 2  
// // references: 1 as a property, 
// // The other as the "object_5" variable. 
// var object_5 = object_4.object_2;
// console.log("5", object_5)
// // The object that was in "object_1" has 
// // now zero references to it. It can be  
// // garbage-collected. However its "object_2" 
// // property is still  referenced by the 
// // "object_5" variable, so it cannot be freed. 
// object_4 = "Geeks For Geeks";

// // Now the "object_2" property has no  
// // references to it and hence it can 
// // be garbage collected. 
// object_5 = null;

// console.log(object_1)
// // console.log(object_2)
// // console.log(object_3)
// console.log(object_4)
// console.log(object_5)

// const target = { a: 1, b:2 };
// const source = {a : 3 , c : 4 };

// const s2 = { z:12 };

// const returnVal  = Object.assign(target,source,s2);

// console.log(target);   
// console.log(source);
// console.log(returnVal);
// console.log(target===returnVal); true





// Object.prototype.myAssign = function(...args) {

//     var target = args[0];
//     for(var i=1; i<args.length;i++){
//         var source = arguments[i];
        
//         for(var key in source) {
//             console.log(source,"source")
//             console.log('key' , key);
//             if(Object.prototype.hasOwnProperty.call(source,key))  // this check is important !!! 
//                 target[key] = source[key];
//         }
//     }

//     return target;
// }


// console.log(myAssign(target,source,s2));




// spred operator

// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };

// let a={...user}
// a.name="priyanka"
// a.sizes.height=50;
// console.log(a, user)


// spread syntax only performs a shallow copy. This means that nested objects are copied by reference, not by value.
// If the user object has any nested objects, those objects will be shared between the user and a objects.

// console.log(a===user,"k")


// console.log(JSON.stringify(user))  gives object in readbale form
// console.log(user.toString()) gives [object object]

// deep copy

// Creates a deep copy by converting the object to a JSON string and then parsing it back into an object.

// let copy3 = JSON.parse(JSON.stringify(user));
// console.log(copy3); // Output: { name: "John", age: 30, address: { city: "Los Angeles", state: "NY" } }

// Modifying the nested object in the copy doesn't affect the original
// copy3.address.state = "CA";
// console.log(user); // Output: { name: "John", age: 30, address: { city: "Los Angeles", state: "NY" } }

// object.create


let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

// let a=Object.create(user); create a new object we pass as prottoypt object


// When you call Object.create(user), a new empty object (a) is created.
// However, the key difference from using {} is that a doesn't inherit properties directly from the user object.
// Instead, a's internal prototype ([[Prototype]]) is set to point to the user object. This means that a will search for 
// properties in the user object if they are not found directly on a itself.




// I'd be glad to explain how let a = Object.create(user); works behind the scenes in JavaScript:

// 1. Creating the Prototype Object:

// When you call Object.create(user), a new empty object (a) is created.
// However, the key difference from using {} is that a doesn't inherit properties directly from the user object.
// Instead, a's internal prototype ([[Prototype]]) is set to point to the user object. 
// This means that a will search for properties in the user object if they are not found directly on a itself.
// 2. Prototype Chain Mechanism:

// When you try to access a property of a, JavaScript follows a specific order to find the value:
// Direct Properties: First, it checks if the property exists directly on a.
// Prototype Chain: If not found on a, it looks for the property in a's prototype (user).
// Prototype Chain Traversal: If the property is still not found, JavaScript continues climbing
//  the prototype chain, searching in the prototypes of user (if any).
// Object.prototype: If the property is not found anywhere in the prototype chain, the search ends 
// at the built-in Object.prototype.

// console.log(a.name); // Output: "John" (Found in the prototype, user)
// console.log(a.sizes); // Output: { height: 182, width: 50 } (Found in the prototype, user)
// console.log(a.hasOwnProperty("name")); // Output: false (Property is not directly on a)
// console.log(a)


// let b=new Object() object contruvtor



const normalobject = Object.create(null);

console.log(normalobject)
normalobject.name = 'utkarsh';
normalobject.class = '12th';

for(let key in normalobject) {
    console.log(key);
}

const ab = {};
ab.name = 'utkarsh';
ab.class = '12th';
console.log(ab)
for(let key in ab) {
    console.log(key);
}


// The main difference between normalobject and ab lies in their prototypes. 
// normalobject has its prototype explicitly set to null, while ab inherits the
//  default prototype chain from the Object constructor. This means that if you try to access properties that don't 
// exist on ab directly, it might search for them in the prototype chain.




const obj1 = {};

Object.defineProperty(obj1, 'a', {
    value: 5,
    writable: false,
    configurable: false,
    enumerable: true,
});
Object.defineProperty(obj1, 'b', {
    value: 5,
    writable: false,
    configurable: false,
    enumerable: true,
});

obj1['c'] = 'aaa';

delete obj1.a;
console.log(obj1['c']);
console.dir(Object.keys(obj1));


// configurable
// true if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.
// Defaults to false.

// enumerable
// true if and only if this property shows up during enumeration of the properties on the corresponding object.
// Defaults to false.

// A data descriptor also has the following optional keys:

// value
// The value associated with the property. Can be any valid JavaScript value (number, object, function, etc).
// Defaults to undefined.

// writable
// true if the value associated with the property may be changed with an assignment operator.
// Defaults to false.






let obj = {
    name: "Abhishek Chauhan",
    class: 10,
    age: 20
}

// Property flags and descriptors


// Property flags :-    Object properties, besides a value, have three special attributes (so-called “flags”):
// writable – if true, the value can be changed, otherwise it’s read-only.
// enumerable – if true, then listed in loops, otherwise not listed.
// configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.

// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName, descriptor);

const descriptorOfName = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptorOfName, "orginal property descriptoe");


// 1. writable
// descriptorOfName.writable = false; // making it non-writeable
// console.log("After changing writability of 'name' to false : ", descriptorOfName)

// or

// Object.defineProperty(obj, "name", {
//     writable: false,
// });
// console.log("After changing writability of 'name' to false : ", Object.getOwnPropertyDescriptor(obj, "name"));

// obj.name = "Abhi";
// console.log(obj);

//  it will not change main object


// 2. enumerable:-  if true, then listed in loops, otherwise not listed. 
// we can't see the that  property in for...in loop but we can see in for...of loop.

// Object.defineProperty(obj, "name", {
//     enumerable: false,
// });

// for (let key in obj) {
//     console.log(key, "enum");
// }


// for (let key of obj) {
//     console.log(key, "enum");
// }


// 3. configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
Object.defineProperty(obj, "name", {
    configurable: true,
});
delete obj.name;
console.log(obj, "after the delete");

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// or

