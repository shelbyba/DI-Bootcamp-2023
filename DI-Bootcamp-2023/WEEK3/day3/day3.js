// Make a keyless car!

// This car will only let you drive if you are over 18. Make it do the following:

// Using prompt() and alert(), ask a user for their age.

// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"

let age =Number( prompt('how old are ypu?'));
console.log(age);
if( age<18) {
alert('sorry, you too young to drive this car. powering off')

} else if (age==18) {
alert('congratulations on your first year of driving. Enjoy the ride!')

} else if (age>18) 
{
    alert('powering on. enjoy the ride')
};

//xp2
// Write as comments the steps of the resolution of this piece of code

// Guess what will be the result before checking it

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' ); //too small
    break;
  case 4:
    alert( 'Exactly!' );//exacttly but here it will break it stop
    break;
  case 5:
    alert( 'Too large' );//wont be excuted
    break;
  default:
    alert( "I don't know such values" );//wont be excuted
}


//objects xp1

// Create a stuctured html file linked to a JS file

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let anObject = {
username: ' shebl',
password : '123',

}

let database= [anObject];
console.log(database);

let newsfeed= [
  {
    username: 'hello',
    password: 'hello',
  },
  {
    username: 'me',
    password: 'mo',
  },
  {
    username: 'hollaholla',
    password: 'holala',
  },
];

console.log(newsfeed);