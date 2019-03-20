const mongoose = require('mongoose')
const orderSchema = mongoose.Schema({
  info: {
    userInfo: [{
      receivername: String,
      receiverMobile: String,
      receiverAddress: String,
      province: String,
      city: String,
      district: String,
      provinceId: String,
      cityId: String,
      districtId: String
    }],
    orderInfo: {
      time: String,
      orderType: String,
      goods: [
        {
          name: String,
          category: String,
          price: Number,
          period: String,
          num: String,
          total: Number
        }
      ],
      remarks: String
    }
  }
})
const Order = mongoose.model('Order', orderSchema)
module.exports = Order