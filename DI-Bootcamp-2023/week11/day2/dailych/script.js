// import{largenumber} from './main1.js';
// const b=5
// console.log(largenumber + b)

// const http= require('http')
// console.log(http)


// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/html');
//   res.statusCode = 200;
  
//   const resultFromPartI = '361'; 
  
//   res.write('<html>');
//   res.write('<body>');
//   res.write('<p>My Module is ' + resultFromPartI + '</p>');
//   res.write('<h1>Hi there at the frontend</h1>');
//   res.write('</body>');
//   res.write('</html>');
  
//   res.end();
// });

// server.listen(3000, () => {
//   console.log("I'm listening");
// });


const http = require('http');
const getCurrentDateTime = require('./main');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;

  const dateTime = getCurrentDateTime();
  
  res.write('<html>');
  res.write('<body>');
  res.write('<p>Current Date and Time: ' + dateTime + '</p>');
  res.write('</body>');
  res.write('</html>');
  
  res.end();
});

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080/");
});

