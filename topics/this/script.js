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

