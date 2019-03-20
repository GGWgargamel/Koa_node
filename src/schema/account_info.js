const mongoose = require('mongoose')
const accountSchema = mongoose.Schema({
  name: String,
  // 余额
  balance: Number
})

const Account = mongoose.model('Account', accountSchema)
module.exports = Account