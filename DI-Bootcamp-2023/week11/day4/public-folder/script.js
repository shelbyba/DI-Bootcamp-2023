// fetch('/users')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     const userList = document.getElementById('user-list');
//     const listItem = document.createElement('li');
//     listItem.textContent = `First Name: ${data.firstname}, Last Name: ${data.lastname}`;
//     userList.appendChild(listItem);
//   })
//   .catch(error => console.log(error));

fetch('http://localhost:3000/1234')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Display the data on the DOM or perform any desired actions
  })
  .catch(error => {
    console.log('Error:', error);
  });

