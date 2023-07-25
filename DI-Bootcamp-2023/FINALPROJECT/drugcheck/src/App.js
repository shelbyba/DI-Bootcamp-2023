import React from 'react';
import Header from './components/Header';
import InputFields from './components/InputFields';
import './App.css';




function App() {
  return (
    <div className="App">
      <Header />
      {/* Add the rest of the content here */}
      <InputFields />
        {/* Footer */}
        <footer>
        <p className="footer-name">
          {/* <span className="symbol">⚕️</span> */}
          © {new Date().getFullYear()} <span className="symbol">⚕️</span>SheblBader<span className="symbol">⚕️</span>
        </p>
      </footer>
    </div>
  );
}

export default App;

