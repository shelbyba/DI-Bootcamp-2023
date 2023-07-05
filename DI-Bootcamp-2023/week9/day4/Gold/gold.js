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

let sequentialStart = async function () {
    console.log('==SEQUENTIAL START==');
    const slow = await resolveAfter2Seconds();
    console.log(slow);
    const fast = await resolveAfter1Second();
    console.log(fast);
}

sequentialStart()

/*

The code provided above creates two functions, resolveAfter2Seconds and resolveAfter1Second, which return promises that resolve after 2 seconds and 1 second, respectively. The sequentialStart function is an async function that uses await to wait for the promises to resolve sequentially.

Based on the code, the expected outcome will be:

arduino
Copy code
==SEQUENTIAL START==
starting slow promise
slow
slow promise is done
starting fast promise
fast
fast promise is done */




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

let concurrentStart = async function () {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();
    console.log(await slow);
    console.log(await fast);
}

setTimeout(concurrentStart, 4000)

/*
==CONCURRENT START with await==
starting slow promise
starting fast promise
slow promise is done
slow
fast promise is done
fast
Explanation:

The setTimeout function is used to delay the execution of concurrentStart for 4 seconds.
After 4 seconds, concurrentStart is executed.
The concurrentStart function is called and logs ==CONCURRENT START with await==.
The resolveAfter2Seconds function is called, which logs "starting slow promise". It returns a promise that resolves after 2 seconds.
The resolveAfter1Second function is called, which logs "starting fast promise". It returns a promise that resolves after 1 second.
The execution of concurrentStart continues without waiting for the promises to resolve.
The slow variable receives the promise returned by resolveAfter2Seconds.
The fast variable receives the promise returned by resolveAfter1Second.
The first console.log(await slow) statement pauses the execution of concurrentStart until the slow promise resolves. After 2 seconds, the promise resolves with the value "slow". It logs "slow" and "slow promise is done".
The second console.log(await fast) statement pauses the execution of concurrentStart until the fast promise resolves. After 1 second, the promise resolves with the value "fast". It logs "fast" and "fast promise is done".
The concurrentStart function completes its execution.

*/




const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
  ];

const getData = async function() {
const [ users, posts, albums ] = await Promise.all(urls.map(url =>
  fetch(url).then(resp => resp.json())
));
console.log('users', users);
console.log('posta', posts);
console.log('albums', albums);
}

getData()
// Modify the function above. Add async await in place of the following line:
// fetch(url).then(resp => resp.json())
// So there shouldn’t be any .then() calls anymore!

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
  ];
  
  const getData = async function() {
    const responses = await Promise.all(urls.map(async (url) => {
      const response = await fetch(url);
      return response.json();
    }));
  
    const [users, posts, albums] = responses;
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  };
  
  getData();

  
  /*
  The getData function is modified to use async/await syntax.
The urls.map() function now takes an async callback function, which allows us to use await inside it.
Inside the callback function, await fetch(url) is used to fetch each URL and wait for the response.
The response is then converted to JSON using response.json(), again using await to wait for the parsing to complete.
The modified callback function returns the parsed JSON data.
The responses variable is assigned the resolved values of all the promises returned by the map() function using await Promise.all().
Finally, the users, posts, and albums variables are assigned the corresponding elements from the responses array.
The data is logged to the console using console.log(). */

