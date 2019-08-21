const { Router } = require('express');
const router = Router();

const sucursalController = require('../controllers/sucursals.controllers')

router.get('/', async (req, res, next) => {
    const sucursals = await sucursalController.getSucursals();
    res.json(sucursals);
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    const sucursal = await sucursalController.getSucursal(id);
    res.json(sucursal);
});

router.post('/add-sucursal', async (req, res , next) => {
    console.log(req.body);
    const { direction, numberContact, googleMaps } = req.body;
    const input = {
        direction, 
        numberContact, 
        googleMaps
    };
    await sucursalController.addSucursal(input);
    res.json({msg: 'sucursal_saved'});
});

router.delete('/delete-sucursal/:id', async (req, res, next) => {
    const { id } = req.params;
    await sucursalController.deleteSucursal(id);
    res.json({msg: 'sucursal_deleted'});
});

router.put('/edit-sucursal/:id', async (req, res, next) => {
    const { id } = req.params;
    const { direction, numberContact, googleMaps } = req.body;
    const input = {
       direction, 
       numberContact,
       googleMaps
    };
    await sucursalController.updateSucursal(id, input);
    res.json({msg: 'sucursal_updated'});
});

module.exports = router;