// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.

function compareToTen(num){
return new Promise((resolves,rejects)=>{
  if(num<=10){
  resolves('less than or equal to 10')
  }
   if(num>10){
    rejects('greater than 10')
   }
 })
}

compareToTen(11)
.then(result=>{
    console.log(result)
})
.catch(error=>{
    console.log(error)
})


/////another example to practice 

function names(name){
    return new Promise((resolves, rejects)=>{
        if(typeof name=== 'string'){
            resolves('this name is valid')
        }
        else if(typeof name=== 'Number'){
            rejects('number is not a name')
        }else{
            rejects('not valid')
        }
    })
}
names('shelby')
.then(result=>{
    console.log(result)
})
.catch(error=>{
    console.log(error)
})




/*
 Exercise 2 : Promises
Instructions
Create a promise that resolves itself in 4 seconds and returns a “success” string.
How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
Add code to catch errors and console.log ‘Ooops something went wrong’.
 */


function wait4sec(){
    return new Promise((resolves, rejects)=>{
        setTimeout(() => {
           resolves('success'); 
        }, 4000);
    })
}

wait4sec()
.then(res=>{
    console.log(res)
})
.catch(error=>{
    console.log('Ooops somthing went wrong')
})


/*
  Exercise 3 : Resolve & Reject
Instructions
Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!
 */

let promise= Promise.resolve(2)
promise.then((result)=>console.log(result)).catch((error)=>console.log(error));

let promise1=Promise.reject("boo!")
promise1.then((result)=>console.log(result)).catch((error)=>console.log(error));
