// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Delete the <li> that contains the text node 
// “Sarah”. (It’s the second <li> of the second <ul>)
// Change each first name of the two <ul>'s to your name. (Hint : use a loop)

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

let getDiv= document.querySelector('div');
console.log(getDiv);

//or 
console.log(document.getElementById('container'))


//pete is first ul 2nd li 

console.log(document.querySelector('.list').children[1].innerHTML='Richard')

//or
// let getUl=document.querySelector('li:nth-child(2)')
// console.log(getUl);
// getUl.innerHTML='Richard'
// getUl.textContent='richard'




let getSecondUl=document.body.lastElementChild.previousElementSibling
console.log(getSecondUl)
let getSarah=getSecondUl.querySelector('li:nth-child(2)')
getSarah.parentNode.removeChild(getSarah);


let eachUl=document.getElementsByClassName('list');
console.log(eachUl);
for(let i=0; i<eachUl.length; i++){

    let firstLiOfEach= eachUl[i].querySelector('li:nth-child(1)')
    console.log(firstLiOfEach.innerHTML="shelby");
}


let getUl=document.querySelectorAll('.list');
for(i=0; i<getUl.length; i++){
    getUl[i].classList.add('studnt-list')
}

let FirstUl=document.querySelector('ul');
FirstUl.classList.add('university','attendance')











