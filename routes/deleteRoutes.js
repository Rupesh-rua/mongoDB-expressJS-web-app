const express = require('express')

const router = express.Router()

const {deleteMovie, deleteDirector} = require('../controllers/deleteControllers.js')

router.delete('/director', deleteDirector)

router.delete('/movie', deleteMovie)

module.exports = router