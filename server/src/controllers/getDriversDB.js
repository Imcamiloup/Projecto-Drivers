const { Driver } = require('../db.js');


module.exports = async () => {
    try {
        const drivers = await Driver.findAll(
            where = {
                name : this.name
            },
        ); 
        console.log(drivers);
        if (drivers.length === 0) {
            console.log('Drivers from database:', drivers);
            throw 'No se encontraron drivers';
            
        } else {
            return drivers
        }
    } catch (error) {
        return { error: error } ;
    }
};
