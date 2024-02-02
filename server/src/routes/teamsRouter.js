const { Router } = require('express');
const teamsRouter = Router();
const getTeamsApi = require('../controllers/getTeamsApi');
const getTeamsDB = require('../controllers/getTeamsDB');
const { Team } = require('../db.js');

teamsRouter.get('/' , async (req, res) => {
    try{
        const apiTeams = await getTeamsApi();
        //.map a los elementos para crearlos en la base de datos
        apiTeams.forEach( async (team) => {
            await Team.create({name: team});
        }
        );

        
        if (apiTeams){
            res.status(200).json(apiTeams);
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({ error: 'error al obtener los teams'});
    }
})



module.exports = teamsRouter;
