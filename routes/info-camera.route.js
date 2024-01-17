const express = require('express');
const router = express.Router();
const infoCameraController = require('./../controllers/info-camera.controller');

router.get('/', infoCameraController.findAll);

module.exports = router;