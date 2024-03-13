const express = require('express');

const {Movie, Director} = require('../database/db_models.js');

let getDirectors = (req,res) => {
	Director.find()
	.then((data) => {
		console.log('directors succesfully found');
		res.send(data)
	})
	.catch(err => {console.log(err)});
}

let getMovies = (req,res) => {
	Movie.find()
	.then((data) => {
		console.log('movies succesfully found');
		res.send(data);
	})
	.catch(err => {console.log(err)});
}

module.exports = {getDirectors, getMovies}