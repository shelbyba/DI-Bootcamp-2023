import React, { useState } from 'react';

const App = () => {
  const [languages, setLanguages] = useState([
    { name: 'Php', votes: 0 },
    { name: 'Python', votes: 0 },
    { name: 'JavaScript', votes: 0 },
    { name: 'Java', votes: 0 },
  ]);

  const handleVote = (index) => {
    setLanguages((prevLanguages) => {
      const updatedLanguages = [...prevLanguages];
      updatedLanguages[index].votes += 1;
      return updatedLanguages;
    });
  };

  return (
    <div className="App">
      <h1>Vote for Your Favorite Programming Language</h1>
      {languages.map((language, index) => (
        <div key={index}>
          <h3>{language.name}</h3>
          <p>Votes: {language.votes}</p>
          <button onClick={() => handleVote(index)}>Vote</button>
        </div>
      ))}
    </div>
  );
};

export default App;
