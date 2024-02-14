const fs = require('fs').promises; // Utilizamos la versión promisificada de fs
const path = require('path');

module.exports = async (name) => {
    try {
        const filePath = path.join(__dirname, '..', '..', 'api', 'db.json');
        const response = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(response);
        const driver = data.drivers.filter((driver) => driver.name.forename === name);

        const driverFormat = driver.map((driver)=> {
            return {
                id: driver.id,
                driverRef: driver.driverRef,
                forename: driver.name.forename,
                surname: driver.name.surname,
                description: driver.description,
                image: driver.image.url || 'https://cdn.motor1.com/images/mgl/O487B/s1/nuevo-logo-de-f1-2018.webp',
                nationality: driver.nationality,
                dob: driver.dob,
                Teams: driver.teams ? driver.teams.split(',').map((team) =>  
                ( {name: team.trim()})
            ) : [],
            }
        });
        if(driverFormat){
            
            return driverFormat;
        }
        else{
            throw 'Name no existe en la API';
        }
    } catch (error) {
        return { error: 'Error al leer el archivo' };
    }
}