require('dotenv').config()
const mqtt = require('mqtt')

const client = mqtt.connect({
	protocal:process.env.protocal,
	host:process.env.hostName,
	port:process.env.port
})

module.exports = client