//xp1


// Store your favorite food into a variable.

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal>

let favoriteFood=['labani'];
let favoriteMeal='breakfast'; 
console.log(`i eat ${favoriteFood}, at every ${favoriteMeal}`);

//xp2 
//part1

// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

let  myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let  myWatchedSeriesLength = console.log( myWatchedSeries.length ); //3 

let myWatchedSeriesSentence =` i have watched  ${myWatchedSeries.join(' ')+('.')} `;

console.log(myWatchedSeriesSentence);

//part2
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

myWatchedSeries.pop();
console.log(myWatchedSeries);
myWatchedSeries.push('friends');
console.log(myWatchedSeries);
myWatchedSeries.push('Grey\'s Anatomy');
console.log(myWatchedSeries);

console.log( myWatchedSeries.unshift('day'));// why this syntax doesn't show may all the whole array from 0 until end?
console.log(myWatchedSeries);//but like this it shows me 

myWatchedSeries.splice(1,1);
console.log(myWatchedSeries); //['day', 'money heist', 'friends', "Grey's Anatomy"]

console.log(myWatchedSeries[1][2]);

let thirdLetter=myWatchedSeries[1];
console.log(thirdLetter[2]);

console.log(myWatchedSeries);//['day', 'money heist', 'friends', "Grey's Anatomy"]


//xp3
// Store a celsius temperature into a variable.

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32.

let CelsiuTemprature=37

let convertToFahrenheit= (CelsiuTemprature/5)*9+32;
console.log(convertToFahrenheit.toFixed(2));
console.log(`${CelsiuTemprature} °C is ${convertToFahrenheit.toFixed(2)} °F `);


//xp4
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction:55 because a and b are numbers so they will be added and not joined 
// Actual:55

a = 2;

console.log(a+b) //second expression
// Prediction:23 because a is changed to 2 and it is possible to do it with let, opposite from const 
// Actual: 23


// What will be the outcome of a + b in the first expression ?
// What will be the outcome of a + b in the second expression ?
// What is the value of c? undefined 


// Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5'); 75 // 3 and 4 are numbers but 5 is a string, so 3 and 4 added by math but 5 is joined to the outcome as a string


//xp5 
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction. 

typeof(15)
// Prediction:number 
// Actual: nymber 

typeof(5.5)
// Prediction: number
// Actual: number 

typeof(NaN)
// Prediction:NaN
// Actual:number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction:boolean
// Actual:boolean

typeof(1 != 2)
// Prediction: true
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers 

"hamburgers" - "s"
// Prediction:error :) 
// Actual:NaN

"1" + "3"
// Prediction:13
// Actual:13

"1" - "3"
// Prediction:NaN
// Actual:-2

"johnny" + 5
// Prediction: Johnny5
// Actual:johenny5

"johnny" - 5
// Prediction:NaN
// Actual:NaN

99 * "hello"
// Prediction:NaN
// Actual:NaN

1 != 1
// Prediction:false
// Actual:false

1 == "1"
// Prediction:true
// Actual:true 

1 === "1"
// Prediction:false 
// Actual: fase 


//xp6 

5 + "34"
// Prediction: 534
// Actual:534

5 - "4"
// Prediction:1 
// Actual:1

10 % 5
// Prediction:0 nothing left after division 
// Actual:0 

5 % 10
// Prediction:5
// Actual:5

"Java" + "Script"
// Prediction: Javascript 
// Actual: javascript

" " + " "
// Prediction:empty string with empty string is an empty string 
// Actual:' ' 

" " + 0
// Prediction:' '0
// Actual:' 0 ' 

true + true
// Prediction:true 
// Actual:2  // 1+1 

true + false
// Prediction: true
// Actual:1 

false + true
// Prediction:1 beacuse it 0+1 
// Actual:1

false - true
// Prediction:-1 because 0-1 
// Actual:-1

!true
// Prediction: not true is false
// Actual: fals e

3 - 4
// Prediction:-1
// Actual:-1

"Bob" - "bill"
// Prediction:NaN/ not a number
// Actual:NaN





 











