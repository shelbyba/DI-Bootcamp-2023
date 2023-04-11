
/*In the JS file, create a function called playTheGame() that takes no parameter.
In the function, start by asking the user if they would like to play the game
 (Hint: use the built-in confirm() function).
 First Part
Create a JS file and link it to the index.html file.

Take a look at your html file, you should have a button with an “onclick” event. 
This event is equal to the function playTheGame(). It means that when you
 will click on the button, the function playTheGame() will be called.
We will learn more about events next week ;)


Now let’s create the function:

In the JS file, create a function called playTheGame() that takes no parameter.
In the function, start by asking the user if they would like to play the game 
(Hint: use the built-in confirm() function).

If the answer is false, alert “No problem, Goodbye”.

If his answer is true, follow these steps:
Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function).
 You then have to check the validity of the user’s number :

If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the 
value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). 
Make sure that the number is rounded.*/

 function playTheGame(){
    let askFirst=confirm('would you like to play a game?')
    if(askFirst==false){
      console.log('okay Goodbye')

    }else{
        let askNumber=prompt('enter a number between 0-10');
        if(isNaN(askNumber)){
        //   console.log('sorry not a number Goodbye')
       
        }else if(askNumber<=0 || askNumber>=10){
          console.log('sorry not a good number Goodbye')
        }else{
            let computerNumber= Math.floor(Math.random()*11);
            console.log(computerNumber)
            return computerNumber;
        }
    }
 } 
 playTheGame();


let numberOfGuessing=0

 function compareNumbers(userNumber,computerNumber){
    userNumber=prompt('enter a number between 0-10')
    computerNumber=playTheGame();
    for(i=0; i<3; i++){
    
if(userNumber == computerNumber){
    console.log('you are a Winner')
return true;
}else if(userNumber>computerNumber){
alert('looser :) Your number is bigger than the computer\'s, guess again')
userNumber=prompt('enter a number between 0-10')
}else if( userNumber<computerNumber){
    alert('looser :) Your number is smaller than the computer\'s, guess again')
    userNumber=prompt('enter a number between 0-10')
}
numberOfGuessing++
    }if(numberOfGuessing==3){
        alert('out of chances')
        return false;
    }

 }
 compareNumbers();




function playTheGame(){
    let askFirst=confirm('would you like to play a game?')
    if(askFirst==false){
      console.log('okay Goodbye')

    }else{
        let askNumber=prompt('enter a number between 0-10');
        while(isNaN(askNumber) || askNumber<=0 || askNumber>=10){
            askNumber=prompt('enter a number between 0-10');
       
        }

            let computerNumber= Math.floor(Math.random()*11);
            console.log(computerNumber)
            return computerNumber;
        
    }
 } 
 playTheGame();





  /*this is the last code which i used internet resources to modify more and more, i modified it after
  i checked if user inser ok and then regrets it and wants to cancel he will tays in a loop of psompt of 
  entering a number so serached for a solution for it but it doesnt play the rest of the game*/
 function playTheGame(){
    let askFirst = confirm('would you like to play a game?')
    if (!askFirst) {
      console.log('okay Goodbye')
    } else {
      let askNumber
      while (true) {
        askNumber = prompt('enter a number between 0-10')
        if (askNumber === null) { // user clicked Cancel
          console.log('okay Goodbye')
          return
        }
        if (!isNaN(askNumber) && askNumber > 0 && askNumber < 10) {
          break
        }
      }
      let computerNumber = Math.floor(Math.random() * 11)
      console.log(computerNumber)
      return computerNumber
    }
  }
  playTheGame()
  

