// Using Javascript, in the <div>, change the value of the id attribute from navBar
//  to socialNetworkNavigation, using the setAttribute method.

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>),
//      using the appendChild method.

// Use the firstElementChild and the lastElementChild properties to retrieve the 
// first and last <li> elements from their parent element (<ul>). 
//     Display the text of each link. (Hint: use the textContent property).

let getNav=document.getElementById('navBar');
getNav.setAttribute( 'id', 'socialNetworkingNavigation');


let getUl=document.querySelector('ul')
let newli= document.createElement('li');
let textIs=document.createTextNode('logout');
newli.appendChild(textIs);
getUl.appendChild(newli)


console.log(document.querySelector('ul').firstElementChild.textContent);
console.log(document.querySelector('ul').lastElementChild.textContent);





