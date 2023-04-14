// Create a structured HTML file, and add the code below in the body.

// In a JS file, write a JavaScript function 
// to add rows to a table. Use the code below as a base




let getTable=document.querySelector('table');
let getButton=document.querySelector('input')

getButton.onclick=function(){
  
    let addRow=getTable.insertRow();
    let addcell1=addRow.insertCell()
    let addcell2=addRow.insertCell()
    addcell1.innerHTML='cell1'
    addcell2.innerHTML='cell2'

};




//Add a few event listener to the button. The event listeners should change the style of the button

let buttonfirst=document.getElementById('jsstyle')
buttonfirst.addEventListener('click', RespondOnlick)
function RespondOnlick(){
    buttonfirst.style.color='blue'
    buttonfirst.style.padding='10px'
    buttonfirst.style.opacity='0.5'
   
};


/*Add a click event listener to the div

Add a few event listeners to the button. With at least one click event.
 The event listeners should change the style of the button

Check how the propagation works and try to prevent it*/


let getDiv=document.querySelector('div')
let getInsideButton=document.getElementById('jss')
getDiv.addEventListener('click', getDivRespond);


function getDivRespond(){
    getDiv.style.color='red'
    getDiv.style.margin='10px'
    getDiv.style.opacity='0.3'
}


// Create a structured HTML file, and add the code below in the body.

// In a JS file, write a JavaScript function 
// to get the values of First and Last name of the following form

let getForm= document.forms.form1.fname.value
console.log(getForm)

let getform2=document.forms.form1.lname.value
console.log(getform2)



// Create a structured HTML file, and add the code below in the body.

// In a JS file, write a JavaScript function to :

// Get the value of the 2nd Option
// Add a new option with the value 'Work' at the end of the select form
// Add a new option with the value 'Primary School' at the beginning of the select form
// Change 'College' as selected. Use the 3 properties we learned above
// Add a button that alert the choice selected






