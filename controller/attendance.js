const model = require('../model/attendance')
const {time} = require('../dnt/dnt')

const timeStamp = async (content) => {
  try {
    const now = time()
    content.Time_in = now
    await model.create(content) 
  }

   catch (error) {
    throw error
  }
}

module.exports = { 
  timeStamp
}