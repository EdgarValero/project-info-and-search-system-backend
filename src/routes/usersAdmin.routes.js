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
    await userAdminController.signUp(input);
    res.json({msg: 'user_admin_saved'});
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

router.get('/', async (req, res) => {
    const data = await userAdminController.getUsersAdmin();
    res.json(data);
});

router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { adminFirstName, adminLastName, adminEmail, adminPassword} = req.body;
    const input = {
        adminFirstName,
        adminLastName,
        adminEmail,
        adminPassword
    };
    await userAdminController.updateUserAdmin(id, input);
    res.json({msg: 'user_admin_updated'});
});

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await userAdminController.deleteUserAdmin(id);
    res.json({msg: 'user_admin_deleted'});
});

module.exports = router;