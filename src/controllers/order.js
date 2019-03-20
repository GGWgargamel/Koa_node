let Order = require('../schema/order')
const orderHelper =  require('../dbhelper/order')

exports.orders = async (ctx, next) => {
  let data
  if (ctx.request.body) {
    data = await orderHelper.findAllOrders(ctx.request.body)
  } else {
    data = await orderHelper.findAllOrders()
  }
  ctx.body = {
    success: true,
    data: data
  }
}

exports.createOrder = async(ctx, next) => {
  let order = new Order(ctx.request.body)
  let resBody = await orderHelper.createOrder(order)
  if (resBody) {
    ctx.body = {
      success: true,
      data: resBody
    }
  }
}