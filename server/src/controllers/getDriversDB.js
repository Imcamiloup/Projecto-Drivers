const { Driver, Team } = require('../db.js');


module.exports = async () => {
    try {
        const drivers = await Driver.findAll(
            {include: {
                model: Team,
                attributes: ["name"],
                through: {
                    attributes: []  //elimina atributos 
                }
            }}
        ); 
        if (drivers.length === 0) {
            throw 'No se encontraron drivers';
            
        } else {
            return drivers
        }
    } catch (error) {
        return { error: error } ;
    }
};
