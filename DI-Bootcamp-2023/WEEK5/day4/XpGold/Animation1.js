/*
Create multiple squares/boxes with letters inside.
 There should be 26 squares/boxes for all the letters (A to Z) next to each other.
Make all the squares draggable.
You should be able to drag and drop the letters depending on their coordinates x and y. */

let getContainer=document.querySelector('#container');
getContainer.style.display='flex'

let getLetters=document.querySelectorAll('.letter')

for(let i=0; i<getLetters.length;i++){
    getLetters[i].style.border='black solid 2px'
    getLetters[i].style.width='50px'
    getLetters[i].style.height='50px'
    getLetters[i].style.margin='5px'
    getLetters[i].addEventListener('dragstart', startDrag)
    getLetters[i].addEventListener('dragover', dragOver)
    getLetters[i].addEventListener('drop', drop)
    
 
}




function startDrag(event){
    event.dataTransfer.setData('text/plain', event.target.id)
    event.dataTransfer.effectAllowed = "move";

}


    function dragOver(event){
        event.preventDefault();
            event.dataTransfer.dropEffect = "move"
        }
   


function drop(event){
    event.preventDefault();
    let data=event.dataTransfer.getData('text');
    console.log(data)
    let element= document.getElementById(data)
    console.log(element)
    event.target.appendChild(element)
}



// //fixed with help from ADANE 
// /*
// Create multiple squares/boxes with letters inside.
//  There should be 26 squares/boxes for all the letters (A to Z) next to each other.
// Make all the squares draggable.
// You should be able to drag and drop the letters depending on their coordinates x and y. */

// let getContainer=document.querySelector('#container');
// getContainer.style.display='flex'

// let getLetters=document.querySelectorAll('.letter')

// for(let i=0; i<getLetters.length;i++){
//     getLetters[i].style.border='black solid 2px'
//     getLetters[i].style.width='50px'
//     getLetters[i].style.height='50px'
//     getLetters[i].style.margin='5px'

// ///////////////
//     getLetters[i].setAttribute('id',`${getLetters[i].innerText}_${i}`)
// ////////////////
//     getLetters[i].addEventListener('dragstart', startDrag)
//     getLetters[i].addEventListener('dragover', dragOver)
//     getLetters[i].addEventListener('drop', drop)
    
 
// }




// function startDrag(event){
//    event.dataTransfer.setData('text/plain', event.target.id)
//     event.dataTransfer.effectAllowed = "move";
// }

// function dragOver(event){
//     event.preventDefault();
//     event.dataTransfer.dropEffect = "move"
// }

// function drop(event){
//     event.preventDefault();
//     let data=event.dataTransfer.getData('text');
//     console.log(data)
//     let element= document.getElementById(data) //// if you want to grab element by it's id ,then you need to pass an id for it. 
//     console.log(element)
//     event.target.appendChild(element)
// }


