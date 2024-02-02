import React from 'react';

const  Card = ({ forename , image}) => {
  return (
    <div >
      <img src={image} alt="imagen" />
      <h2>{forename}</h2>
      
    </div>
  );
}

export default Card;