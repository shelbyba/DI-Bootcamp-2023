
//ex1

// Analyse the code below, and predict what will be the value of a in 
// all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.

function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
} // it gives a=3 because is declared once and used inside the if tatment and condition 
//is true

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
//it will give error because const gives the declaration once and assign it once
//but let can give the option to reassign it

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() //a=0 becaue it alerts first and it finds a=0 in the global scope
funcTwo()//a=5 because it refers to it's scope inside the function where a=5 
funcThree()//it gives a=5 because a has been reassigned to a=5 in functwo?
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
//it won't work and will give error

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()//a been assigned to hello
funcFive()//hello because it looks for it at the last time it's been reassigned 

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()//a=test because it looks first in the local scope
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
//wont work it will give an error 

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
//in the if block it is 5 
//outside of the if block it is 2 
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
//wont work, const let us declare once and assign once.


//Exercise 2 : Ternary Operator
// Instructions
// Using the code below:


// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. 
// If winBattle() is true, the experiencePoints variable 
// should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

// function winBattle(){
//     return true;
// }

let winBattle=()=>true

let experiencePoints= winBattle()==true?10:1;
console.log(experiencePoints)



// Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function 
// that checks whether the value of the argument passed, 
// is a string or not. Use ternary operator
// Check out the example below to see the expected output
// Example:

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

let isString = (value) => (typeof value === 'string');
let checkString = (value) => (isString(value) ? true : false);

console.log(checkString('hello')); // true
console.log(checkString([1, 2, 4, 0])); // false




//  Exercise 4 : Colors
// Instructions
// Using this array :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following
//  order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. 
// If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Method

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
for(i=0;i<colors.length;i++){
    console.log(`${i+1}# choice is ${colors[i]}`)
}

let yes=colors.some((value)=>{return (value=='Violet')})
ternaryOne=yes?'yea':'no'
console.log(ternaryOne)


// Exercise 5 : Colors #2
// Instructions
// Using these arrays :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in 
// the following order : “1st choice is Blue .” “2nd choice
//  is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["st","nd","rd","th"];
for(i=0;i<colors.length;i++){
    console.log(`${[i+1]} ${ordinal[i<3?i:3]}choice is ${colors[i]}`)
}


// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type
//  of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which
//  value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT
//  (In Israel, it’s 17%).
// Create an array with all your monthly expenses,
//  both positive and negative (money made and money spent).
// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses
//  (ie. the positive AND the negative expenses) 
//  so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

let bankAccount = 100;
let vatPercentage = 17;
let expenses = ["+200", "-100", "+146", "+167", "-2900"];

for (let i = 0; i < expenses.length; i++) {
  let expense = parseInt(expenses[i]); 
  let expenseWithTax = expense + expense * (vatPercentage / 100);
  bankAccount += expenseWithTax;
}

console.log(`Bank account standing at the end of the month: ${bankAccount.toFixed(2)}`);









