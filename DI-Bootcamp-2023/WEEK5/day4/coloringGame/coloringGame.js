

// let selectedColor=null;


// let getBtn=document.querySelectorAll('button')
// console.log(getBtn)

// for(let i=1 ; i<getBtn.length;i++){
//     getBtn[i].classList.add('colors')
// }

// let getBtn1=document.querySelectorAll('.colors')
// console.log(getBtn1)

// for(let i=0; i<getBtn1.length;i++){
//     getBtn1[i].addEventListener('click', pickColor)
    
// }

// function pickColor(){
//     selectedColor = this.style.backgroundColor
//     console.log(selectedColor)
 
// }

// let getBoxes=document.querySelectorAll('.divideme')

// for(let i=0; i<getBoxes.length; i++){
//     getBoxes[i].addEventListener('mousedown' , mousedown);
   


// }




// function mousedown(){

//     this.addEventListener('mousemove', mouseMove);
//     this.addEventListener('mouseup', mouseUp);
// }

// function mouseMove(event){
//     if(event.buttons===1){
//     this.style.backgroundColor = selectedColor;
//     }
// }

// function mouseUp(){
//     this.removeEventListener('mousemove', mouseMove);
//     this.removeEventListener('mouseup', mouseUp);
// }
let selectedColor = 'black';
let isMouseDown = false;

document.querySelectorAll('.gridme button').forEach(button => {
  button.addEventListener('click', () => {
    selectedColor = button.style.backgroundColor;
  });
});

document.querySelectorAll('.divideme').forEach(div => {
  div.addEventListener('mousedown', () => {
    isMouseDown = true;
  });
  
  div.addEventListener('mouseup', () => {
    isMouseDown = false;
  });
  
  div.addEventListener('mousemove', () => {
    if (isMouseDown==true) {
      div.style.backgroundColor = selectedColor;
    }
  });
});

document.querySelector('#clear').addEventListener('click', () => {
  document.querySelectorAll('.divideme').forEach(div => {
    div.style.backgroundColor = 'rgb(191, 183, 183)';
  });
});
