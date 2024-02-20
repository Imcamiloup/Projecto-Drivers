import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { cleanDriverName } from '../../Redux/Actions/actions';
import { useDispatch } from 'react-redux';
import { paginateDrivers} from '../../Redux/Actions/actions';
import { page } from '../../Redux/Actions/actions';

import './navbar.styles.css';
const  Navbar = () => {

  const dispatch = useDispatch();

  const handleHomeClick = () => {
    dispatch(cleanDriverName()); // Resetea el estado driverName al valor inicial
    dispatch(paginateDrivers(1, 9)); // Resetea el estado currentPage al valor inicial
    dispatch(page(1)); // Resetea el estado currentPage al valor inicial
  };

  return (
    <div
      style ={{
        display: "flex", 
        justifyContent: "space-around", 
        alignItems: "center", 
        backgroundColor: "#B42219", 
        paddingBottom:"2px"
      }}>

      <Link to='/home' onClick={handleHomeClick}>
        <button>Home</button>
      </Link>
      <Link to='/about'>
        <button>About</button>
      </Link>
      <Link to='/create'>
        <button>Create</button>
      </Link>
      <SearchBar />
     

    </div>
  );
}

export default Navbar;