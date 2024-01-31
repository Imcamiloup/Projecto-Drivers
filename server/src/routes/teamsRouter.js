const { Router } = require('express');
const teamsRouter = Router();
const getTeamsApi = require('../controllers/getTeamsApi');
const getTeamsDB = require('../controllers/getTeamsDB');

teamsRouter.get('/' , async (req, res) => {
    try{
        const apiTeams = await getTeamsApi();
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
