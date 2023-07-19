// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import ParentComponent from './ParentComponent';

ReactDOM.render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
