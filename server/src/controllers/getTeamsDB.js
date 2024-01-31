const { Teams } = require('../db.js');

module.exports = async () => {
    try {
        const teams = await Teams.findAll(); 
        if (teams.length === 0) {
            return 'No se encontraron teams';
            
        } else {
            return teams
        }
    } catch (error) {
        return { error: error } ;
    }
}