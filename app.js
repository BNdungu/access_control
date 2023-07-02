const connectDB = require('./db/db')
const idChecker = require('./controller/access')
require('dotenv').config() 


const start = async () => {
	await connectDB(process.env.db)
	console.log('Connected to the Database')
	idChecker(); 
} 

start()
 