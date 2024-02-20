const fs = require('fs').promises;
const path = require('path');

module.exports = async () => {
  try {
    const filePath = path.join(__dirname, '..', '..', 'api', 'db.json');
    const response = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(response);

    
    const uniqueTeams = [];
    await data.drivers.forEach((driver) => {
      if (driver.teams) {
        const splitTeams = driver.teams.split(',');
        splitTeams.forEach((team) => {
          const trimmedTeam = team.trim();
          if (!uniqueTeams.includes(trimmedTeam)) {
            uniqueTeams.push( trimmedTeam );
          }
        });
      }
    });


    return uniqueTeams;
  } catch (error) {
    throw { error: 'Error al leer el archivo de la API', details: error.message };
  }
};
