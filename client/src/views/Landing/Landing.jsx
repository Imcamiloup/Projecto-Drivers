import React from 'react';
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
            <h1 className={styles.title}>¡Bienvenidos!</h1>
            <Link to='/home'>
                <button className={styles.customButton}>Comenzar</button>
            </Link>
        </div>
    );
};

export default Landing;