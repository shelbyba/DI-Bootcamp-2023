import React from 'react';
import './Exercise3.css';

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

function Exercise3() {
  return (
    <div>
      <h1 style={style_header}>
        Heading 1
      </h1>
      <p className='para'>This is a paragraph.</p>
      <a href="https://example.com">Link</a>
      <form>
        <input type="text" placeholder="Input" />
        <button type="submit">Submit</button>
      </form>
      <img src="https://images.unsplash.com/photo-1579154392128-bf8c7ebee541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"  alt="Image" />
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}

export default Exercise3;
