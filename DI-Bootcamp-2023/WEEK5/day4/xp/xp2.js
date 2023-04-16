/*
Copy the code above, to a structured HTML file.

In your Javascript file, use setInterval to move the 
<div id="animate"> to the right side of the <div id="container">, 
when the button is clicked on.

The <div id="animate"> should move 1px to the right every milisecond, 
until it reaches the end of the <div id="container">.
Hint : use clearInterval as soon as the box reaches the right end side of the container
*/

let getDiv=document.querySelector("#animate")
let getDiv1=document.querySelector("#container")
let getBtn=document.querySelector('button')

let distance=0;
let interval;

function myMove(){
    clearInterval(interval)
  interval= setInterval(moveRight, 1)
}

function moveRight(){
    
    distance++
    getDiv.style.left=distance+ 'px'

    if(distance== getDiv1.offsetWidth-getDiv.offsetWidth){
        clearInterval(interval)

    }

}

getBtn.addEventListener('click', myMove);





 






