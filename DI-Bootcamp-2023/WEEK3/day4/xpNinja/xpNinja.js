//xp1
// Exercise 1 : Age Difference
// Instruction
// Given the years two people were born,
//  find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

let year1 = prompt("Enter the birth year of person 1 (YYYY): ");
let year2 = prompt("Enter the birth year of person 2 (YYYY): ");

let age1 = new Date().getFullYear() - year1;
let age2 = new Date().getFullYear() - year2;

if (age1 > age2) {
  let halfAgeDiff = age1 - age2;
  let halfAgeYear = new Date().getFullYear() - age1 + halfAgeDiff;
  console.log(`Person 2 will be exactly half the age of Person 1 in the year ${halfAgeYear}.`);
} else if (age1 < age2) {
  let halfAgeDiff = age2 - age1;
  let halfAgeYear = new Date().getFullYear() - age2 + halfAgeDiff;
  console.log(`Person 1 will be exactly half the age of Person 2 in the year ${halfAgeYear}.`);
} else {
  console.log("Both people are the same age!");
}


