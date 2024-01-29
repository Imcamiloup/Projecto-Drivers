const fs = require('fs').promises;
const path = require('path');

// Esta función asincrónica se encarga de leer y procesar el contenido del archivo db.json
module.exports = async () => {
    try {
        // Construimos la ruta completa al archivo db.json utilizando __dirname y path.join
        const filePath = path.join(__dirname, '..', '..', 'api', 'db.json');

        // Leemos el contenido del archivo de manera asincrónica con fs.promises.readFile
        const response = await fs.readFile(filePath, 'utf-8');

        // Parseamos el contenido del archivo JSON para obtener un objeto JavaScript
        const data = JSON.parse(response);
        
        // Mapeamos y transformamos los datos de los conductores
        const drivers = data.drivers.map(({ id, driverRef, number, code, name, image, dob, nationality, url, teams, description }) => ({
            id,
            driverRef,
            number,
            code,
            forename: name.forename,
            surname: name.surname,
            // Si la URL de la imagen no está presente, se utiliza una URL predeterminada
            image: image.url || 'https://cdn.motor1.com/images/mgl/O487B/s1/nuevo-logo-de-f1-2018.webp',
            dob,
            nationality,
            url,
            teams,
            description,
        }));

        // Devolvemos el resultado final
        return drivers;
    } catch (error) {
        // En caso de error, mostramos un mensaje de error en la consola y devolvemos un objeto de error
        console.error(error);
        return { error: 'Error al leer el archivo', details: error.message };
    }
};
