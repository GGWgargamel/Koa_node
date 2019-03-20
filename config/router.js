const Router = require('koa-router')
const Order = require('../src/controllers/order')
const User  = require('../src/controllers/user')

module.exports = function () {
  let router = new Router()
  router.post('/order/create', Order.createOrder)
  router.post('/order/findall', Order.orders)
  router.post('/auth/admin/accredit', User.findUser )
  router.post('/auth/admin/add', User.addUser)
  return router
}