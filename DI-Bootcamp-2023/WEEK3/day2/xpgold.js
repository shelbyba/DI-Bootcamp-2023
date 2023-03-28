//xp1

let sentence = ["my","favorite","color","is","blue"];
// Write some simple Javascript code that will join all the items in the array above, and console.log the result.
let joinedTogether=sentence.join(' ')
console.log(joinedTogether);


//xp2
// Create 2 variables. The values should be strings. For example:
let str1 = "mix";
let str2 = "pod";

let string1='eye';
let string2='ear';

//  Slice out and swap the first 2 characters of the two strings from part 1.
 let slicing1= string1.slice(0,2);
 console.log(slicing1);

 let slicing2 = string2.slice(0,2);

 console.log(slicing2);

 let swamped1= slicing1 + string2.slice(2);
 let swamped2=slicing2 + string1.slice(2);

 console.log(swamped1);
 console.log(swamped2);

 //Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
  
 let thirdVariable=`${string1} ${string2}`
 console.log(thirdVariable);
 let thirdVar=  string1 + ' ' + string2;
 console.log(thirdVar); 


 //xp3
//  Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.

// BONUS: Make a program that can subtract, multiply, and also divide!



let num1 = prompt("first number:");

console.log(Number(num1));

let num2=prompt('second number');

console.log(Number(num2));

let result= console.log(Number(num1)+Number( num2));






 
