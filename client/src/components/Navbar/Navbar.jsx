import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { cleanDriverName } from '../../Redux/Actions/actions';
import { useDispatch } from 'react-redux';

import './navbar.styles.css';
const  Navbar = () => {

  const dispatch = useDispatch();

  const handleHomeClick = () => {
    dispatch(cleanDriverName()); // Resetea el estado driverName al valor inicial
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
      <Link to='/login'>
        <button>Login</button>
      </Link>
      <SearchBar />
     

    </div>
  );
}

export default Navbar;