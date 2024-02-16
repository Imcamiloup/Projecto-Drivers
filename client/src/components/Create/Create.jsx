import React, { useState } from 'react';
import './create.styles.css'; // Importa los estilos CSS

const DriverForm = () => {
  const [formData, setFormData] = useState({
    driverRef: 'compa',
    number: '\\N',
    code: '\\N',
    forename: 'Prueba',
    surname: 'Create',
    image: 'https://prod-fullevo-webapp.tudn.com/_next/image?url=https://st1.uvnimg.com/ff/65/30bf21ce4b56a8a7174a0c3b176c/skyward-sword-art-style-with-smash-bros-link-by-casval-lem-daikun-d7ef8lc.jpg&w=1024&q=75',
    dob: '1940-06-10',
    nationality: 'Canadian',
    url: 'http://en.wikipedia.org/wiki/Peter_Ryan_(driver)',
    teams: '10be9ec6-b5e7-4a9a-80a0-734254f7ca2d',
    description: 'Peter Barry Ryan (June 10, 1940 in Philadelphia, Pennsylvania, United States – July 2, 1962 in Paris, France) was an American-born Canadian racecar driver from Mont-Tremblant, Quebec. He had a short Formula One career. He participated in one Grand Prix, the 1961 United States Grand Prix at Watkins Glen, finishing ninth. He scored no championship points. However, he became the first Canadian ever to take part in a Formula One Grand Prix.',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/drivers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Driver data successfully submitted!');
        setIsSubmitted(true);
      } else {
        console.error('Failed to submit driver data');
      }
    } catch (error) {
      console.error('Error submitting driver data:', error);
    }
  };

  if (isSubmitted) {
    return <div className="success-message">Registro completado con éxito</div>;
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>
        Driver Reference:
        <input className="input-field" type="text" name="driverRef" value={formData.driverRef} onChange={handleChange} />
      </label>
      <label>
        Number:
        <input className="input-field" type="text" name="number" value={formData.number} onChange={handleChange} />
      </label>
      <label>
        Code:
        <input className="input-field" type="text" name="code" value={formData.code} onChange={handleChange} />
      </label>
      <label>
        Forename:
        <input className="input-field" type="text" name="forename" value={formData.forename} onChange={handleChange} />
      </label>
      <label>
        Surname:
        <input className="input-field" type="text" name="surname" value={formData.surname} onChange={handleChange} />
      </label>
      <label>
        Date of Birth:
        <input className="input-field" type="text" name="dob" value={formData.dob} onChange={handleChange} />
      </label>
      <label>
        Nationality:
        <input className="input-field" type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
      </label>
      <label>
        Image URL:
        <input className="input-field" type="text" name="image" value={formData.image} onChange={handleChange} />
      </label>
      <label>
        Wikipedia URL:
        <input className="input-field" type="text" name="url" value={formData.url} onChange={handleChange} />
      </label>
      <label>
        Teams:
        <input className="input-field" type="text" name="teams" value={formData.teams} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea className="input-field" name="description" value={formData.description} onChange={handleChange} />
      </label>
      <button className="submit-button" type="submit">Submit</button>
    </form>
  );
};

export default DriverForm;

