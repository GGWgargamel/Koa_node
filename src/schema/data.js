const mongoose = require('mongoose')
const dataSchema = mongoose.Schema({
  data: {
    // 折线图
    broken_line: {
      date: Array,
      num: Array
    },
    // 柱形图
    cylindrical: {
      date: Array,
      num: Array
    },
    // 各种订单数量
    orders: {
      // 订单总量
      order_total: Number,
      // 下单总量
      order_place_total: Number,
      // 待接受订单
      order_wait_accepted: Number,
      // 待服务订单
      order_wait_serve: Number,
      // 已完成订单
      order_completed: Number,
      // 可催单
      order_can_reminde: Number
    }
  }
})
const Data = mongoose.model('Data', dataSchema)
module.exports = Data