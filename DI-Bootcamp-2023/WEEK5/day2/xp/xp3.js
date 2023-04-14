/*In the JS file:

Declare a global variable named allBoldItems.

Create a function called getBold_items() that takes no parameter. 
This function should collect all the bold items inside the paragraph
 and assign them to the allBoldItems variable.

Create a function called highlight() that changes the color of all the bold text to blue.

Create a function called return_normal() that changes the color of all the bold text back to black.

Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), 
and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). 
Look at this example
 */


let allBoldItems=[];
let bold=document.querySelectorAll('strong')
let getP=document.querySelector('p');


function getBold_items(){
  
    for(let i=0;i<bold.length;i++){
     allBoldItems.push(bold[i].textContent)
   
    } console.log(allBoldItems)
}
getBold_items();



function highlight(){
    for(let j=0; j<bold.length;j++){
        bold[j].style.color='blue'
    }
} 
highlight();



function return_normal(){
   
    for(let s=0; s<bold.length;s++){
        if(bold[s].style.color=='blue'){
         bold[s].style.color='black'
        }
    }
}
return_normal();
getP.addEventListener('mouseover', highlight);
getP.addEventListener('mouseout', return_normal);

///i tried

