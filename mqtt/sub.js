require('dotenv').config()
const mqtt = require('mqtt')
const EventEmitter = require('events');

class MessageEmitter extends EventEmitter {}

const client = mqtt.connect({
	protocal:process.env.protocal,
	host:process.env.hostName,
	port:process.env.port
})

const  subscribe = (topic) => {
	return new Promise((resolve,reject) => {
		client.on('connect',() => {
			client.subscribe(topic,(err) => {
				if (err){
					reject(err)
				}
				else{
					console.log(`Connected to Mqtt Broker: ${process.env.hostName}\nSubscribed o topic: ${topic}`)
					resolve()
				}
			})
		})
	})
}


// const message = (() => {
// 	client.on('message', (topic,msg) => {
// 		return msg.toString
// 	})
// })

// const message = () => {
// 	return new Promise((resolve,reject) => {
// 		client.on('message', (topic,message) => {
// 			resolve(message.toString())
// 		})
// 	})
// }

const message = () => {
  const emitter = new MessageEmitter();
  client.on('message', (topic, message) => {
    emitter.emit('id', parseInt(message));
  });
  return emitter;
};

module.exports = {
    client,
    message,
	subscribe
}