

// Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, console.log the age of my mum and my dad. 
// My mum is twice my age, and my dad is 1.2 the age of my mum.

// 4. Call the function.


function calcAge(myAge){
let momAge=myAge*2;
let dadAge=momAge*1.2;
return {momAge: momAge ,  dadAge: dadAge};
}
console.log(calcAge(10));


/*1. Create a structured HTML file linked to a JS file

2. Write a Javascript function that takes a parameter: myAge

3. In the function, return the age of my mum (my mum is twice my age)

4. Call the function

5. In the global scope, console.log the result of the function*/

function ageMum(myAge){
    let MyMumAge= myAge*2;
    return MyMumAge;
}
console.log(ageMum(26));
