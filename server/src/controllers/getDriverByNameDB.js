const { Driver } = require('../db.js');

module.exports = async (name) => {
    try {
        const driver = await Driver.findAll({
             where: { forename: name } 
            });
        if (!driver) {
            throw 'No se encontró el driver por DB';
            
        } else {
            return driver
        }
    } catch (error) {
        return { error: "Problema con la captura del driver por DB", message: error} ;
    }
}