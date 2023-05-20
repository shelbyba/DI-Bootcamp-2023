// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, 
// retrieve the data from the inputs, and append it on the DOM as a JSON string.
// The output should be:


getform=document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    getName=document.getElementById('name').value
    getLastName=document.getElementById('last-name').value
    let obj={
        name:getName,
        lastName:getLastName
   }
    let bothData=`${JSON.stringify(obj,null,2)}`
    document.body.innerHTML=bothData
})