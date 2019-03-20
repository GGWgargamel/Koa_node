const mongoose = require('mongoose')
const OrderDetailSchema = mongoose.Schema({
  info: {
    order_info: {
      no: String,
      status: String,
      order_time: String,
      account: String,
      price: Number,
      order_place_time: String,
      order_channel: String,
      order_change_time: String,
      order_confirm_time: String,
      contacts: String,
      contacts_phone: String,
      contacts_address: String
    },
    additional_info: {
      name_sku: String,
      num: Number,
      create_time: String,
      pay_status: String,
      pay_no: String,
      pay_channel: String,
      pay_time: String,
      logistics_mode: String
    },
    order_pay_info: {
      coupon: String,
      pay_channel: String,
      pay_time: String,
      is_promotion: Boolean,
      amount_total: Number,
      amount_paid: Number,
      amount_unpaid: Number,
      amount_paid_real: Number
    },
    goods_info: {
      good_url: String,
      good_category: String,
      good_no: String,
      good_name: String,
      good_content: String,
      good_pirce: Number
    },
    service_info: {
      service_url: String,
      service_name: String,
      name: String,
      phone: String
    }
  }
})
const OrderDetail = mongoose.model('OrderDetail', OrderDetailSchema)
module.exports = OrderDetail