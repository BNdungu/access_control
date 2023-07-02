const {subscribePromise} = require('../mqtt/subscribe')
const client = require('../mqtt/client')
const model = require('../model/schema');
const {timeStamp, formatedTime} = require('./attendance');


const idChecker = async () => {
  try {    
    await subscribePromise('ping');
    console.log('Subscription successful');
  
    client.on('message', async (topic, message) => {
     try { 
		received_msg = JSON.parse(message)
	
		const indiv = await model.findOne({id:received_msg.id})
		if(indiv){
			const data = {
				"Name": indiv.Name,
				"Department": indiv.Department,
			}
			timeStamp(data)
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

module.exports = idChecker