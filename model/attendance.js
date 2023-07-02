const mongo = require('mongoose')
const {date} = require('../dnt/dnt')


const attendance = new mongo.Schema ({
    'Name':{
        type: String,
        required: [true, 'Please provide a valid name'],
        trim: true,
    },

    'Time_in':{
        type: String,
        required: [true, 'Time in not declared']
    },

    'Department':{
        type: String, 
        required: [true, 'Please state the Job Department'],
        trim: true,
    },
}) 

module.exports = mongo.model(date(), attendance)