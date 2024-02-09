import React from 'react';
import Cards from '../Cards/Cards';
const Home = ({drivers, onSearch, driverName}) => {
    return (
        <div>
            <Cards  onSearch={onSearch}  drivers = {drivers}  driverName={driverName} />
        </div>
    );
};

export default Home;
