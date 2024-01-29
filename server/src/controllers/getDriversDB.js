const { Driver } = require('../db.js');


module.exports = async () => {
    try {
        const drivers = await Driver.findAll(); 
        datoPrueba = {
            "id": 9999999,
            "driverRef": "Camo",
            "number": 454,
            "code": "HAAM",
            "name": { "forename": "Camilo", "surname": "Gómez" },
            "image": {
              "url": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg",
              "imageby": "By Morio - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=52060566"
            },
            "dob": "1997-07-10",
            "nationality": "Colombia",
            "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
            "teams": "McLaren, Mercedes",
            "description": "Sir Lewis Carl Davidson Hamilton MBE HonFREng (born 7 January 1985) is a British racing driver currently competing in Formula One, driving for Mercedes-AMG Petronas Formula One Team. In Formula One, Hamilton has won a joint-record seven World Drivers' Championship titles (tied with Michael Schumacher), and holds the records for the most wins (103), pole positions (103), and podium finishes (191), among many others. He is statistically considered as the most successful driver in Formula One history."
          }
        drivers.push(datoPrueba);
        if (drivers.length === 0) {
            console.log('Drivers from database:', drivers);
            throw 'No se encontraron drivers';
            
        } else {
            return drivers
        }
    } catch (error) {
        return { error: 'Error al obtener conductores desde la base de datos' } ;
    }
};
