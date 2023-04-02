//For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// Evaluate the comparisons found below:

    5 >= 1// true because 5 is bigger than 1
    0 === 1// false because the type is the same but the value is not 
    4 <= 1//false because 1 is not bigger or equal to 4 
    1 != 1 // false because this one means 1 is not 1 but it is 1 
    "A" > "B"// false because js compares 2 strings by their unicode and unicode of A is less than B
    "B" < "C"//true
    "a" > "A"// true because small letters has higher unicode than capital letters
    "b" < "A"//false because small letters has unicode highr than capital letters
    true === false// false
    true != true//false

    //xp2
//     Ask the user for a string of numbers separated by commas
//    Console.log the sum of the numbers.
//    Hint: use some string methods.

let input = prompt("Enter a string of numbers separated by commas:");
let numbers = input.split(",");

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += Number(numbers[i]);
}

console.log("The sum of the numbers is: " + sum);


//xp3
// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// If you can’t find Nemo, console.log “I can’t find Nemo”.
let giveMeSentence=prompt('give you a sentence containing the word “Nemo”');
console.log(`i found demo at ${}`)

 