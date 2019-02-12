'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
var seccion_routes = require('./routes/seccion');

//body-parsee
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//configurar CORS

//rutas base
app.use('/api', seccion_routes);



module.exports = app;
