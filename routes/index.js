const express = require('express');
const infoCameraRouter = require('./info-camera.route');

const restAPI = (app) => {
    const router = express.Router();
    router.use('/info-camera', infoCameraRouter);
    app.use('/api/v1', router);
}

module.exports = restAPI;