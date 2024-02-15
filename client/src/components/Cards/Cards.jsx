import Card from '../Card/Card';
import useDriver from '../../hooks/useDriver';
import { useState } from 'react';
import './cards.styles.css'; // Importa la hoja de estilos

const Cards = ({drivers}) => {
  

  const {driverName} = useDriver(); // Extrae drivers y driverName del hook useDriver

 

  return (
    <div className="cards-container"> {/* Aplica la clase cards-container */}
    
      {driverName[0] ? (
        driverName.map((drive) => (
          <Card
            key={drive.id}
            id={drive.id}
            image={drive.image}
            surname={drive.surname}
            forename={drive.forename}
            teams={drive.Teams}
          />
        ))
      ) : (
        drivers?.map((drive) => (
          <Card
            key={drive.id}
            id={drive.id}
            image={drive.image}
            surname={drive.surname}
            forename={drive.forename}
            teams={drive.Teams}
          />
        ))
      )}

      
    </div>
  );
};



export default Cards;



/*const mapStateToProps = (state) => {
  return {
    drivers: state.drivers,
    driverName: state.driverName,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: () => dispatch(getDrivers()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Cards);*/
