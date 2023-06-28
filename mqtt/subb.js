const {subscribe,message,client} = require('./sub')

const subs = async (id) => {
  try {
    await subscribe(id);
    const messageEmitter = message();
    
    messageEmitter.on('id', (message) => {
      console.log(message);
      return message
    });
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

module.exports = subs