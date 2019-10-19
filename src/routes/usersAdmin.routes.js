const { Router } = require('express');
const router = Router();

const userAdminController = require('../controllers/usersAdmin.controller');

router.post('/signup', async (req, res) => {
    const { adminFirstName, adminLastName, adminEmail, adminPassword } = req.body;
    const input = {
        adminFirstName,
        adminLastName,
        adminEmail, 
        adminPassword
    }
    const data = await userAdminController.signUp(input);
    res.json(data);
});

router.post('/signin', async (req, res) => {
    const { adminEmail, adminPassword } = req.body;
    const input = {
        adminEmail, 
        adminPassword
    }
    const data = await userAdminController.signIn(input);
    res.json(data);
});

module.exports = router;