import React, { useEffect } from 'react';
import Card from '../Card/Card';
import './Cards.css'; // Importa la hoja de estilos

const Cards = ({ drivers, onSearch, driverName }) => {

  useEffect(() => {
    onSearch()
  }, []);

  return (
    <div className="cards-container"> {/* Aplica la clase cards-container */}
      <h2 className="cards-title">Drivers</h2>
      {driverName[0]?.map((drive) => {
        return (
          <Card
            key={drive.id}
            id = {drive.id}
            image={drive.image}
            surname={drive.surname}
            forename={drive.forename}
            teams = {drive.teams}
          />
        );
      })}
      {drivers[0]?.slice(0, 20).map((drive, index) => {
        return (
          <Card
            key={index}
            id = {drive.id}
            image={drive.image}
            surname={drive.surname}
            forename={drive.forename}
            teams = {drive.teams}
          />
        );
      })}
    </div>
  );
};

export default Cards;
