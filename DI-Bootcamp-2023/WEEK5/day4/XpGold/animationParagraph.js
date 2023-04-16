/**
 Create a paragraph and make it draggable.
You should be able to drag and drop the paragraph.
Change the font size of the paragraph according to the screen coordinates.
 */

let getP=document.getElementById('dragme')
getP.style.border='solid 3px black'
getP.style.width='10%'
getP.style.height="10%"

getP.addEventListener('dragstart', startDrag);


let getdiv=document.querySelector('#div')
getdiv.addEventListener('dragover', dragOver);
getdiv.addEventListener('drop', drop)
getdiv.style.width='900px'
getdiv.style.height='900px'
getdiv.style.border='solid 3px brown'


function startDrag(event){
 
  event.dataTransfer.setData('text/plain', event.target.id )
  event.dataTransfer.effectAllowed = "move"

}

function dragOver(event){
    event.preventDefault();
}

function drop(event){
    event.preventDefault()
    console.log('drop event fired')
    let data=event.dataTransfer.getData('text/plain')
    let element=document.getElementById(data)
    event.target.appendChild(element)
    element.style.position = "absolute";
            element.style.top = (event.clientY - element.clientHeight / 2) + "px";
            element.style.left = (event.clientX - element.clientWidth / 2) + "px";

  
}


