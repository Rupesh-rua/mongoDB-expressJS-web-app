const express = require('express');

const {Movie, Director} = require('../database/db_models.js');

let deleteDirector = (req,res) => {
	Director.deleteOne({name: req.body.name})
	.then(() => {
		console.log(`${req.body} succesfully deleted`);
	})
	.catch(err => {console.log(err)});
	
	res.end();
}

let deleteMovie = (req,res) => {
	Movie.deleteOne({name: req.body.title})
	.then(() => {
		console.log(`movie succesfully deleted`);
	})
	.catch(err => {console.log(err)});
	
	res.end();
}

module.exports = {deleteDirector, deleteMovie}