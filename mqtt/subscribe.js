const client = require('./client')

const subscribePromise = (topic) => {
  return new Promise((resolve, reject) => {
    client.subscribe(topic, (err) => {
      if (err) {
        reject(err); // Reject the promise if there's an error
      } else {
        console.log(`Subscribed on topic: ${topic}`);
console.log();
        resolve(); // Resolve the promise when the subscription is successful
      }
    });
  });
};

        
module.exports = {subscribePromise} 