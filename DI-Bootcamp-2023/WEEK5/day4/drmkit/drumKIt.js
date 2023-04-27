

let getKey=document.querySelectorAll('.key')
for (let i = 0; i < getKey.length; i++) {
  getKey[i].addEventListener('click', function() {
    let dataKey = this.dataset.key;
    let audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  });
}





window.addEventListener('keydown', playSound)
let getSound=document.querySelector('audio')


function playSound(e){
    let audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return;
    audio.currentTime=0
    audio.play();
}

/*
 The code defines a div element with the class keys and a number of button elements inside it.
  Each button element represents a drum kit component and has a data-key attribute that corresponds to 
 a key code for the keyboard input. Additionally, each button element contains a span 
 element that represents the name of the component, and a kbd element that displays the 
 corresponding keyboard key.

The code also includes several audio elements, each of which represents a sound file that 
corresponds to a drum kit component. Each audio element has a src attribute that points to the
 sound file and a data-key attribute that corresponds to the key code for the keyboard input. */

