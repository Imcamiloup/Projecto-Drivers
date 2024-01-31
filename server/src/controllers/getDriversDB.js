const { Driver } = require('../db.js');


module.exports = async () => {
    try {
        const drivers = await Driver.findAll(); 
        if (drivers.length === 0) {
            throw 'No se encontraron drivers';
            
        } else {
            return drivers
        }
    } catch (error) {
        return { error: error } ;
    }
};
