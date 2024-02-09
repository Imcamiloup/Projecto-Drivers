import React from 'react';
import Form from '../Form/Form';
import Home from '../Home/Home';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';

/*const Landing = ({login, onSearch, drivers}) => {
    return (
        <div className={Styles.Landing}>
            <Form login ={login}/>
            <Home  onSearch={onSearch}  drivers = {drivers}/>
        </div>
    );
};

export default Landing;*/

const Landing = () => {
    return (
        <div className={styles.Landing}>
            <h1>¡Bienvenidos!</h1>
            <Link to='/home'>
                <button>Comenzar</button>
            </Link>
        </div>
    );
};

export default Landing;