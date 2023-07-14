const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.get('/css/style.css', (req, res) => {
  fs.readFile(__dirname + '/public/css/style.css', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.setHeader('Content-Type', 'text/css');
      res.send(data);
    }
  });
});
s  
app.use(express.static('public', { extensions: ['html', 'htm', 'css'] }));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/details', (req, res) => {
  res.sendFile(__dirname + '/views/details.html');
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/views/register.html');
});

app.post('/register', (req, res) => {
  // Handle registration logic here
  res.send('Registration successful!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
