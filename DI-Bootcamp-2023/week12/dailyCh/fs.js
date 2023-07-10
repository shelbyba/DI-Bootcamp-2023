const fs = require('fs');


fs.readFile('RightLeft.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const symbols = data.trim(); 

 
  let position = 0;
  for (const symbol of symbols) {
    if (symbol === '>') {
      position++;
    } else if (symbol === '<') {
      position--;
    }
  }
  console.log('Final position:', position);

  
  let steps = 0;
  let currentPosition = 0;
  while (currentPosition !== -1) {
    const symbol = symbols[steps % symbols.length];
    if (symbol === '>') {
      currentPosition++;
    } else if (symbol === '<') {
      currentPosition--;
    }
    steps++;
  }
  console.log('Steps to hit position -1:', steps);
});
