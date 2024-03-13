const mongoose = require('mongoose')

const db_url = 'mongodb+srv://ru:KK1GMHwjZ5dRnWVh@activity9cluster0.crg3509.mongodb.net/db_name?retryWrites=true&w=majority';
const db_params = {
	useNewUrlParser: true,
	useUnifiedTopology: true
}

mongoose.connect(db_url, db_params)
.then(() => console.log('MongoDB connection established.'))
.catch((error) => console.error("MongoDB connection failed:", error.message))