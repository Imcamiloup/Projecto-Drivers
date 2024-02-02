import React from 'react';
import Cards from '../Cards/Cards';

const Home = ({drivers, onSearch}) => {
    return (
        <div>
            <Cards  onSearch={onSearch}  drivers = {drivers}  />
        </div>
    );
};

export default Home;
