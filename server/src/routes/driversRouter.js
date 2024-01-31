const { Router } = require('express');
const driversRouter = Router();
const getDriversApi = require('../controllers/getDriversApi');
const getDriversDB = require('../controllers/getDriversDB');
const getDriverById = require('../controllers/getDriverById');
const createDrivers = require('../controllers/createDrivers');




// GET | /drivers/ 
  driversRouter.get('/', async (req, res) => {
    try{
      const dbDrivers = await getDriversDB(); 
      const apiDrivers = await getDriversApi();
      const drivers = [...dbDrivers, ...apiDrivers];
      console.log(drivers);
      res.status(200).json(drivers);
      console.log('hasta aqui todo bien')
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

driversRouter.get('/name/:name', async (req, res) => {
    const { name } = req.params;
    try{
      const drivers = await getDriversApi();
      const driver = drivers.find((driver) => driver.name == name.surname);
      if(driver){
        res.status(200).json(driver);
      }
      else{
        res.status(404).json({ error: 'No se encontró el driver por apellido' });
      }
    }
    catch(error){
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
  res.status(200).json(newDriver);
  }
  catch(error){
    //console.error(error);
    res.status(500).send({ error: error.message });
  }
}
);

module.exports = driversRouter;