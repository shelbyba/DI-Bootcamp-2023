import React from 'react';
import ReactDOM from 'react-dom';
import UserFavoriteAnimals from './fav';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
};

ReactDOM.render(
  <React.StrictMode>
    <h1>HELLO WORLD</h1>
    <h1>I Love JSX!</h1>
    <h1>React is {5 + 5} times better with JSX</h1>
    <h3>{user.firstName} {user.lastName}</h3>
    <UserFavoriteAnimals favAnimals={user.favAnimals} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




/*
Exercise 1: With JSX
Instructions
Display a “Hello World!” message on the page.
Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page.
Create a constant variable named sum, which value is 5 + 5. Render on the page, the following sentence "React is <sum> times better with JSX"
 */



/*
Instructions
Using the following object:

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};
In the React App, render the first name and the last name of the user in two <h3>.
In a separate Javascript file, create a new Component called UserFavoriteAnimals. Use props to pass the fav_animals array to the UserFavoriteColors component.
In the UserFavoriteColors component, use the map function to create a new array of <li>‘s.
Each <li> corresponds to one animal from the fav_animals array.
Display the <li>‘s. Tip : You can use the second parameter of the map function as a key to uniquely identify each HTML item
 */
