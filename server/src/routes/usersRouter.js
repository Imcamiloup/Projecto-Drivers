const { Router } = require('express');
const usersRouter = Router();
const getUsers = require('../controllers/getUsers.js');

usersRouter.get('/', async (req, res) => {
    try {
        // Extraer los parámetros de la consulta
        const { email, password } = req.query;

        // Verificar si se proporcionaron los parámetros requeridos
        if (!email || !password) {
            return res.status(400).json({ error: 'Se requieren los parámetros email y password' });
        }
        const apiUsers = await getUsers(email, password);

        if (apiUsers) {
            res.status(200).json({acces: true , message: 'User logged in'})
        } else {
            res.status(404).json({acces: false, message: 'User not found'})
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los users' });
    }
});

module.exports = usersRouter;
