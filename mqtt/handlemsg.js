const {client} = require('./new')
const {subscribe} = require('./subscribe')

const msg = () => {client.on('message', (topic,msg) => {
    return msg
})
}
module.exports = {msg}