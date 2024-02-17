// calculate sum(1)(2)(3)
// all three are coming from different api, i want all value must be present then it will return a value


// function sum(a)
// {
//     return function(b)
//     {
//          return function(c)
//          {
//             return a+b+c
//          }
//     }
// }
// console.log(sum(1)(2)(3))
// console.log(sum.length)

function curry(func) {
    // args takes arguments in the form of array eg - [a, b, c]
    return function curriedFunc(...args) {
      //check if current args passed equals the number of args function expects 
      console.log(func.length,"a", args.length,"b")
      if(args.length >= func.length) {
        // if yes, we spread args elements to pass into func (spread). This is our base case.
        return func(...args)
      } else {
        /* if not, we return a function that collects the next arguments passed in next and 
        we recursively call curriedFunc, accumulating and spreading the values of args first and then
        the values of next. next will take into consideration a variable amount of next arguments
        e.g (1, 2) (1) (1,2,3) */
        return function(...next) {
          return curriedFunc(...args,...next);
        }
      }
    }
  }
  
  const join = (a, b, c) => {
     return `${a}_${b}_${c}`
  }
  const curriedJoin = curry(join)
  
  console.log(curriedJoin(1, 2, 3)) // '1_2_3'
  console.log(curriedJoin(1)(2)(3))
  
//   console.log(curriedJoin(1)(2, 3)) // '1_2_3'
  
  console.log(curriedJoin(1, 2)(3)) // '1_2_3'
//   


   

  


// sum(1)(2)(3)(4)(5)(6)(7)(8)(9)()

// function sum(a)
// {
//     return function(b)
//     {
//         if(b)
//         {
//             return sum(a+b)
//         }
//         else{
//             return a
//         }
        
//     }
// }
// console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(),"ko")








// function getSum (...args) {
//     let total = 0
//      function sum (...args) {

//         console.log(args,"arrgs")
//       for (const item of args) {
//         total += item
//       }
//       return sum
//     }
  
    
//     sum.toString = function () {
//         console.log("helo")
//       return total
//     }
//     console.log(args,"arrgskk")
//     return sum(...args)
//   }
  
//   console.log(0 + getSum(1, 2)(4, 3)()(5)(),"kk")


//   console.log(0 + getSum(1, 2)(4, 3)(4)(5)().toString(),"kki")


//   function getSumV2 (...args) {
//     let total = 0
//     function sum (...args) {
//       for (const item of args) {
//         total += item
//       }
//       return sum
//     }

//     sum.valueOf = function () {
//       return total
//     }
  
//     return sum(...args)
//   }
  
//   console.log(0 + getSumV2(1, 2)(4, 3)(4)(5))