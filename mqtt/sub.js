require('dotenv').config()
const mqtt = require('mqtt')

const client = mqtt.connect({
	protocal:process.env.protocal,
	host:process.env.hostName,
	port:process.env.port
})

const  connect = ((topic) => { 
    return client.on('connect',() => {
	    client.subscribe(topic,(err) => {
		    if(!err) {
			    console.log(`Subscribed to ${topic}`)
		    }
	    })
    })
})

module.exports = {
    client,
    connect
}