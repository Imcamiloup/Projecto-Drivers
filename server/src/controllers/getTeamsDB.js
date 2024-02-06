const getTeamsApi = require('./getTeamsApi');
const { Team } = require('../db.js');
module.exports = async () => {
    try {
        const apiTeams = await getTeamsApi();
        //.map a los elementos para crearlos en la base de datos
         apiTeams.forEach( async (team) => {
            await Team.create({name: team});
        }
        );        
        //tomamos los datos guardados en la base de datos y retornamos un json con el id y el nombre del team
        const teams = await Team.findAll();
        console.log(teams);
        return teams.map((team) => ({id: team.idTeam, name: team.name}));

    } catch (error) {
        return { error: error } ;
    }
}