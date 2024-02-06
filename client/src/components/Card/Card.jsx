// Card.jsx
import React from 'react';
import './Card.css'; // Importa el archivo de estilos CSS

const Card = ({ forename, image, surname }) => {
  const fullName = `${forename} ${surname}`;

  return (
    <div className="card-container">
      <img
        src={image}
        alt="imagen"
        className="card-image"
      />
      <h2>{fullName}</h2>
    </div>
  );
};

export default Card;
