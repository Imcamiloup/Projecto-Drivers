import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css'; 
import { useState } from 'react';
import axios from 'axios';



export default function Detail() {

  const { id } = useParams();
  const [driver, setDriver] = useState([]);
  
  
  useEffect(() => {
    axios(`http://localhost:3001/drivers/${id}`)
    .then(({ data }) => {
      if (data.surname) {
        setDriver(data);
      } else {
        window.alert('No hay drivers con ese ID');
      }
    });
    return setDriver({});
  }, [id]);
  
  const fullName = `${driver.forename} ${driver.surname}`;

  return (
    <div className={styles.DetailContainer}>
        
      <div className={styles.DetailInfo}>
       
        <img src={driver.image} alt={driver.name} />
        <h2>{fullName}</h2>
        <p>Teams: {driver.teams}</p>
        <p>Nationality: {driver.nationality}</p>
        <p>Description: {driver.decription}</p>
        <p>Dob: {driver.dob}</p>
      
      </div>
    </div>
  );
}
