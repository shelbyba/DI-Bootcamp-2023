function playGame() {
    let word = prompt('Player 1, enter a word of 8 letters:');
    let stars = '*'.repeat(word.length);
    let guesses = [];
    let incorrectGuesses = 0;
  
    while (stars.includes('*') && incorrectGuesses < 10) {
      let guess = prompt(`Player 2, guess a letter\n\n${stars}\n\nPrevious guesses: ${guesses.join(', ')}`);
      
      if (!guess) {
        continue;
      }
      
      if (guesses.includes(guess)) {
        alert('You already guessed that letter!');
        continue;
      }
  
      guesses.push(guess);
  
      if (word.includes(guess)) {
        for (let i = 0; i < word.length; i++) {
          if (word[i] === guess) {
            stars = stars.substring(0, i) + guess + stars.substring(i + 1);
          }
        }
      } else {
        incorrectGuesses++;
        console.log(`Incorrect guess #${incorrectGuesses}.`);
      }
    }
  
    if (incorrectGuesses >= 10) {
      console.log('YOU LOSE');
    } else {
      console.log('CONGRATS YOU WIN!');
    }
  }
playGame();  



  