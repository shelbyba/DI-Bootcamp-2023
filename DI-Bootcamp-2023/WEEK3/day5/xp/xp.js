
// Exercise 1 : List Of People
//part1
// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.

// Write code to replace “James” to “Jason”.

// Write code to add your name to the end of the people array.

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like 
// this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?


// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in 
// the array and the length of the array?

const people = ["Greg", "Mary", "Devon", "James"];

 people.splice(0,1);
console.log(people);

people[2]='jason'
console.log(people);

people.push('shelby');
console.log(people);

let whereMary= people.indexOf('Mary');
console.log(whereMary);

let copyArrayOfPeople=people.slice(1,people.length-1);
console.log(copyArrayOfPeople);

let indexOfFoo=people.indexOf('Foo');
console.log(indexOfFoo);//-1 because it is false, there no such foo in the array.

let last=  people[people.length-1]
console.log(last);


//part2


// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.



for( let person in people){
    console.log(person, people[person]);
}


for( let i=0; i<people.length; i++){
    console.log(people[i]);
    if(people[i]==='jason'){
      break;
    }
}




//Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: 
// “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, 
// “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

let colors=['black', 'white', 'blue', 'biege', ' gray'];
for(let i=0 ; i<colors.length ; i++){
    console.log(`#${i+1} choice is ${colors[i]}`);
};

let suffixess=["st", 'nd','rd' ,'th', 'th'];
for(let i = 0; i<colors.length; i++){
    console.log(`My${i+1}${suffixess[i]} choice is ${colors[i]}`)
};




//Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

let writeNumber=Number(prompt('write a number'));
console.log(typeof writeNumber, writeNumber);/*i added number brfore prompt after i checked this cuz 
it is a string*/ 
while(writeNumber < 10){
  writeNumber =Number(prompt('write a number'));
}console.log(writeNumber);



//Exercise 4 : Building Management
//Instructions:
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
// Review About Objects
// Console.log the number of floors in the building.
// Console.log how many apartments are on the floors 1 and 3.
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. 
// If it is, than increase Dan’s rent to 1200.

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor);

console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);

let sumOfSarahAndDvid= building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]
console.log(sumOfSarahAndDvid);
let sumOfDan=building.numberOfRoomsAndRent.dan[1];
console.log(sumOfDan);
if(sumOfSarahAndDvid>sumOfDan){
    sumOfDan=1200;
}console.log(sumOfDan);

// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

let family={
   brother: 3,
   sisters:3,
   youngestAge:26,
   job:'medical student'

};
for(let i in family){
    console.log(i, family[i])
};


//Exercise 6 : Rudolf
// Instructions
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

let detailss="";
for(let i in details){
    detailss+= i + " " + details[i]

}console.log(detailss);



// Exercise 7 : Secret Group
// Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society.
// The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

secretName=''
for(let i of names){
   secretName += " " + i[0][0] + " ";
   }  console.log(secretName);

   let alphabetical= secretName.split(' ').sort().join(' ');
   console.log(alphabetical);
   
   

















