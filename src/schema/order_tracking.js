const mongoose = require('mongoose')
const trackingSchema = mongoose.Schema({
  track_list: [
    {
      time_line: String,
      status: String,
      desc: String
    }
  ]
})
const Track = mongoose.model('Track', trackingSchema)
module.exports = Track