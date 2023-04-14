// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

let getformFirst=document.querySelector('#MyForm')
let getRadius=getformFirst.radius
let getVolume=getformFirst.volume
let getsubmit=document.querySelector('#submit')

getsubmit.addEventListener('click', SubmitRespond);

function SubmitRespond(event){
    event.preventDefault();
    let radiusInNumber=parseInt(getRadius.value)
    let volumeInNumber;

    radiusInNumber=Math.abs(radiusInNumber);
    volumeInNumber= (4/3) * Math.PI * Math.pow(radiusInNumber, 3);
    volumeInNumber= volumeInNumber.toFixed(2);

     getVolume.value=volumeInNumber;


}





