const { Router } = require('express');
const teamsRouter = Router();
const getTeamsDB = require('../controllers/getTeamsDB');

teamsRouter.get('/' , async (req, res) => {
    try{
        const apiTeams = await getTeamsDB();   
        console.log(apiTeams);   

        if (apiTeams){
            console.log(apiTeams);
            res.status(200).json(apiTeams);
        }
        else{
            res.status(404).json({ error: 'No se encontraron los teams'});
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({ error: 'error al obtener los teams'});
    }
})



module.exports = teamsRouter;
