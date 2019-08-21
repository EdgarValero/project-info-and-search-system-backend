const { Router } = require('express');
const router = Router();

const userAdminController = require('../controllers/usersAdmin.controller');

router.post('/signup', async (req, res, next) => {
    const { adminFirstName, adminLastName, adminEmail, adminPassword } = req.body;
    const input = {
        adminFirstName, 
        adminLastName, 
        adminEmail, 
        adminPassword
    }
    await userAdminController.signUp(input);
});

router.post('/signin', async (req, res, next) => {
    const { adminEmail, adminPassword } = req.body;
    const input = {
        adminEmail, 
        adminPassword
    }
    const data = await userAdminController.signIn(input);
    res.json(data);
});

module.exports = router;