import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './navbar.styles.css';

const  Navbar = () => {
  return (
    <div className="search-box">

      <Link to='/home'>
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