import React from 'react';
import Form from '../Form/Form';
import Home from '../Home/Home';

const Landing = ({login, onSearch, drivers}) => {
    return (
        <div>
            <Form login ={login}/>
            <Home  onSearch={onSearch}  drivers = {drivers}/>
        </div>
    );
};

export default Landing;
