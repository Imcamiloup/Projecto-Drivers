import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { cleanDriverName } from '../../Redux/Actions/actions';
import { useDispatch } from 'react-redux';
import { paginateDrivers } from '../../Redux/Actions/actions';
import { page } from '../../Redux/Actions/actions';

import './navbar.styles.css';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleHomeClick = () => {
    dispatch(cleanDriverName());
    dispatch(paginateDrivers(1, 9));
    dispatch(page(1));
  };

  return (
    <div className="navbar">
      <Link to="/home" className="navbar-link" onClick={handleHomeClick}>
        Home
      </Link>
      <Link to="/about" className="navbar-link">
        About
      </Link>
      <Link to="/create" className="navbar-link">
        Create
      </Link>
      <div className="search-box">
        <SearchBar />
      </div>
    </div>
  );
}

export default Navbar;
