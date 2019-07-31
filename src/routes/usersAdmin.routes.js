const { Router } = require('express');
const router = Router();

const userAdminController = require('../controllers/usersAdmin.controller');

router.post('/signup-user-admin', async (req, res, next) => {
    const { adminFirstName, adminLastName, adminEmail, adminPassword } = req.body;
    const input = {
        adminFirstName, 
        adminLastName, 
        adminEmail, 
        adminPassword
    }
    await userAdminController.signUp(input);
});

router.post('/signin-user-admin', async (req, res, next) => {
    const { adminEmail, adminPassword } = req.body;
    const input = {
        adminEmail, 
        adminPassword
    }
    await userAdminController.signIn(input);
});

module.exports = router;