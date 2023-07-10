// const express = require('express');
// const app = express();

// app.use(express.static('public'));

// app.get('/users', (req, res) => {
//   const user = { firstname: 'John', lastname: 'Doe' };
//   res.json(user);
// });

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });

const express = require('express');
const app = express();

app.get('/:id', (req, res) => {
  const id = req.params.id;
  const response = { id };
  console.log(response);
  res.json(response);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});



