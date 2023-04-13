
// function countdown(){
//     let UserNumber=prompt('write a number between 0-99');
  
// }if(UserNumber=true){
//     let startpoint= onsole.log(`take 1 down and pass around 
//     we have now ${99-UserNumber}`)

//  console.log(`take 2 down and pass them around we have now ${99-startpoint}`)
    
// }
// countdown();



function countdown() {
    let startingNumber = parseInt(prompt('Enter a number between 1-99 to start counting down bottles:'));
  
    // Validate user input
    if (isNaN(startingNumber) || startingNumber < 1 || startingNumber > 99) {
      console.log('Invalid input. Please enter a number between 1-99.');
      return;
    }
  
    let bottlesLeft = startingNumber;
  
    while (bottlesLeft > 0) {
      console.log(`${bottlesLeft} bottle${bottlesLeft !== 1 ? 's' : ''} of beer on the wall`);
      console.log(`${bottlesLeft} bottle${bottlesLeft !== 1 ? 's' : ''} of beer`);
      console.log(`Take ${bottlesLeft > 1 ? 'one' : 'it'} down, pass it around`);
  
      bottlesLeft--;
  
      if (bottlesLeft > 0) {
        console.log(`${bottlesLeft} bottle${bottlesLeft !== 1 ? 's' : ''} of beer on the wall`);
      } else {
        console.log(`No more bottles of beer on the wall`);
      }
    }
  }
  
  countdown();
  