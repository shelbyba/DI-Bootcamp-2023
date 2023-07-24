// src/Game.js
import React, { useState } from 'react';
import Card from './Card';
import superheroesData from './superheroesData';

const Game = () => {
  const [superheroes, setSuperheroes] = useState(superheroesData);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const shuffleCards = () => {
    setSuperheroes((prevSuperheroes) => {
      const shuffledSuperheroes = [...prevSuperheroes];
      for (let i = shuffledSuperheroes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledSuperheroes[i], shuffledSuperheroes[j]] = [
          shuffledSuperheroes[j],
          shuffledSuperheroes[i],
        ];
      }
      return shuffledSuperheroes;
    });
  };

  const handleCardClick = (id) => {
    setSuperheroes((prevSuperheroes) => {
      const updatedSuperheroes = prevSuperheroes.map((hero) =>
        hero.id === id ? { ...hero, clicked: true } : hero
      );
      return updatedSuperheroes;
    });

    const clickedSuperhero = superheroes.find((hero) => hero.id === id);
    if (clickedSuperhero.clicked) {
      // User clicked the same card twice, reset the game
      setScore(0);
      setSuperheroes((prevSuperheroes) =>
        prevSuperheroes.map((hero) => ({ ...hero, clicked: false }))
      );
    } else {
      // User clicked a new card, increase the score
      setScore((prevScore) => prevScore + 1);
      if (score + 1 > topScore) {
        // Update the top score
        setTopScore(score + 1);
      }
    }

    // Shuffle the cards after every click
    shuffleCards();
  };

  return (
    <div>
      <h1>Superheroes Memory Game</h1>
      <p>Score: {score}</p>
      <p>Top Score: {topScore}</p>
      <div className="game-container">
        {superheroes.map((hero) => (
          <Card
            key={hero.id}
            id={hero.id}
            name={hero.name}
            img={hero.img}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
