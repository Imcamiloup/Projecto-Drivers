// Card.jsx
import React from 'react';
import './Card.css'; // Importa el archivo de estilos CSS

const Card = ({ forename, image }) => {
  return (
    <div className="card-container">
      <img
        src={image}
        alt="imagen"
        className="card-image"
      />
      <h2>{forename}</h2>
    </div>
  );
};

export default Card;
