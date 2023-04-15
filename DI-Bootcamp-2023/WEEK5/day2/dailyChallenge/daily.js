/**
 *Get the value of each of the inputs in the HTML file when the form is submitted. 
 Remember the event.preventDefault()
Make sure the values are not empty
Write a story that uses each of the values.
Make sure you check the console for errors when playing the game.
Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change 
the story currently displayed (but keep the values entered by the user). The user could click
 the button at least three times and get a new story. Display the stories randomly.
 */

 let getNoun=document.getElementById('noun')
 let getAdjective=document.getElementById('adjective')
 let getPrsnName=document.getElementById('person')
 let getVerb=document.getElementById('verb')
 let getPlace=document.getElementById('place')
 let GetButton=document.querySelector('button')

 GetButton.addEventListener('click', RespondClick);

 function RespondClick(e){
    e.preventDefault()
    if(getNoun.value===''||getAdjective.value===''||getPrsnName.value===''||getVerb.value===''||getPlace.value===''){
        alert('please get info in')
        return;
    }
    let noun=getNoun.value
    let adjective=getAdjective.value
    let person= getPrsnName.value
    let verb=getVerb.value
    let place=getPlace.value

    let story= `one day ${person} decided to drink a glass of whiskey
    with friends in college party but this person was ${adjective} and  always 
    hesitating from ${noun} but friends around decided to get him/her drunk as well so they ${verb} and day after
    all of them woke up at ${place} `
    
    let getStory=document.getElementById('story')
    getStory.textContent=story
 } 


 let creatShuffleBtn=document.createElement('button')
 creatShuffleBtn.textContent='shuffle'
 let getForm=document.getElementById('libform')
 getForm.appendChild(creatShuffleBtn)

 creatShuffleBtn.addEventListener('click', RespondShuffle);

 //bonus
    function RespondShuffle(e){
        e.preventDefault()
        let stories = [
             `One day ${getPrsnName.value} decided to ${getVerb.value} a ${getNoun.value} at ${getPlace.value}.
             It was ${getAdjective.value}!`,
             `Once upon a time, ${getPrsnName.value} found a ${getNoun.value} at ${getPlace.value}. 
             They ${getVerb.value} with it and felt ${getAdjective.value}.`,
             `There was a ${getNoun.value} at ${getPlace.value} that ${getPrsnName.value} 
             always wanted to ${getVerb.value}.
             When they finally did, they felt ${getAdjective.value}.`
        ];
    
        let current = Math.floor(Math.random() * stories.length);
        let currentStory = stories[current];
    
        let getStory=document.getElementById('story')
        getStory.textContent=currentStory
    }
    

 