const fs = require('fs').promises; // Utilizamos la versión promisificada de fs
const path = require('path');

module.exports = async (name) => {
    try {
        const filePath = path.join(__dirname, '..', '..', 'api', 'db.json');
        const response = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(response);
        const driver = data.drivers.filter((driver) => driver.name.forename === name);
        if (driver) {
            return driver;
        } else {
            return 'No se encontró el driver por nombre';
        }
    } catch (error) {
        return { error: 'Error al leer el archivo' };
    }
}