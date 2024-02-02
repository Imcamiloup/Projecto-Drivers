import React, { useEffect } from 'react';
import Card from '../Card/Card'

const  Cards = ({drivers, onSearch}) => {

  console.log('driversss:', drivers)

  /*useEffect(() => {
    onSearch()
  }, [])*/

  return (
    <div>
      <h2>Drivers</h2>
      <button onClick={onSearch}>Mostrar Drivers</button>
      {drivers[0]?.slice(0,20).map((drive, index) => {
        return (
          <Card 
          key={index} 
          image={drive.image}
          forename={drive.forename}         
          />

        )
      })}
    </div>
  );
}

export default Cards;