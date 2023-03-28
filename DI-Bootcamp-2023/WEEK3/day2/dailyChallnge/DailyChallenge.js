//xp1
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// Remove Banana from the array.
// Sort the array in alphabetical order.
// Add “Kiwi” to the end of the array.
// Remove “Apples” from the array. Don’t use the same method as in part 1.
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:
// ["Kiwi", "Oranges", "Blueberries"]

fruits.shift();
console.log(fruits);

//let fruits = ["Apples", "Oranges", "Blueberries"];

let spliced= fruits.splice(1);
console.log(spliced);
console.log( fruits);
fruits.push('Blueberries', 'oranges' , 'kiwi');
console.log(fruits);

let spliced2= fruits.splice(1,3);// i tried to do 1,4 because i thought it kiwi wont be included in splice(1,3)
console.log(spliced2);

let reveredArray=spliced2.reverse();
console.log(reveredArray);

// ["Kiwi", "Oranges", "Blueberries"]

//xp2
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// Access and then console.log “Oranges”.

 console.log(moreFruits[1][1]);

 let orangess= moreFruits[1][1];
 console.log(orangess);


