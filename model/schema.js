const mongo = require('mongoose')

const dbschema = new mongo.Schema ({
    'Name':{
        type: String,
        required: [true, 'Please provide a valid name'],
        trim: true,
    },

    'Designation':{
        type: String,
        required: [true, 'Please provide your desination'],
        trim: true
    },

    'Department':{
        type: String,
        required: [true, 'Please provide a valid department name'],
        trim: true,
    },

    'id':{
        type: Number, 
        required: [true, 'Please provide a valid id number'],
        trim: true,
    },
}) 

module.exports = mongo.model('RFID', dbschema)