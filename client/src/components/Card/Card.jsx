// Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './card.styles.css'; // Importa el archivo de estilos CSS

const Card = ({ id ,forename, image, surname, teams }) => {
  const fullName = `${forename} ${surname}`;

  return (
    <div className="card-container">
      <img className="card-image" src={image} alt="imagen" />
      <h2 className='card-title'>{fullName}</h2>
      <div className="card-content">
        <h3>Teams:</h3>
        {teams?.map((team , index) => <p key={index}>{team.name}</p>)}
      </div>
      
      <Link to={`/detail/${id}`}>
        <button className="card-button">Ver detalle</button>
      </Link>
    </div>
  );
};



export default Card;
