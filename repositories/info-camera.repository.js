const BaseRepository = require('./base.repository');
const InfoCamera = require('./../entities/info-camera.entity');

class InfoCameraRepository extends BaseRepository {
    constructor() {
        super(InfoCamera);
    }
}

module.exports = InfoCameraRepository;