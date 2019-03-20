const mongoose = require('mongoose')
const loginSchema = mongoose.Schema({
  mobile: String,
  // 余额
  password: String,
  userType: String
})

const Login = mongoose.model('Account', loginSchema)
module.exports = Login