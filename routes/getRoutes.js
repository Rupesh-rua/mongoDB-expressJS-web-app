const express = require('express')

const router = express.Router()

const {getMovies, getDirectors} = require('../controllers/getControllers.js')

router.get('/directors', getDirectors)

router.get('/movies', getMovies)

module.exports = router