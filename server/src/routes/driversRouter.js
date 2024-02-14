const { Router } = require('express');
const driversRouter = Router();
const getDriversApi = require('../controllers/getDriversApi');
const getDriversDB = require('../controllers/getDriversDB');
const getDriverByIdApi = require('../controllers/getDriverByIdApi');
const getDriverByIdDB = require('../controllers/getDriverByIdDB');
const createDrivers = require('../controllers/createDrivers');
const getDriverByNameApi = require('../controllers/getDriverByNameApi');
const getDriverByNameDB = require('../controllers/getDriverByNameDB');
const e = require('express');
const { Driver } = require('../db.js');

// GET | /drivers/ 
  driversRouter.get('/', async (req, res) => {
    try{
      const dbDrivers = await getDriversDB(); 
      console.log("dbDrivers", dbDrivers);
      const apiDrivers = await getDriversApi();
      const drivers = dbDrivers? [...dbDrivers, ...apiDrivers]:  [...apiDrivers];
      console.log("drivers", drivers);
      res.status(200).json(drivers);
    }
    catch(error){
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
  try {
      let driver = null;

      try {
          driver = await getDriverByIdDB(id);
      } catch (dbError) {
          console.error("Dato en Api:");
          // Si hay un error en la base de datos, sigue con la búsqueda en la API
      }

      if (!driver) {
          try {
              driver = await getDriverByIdApi(id);
          } catch (apiError) {
              console.error("Error en getDriverByIdApi:", apiError);
              // Si hay un error en la API, devuelve una respuesta de error 404
              return res.status(404).send({ error: 'No se encontró el driver' });
          }
      }

      if (!driver) {
          // Si no se encuentra ningún conductor, devuelve una respuesta de error 404
          return res.status(404).send({ error: 'No se encontró el driver' });
      }

      res.status(200).json(driver);
  } catch(error) {
      res.status(500).send({ error: error.message });
  }
});


// GET | /drivers/name?="..."

driversRouter.get('/name/:name', async (req, res) => {
  const { name } = req.params;
  try {
      const dbDriver = await getDriverByNameDB(name);
      console.log("hasta aqui llega")
      const apiDriver = await getDriverByNameApi(name);
      let AllDrivers = [];

      if (dbDriver && !apiDriver) {
          AllDrivers = AllDrivers.concat(dbDriver);
      }
      if (apiDriver && !dbDriver) {
          AllDrivers = AllDrivers.concat(apiDriver);
      }
      if (apiDriver && dbDriver) {
          AllDrivers = AllDrivers.concat(dbDriver, apiDriver);
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
  const { driverRef , number , code , forename , surname, image , dob , nationality , url , teams , description } = req.body;

  newDriver = await createDrivers( driverRef , number , code , forename , surname , image , dob , nationality , url , teams , description )

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

driversRouter.put('/', async (req, res) => {
  try{
    const { id, driverRef , number , code , forename , surname, image , dob} = req.body;

    const driver = await Driver.update({ id:id ,driverRef: driverRef, number: number, code: code, forename: forename, surname: surname, image: image, dob: dob},{where: {id: id}});
    driver.driverRef = driverRef;
    driver.number = number;
    driver.code = code;
    driver.forename = forename;
    driver.surname = surname;
    driver.image = image;
    driver.dob = dob;
    res.status(200).json(driver);
  }
  catch(error){
    res.status(500).send({ error: error.message });
  }
});

module.exports = driversRouter;
