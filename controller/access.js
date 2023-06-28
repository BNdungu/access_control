const model = require('../model/schema')
const {connect, subscribe, message, client} = require('../mqtt/sub')
const {sub} = require('../mqtt/subb')

const find_one = () => {
    client.on('message', (topic, msg) => {
        const id = subs('id')
        async () => {
        const ind = await model.findOne({id:id})
        console.log(ind)
    }
        })

    
}

// const sub = async () => {
//   try {
//     await subscribe('id');
//     const messageEmitter = message();
    
//     messageEmitter.on('id', (message) => {
//       console.log(message);
//       const id = message
//     });
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// };

module.exports = find_one