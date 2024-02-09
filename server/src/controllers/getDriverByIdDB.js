const { Driver } = require('../db.js');
const { Team } = require('../db.js');

module.exports = async (id) => {
    try {
        const driver = await Driver.findByPk(id, {
             include: {
                model: Team,
                attributes: ["name"],
                through: {
                    attributes: []  //elimina atributos 
                }
            },
            }); 
        // Si no se encuentra el conductor, devuelve null
        return driver || null;
    } catch (error) {
        // Si hay un error, lanza una excepción para manejarlo en el controlador
        throw "Problema con la captura del driver por id de DB"
    }
}
