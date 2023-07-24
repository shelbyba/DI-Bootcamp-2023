// src/Card.js
import React from 'react';

const Card = ({ id, name, img, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={img} alt={name} />
    </div>
  );
};

export default Card;
