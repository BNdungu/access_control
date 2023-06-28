try {
    await subscribePromise('ping');
    console.log('Subscription successful');
  
    client.on('message', async (topic, message) => {
     try { 
		received_msg = JSON.parse(message)
	
		const indiv = await model.findOne({id:received_msg.id})
		if(indiv){
			console.log(indiv.Name)
			client.publish('responce', 'valid')
		}
	  } catch (error) {
		throw error
	  }
    });
  } catch (error) {
    console.error('Error subscribing:', error);
  }
;