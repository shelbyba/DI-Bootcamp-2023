

//ex1
// Write a program to check whether a string is blank or not.

// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false

function isBlank(){
    let answerOfPrompt= prompt('write something here')
    if(answerOfPrompt!==''){
     console.log(true)
     return true
    } 
    else {
        console.log(false)
        return false
    }
} 
isBlank();


// Exercise 2 : Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrevName("Robin Singh")); --> "Robin S."

function convertIntoAbbreviated(){
    let info = prompt('write full name');
    if(typeof info==='string'){
      let splitItFirst= info.split(' ');
       console.log(splitItFirst);
       let capitalLetterFirst= splitItFirst[0][0].toLocaleUpperCase()+splitItFirst[0].slice(1,splitItFirst[0].length)
       let capitalLetterAgain=splitItFirst[1][0].toLocaleUpperCase()
       let abbreviatedOne= `${capitalLetterFirst} ${capitalLetterAgain}.`

       console.log(abbreviatedOne);
       return abbreviatedOne;
    }
}
convertIntoAbbreviated();


// Exercise 3 : SwapCase
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.

function swapingCase(){
let caseIs=prompt('write something')
let result= '';
if(typeof caseIs==='string'){
let splitItFirst2= caseIs.split(' ')
for(let i of splitItFirst2){
    let leaveFirstLetter=i.slice(0,1)
    let restOfWord=i.slice(1,i.length).toUpperCase()
    let allTogether=leaveFirstLetter+restOfWord
    result+=allTogether+ ' ';

    console.log(result);
    
}
}
} swapingCase();


// Exercise 4 : Omnipresent Value
// Instructions
// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// Examples

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false

 





