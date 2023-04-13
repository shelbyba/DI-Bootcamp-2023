let allBooks=[
    { 
title:'awaken the giant within',
author:'Tonny Robbins',
image : " https://tse4.mm.bing.net/th?id=OIP.Pi6bqoTt9107_G5w5ckrgQHaHa&pid=Api&P=0",
alreadyRead :true,

},
{
    title:'21 lessons for 21st censtury',
    author:'Yuval noah harrari',
    image : " https://tse1.mm.bing.net/th?id=OIP.kfloc-P6blj0vsWaAZlvLQHaLL&pid=Api&P=0",
    alreadyRead :true,
}];


// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table 
// (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

let createTable=document.createElement('table')
createTable.innerHTML=`

<table>
  <tr>
    <th>title</th>
    <th>author</th>
  </tr>

  <tr>
    <td>${allBooks[0].title}is written by ${allBooks[0].author} </td>
    <td>${allBooks[1].title}is written by ${allBooks[1].author} </td>
  </tr>
  <tr>
    <td> <img src="${allBooks[0].image}" width="100" </td>
    <td> <img src="${allBooks[1].image}" width ="100" </td>
  </tr>

</table>
`


let parentElement = document.querySelector('.listBooks');
parentElement.appendChild(createTable);



//i didnt do the condition for coloring with red becuse i needed to understand more 



