// "use strict";


console.log(this) 

// global object different in browser and node js at that what will be global object it indicates that




function aa()
{
    // this depend on strict and not -strict mode
    console.log(this) 
    // why global object because 
    // strict mode this will be undefied

    // non strict mode this will be window object because there is a phenomena this substittuion
    // if value anythin this keyword value is undefined or null javasxript willl be replaced
    //   undefined or null with window object

}

aa()

//  value of this keyword depends in how this is called(window)

// aa() window object because there is not reference to object aa present in window object

window.aa()

//  here reference is window object



//  this inside object

// diff between function and method if we write a function inside object it is method for object

// obj={

//     a:10,
//     x: function()
//     {
//         console.log(this)
//     }



// }
// obj.x()

//  this this referr to object because it is called on object referenect



// function aaa()
// {
//     console.log(this)
//     return function bbb()
//     {
//         console.log(this)
//     }
// }

// aaa()();


// function aaa() {
//     console.log(this); 
//     return function bbb() {
//         console.log(this,"this"); 
//     };
// }

// new aaa()(); 


// function aaa() {
//     console.log(this); 
//     return function bbb() {
//         console.log(this,"this"); 
//     };
// }

// new (new aaa())();

// function text()
// {
//     return "helo"
// }
// let a=new text();
// console.log("a",a)


//  when we use new keyword it create e object add the thing in that oject function is like object thir refere to funtion 
// because inn
// internal it create a object in that object this is associtated  and contructor will call add al the portoype

// function text()
// {
//     console.log(this,"th")
//     return {"priyanka":"yadav"}
// }
// let a=new text();
// console.log("a",a)





// obj={

//     a:10,

//     obj2:
//     {

//     b: 100,
//      y: function()
//      {
//         console.log("y", this)
//      }
//     },
//     x: function()
//     {
//         console.log(this,"x")
//     }



// }
// obj.x()
// obj.obj2.y()






obj={

    a:10,

    obj2:
    {

    b: 100,
     y: function()
     {
        console.log("y", this)
     }
    },
    x: function()
    {
        console.log(this,"x")
    }



}
obj.x()
obj.obj2.y()


// If you want the arrow function y inside obj.obj2 to have its 
// this refer to the obj2 object instead of the global object, you should not use an arrow function for y.
//  Arrow functions inherit this from the lexical scope,
//  which in this case is the global scope where obj is defined.


// function createObj() {
//     let obj = {
//         a: 10,
//         th: this,
//         obj2: {
//             b: 100,
//             y: () => {
//                 console.log("yhh", this);
//                  // 'this' here will refer to the lexical scope of createObj
//                  // 'this' here will refer to the lexical scope of createObj
//             }
//         },
//         x: function() {
//             console.log(this, "xjj");
//         }
//     };

//     obj.x(); // Logs: { a: 10, obj2: { b: 100, y: [Function: y] }, x: [Function: x] } "x"
//     obj.obj2.y(); // Logs: undefined "y" (Arrow function 'y' inherits 'this' from the lexical scope of createObj)
// }

// createObj(); // Call the function to create and use the object




// let obj = {
//     a: 10,

//     x: function() {
//         // ḷexical scoping context inherit from parent
//         let y= ()=>
//         {
//             console.log(this, "xjj");
//         }
//         y()
//     }
// };

// obj.x(); 



//  this on dom reference to html button where it clickor sit


// 
// function aaa() {
//     console.log(this); 
//     return ()=> {
//         console.log(this,"this"); 
//     };
// }
// new aaa()()