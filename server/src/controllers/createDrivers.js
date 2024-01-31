
//conectamos la base de datos y creamos el driver

const { Driver } = require('../db.js');

module.exports = async ( driverRef , number , code , name , surname , image , dob , nationality , url , teams , description ) => {
    console.log(name);
    if ( !driverRef || !number || !code || !name || !surname || !image || !dob || !nationality || !url || !teams || !description) throw new Error("Faltan datos");
    
   
    const newDriver = { driverRef , number , code , name,  surname , image , dob , nationality , url , teams , description };
    //crear el registro en el modelo Driver
    await Driver.create(newDriver);

    return newDriver;
}