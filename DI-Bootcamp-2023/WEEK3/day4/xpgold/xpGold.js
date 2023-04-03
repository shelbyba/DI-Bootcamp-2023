
// Exercise 1 : The World Translator
// Instructions
// Hint: Use Switch Case

// Ask the user which language they speak.

// Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. 
// For example “english” or “English” or “ENGlish” ect…”

// Create a few conditions :
// If the user speaks French : display “Bonjour”
// If the user speaks English : display “Hello”
// If the user speaks Hebrew : display “Shalom”
// If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’


let language= prompt('whcih language do you speak?');
let answer=language.toLowerCase();
console.log(answer);

switch(answer){
    case 'french':
        console.log("Bonjour");
        break;
        
     case 'english':
        console.log('Hello');
        break;

    case "Hebrew":
        console.log('shalom');
        break;

     default:
        console.log('01110011 01101111 01110010 01110010 01111001')
        
};


//xp2
// Exercise 2 : The Grade Assigner
// Instructions
// Ask the user for their grade.

// If the grade is bigger than 90, console.log “A”

// If the grade is between 80 and 90 (included), console.log “B”
// If the grade is between 70(included) and 80 (included), console.log “C”
// If the grade is lower than 70, console.log “D”


let grade=Number(prompt(`what's your grade?`));

if(grade>90){
    console.log('A');
}else if (80<grade && grade<=90){
    console.log('B');
}else if(grade>=70 && grade<=80){
    console.log('C');
}else if(grade<70){
    console.log('D');
};


//xp3Exercise 3 : Verbing
// Instructions
// Prompt the user for a string. It must be a verb.
// If the length of the string is at least 3 and the string doesn’t end with “ing”, 
// add ‘ing’ to the end of the string.
// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
// If the length of the string is less than 3, leave it unchanged.

let stringOne= prompt('write a verb here');
console.log(stringOne)

if( stringOne.length>=3 && !stringOne.endsWith('ing')){
   console.log(`${stringOne}ing`);
} else if(stringOne.length>=3 && stringOne.endsWith('ing')){
    console.log(`${stringOne+'ly'}`)
}else if(stringOne.length<3){
    console.log(stringOne);
};







