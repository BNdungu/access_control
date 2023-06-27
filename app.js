const mqtt = require('mqtt')

const client = mqtt.connect({
	protocal:'mqtt',
	host:'13.48.47.239',
	port:1883
})

client.on('connect',() => {
	client.subscribe('topic',(err) => {
		if(!err) {
			client.publish('topic','Hello world')
		}
	})
})

client.on('message', (topic,message) => {
	console.log(message.toString)
	client.end()
})