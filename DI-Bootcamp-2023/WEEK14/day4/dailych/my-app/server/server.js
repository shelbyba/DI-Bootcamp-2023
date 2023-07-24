// server/server.js

const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

app.post('/api/world', (req, res) => {
  const inputValue = req.body.value;
  console.log('Value from client:', inputValue);
  res.send(`I received your POST request. This is what you sent me: ${inputValue}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
