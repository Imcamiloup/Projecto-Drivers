
//conectamos la base de datos y creamos el driver

const { Driver } = require('../db.js');


module.exports = async ( driverRef , number , code , forename , surname , image , dob , nationality , url , teams , description ) => {
    if ( !driverRef || !number || !code || !forename || !surname || !image || !dob || !nationality || !url || !teams || !description) throw new Error("Faltan datos");
    
    
    const newDriver = await Driver.create( 
        { 
            driverRef , 
            number , 
            code , 
            forename,  
            surname , 
            image , 
            dob , 
            nationality , 
            url , 
            description 
        }
    );    
    newDriver.addTeam(teams);


    return newDriver;


}