// const mqtt = require('mqtt')

// const client = mqtt.connect({
// 	protocal:'mqtt',
// 	host:'13.48.47.239',
// 	port:1883
// })

// client.on('connect',() => {
// 	client.subscribe('topic',(err) => {
// 		if(!err) {
// 			console.log('Subscribed')
// 		}
// 	})
// })

// client.on('message', (topic,message) => {
// 	console.log(message.toString())
// })

const {connect,client} = require('./mqtt/sub')

connect('Hello')

client.on('message', (topic,msg) => {
	console.log(msg.toString())
})