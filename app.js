const {subscribePromise} = require('./mqtt/subscribe')
const connectDB = require('./db/db')
const client = require('./mqtt/client')
const model = require('./model/schema')
require('dotenv').config() 

let received_msg;
   
const trial = async () => {
  try {
    await subscribePromise('ping');
    console.log('Subscription successful');
  
    client.on('message', async (topic, message) => {
     try { 
		received_msg = JSON.parse(message)
	
		const indiv = await model.findOne({id:received_msg.id})
		if(indiv){
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
