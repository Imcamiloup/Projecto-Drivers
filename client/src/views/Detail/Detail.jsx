import useDriver from '../../hooks/useDriver';
import styles from './Detail.module.css'; 


export default function Detail() {

  const {driver} = useDriver();

  const fullName = `${driver.forename} ${driver.surname}`;

  return (
    <div className={styles.DetailContainer}  key = {driver.id}>
        
      <div className={styles.DetailInfo}>
       
        <img src={driver.image} alt={driver.name} />
        <h1>{driver.id}</h1>
        <h2>{fullName}</h2>
        <span>Teams:</span> {driver.Teams?.map((team)=> <span > {team.name} </span>)}
        <p>Nationality: {driver.nationality}</p>
        <p>Description: {driver.description}</p>
        <p>Dob: {driver.dob}</p>
      
      </div>
    </div>
  );
}
