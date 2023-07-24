// src/App.js
import React from 'react';
import TodoList from './TodoList'; // Correct import statement with an uppercase 'L'

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
