const mongoose = require('mongoose')
const userAddress = mongoose.Schema({
  name: String,
  phone: String,
  // 客户详细地址
  address: String,
  // 省市区名称以及编号
  province: String,
  city: String,
  district: String,
  provinceCode: String,
  cityCode: String,
  districtCode: String
})
const UserAddress = mongoose.model('UserAddress', userAddress)
module.exports = UserAddress