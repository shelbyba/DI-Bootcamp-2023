import React, { useState } from 'react';


import quotesData from './quotesData'; 

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');

  const getRandomQuote = () => {
    //  random quote from the quotesData array
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    const randomQuote = quotesData[randomIndex];

    // Set the quote and author in the state
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);

    // Generate random background and text colors
    setBackgroundColor(getRandomColor());
    setTextColor(getRandomColor());
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="quote-generator" style={{ backgroundColor: backgroundColor, color: textColor }}>
      <h1 className="quote">{quote}</h1>
      <p className="author">- {author}</p>
      <button className="new-quote-button" onClick={getRandomQuote}>
        New Quote
      </button>
    </div>
  );
};

export default QuoteGenerator;
