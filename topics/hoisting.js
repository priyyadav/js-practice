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



// function doSomething(a) {
//     console.log(a,b)
// 	b = a + doSomethingElse( a * 2 );

// 	console.log( b * 3 );
// }

// function doSomethingElse(a) {
// 	return a - 1;
// }

// var b;

// doSomething( 2 ); // 15



// function foo() {
// 	function bar(a) {
// 		var i = 3; // changing the `i` in the enclosing scope's for-loop
// 		console.log( a + i );
// 	}

// 	for (var i=0; i<10; i++) {
// 		bar( i * 2 ); // oops, infinite loop ahead!
// 	}
// }

// foo();


// undefined = true; // setting a land-mine for other code! avoid!

// (function IIFE( undefined ){

// 	var a;
// 	if (a === undefined) {
// 		console.log( "Undefined is safe here!" );
// 	}

// })();


// var foo = true, baz = 10;

// if (foo) {
// 	var bar = 3;

// 	// ...
// }

// if (baz > bar) {
// 	console.log( baz );
// }

console.log([]+[],"arrt")
console.log({}+{},"obj")


console.log([1,3]+[4,5],"arrt")
console.log({a:1}+{b:2},"obj")
console.log(1+1)
console.log("1"-1)
console.log("1"*1)
console.log("1"/1)
console.log("a"+"1")
console.log("a"-"1")
console.log("a"*"1")
console.log("a"/"1")
console.log("100"/0)
console.log("100"+0)

