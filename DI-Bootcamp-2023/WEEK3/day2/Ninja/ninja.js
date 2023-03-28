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

 let askForNumbers=prompt('type some numbers here with coma in between:');
 let converToNumbers=Number(askForNumbers);
 