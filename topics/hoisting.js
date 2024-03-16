// let a=10; 
// var b=10;
// const c=10;



// scoping

// not defined error

// console.log(text)



// undefined and function


// console.log(test);
// console.log(data)
// var data=1;
// function test()
// {
//     console.log("hello")
// }


// function foo() {
// 	var a = 2;

// 	function bar() {
// 		console.log( a );
// 	}

// 	return bar;
// }

// var baz = foo();


// baz();





// function bar() {
//     console.log( a );
// }


// ```: Inside the `foo` function, another function named `bar` is defined. This function 
// `bar` has access to the `a` variable due to lexical scoping rules. This means that `bar`
//  has access to the variables defined in its containing scope, which in this case is the `foo` function.
// function wait(message) {

// 	setTimeout( function timer(){
// 		console.log( message );
// 	}, 1000 );

// }

// wait( "Hello, closure!" );



// let a = 2;

// (function IIFE(){
// 	console.log( a );
// })();



// foo(); 

// var a = true;
// if (a) {
//    function foo() { console.log( "a" ); }
// }
// else {
//    function foo() { console.log( "b" ); }
// }



// foo(); // 3

// function foo() {
// 	console.log( 1 );
// }

// var foo = function() {
// 	console.log( 2 );
// };

// function foo() {
// 	console.log( 3 );
// }



// let foo;

// function foo() {
// 	console.log( 1 );
// }


// foo = function() {
// 	console.log( 2 );
// };

// foo()

// function foo() {
// 	console.log( 1 );
// }

// foo(); 


// foo = function() {
// 	console.log( 2 );
// };

