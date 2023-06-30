const {subscribePromise} = require('./mqtt/subscribe')
const {msg} = require('./mqtt/handlemsg')
const connectDB = require('./db/db')
const client = require('./mqtt/new')
const model = require('./model/schema')
require('dotenv').config() 

let received_msg;


const trial = async () => {
  try {
    await subscribePromise('id');
    console.log('Subscription successful');
  
    client.on('message', async (topic, message) => {
     try { 
		console.log('I\'m Over here')
		received_msg = JSON.parse(message)
	  	console.log(received_msg.id)
	
		const indiv = await model.findOne({id:received_msg.id})
		if(indiv){
			console.log(indiv.Name)
			client.publish('responce', 'valid')
			client.publish('res',indiv.toString())
		}
		console.log(indiv)
	  } catch (error) {
		throw error
	  } 
    });
  } catch (error) {
    console.error('Error subscribing:', error);
  }
};

const start = async () => {
	await connectDB(process.env.db)
	console.log('Connected to the Database')
} 

start()
trial(); 
