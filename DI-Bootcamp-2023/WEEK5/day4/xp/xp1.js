/*
In your Javascript file, using setTimeout, call a function after 2 seconds.
The function will alert “Hello World”.

 */

setTimeout(Hello, 2000)
function Hello(){
    alert('Hello World')
}

/*
In your Javascript file, using setTimeout, call a function after 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the <div id="container">. */
let intervals=setInterval(addP,2000)
 
let  pNumber=0

setTimeout(addP, 2000)
function addP(){
    let createP=document.createElement("p")
    createP.textContent='Hello World'
    let getDiv=document.getElementById('container')
    getDiv.appendChild(createP)
    pNumber++
    if(pNumber===5){
        
        clearInterval(intervals)

    }
   
}



/*
In your Javascript file, using setInterval, call a function every 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
The interval will be cleared (ie. clearInterval), when the user will click on the button.
Instead of clicking on the button, the interval will be cleared (ie. clearInterval)
 as soon as there will be 5 paragraphs inside the <div id="container">. */

 let getBtn=document.querySelector('#clear')
 console.log(getBtn)
 getBtn.addEventListener('click', cutP)
 
 function cutP(){
    clearInterval(intervals)
  

 }

 