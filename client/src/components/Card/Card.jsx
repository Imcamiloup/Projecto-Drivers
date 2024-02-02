import React from 'react';

const  Card = ({ name , description}) => {
  return (
    <div >

      <h2>{name}</h2>
      <p>{description}</p>
      
    </div>
  );
}

export default Card;