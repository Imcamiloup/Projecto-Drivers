import React from 'react';
import Cards from '../../components/Cards/Cards';
const Home = ({drivers, onSearch, driverName}) => {
    return (
        <div>
            <Cards  onSearch={onSearch}  drivers = {drivers}  driverName={driverName} />
        </div>
    );
};

export default Home;
