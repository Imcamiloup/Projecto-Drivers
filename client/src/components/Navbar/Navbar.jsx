import React from 'react';
import { Link } from 'react-router-dom';

const  Navbar = () => {
  return (
    <div
      style ={{
        display: "flex", 
        justifyContent: "space-around", 
        alignItems: "center", 
        backgroundColor:"blue", 
        paddingBottom:"15px"
      }}>

      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/about'>
        <button>About</button>
      </Link>
      <Link to='/form'>
        <button>Form</button>
      </Link>
     

    </div>
  );
}

export default Navbar;