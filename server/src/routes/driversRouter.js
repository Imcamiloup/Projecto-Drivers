const { Router } = require('express');
const driversRouter = Router();
const getDriversApi = require('../controllers/getDriversApi');
const getDriversDB = require('../controllers/getDriversDB');
const getDriverByIdApi = require('../controllers/getDriverByIdApi');
const getDriverByIdDB = require('../controllers/getDriverByIdDB');
const createDrivers = require('../controllers/createDrivers');
const getDriverByNameApi = require('../controllers/getDriverByNameApi');
const getDriverByNameDB = require('../controllers/getDriverByNameDB');

// GET | /drivers/ 
  driversRouter.get('/', async (req, res) => {
    try{
      const dbDrivers = await getDriversDB(); 
      const apiDrivers = await getDriversApi();
      const drivers = [...dbDrivers, ...apiDrivers];
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
      const dbDriver = await getDriverByIdDB(id);
      const apiDriver = await getDriverByIdApi(id);

      if (!apiDriver) {
        res.status(200).json(dbDriver);
      } else {
        res.status(200).json(apiDriver);
      }
    }
    catch(error){
        res.status(500).send({ error: error.message });
    }
});


// GET | /drivers/name?="..."

driversRouter.get('/name/:name', async (req, res) => {
  const { name } = req.params;
  try {
      const dbDriver = await getDriverByNameDB(name);
      const apiDriver = await getDriverByNameApi(name);
      let AllDrivers = [];

      if (dbDriver) {
          AllDrivers = AllDrivers.concat(dbDriver);
      }
      if (apiDriver) {
          AllDrivers = AllDrivers.concat(apiDriver);
      }

      if (AllDrivers.length === 0) {
          res.status(404).send({ error: 'No se encontró el driver' });
      } else {
          res.status(200).json(AllDrivers);
      }
  } catch (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
  }
});





//POST | /drivers

driversRouter.post('/', async (req, res) => {
 //const name = req.body.name.forename + ' ' + req.body.name.surname;
  try{
  const { driverRef , number , code , name , surname, image , dob , nationality , url , teams , description } = req.body;

  newDriver = await createDrivers( driverRef , number , code , name , surname , image , dob , nationality , url , teams , description )
  res.status(200).json({
    newDriver,
    created: 'Driver created successfully',
  });
  }
  catch(error){
    res.status(500).send({ error: error.message });
  }
}
);

module.exports = driversRouter;