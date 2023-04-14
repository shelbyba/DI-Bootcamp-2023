/*ex2
Add a click event listener to the <input type="button">. 
When clicked on, it should call a function 
named : removecolor() that removes the selected color from the dropdown list.
*/



let getInput=document.querySelector('input')
getInput.addEventListener('click' , removeColor);

function removeColor(){
    let selected=document.querySelector('form')
    let realSelected=selected.colorSelect
    realSelected.options[selected.selectedIndex].remove()
}
