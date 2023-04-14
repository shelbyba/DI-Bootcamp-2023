// Display the value of the selected option.

// Add an additional option to the select tag:
// <option value="classic">Classic</option>

// The newly added option should be selected by default.


let getSelected=document.getElementById('genres')
let selected=getSelected.value='blue'
console.log(selected)


let createOption=document.createElement('option')
createOption.value='classic'
createOption.textContent='Classic'
createOption.selected = true;
getSelected.appendChild(createOption);






