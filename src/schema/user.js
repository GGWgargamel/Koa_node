const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
  mobile: String,
  // 余额
  password: String,
  userType: String,
  id: String
})

const User = mongoose.model('User', userSchema)
module.exports = User