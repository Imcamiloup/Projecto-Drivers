import React from 'react';
import useDriver from '../../hooks/useDriver';
import styles from './detail.module.css'; // Importa los estilos CSS

export default function Detail() {
  const { driver } = useDriver();
  const fullName = `${driver.forename} ${driver.surname}`;

  return (
    <div className={styles.DetailContainer} key={driver.id}>
      <div className={styles.DetailLeft}>
        <h2 className={styles.DetailName}>{fullName}</h2>
        <img className={styles.DetailImage} src={driver.image} alt={driver.name} />
      </div>
      <div className={styles.DetailRight}>
        <div className={styles.DetailInfo}>
          <p><span className={styles.DetailLabel}>Driver ID:</span> {driver.id}</p>
          <p><span className={styles.DetailLabel}>Nationality:</span> {driver.nationality}</p>
          <p><span className={styles.DetailLabel}>Date of Birth:</span> {driver.dob}</p>
          <p><span className={styles.DetailLabel}>Description:</span> {driver.description}</p>
        </div>
        <div className={styles.DetailTeams}>
          <span className={styles.DetailLabel}>Teams:</span>
          {driver.Teams?.map((team) => <span className={styles.DetailTeamName} key={team.id}>{team.name}</span>)}
        </div>
      </div>
    </div>
  );
}
