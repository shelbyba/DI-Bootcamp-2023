const fs = require('fs');

// Create a new text file and write to it
fs.writeFile('myFile.txt', 'Hello, world!', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File created and text written successfully.');
});

// Append text to the file
fs.appendFile('myFile.txt', '\nBuy orange juice', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Text appended to the file successfully.');
});

// Delete the file
fs.unlink('myFile.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File deleted successfully.');
});
