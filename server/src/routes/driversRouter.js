const { Router } = require('express');
const driversRouter = Router();
const fs = require('fs').promises; // Utilizamos la versión promisificada de fs
const path = require('path');


driversRouter.get('/', async (req, res) => {
    try {
      const filePath = path.join(__dirname, '..', '..', 'api', 'db.json');
      const response = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(response);
      const drivers = data.drivers.map((driver) => ({
        id: driver.id,
        driverRef: driver.driverRef,
        number: driver.number,
        code: driver.code,
        forename: driver.name.forename,
        surname: driver.name.surname,
        image: driver.image.url || 'https://cdn.motor1.com/images/mgl/O487B/s1/nuevo-logo-de-f1-2018.webp',
        dob: driver.dob,
        natiolality: driver.natiolality,
        url: driver.url,
        teams: driver.teams,
        description: driver.description,
      }));
        res.json(drivers);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Error al leer el archivo' });
    }
  });


/* GET | /drivers/:idDriver
Esta ruta obtiene el detalle de un driver específico. Es decir que devuelve un objeto con la información pedida en el detalle de un driver.
El driver es recibido por parámetro (ID).
Tiene que incluir los datos del/los team/s del driver al que está asociado.
Debe funcionar tanto para los drivers de la API como para los de la base de datos.*/

driversRouter.get('/:idDriver', async (req, res) => {
    const { idDriver } = req.params;
    const id = idDriver;
    try{
        const filePath = path.join(__dirname, '..', '..', 'api', 'db.json');
        const response = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(response);
        const driver = data.drivers.find((driver) => driver.id == id);
        if(driver){
            res.json(driver);
        }
        else{
            res.send('No se encontró el driver por id');
        }
    }
    catch(error){
        console.error(error);
        res.status(500).send({ error: 'Error al leer el archivo' });
    }
});

module.exports = driversRouter;