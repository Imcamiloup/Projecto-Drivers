const fs = require('fs').promises; // Utilizamos la versión promisificada de fs
const path = require('path');

module.exports = async (id) => {
    try{
        const filePath = path.join(__dirname, '..', '..', 'api', 'db.json');
        const response = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(response);
        const driver = data.drivers.find((driver) => driver.id == Number(id));
        console.log(driver);
        if(driver){
            return driver;
        }
        else{
            return driver;
        }
    }
    catch(error){
        return { error: 'No se encontro el driver por Api' };
    }
}