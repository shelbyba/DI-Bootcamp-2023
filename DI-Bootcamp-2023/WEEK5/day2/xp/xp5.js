// Add many events listeners to one element on your webpage.
//  Use the click, mouseover, 
// mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, 
// change color, 
// change the font size… and more.

let getH1=document.querySelector('h1')
getH1.addEventListener('click',clickRespond)
function clickRespond(){
    let createH1=document.createElement('h1')
    createH1.textContent='WOW AMAZING'
    createH1.style.padding='10px'
    createH1.style.opacity='0.5'

    document.body.appendChild(createH1) 
}; 

getH1.addEventListener('dblclick', doubleRespond);
function doubleRespond(){
    getH1.style.fontFamily='cursive'
}


getH1.addEventListener('mouseover', overRespond);
function overRespond(){
    getH1.style.textDecoration='overline underline'
}