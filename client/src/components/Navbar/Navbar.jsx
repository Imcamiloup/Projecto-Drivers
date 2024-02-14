import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const  Navbar = ({onSearch}) => {
  return (
    <div
      style ={{
        display: "flex", 
        justifyContent: "space-around", 
        alignItems: "center", 
        backgroundColor:"blue", 
        paddingBottom:"15px"
      }}>

      <Link to='/home'>
        <button>Home</button>
      </Link>
      <Link to='/about'>
        <button>About</button>
      </Link>
      <Link to='/login'>
        <button>Login</button>
      </Link>
      <SearchBar onSearch={onSearch}/>
     

    </div>
  );
}

export default Navbar;