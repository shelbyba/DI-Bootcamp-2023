/*
Try to recreate it without looking at the solution.
Each new box should have a different random background color.
 */


let getBox=document.getElementById('box')
getBox.style.background='lightblue'
getBox.style.width='100px'
getBox.style.height='100px'
getBox.style.cursor='pointer'


let getcontainer=document.getElementById('container')
getcontainer.appendChild(getBox)
getcontainer.style.width='1000px'
getcontainer.style.height='1000px'
getcontainer.style.backgroundColor='beige'



getBox.addEventListener('click', addBox)

function addBox(){
    let createBox=document.createElement('button')
    createBox.style.background = `rgb(${getRandom(256)}, ${getRandom(256)}, ${getRandom(256)})`
    createBox.style.width='100px'
    createBox.style.height='100px'
    createBox.style.cursor='pointer'

   
   
    getcontainer.appendChild(createBox)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

