// Exercise 1: Random Number
// Instructions
// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.

let randomNumber = Math.floor(Math.random() * 100) + 1;
for(i=0 ; i<=randomNumber ; i++ ){
    if(i%2==0){
        console.log(i)
    }
}



// Exercise 2: Capitalized Letters
// Instructions
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:

// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// For example,

// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']



function takeAstring(){
    let askForAStringFirst=prompt('write a word here')
    let thenSplitIt=askForAStringFirst.split('')
    console.log(thenSplitIt)
    let oddPositon=[];
    for( let j=0; j<thenSplitIt.length;j++){
        if(j%2!==0){
            oddPositon.push(thenSplitIt[j].toUpperCase()) 
        }else{
            oddPositon.push(thenSplitIt[j])
        }     
    }
        
    
    console.log(oddPositon.join(''));
    return oddPositon.join('');
} 
takeAstring();

function takeAstringAgain(){
    let askForAStringFirst=prompt('write a word here')
    let thenSplitIt=askForAStringFirst.split('')
    console.log(thenSplitIt)
    let oddPositon=[];
    for( let j=0; j<thenSplitIt.length;j++){
        if(j%2===0){
            oddPositon.push(thenSplitIt[j].toUpperCase()) 
        }else{
            oddPositon.push(thenSplitIt[j])
        }     
    }
        
    
    console.log(oddPositon.join(''));
    return oddPositon.join('');
} 
takeAstringAgain();



function capitalizeStringByPosition(position) {
    let askForAStringFirst = prompt('write a word here');
    let thenSplitIt = askForAStringFirst.split('');
    console.log(thenSplitIt);
    let result = [];
    for (let j = 0; j < thenSplitIt.length; j++) {
      if ((j % 2 === 0 && position === 'even') || (j % 2 !== 0 && position === 'odd')) {
        result.push(thenSplitIt[j].toUpperCase());
      } else {
        result.push(thenSplitIt[j]);
      }
    }
    console.log(result.join(''));
    return result.join('');
  }
  
  // Example usage:
  capitalizeStringByPosition('odd'); // This will capitalize characters in odd positions
  capitalizeStringByPosition('even'); // This will capitalize characters in even positions
  

  
  


//   Instructions
//   Write a JavaScript function that checks whether a string is a palindrome or not.
//   Note A palindrome is a word, phrase or sequence that is spelled 
//   the same both backwards and forward, e.g., madam, bob or kayak.
  
function isItPalindrome(){
    let askFirst=prompt('write a word like madam')
    if(askFirst=== askFirst.split('').reverse().join('')){
        console.log(true)
        return true 
    }else{
        console.log(false)
        return false
    }
}
  isItPalindrome();


//   Exercise 4 : Biggest Number
// Instructions
// Create a function called biggestNumberInArray(arrayNumber) 
// that takes an array as a parameter and returns the biggest number.
// Note : This function should work with any array;
// Example:

// const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
// const array2 = ['a', 3, 4, 2]; // should return 4 
// const array3 = []; // should return 0

// function biggestNumberInArray(){   
//     let getArray = prompt('write numbers, separated by commas');
//     let numbers = getArray.split(',').map(Number);
//     let maxNumber=Math.max(...numbers)
//     console.log(maxNumber)
//     return maxNumber
  
// }biggestNumberInArray();




function biggestNumberInArray() {   
    let getArray = prompt('write numbers, separated by commas');
    let numbers = getArray.split(',').map(Number);
    let maxNumber = Math.max(...numbers);
    console.log(maxNumber);
    return maxNumber;
  }
  
  biggestNumberInArray();


 



  
