const getTeamsApi = require('./getTeamsApi');
const { Team } = require('../db.js');
module.exports = async () => {
    try {
        let apiTeams = await getTeamsApi();
        //.map a los elementos para crearlos en la base de datos
         apiTeams.forEach( async (team) => {
            if (!await Team.findOne({where: {name: team}}))
            await Team.create({name: team});
        }
        );        
        //tomamos los datos guardados en la base de datos y retornamos un json con el id y el nombre del team
        const teams = await Team.findAll();
        return apiTeams =  teams.map((team) => ({id: team.idTeam, name: team.name}));

    } catch (error) {
        return { error: error } ;
    }
}