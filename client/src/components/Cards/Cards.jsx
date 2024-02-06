import React, { useEffect } from 'react';
import Card from '../Card/Card';
import './Cards.css'; // Importa la hoja de estilos

const Cards = ({ drivers, onSearch }) => {
  console.log('driversss:', drivers);

  /*useEffect(() => {
    onSearch()
  }, [])*/

  return (
    <div className="cards-container"> {/* Aplica la clase cards-container */}
      <h2 className="cards-title">Drivers</h2>
      <button className="show-drivers-button" onClick={onSearch}>
        Mostrar Drivers
      </button>
      {drivers[0]?.slice(0, 20).map((drive, index) => {
        return (
          <Card
            key={index}
            image={drive.image}
            surname={drive.surname}
            forename={drive.forename}
          />
        );
      })}
    </div>
  );
};

export default Cards;
