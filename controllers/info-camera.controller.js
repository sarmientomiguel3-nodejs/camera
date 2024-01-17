const InfoCameraService = require('./../services/info-camera.service');

const infoCameraService = new InfoCameraService();

class InfoCameraController {
    async findAll(req, res, next){
        try{
            const infoCameras = await infoCameraService.findAll();
            res.json(infoCameras);
        }
        catch(error){
            next(error);
        }
    }
    async findById(id){
        return await this.infoCameraService.findById(id);
    }
    async create(data){
        return await this.infoCameraService.create(data);
    }
    async update(id, data){
        return await this.infoCameraService.update(id, data);
    }
    async delete(id){
        return await this.infoCameraService.delete(id);
    }
}

module.exports = new InfoCameraController();