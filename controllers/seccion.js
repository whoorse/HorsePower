'use.strict'

var Seccion = require('../models/seccion');

function pruebas(req, res){
	res.status(200).send({
		message: 'Esta ruta es de prueba en mi api restful con mongo y node'
	});
};

function saveSeccion(req, res){
	var seccion = new Seccion();

	var params = req.body;

	if(params.titulo){
		seccion.id = params.id;
		seccion.titulo = params.titulo;
		seccion.nombre = params.nombre;
		seccion.descripcion = params.descripcion;

		seccion.save((err, seccionStored) => {
			if(err){
				res.status(500).send({
					message: 'Error en el servidor'
				});
			}else{
				if(seccionStored){
					res.status(200).send({
						seccion: seccionStored
					});
				}else{
					res.status(200).send({
						message: 'No se ha guardado la seccion'
					});
				}
			}
		});

	}else{
		res.status(200).send({
			message: 'El titulo de la seccion es obligatorio'
		});
	}
}

function getSecciones(req, res){
	Seccion.find({}).sort({'_id': -1}).exec((err, secciones) =>{
			if(err){
				res.status(500).send({
					message: 'Error en el servidor'
				});
			}
			else
			{	
				if(secciones){
					res.status(200).send({
						secciones
					});
				}
				else{
					res.status(404).send({
						message: 'No hay secciones'
					})
				}	
			}
	});
};

function getSeccion(req, res){
	var seccionId = req.params.id;

	Seccion.findById(seccionId).exec((err, seccion) => {
		if(err){
			res.status(500).send({
				message: 'Error en el servidor 500'
			});
		}
		else{
			if(seccion){
				res.status(200).send({
					seccion
				});
			}else{
				res.status(404).send({
					message: 'No existe la seccion'
				});
			}
		}
	});
};


function updateSeccion(req, res){
	var seccionId = req.params.id;
	var update = req.body;

	Seccion.findByIdAndUpdate(seccionId, update, {new: true}, (err, seccionUpdated) => {
		if(err){
			res.status(500).send({
				message: 'Error en el servidor'
			});
		}else{
			if(seccionUpdated){
				res.status(200).send({
					seccion: seccionUpdated
				});
			}else{
				res.status(404).send({
					message: 'No existe la fruta'
				});
			}
		}
	});
}

function deleteSeccion(req, res){
	var seccionId = req.params.id;

	Seccion.findByIdAndRemove(seccionId, (err, seccionRemoved) => {
		if(err){
			res.status(500).send({
				message: 'Error en el servidor'
			});
		}else{
			if(seccionRemoved){
				res.status(200).send({
					seccion: seccionRemoved
				});
			}else{
				res.status(404).send({
					message: 'No existe la seccion'
				});
			}
		}
	});
}


module.exports = {
	pruebas
	,saveSeccion
	,getSecciones
	,getSeccion
	,updateSeccion
	,deleteSeccion
};