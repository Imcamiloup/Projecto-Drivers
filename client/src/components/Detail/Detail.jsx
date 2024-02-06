import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
import styles from './Detail.module.css'; // Importa los estilos del módulo
import axios from 'axios';

export default function Detail({ character, onSearch }) {
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(response => {
        onSearch(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);


  return (
    <div className={styles.DetailContainer}>
      <div className={styles.DetailImage}> {/* Aplica la clase del módulo aquí */}
        <Card
          image={character.image}
        />
      </div>
      <div className={styles.DetailInfo}> {/* Aplica la clase del módulo aquí */}
        {/* Aquí puedes mostrar la información adicional del personaje */}
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        {/* Agrega más información si es necesario */}
      </div>
    </div>
  );
}