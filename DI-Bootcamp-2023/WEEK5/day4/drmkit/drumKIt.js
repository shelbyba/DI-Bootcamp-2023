

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



