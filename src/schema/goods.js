const mongoose = require('mongoose')
const GoodsSchema = mongoose.Schema({
  goodsList: [{
    // 序号
    no: String,
    name_spu: String,
    id: String,
    publish_time: String,
    status: String,
    sku: [
      {
        name_sku: String,
        price: Number,
        stock: Number
      }
    ] 
  }]
})
const Goods = mongoose.model('Goods', GoodsSchema)
module.exports = Goods