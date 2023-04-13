// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. 
// This div should have a class named "planet".
// Each planet should have a different background color.
//  (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?
//i started with array of planets then converted it to array of objects


let planets=[ 
   {ame:'Mercury', moons:0},
    {name: 'Venus',  moons:0},
    {name:'Earth',    moons:1},
    {name:'Mars',      moons:2},
    {name:'Jupiter',   moons:79},
    {name:'Saturn' ,   moons:82},
    {name:'Uranus' ,  moons:27},
    {name:'Neptune',  moons:14}
 ];

let getsection=document.querySelector('.listPlanets')

for(let planet of planets){
let createDiv=document.createElement('div')
console.log(createDiv)
createDiv.classList.add('planet')
let randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
createDiv.style.backgroundColor = randomColor;
 getsection.appendChild(createDiv);
 


 for(i=0; i< planet.moons;i++){
    let createDives=document.createElement('div')
    createDives.classList.add('moon')
    let randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    createDives.style.backgroundColor = randomColor;
    createDiv.appendChild(createDives);
}

}








