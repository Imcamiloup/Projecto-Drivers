import { useEffect } from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import {getDrivers} from '../../Redux/Actions/actions';
import './Cards.css'; // Importa la hoja de estilos

const Cards = (props) => {
  const drivers = useSelector((state) => state.drivers);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getDrivers());
  }, []);

  return (
    <div className="cards-container"> {/* Aplica la clase cards-container */}
      <h2 className="cards-title">Drivers</h2>
      {props.driverName[0] ? (
        props.driverName[0].map((drive) => (
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
        drivers?.slice(0, 20).map((drive) => (
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
