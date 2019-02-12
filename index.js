'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/CmsHorsePower',{useNewUrlParser: true})
.then(() =>{
	console.log('La conexion a MongoDB se ha realizado correctamente!');

	app.listen(port , () => {
		console.log('El servidor esta correctamente en localhost:3800');
	});
})
.catch(err => console.log(err));