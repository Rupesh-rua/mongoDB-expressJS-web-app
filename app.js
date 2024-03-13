const express = require('express');
const path = require('path');
const db = require('./database/establish_connection.js')
const bodyParser = require('body-parser')

const app = express()

const postRoutes = require('./routes/postRoutes.js')
const deleteRoutes = require('./routes/deleteRoutes.js')
const getRoutes = require('./routes/getRoutes.js')

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/post', postRoutes)
app.use('/delete', deleteRoutes)
app.use('/get', getRoutes)

PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
	if(err){
		console.log(err.message);
	}else{
		console.log(`Server running on port ${PORT}`);
	}
})