'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SeccionSchema = Schema({
	id: Number
	, titulo: String
	, nombre: String
	, descripcion: String
});

module.exports = mongoose.model('Seccion', SeccionSchema);