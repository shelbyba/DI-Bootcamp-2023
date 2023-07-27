import React from 'react';
import Header from './components/Header.js';
import InputFields from './components/InputFields.js';
import 'whatwg-fetch';
import './App.css';

function App() {
  const BACKEND_URL = 'http://localhost:5000'; // Replace this with your actual backend URL

  return (
    <div className="App">
      <Header />
      <InputFields backendUrl={BACKEND_URL} /> {/* Pass the prop here */}
      {/* Footer */}
      <footer>
        <p className="footer-name">
          © {new Date().getFullYear()} <span className="symbol">⚕️</span>SheblBader<span className="symbol">⚕️</span>
        </p>
      </footer>
    </div>
  );
}








export default App;



