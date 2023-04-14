/*Retrieve the form and console.log it.

Retrieve the inputs by their id and console.log them.

Retrieve the inputs by their name attribute and console.log them.

When the user submits the form (ie. submit event listener)
use event.preventDefault(), why ?  to not let the page refresh but it holds on with the submission 

get the values of the input tags,
make sure that they are not empty,
create an li per input value,
then append them to a the <ul class="usersAnswer"></ul>, below the form.
The output should be :

<ul class="usersAnswer">
    <li>first name of the user</li>
    <li>last name of the user</li>
</ul> */

let getForm=document.querySelector('form')
console.log(getForm)


let getFname=document.getElementById('fname')
let getLname=document.getElementById('lname')
let getsubmit=document.getElementById('submit')
console.log(getFname, getLname,getsubmit)


let fnamee=document.querySelector("[name=fname]").value
console.log(fnamee)
//or
let lnamee=getForm.lname
console.log(lnamee)

let submitt=getForm.submit
console.log(submitt)

//get firstname and lastname

getForm.addEventListener('submit',event);
function event(e){
    e.preventDefault();
    let firstName=getFname.value
    let lastName=getLname.value
    console.log(firstName,lastName)
 
    let liNew1=document.createElement('li')
    liNew1.textContent=firstName;
    let liNew2=document.createElement('li')
    liNew2.textContent=lastName

    let allLi = document.createDocumentFragment();
  allLi.appendChild(liNew1);
  allLi.appendChild(liNew2);
    let getUl=document.querySelector('.usersAnswer')
    getUl.appendChild(allLi)
}



