const { Driver } = require('../db.js');

module.exports = async (id) => {
    try {
        const driver = await Driver.findOne({
             where: { id: id } 
            }); 

        // Si no se encuentra el conductor, devuelve null
        return driver || null;
    } catch (error) {
        // Si hay un error, lanza una excepción para manejarlo en el controlador
        throw new Error("Problema con la captura del driver por id de DB");
    }
}
