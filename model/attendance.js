const mongo = require('mongoose')

const attendance = new mongo.Schema ({
    'Name':{
        type: String,
        required: [true, 'Please provide a valid name'],
        trim: true,
    },

    'time in':{
        type: String,
        required: [true, 'Time in not declared']
    },

    'id':{
        type: Number, 
        required: [true, 'Please provide a valid id number'],
        trim: true,
    },
}) 

module.exports = mongo.model('RFID', attendance)