const express = require('express');

const {Movie, Director} = require('../database/db_models.js');

let postDirector = (req,res) => {
	const data = new Director({
		name: req.body.name,
		country: req.body.country,
		language: req.body.language,
		age: req.body.age
	})
	
	data.save()
	.then(() => {
		console.log('director succesfully added');
	})
	.catch(err => {console.log(err)});
	
	res.end();
}

let postMovie = (req,res) => {
	const data = new Movie({
		title: req.body.title,
		genre: req.body.genre,
		year: req.body.year,
		runtime: req.body.runtime
	})
	
	data.save()
	.then(() => {
		console.log('movie succesfully added');
	})
	.catch(err => {console.log(err)});
	
	res.end();
}

module.exports = {postDirector, postMovie}