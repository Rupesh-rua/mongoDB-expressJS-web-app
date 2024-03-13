const express = require('express')

const router = express.Router()

const {postMovie, postDirector} = require('../controllers/postControllers.js')

router.post('/director', postDirector)

router.post('/movie', postMovie)

module.exports = router