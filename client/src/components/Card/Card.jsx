// Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'; // Importa el archivo de estilos CSS

const Card = ({ id ,forename, image, surname, teams }) => {
  const fullName = `${forename} ${surname}`;

  return (
    <div className="card-container">
      <img className="card-image" src={image} alt="imagen" />
      <h2>{fullName}</h2>
      <p>Teams: {teams}</p>
      <Link to={`/detail/${id}`}>
        <button className="detail-button">Ver detalle</button>
      </Link>
    </div>

  );
};

export default Card;
