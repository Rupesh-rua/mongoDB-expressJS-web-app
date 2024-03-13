const express = require('express')
const mongoose = require('mongoose')

const db_url = 'mongodb+srv://ru:KK1GMHwjZ5dRnWVh@activity9cluster0.crg3509.mongodb.net/db_name?retryWrites=true&w=majority';
const db_params = {
	useNewUrlParser: true,
	useUnifiedTopology: true
}

mongoose.connect(db_url, db_params)
.then(() => console.log('MongoDB connection established.'))
.catch((error) => console.error("MongoDB connection failed:", error.message))

const Schema = mongoose.Schema;

const movieSchema = new Schema({
	title: {
		type: String,
		require: true,
		unique: true
	},
	genre: {
		type: String,
		require: true
	},
	year: {
		type: Number,
		require: true
	},
	runtime: {
		type: String,
		require: true
	}
});

const directorSchema = new Schema({
	name: {
		type: String,
		require: true,
		unique: true
	},
	country: {
		type: String,
		require: true
	},
	language: {
		type: String,
		require: true
	},
	age: {
		type: Number,
		require: true
	},
});

const Movie = mongoose.model("movies", movieSchema);
const Director = mongoose.model("directors", directorSchema);

module.exports = {Movie, Director};


/* "fastify": "^4.9.2",
"handlebars": "^4.7.7",
"@fastify/formbody": "^7.3.0",
"@fastify/static": "^6.5.0",
"@fastify/view": "^7.1.2", */