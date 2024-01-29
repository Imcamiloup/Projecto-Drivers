const { Router } = require('express');
const driversRouter = Router();
const getDriversApi = require('../controllers/getDriversApi');
const getDriversDB = require('../controllers/getDriversDB');
const getDriverById = require('../controllers/getDriverById');


// GET | /drivers/ 
  driversRouter.get('/', async (req, res) => {
    try{
      const apiDrivers = await getDriversApi();
      console.log('hasta aqui todo bien')
      const dbDrivers = await getDriversDB(); 
      const drivers = [...apiDrivers, ...dbDrivers];
      res.status(200).json(drivers);
    }
    catch(error){
      console.error(error);
      res.status(500).json({ error: 'error al obtener los drivers' });
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
      const driver = await getDriverById(id);
      res.status(200).json(driver);
    }
    catch(error){
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});


// GET | /drivers/name?="..."

driversRouter.get('/name', async (req, res) => {
    const { name } = req.query;
    try{
      const drivers = await getDrivers();
      const driver = drivers.find((driver) => driver.forename == name);
      if(driver){
        res.status(200).json(driver);
      }
      else{
        res.status(404).json({ error: 'No se encontró el driver por nombre' });
      }
    }
    catch(error){
        console.error(error);
        res.status(500).send({ error: error.message });
    }
});

module.exports = driversRouter;