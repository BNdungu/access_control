const mqtt = require('mqtt')

const client = mqtt.connect({
	protocal:'mqtt',
	host:'13.48.47.239',
	port:1883
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