// function create(username, score) {
//   console.log(this);
//   this.username = username;
//   this.score = score;
// }
// create.prototype.increment = function () {
//   this.score++;
// };
// create.prototype.print = function () {
//   console.log("score", this.score);
// };
// let chai =  create("p", 10);
// console.log(chai);
// console.log(create.prototype);
// chai.print();

/*
 here this will refer to window object because always looks for parent here for funtion parent is window so this is refer to window
 we are added new method increment and print it also present when we check for create prortype
 but when we can and intialzed and call then they dont know know this property for this we have to create a new object 
 instance using property new keyword
*/



function create(username, score) {
    console.log(this);
    this.username = username;
    this.score = score;
  }
  create.prototype.increment = function () {
    this.score++;
  };
  create.prototype.print = function () {
    console.log("score", this.score);
  };
  let chai = new create("p", 10);
  console.log(chai);
  console.log(create.prototype);
  chai.print()


//  here this is refer to create object because using new keyword it will create a new object and also give this property and it links 
//  all its properyt to constructor





