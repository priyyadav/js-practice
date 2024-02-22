// function createpromise()
// {
//     return new Promise(function(resolve, reject)
// {
//     resolve("ko");

// })
// }
// let promise=createpromise()
// console.log(promise)
// promise.then(function(response)
// {
//     console.log(response)
// })

// function createpromise()
// {
//     return new Promise(function(resolve, reject)
// {
//     reject("ko");

// })
// }
// let promise=createpromise()
// console.log(promise)
// promise.then(function(response)
// {
//     console.log(response)
// }).catch((err)=>
// {
//     console.log(err)
// })

// console.log("3");

// function fourpromise() {
//     return new Promise(function(resolve, reject) {
//             resolve("four");
//     });
// }

// function thirdpromise() {
//     return new Promise(function(resolve, reject) {
//             resolve("third");
//     });
// }

// function secondpromise() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve("second");
//         }, 0);
//     });
// }

// function createpromise() {
//     return new Promise(function(resolve, reject) {
//         console.log("1");
//         setTimeout(function() {
//             resolve("first")
//             // reject("first reject");
//         }, 1000);
//         console.log("2");
//     });
// }

// let promise = createpromise();
// console.log(promise);
// console.log("5");

// promise.then(function(response) {
//     console.log(response);
// }).catch(function(err) {
//     console.log(err);
// });

// let promise1 = secondpromise();
// console.log(promise1);
// promise1.then(function(response) {
//     console.log(response);
// });
// console.log("4");

// let promise2 = thirdpromise();
// console.log(promise2);
// promise2.then(function(response) {
//     console.log(response);
// });
// console.log("4");

// let promise3 = fourpromise();
// console.log(promise3);
// promise3.then(function(response) {
//     console.log(response);
// });
// console.log("4");

// let promise=createpromise();
// promise.then(function(response)
// {
//     console.log(response);
//     return secondpromise();
// }).then(function(response)
// {
//     console.log(response)
//     return thirdpromise()
// }).then(function(response)
// {
//     console.log(response)
//     return fourpromise()
// }).then(function(response)
// {
//     console.log(response)
// })

// let promise=createpromise();
// promise.then(function(response)
// {
//     console.log(response);
//     return secondpromise();
// }).then(function(response)
// {
//     console.log(response)
//     return thirdpromise()
// }).then(function(response)
// {
//     console.log(response)
//     return fourpromise()
// }).then(function(response)
// {
//     console.log(response)
// })

// catch

// let promise=createpromise();
// promise.then(function(response)
// {
//     console.log(response);
//     return secondpromise();
// }).then(function(response)
// {
//     console.log(response)
//     return thirdpromise()
// }).then(function(response)
// {
//     console.log(response)
//     return fourpromise()
// }).then(function(response)
// {
//     console.log(response)
// }).catch(function(response)
// {
//     console.log(response)
// })

// let promise=createpromise();
// promise.then(function(response)
// {
//     console.log(response);
//     return secondpromise();
// }).catch(function(response)
// {
//     console.log(response)
// })
// .then(function(response)
// {
//     console.log(response)
//     return thirdpromise()
// }).then(function(response)
// {
//     console.log(response)
//     return fourpromise()
// }).then(function(response)
// {
//     console.log(response)
// }).catch(function(response)
// {
//     console.log(response)
// })

// let promise = createpromise();

// promise
//     .then(function(response) {
//         console.log(response);
//         return secondpromise();
//     })
//     .catch(function(error) {
//         console.log(error);

//         return Promise.resolve();
//     })
//     .then(function(response) {
//         console.log(response);
//         return thirdpromise();
//     })
//     .then(function(response) {
//         console.log(response);
//         return fourpromise();
//     })
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

//     let promise1 = createpromise();

// promise1
//     .then(function(response) {
//         console.log(response);
//         return response;
//     })
//     .catch(function(error) {
//         console.log(error);

//     })
//     .then(function(response) {
//         console.log(response);
//         return response;
//     })
//     .then(function(response) {
//         console.log(response);
//         return response;
//     })
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

//     const cart = ["Shirt", "Jeans", "Shoes", "Watch"];

//     let walletBalance = 10000;

//     // Promise Chain
//     createOrder(cart)
//     .then(function(orderId){
//         console.log(orderId);
//         return orderId;
//     })
//     .then(function(orderId){
//         return  proceedToPayments(orderId)
//     })
//     .then(function(amount){
//         console.log(`"Your payment of Rs. ${amount} is Successful`)
//         return amount;
//     })
//     .then(function(amount){
//         return showOrderSummary(amount);
//     })
//     .then(function(orderSummary){
//         console.log(orderSummary)
//         return orderSummary;
//     })
//     .then(function(amount){
//         return updateWalletBalance(amount);
//     })
//     .then(function(updateWalletBalance){
//         console.log(`Your updated wallet balance is ${updateWalletBalance}.`);
//         return updateWalletBalance;
//     })
//     .catch(function(error){
//         console.log(error.message);
//     })
//     ;

//     // Create Order
//     function createOrder(cart){
//         return promise1 = new Promise(function (resolve, reject) {
//             if(validOrder(cart)){
//                 const orderId = "76513";
//                 resolve(orderId);
//             } else {
//                 const error = new Error("Your Cart is Empty");
//                 reject(error);
//             }
//         })
//     }

//     // Proceed to Payment
//     function proceedToPayments(orderId){
//         return promise2 = new Promise(function (resolve, reject){
//             if(payment(orderId)){
//                 const amount = 4600;
//                 resolve(amount);
//             } else{
//                 const error = new Error("Payment failed!")
//                 reject(error);
//             }
//         })
//     }

//     // Show order summery
//     function showOrderSummary(amount){
//         return promise3 = new Promise(function(resolve, reject){
//             const orderSummary = amount;
//             resolve(orderSummary);
//             const error = new Error("Something went wrong!")
//             reject(error);
//         })
//     }

//     // Update Wallet Balance
//     function updateWalletBalance(amount){
//         return promise4 = new Promise(function(resolve, reject){
//             const updatedWalletBalance = walletBalance-amount;
//             resolve(updatedWalletBalance);
//             const error = new Error("Failed to update wallet balance")
//             reject(error);
//         })
//     }

//     // Payment
//     function payment(){
//         return true;
//     }

//     // Validating order
//     function validOrder(){
//         if(cart.length == 0) return false
//         else return true;
//     }

// polyfill

function dd(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(`failed ${time}`);
    }, time);
  });
}

function cc(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(`failed ${time}`);
    }, time);
  });
}

function bb(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(`failed ${time}`);
    }, time);
  });
}

function aa(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

// let arr = Promise.all([aa(1000), aa(2000), aa(3000), aa(4000)]);
// arr.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.error(error);
// });

// let arr = Promise.all([aa(1000), bb(2000), aa(3000), aa(4000)]);
// arr.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.error(error);
// });

// let arr = Promise.allSettled([aa(1000), bb(2000), aa(3000), aa(4000)]);
// arr.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.error(error);
// });

// let arr = Promise.race([aa(1000), bb(500), aa(3000), aa(4000)]);
// arr.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.error(error);
// });

// let arr = Promise.any([aa(1000), bb(500), aa(3000), aa(4000)]);
// arr.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.error(error);
// });

// let arr = Promise.any([bb(1000), bb(500), bb(3000), aa(4000)]);
// arr.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.error(error);
// });

// let arr = Promise.any(bb(1000));
// arr.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.error(error);
// });

// it must be iterable

// let arr = Promise.any([bb(1000), bb(500), bb(3000), bb(4000)]);
// arr.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.error(error.errors);
// });

// function promiseAll(tasks) {
//     return new Promise(function(resolve, reject) {
//         let results = [];
//         let count = 0;

//         tasks.forEach((promise, idx) => {
//             promise.then((res) => {
//                 results[idx] = res;
//                 count++;
//                 if (count === tasks.length) {
//                     resolve(results);
//                 }
//             }).catch((error) => {
//                 reject(error);
//             });
//         });
//     });
// }

// let arr = Promise.all([aa(1000), bb(2000), aa(3000), aa(4000)]);
// arr.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.error(error);
// });

// function promiseAllSettled(tasks) {
//     return new Promise(function(resolve, reject) {
//         let results = [];
//         let count = 0;

//         tasks.forEach((promise, idx) => {
//             promise.then((res) => {
//                 // results[idx] = res;
//                 results.push({status:"fulfilesd", value:res})
//                 count++;
//                 if (count === tasks.length) {
//                     resolve(results);
//                 }
//             }).catch((error) => {
//                 results.push({status:"failed", reason:error})
//                 count++;
//                 if (count === tasks.length) {
//                     resolve(results);
//                 }
//             });
//         });
//     });
// }

// let arr = promiseAllSettled([aa(1000), bb(2000), aa(3000), aa(4000)]);
// arr.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.error(error);
// });

// function promiserace(tasks) {
//     return new Promise(function(resolve, reject) {
//         let count = 0;

//         tasks.forEach((promise, idx) => {
//             promise.then((res) => {
//                resolve(res);

//             }).catch((error) => {
//                     resolve(error);

//             });
//         });
//     });
// }

// let arr = promiserace([aa(1000), bb(2000), aa(3000), aa(4000)]);
// arr.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.error(error);
// });

// let arr = promiserace([aa(1000), bb(500), aa(3000), aa(4000)]);
// arr.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.error(error);
// });

function promiseany(tasks) {
  return new Promise(function (resolve, reject) {
    let count = 0;
    result = [];
    tasks.forEach((promise, idx) => {
      promise
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          result[idx] = error;
          count++;
          if (count == tasks.length) {
            resolve(result);
          }
        });
    });
  });
}

// let arr = promiseany([aa(1000), bb(500), aa(3000), aa(4000)]);
// arr.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.error(error);
// });

// let arr = promiseany([bb(1000), bb(500), bb(3000), bb(4000)]);
// arr.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.error(error);
// });

// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("async task is completed");
//     }, 1000);
//   });

//   promiseOne.then(function () {
//     console.log("promise consumed");
//   });

// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("async 3");
//       resolve({ name: "rohan", email: "rohan@gmail.com" });
//     }, 1000);
//   }).then(function (user) {
//     console.log(user);
//   });

//   const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       let error = true;
//       if (error) {
//         resolve({ username: "rohan", password: "12j" });
//       } else {
//         reject("ERROR:something went wrong");
//       }
//     }, 1000);
//   });

//   promiseFour
//     .then((user) => {
//       console.log(user);
//       return user.username;
//     })
//     .then((username) => {
//       console.log(username);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => {
//       console.log("promise is either resolve or rejected");
//     });

// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       let error = true;
//       if (error) {
//         resolve({ username: "rohan", password: "123" });
//       } else {
//         reject("ERROR:something went wrong");
//       }
//     }, 1000);
//   });

//   async function consumepromiseFive() {
//     try {
//       const response = await promiseFive;
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   consumepromiseFive();

// console.log("start");

// function importantAction(username) {
//   setTimeout(() => {
//     console.log("hi", username)
//     return `Subcribe ${username}`;
//   }, 1000);
// }
// // const message = importantAction("rohan");

// // console.log(message);
// console.log(importantAction("rohan"))

// console.log("start");

// function importantAction(username, cb) {
//   setTimeout(() => {
//     cb(`Subcribe ${username}`);
//   }, 1000);
// }

// const message1 = importantAction("rohan", function (message) {
//   console.log(message);
// });

// console.log("end");

setTimeout(setTimeout(setTimeout(console.log("eh"), 300), 200), 1000);
