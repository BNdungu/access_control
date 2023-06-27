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
		    console.log(`Connected to mqtt broker @${process.env.hostName}`)
	    })
    })
})

module.exports = {
    client,
    connect
}