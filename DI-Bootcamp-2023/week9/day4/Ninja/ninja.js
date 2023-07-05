let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

//The Promise.all() method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled.

let concurrentPromise = function () {
    console.log('==CONCURRENT START with Promise.all==');
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
        console.log(messages[0]);
        console.log(messages[1]);
    });
}

setTimeout(concurrentPromise, 1000)



/*
The code provided defines two functions, resolveAfter2Seconds and resolveAfter1Second, which return promises that resolve after 2 seconds and 1 second, respectively. The concurrentPromise function uses Promise.all() to execute both promises concurrently and returns a new promise. The setTimeout function is used to delay the execution of concurrentPromise by 1 second.

Based on the code, the expected outcome will be:



==CONCURRENT START with Promise.all==
starting slow promise
starting fast promise
fast promise is done
slow promise is done
fast
slow
Explanation:

The setTimeout function is used to delay the execution of concurrentPromise by 1 second.
After 1 second, concurrentPromise is executed.
The concurrentPromise function is called and logs ==CONCURRENT START with Promise.all==.
Inside Promise.all(), both resolveAfter2Seconds() and resolveAfter1Second() functions are called concurrently.
The resolveAfter2Seconds function logs "starting slow promise" and returns a promise that resolves after 2 seconds.
The resolveAfter1Second function logs "starting fast promise" and returns a promise that resolves after 1 second.
The promises from resolveAfter2Seconds and resolveAfter1Second are passed to Promise.all() for concurrent execution.
While the promises are executing, the then() method is called on the Promise.all() promise to handle the resolved values.
After 1 second, the promise from resolveAfter1Second resolves with the value "fast". It logs "fast" and "fast promise is done".
After 2 seconds, the promise from resolveAfter2Seconds resolves with the value "slow". It logs "slow" and "slow promise is done".
The then() callback receives an array of the resolved values from both promises.
The first console.log(messages[0]) statement logs the value "fast".
The second console.log(messages[1]) statement logs the value "slow".
The concurrentPromise function completes its execution.
Therefore, the expected outcome is the concurrent execution of the 
promises using Promise.all(), with a delay of 1 second for the first 
promise and 2 seconds for the second promise. The resolved values are
 logged in the order they were passed to Promise.all() */