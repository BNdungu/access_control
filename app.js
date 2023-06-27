const {connect,client} = require('./mqtt/sub')

connect('Hello')

client.on('message', (topic,msg) => {
	console.log(msg.toString())
})