import { useState } from 'react';
import validate from '../../utils/validation';
import styles from './Login.module.css';

export default function Form({login}){

    const [userData, setUserData] = useState({ 
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
      const property = event.target.name;
      console.log('property:',property)
      const value = event.target.value;
      console.log('value:',value)
      setUserData({ ...userData, [property] :value })
      console.log([property])
      validate({ ...userData, [property] :value }, setErrors, errors);
    }
 
    const handleSubmit = async (event) => {
        event.preventDefault();
      
        // Realiza la validación
        const validationErrors = validate(userData.email, userData.password);
        setErrors(validationErrors);
      
        // Si no hay errores de validación
        if (Object.keys(validationErrors).length === 0) {
          // Intenta realizar el login
          try {
            await login(userData);
            // Si login es exitoso, puedes redirigir a la página /home o realizar otras acciones
            alert('Simular login exitoso');
            setUserData({
              email: '',
              password: ''
            });
            setErrors({});
          } catch (error) {
            // Manejar el error del login (puede ser un error del servidor, credenciales incorrectas, etc.)
            alert('Error en el login. Verifica tus credenciales.');
          }
        } else {
          alert('Debe llenar todos los campos');
        }
      };
    



    return(
        <div className={styles.Form}>
            <form onSubmit={handleSubmit}>
                <div className={styles.title}>
                  <label className={styles.label}  htmlFor="email">Email:</label>
                  <input className={styles.input}  name = "email" onChange={handleChange} value={userData.email} type="text" placeholder="Ingrese su email..."/>
                  {errors.email && <p className={styles.error} >{errors.email}</p>}<br />
                </div>
                <br />
                <div>
                  <label className={styles.label} htmlFor="password">Contraseña:</label>
                  <input className={styles.input} name = "password" onChange={handleChange} value ={userData.password} type="text" placeholder="Ingrese su contraseña..."/>
                  {errors.password && <p className={styles.error}>{errors.password}</p>}<br />
                </div>
                <br />               
                <button className={styles.buttom} type="submit">Login</button>
            </form>
        </div>
    )
} 