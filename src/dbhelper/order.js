let Order = require('../schema/order')

exports.createOrder = async (order) => {
  order = await Order.save()
  return order
}

exports.findAllOrders = async () => {
  let query = Order.find()
  let res = []
  await query.exec(function (err, orders) {
    if (err) {
      res = []
    } else {
      res = orders
    }
  })
  return res
}