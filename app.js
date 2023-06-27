require('dotenv').config()
const {connect,client} = require('./mqtt/sub')
const connectDB = require('./db/db')
const model = require('./model/schema')

const conn = async () => {
	try {
		await connectDB(process.env.db)
		console.log('Connected to db')
	} catch (error) {
		throw err
	}
}

conn()
connect('Hello')

client.on('message', (topic,msg) => {
	console.log(msg.toString())
	model.create(JSON.parse(msg))
})
 
