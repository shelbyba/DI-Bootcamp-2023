// // Exercise 1 : Find The Sum
// // Instructions
// // Create a one line function (ie. an arrow function) 
// // that receives two numbers as parameters and returns the sum.
// let sum=(num1,num2)=>num1+num2;
// sum(4,5)



// // Exercise 2 : Kg And Grams
// // Instructions
// // Create a function that receives a weight in 
// // kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// // First, use function declaration and invoke it.
// // Then, use function expression and invoke it.
// // Write in a one line comment, the difference 
// // between function declaration and function expression.
// // Finally, use a one line arrow function and invoke it.

// let kg=1000
// function convertToGram(){
//    let kilos=Number(prompt('put number of kilograms'))
//    let convrted=kilos*kg
//    console.log(convrted)
// }
// convertToGram();

// let convert=function(kilo){
//     return kilo*1000
// }

// console.log(convert(4))


// let convert = (kilo) => kilo * 1000;
// console.log(convert(4))


// // Exercise 3 : Fortune Teller
// // Instructions
// // Create a self invoking function that takes 4 arguments: 
// // number of children, partner’s name, geographic location, job title.
// // The function should display in the DOM a sentence like 
// // "You will be a <job title> in <geographic location>, and married to 
// // <partner's name> with <number of children> kids."
// (function(childrenNum,partnerName,geographicLocation,jobTitle){
//   let sentence=`you will be a${jobTitle} in ${geographicLocation}
//   and married to${partnerName} with ${childrenNum}`
//   let elementIs= document.createElement('h1')
//   elementIs.innerText=sentence
  
// document.body.appendChild(elementIs)

// }(2,'Yareen','NY','doctor'))



// Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion
//  that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar,
//  displaying the name of the user and his profile picture.

(function(name){
    let getNav=document.querySelector('.navbar'); 
    let createName=document.createElement('div');
    createName.innerHTML=name;
    getNav.appendChild(createName);

    let gtimg=document.createElement('img')
    gtimg.src="https://picsum.photos/64"
    createName.appendChild(gtimg)


}('shelby'))


// Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 
// 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives
//  3 ingredients, and displays on the DOM a sentence 
//  like The client wants a <size drink> juice, containing 
//  <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer
//  function. Then invoke the outer function in the global scope.

function makeJuice(size){
    
    function addIngredients(fst,scnd,third){
      let createP=document.createElement('p')
      createP.innerHTML=`The client wants a ${size} juice,
       containing ${fst}, 
       ${scnd}, ${third}`
      document.body.appendChild(createP)
      
    }
    addIngredients('apple', 'blueberry', 'strawberry')
}
makeJuice('small')

// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, 
// and push them into the ingredients array.

// Create a new inner function named displayJuice that displays 
// on the DOM a sentence like The client wants a <size drink> juice, containing
//  <first ingredient>, <second ingredient>, <third ingredient>".
//   Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, 
// invoke the addIngredients function TWICE. 
// Then invoke once the displayJuice function.
//  Finally, invoke the makeJuice function in the global scope.

function makeJuice(size) {
    let ingredients = [];
  
    function addIngredients(fst, scnd, third) {
      ingredients.push(fst, scnd, third);
    }
  
    function displayJuice() {
      let createP = document.createElement('p');
      createP.innerHTML = `The client wants a ${size} 
      juice, containing ${ingredients.join(', ')}`;
      document.body.appendChild(createP);
    }
  
    addIngredients('apple', 'blueberry', 'strawberry');
    addIngredients('orange', 'pineapple', 'mango');
    displayJuice();
  }
  
  makeJuice('small');
  