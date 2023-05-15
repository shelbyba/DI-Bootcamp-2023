// function checkx(){
//     let x=0
// }
// console.log(x)
// //x is not defined

// //Analyse the code before executing it. What will be the output
// var num = 8;
// var num = 10;

// console.log(num); //num=10

// //Analyse the code before executing it. What will be the output

// function checkAge(age) {
//   if (age < 18) {
//     const message = "Sorry, you're too young.";
//   } else {
//     const message = "Yay! You're old enough!";
//   }

//   return message;
// }

// console.log(checkAge(21)); //message already been declared so it gives an error.
// // Exercise
// // Change the code so the variable i will be undefined outside of the for loop

// function numbers() {
// //   for (var--> let i = 0; i < 5; i += 1) {
//     {
//     console.log(i);
//   }
//     console.log(i);
// }
// numbers();


// Create a function to check the year given by the user

// If the year is after 2000, you should display "You are in the 21st century",
//  else you should display "You live in the Middle Age"

let year=Number(prompt('write me year'))
year>2000?alert('you are in the 21st century'):alert('you live in the middle age')

// Using arrow function and 
// ternary operator create a calculator that returns the 
// result of the calculus depending on the operator : +, - , * ,

// The function should be able to to take 2 numbers as parameters

let calculator = (num1, num2, operator) => {
    const result = operator === '+' ? num1 + num2 :
                   operator === '-' ? num1 - num2 :
                   operator === '*' ? num1 * num2 :
                   "Invalid operator";
    return result;
  };
  
  console.log(calculator(5, 3, '+')); // Output: 8
  console.log(calculator(5, 3, '-')); // Output: 2
  console.log(calculator(5, 3, '*')); // Output: 15
  console.log(calculator(5, 3, '/')); // Output: "Invalid operator"

  //arrefunction 
  let nameme=(age,names) => {
console.log(age,names)
  }
  nameme(26,'shebl')


// Using the for each method, display only the even numbers in the array
const numbers = [10,11,12,15,20];
numbers.forEach((num)=> {
    if (num%2===0){
        console.log(num)
    }
    
});



// Check if at least one element of the array starts with the letter 'h'

const words = ["wow","hey","bye"];
let result=words.some(word=>startsWith('h'))
console.log(result)


  