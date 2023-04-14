
function calculateTip(){
    let getTotalTip=document.getElementById('totalTip')
getTotalTip.style.display="block"
// Create a function called calculateTip() that takes no parameter

// Create a variable called billAmount that fetches the value of the input, 
// which id is billAmt (check the HTML file) –> It’s the amount of the bill.

let billAmount=parseFloat(document.getElementById('billamt').value)


// Create a variable called serviceQuality that fetches the value of the input,
//  which id is serviceQual (check the HTML file) –> It’s the quality of the service.
let serviceQuality=parseFloat(document.getElementById('serviceQual').value)


// Create a variable called numberOfPeople that fetches the value of the input, which id is numOfPeople 
// (check the HTML file) –> It’s the number of people sitting at the table.

let numberOfPeople=parseFloat(document.getElementById('peopleamt').value)


// Create a condition :
// If serviceQuality is equal to zero, 
// or billAmount is empty, alert the user to enter these values.
if(serviceQuality==0|| isNaN(numberOfPeople)|| isNaN(serviceQuality)){
   alert('Enter Bill Amount and Service Quality please')
   return;
   
}


// Create another condition after the first one :
// If the input numberOfPeople is empty or is smaller than 1, 
// set a default value of 1 to numberOfPeople and make sure 
// that the tag which id is each, is not displayed (check the end of the HTML file).
if(isNaN(numberOfPeople)|| numberOfPeople<1){
    numberOfPeople=1
   let getEach=document.getElementById('each')
   getEach.style.display='none'
}


// Create a variable named total: the value should be ( billAmount * serviceQuality ) 
// / numberOfPeople (the outcome is the average tip each person should pay)
/*Use the toFixed method to round total to two decimal points.

Add the CSS property “display:block” to the tag which id is totalTip.

Display the variable total in the tag which id is tip. */

let total=((billAmount*serviceQuality)/numberOfPeople).toFixed(2);




let getTip=document.getElementById('tip')
getTip.innerHTML=total

}
// Second Part:
// To avoid displaying the total if the function calculateTip() 
// is not called, add the CSS property “display:none” to the tag which id is totalTip.
// Call the function calculateTip() when the tag which id is calculate is clicked.
// Hint : use the method onclick.
document.getElementById('calculate').addEventListener('click', calculateTip)




