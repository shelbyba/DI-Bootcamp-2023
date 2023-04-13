// For each of the questions, find 2 WAYS of accessing :

// 1. The div DOM node?

// console.log(document.body.firstElementChild);
// console.log(document.body.children[0])

// // 2. The ul DOM node?
// console.log(document.body.lastElementChild.previousElementSibling);
// console.log(document.body.children[1])


// // 3. The second li (with Pete)?

// console.log(document.body.lastElementChild.previousElementSibling.firstElementChild);
// console.log(document.body.children[1].firstElementChild);



//ex2

// For each of the questions, find 2 WAYS to access :

// 1. The div node

console.log( document.getElementById('container'));
console.log(document.getElementsByTagName('div'));
console.log(document.querySelector('div'));
console.log(document.querySelectorAll('div'))

// 2. The ul nodes, and render all of it's children one by one
let ulNodes= document.querySelectorAll('ul > li')
for( let e of ulNodes){
    console.log(e)
}

 console.log(document.querySelectorAll('.list'))

 let ULbyClassName= document.getElementsByClassName('list')

 for( j=0; j<ULbyClassName.length; j++){

    let ulNodes2=ULbyClassName[j].getElementsByTagName('li')

    console.log(ulNodes2)
 }

// 3. The first li of each ul
let firstLi= document.querySelectorAll('ul li:first-child');
console.log(firstLi)

firstLi.forEach(li=> console.log(li))



