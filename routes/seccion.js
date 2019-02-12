'use strict'

var express = require('express');
var SeccionController = require('../controllers/seccion');

var api = express.Router();

api.get('/pruebas', SeccionController.pruebas);
api.post('/seccion', SeccionController.saveSeccion);
api.get('/secciones', SeccionController.getSecciones);
api.get('/seccion/:id', SeccionController.getSeccion);
api.put('/seccion/:id', SeccionController.updateSeccion);
api.delete('/seccion/:id', SeccionController.deleteSeccion);

module.exports = api;