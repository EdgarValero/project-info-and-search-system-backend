const Sucursal =  require('../models/sucursals.model');

class sucursalController {
    async getSucursals() {
        return await Sucursal.find().sort('desc')
    }
    async getSucursal(id) {
        return await Sucursal.findById({_id: id});
    }
    async addSucursal(input) {
        const newSucursal = new Sucursal(input);
        await newSucursal.save();
    }   
    async deleteSucursal(id) {
        return await Sucursal.findByIdAndDelete({_id: id});
    }
    async updateSucursal(id, input) {
        return await Sucursal.findByIdAndUpdate({_id: id}, input);
    }
}

module.exports = new sucursalController();