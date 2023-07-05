/*
 Instructions
1rst Daily Challenge
Create two functions. Each function should return a promise.
The first function called makeAllCaps(), takes an array of words as an argument
If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
else, reject the promise with a reason.
The second function called sortWords(), takes an array of words uppercased as an argument
If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
else, reject the promise with a reason.
 */


function makeAllCaps(wordd){
    return new Promise((resolve,reject)=>{
       if(words.everty(isString)){
           resolve(wordd.map(word=>word.toUpperCase()))
       } else{
        reject('sorry you did not write a string ')
       }
    });
     
}
function sortWords(word){
    return new Promise((resolve,reject)=>{
        if(words.length>=4){
            resolve(word.sort())
        }else{
            reject(error)
        }
    })
}
sortWords(['hello', 'there','how', 'you', 'doing']).then(console.log).catch(console.error)
makeAllCaps(['hello', 'there']).then(console.log).catch(console.error)

function isString(word){
  return typeof(word)==='string'
}