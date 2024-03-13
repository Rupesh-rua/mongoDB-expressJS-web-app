const mongoose = require('mongoose')

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