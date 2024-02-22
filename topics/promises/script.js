


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

console.log("3");

function fourpromise() {
    return new Promise(function(resolve, reject) {
            resolve("four"); 
    });
}


function thirdpromise() {
    return new Promise(function(resolve, reject) {
            resolve("third"); 
    });
}

function secondpromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("second"); 
        }, 0);
    });
}

function createpromise() {
    return new Promise(function(resolve, reject) {
        console.log("1");
        setTimeout(function() {
            resolve("first")
            // reject("first reject");
        }, 1000); 
        console.log("2");
    });
}

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


let promise = createpromise();

promise
    .then(function(response) {
        console.log(response);
        return secondpromise();
    })
    .catch(function(error) {
        console.log(error);
        
        return Promise.resolve();
    })
    .then(function(response) {
        console.log(response);
        return thirdpromise();
    })
    .then(function(response) {
        console.log(response);
        return fourpromise();
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });



    let promise1 = createpromise();

promise1
    .then(function(response) {
        console.log(response);
        return response;
    })
    .catch(function(error) {
        console.log(error);
        
    })
    .then(function(response) {
        console.log(response);
        return response;
    })
    .then(function(response) {
        console.log(response);
        return response;
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });


