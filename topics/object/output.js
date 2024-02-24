let a=3;
let b = new Number(3); 
let c=3;
console.log(b)
console.log(a == b);
 console.log(a === b); 
 console.log(b === c);



//  ---------------------

const telegramGroup = {
    name: 'TeamDevkode'
 }
 const { name: TDK } = telegramGroup;
 
 console.log(TDK);


//  The second line performs destructuring assignment.
//   It extracts the value of the name property from telegramGroup and assigns it to a new variable named TDK.
// The key point here is that the property name (name) 
// is used as a key to access the value, but a different name (TDK) is used to store the extracted value.



let myName = 'Sunny';
let groupName = myName;

myName = 'DevKode';
console.log(groupName);


const obj1 = {
    id:1,
    name:"Sunny",
}

const obj2 = obj1;
obj2.name = 'DevKode';
console.log(obj1);


// ----------------------------




function greet(person) {
    if (person == { name: 'Narendra Modi' }) {
      return 'hey Narendra Modi'
    } else {
      return 'hey Donald Trump'
    }
  }
  
console.log(greet({ name: 'Narendra Modi' }))



// ------------------

const sample = ["xyz", "abc", "test", "ryan", "apple"];
delete sample[3];
console.log(sample.length);
console.log(sample[3])



// However, deleting elements from arrays using delete is not
//  recommended in JavaScript because it doesn't actually remove the element from the array's
//   underlying storage. Instead, it leaves a "hole" in the array,
//  and the length property might not accurately reflect the number of actual elements.



const fruits_obj = { 0 : "apple" , 1 : "mango" ,  2:"banana"};
const fruits_arr = ["apple","mango", "banana"];

console.log(typeof fruits_obj);
console.log(typeof fruits_arr);
console.log(fruits_obj == fruits_arr);
function aa()
{
    return "hello"
    
}
console.log(typeof aa)