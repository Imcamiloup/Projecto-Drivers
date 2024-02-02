import React, { useEffect } from 'react';
import Card from '../Card/Card'

const  Cards = ({drivers, onSearch}) => {

  console.log('driversss:', drivers)

  useEffect(() => {
    onSearch()
  }, [])

  return (
    <div>
      <h2>Drivers</h2>
      <button onClick={onSearch}>Mostrar Drivers</button>
      {drivers?.map((drive, index) => {
        return (
          <Card 
          key={index} 
          name={drive.name}
          description={drive.description}
          />

        )
      })}
    </div>
  );
}

export default Cards;