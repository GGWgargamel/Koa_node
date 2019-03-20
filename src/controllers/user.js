let User = require('../schema/user')
const userHelper =  require('../dbhelper/user')

exports.findUser = async (ctx, next) => {
  let data
  data = await userHelper.findUser(ctx.request.body)
  data.jrwyToken = 'uisduoi881'
  ctx.body = {
    statusCode: 200,
    data: data
  }
}

exports.addUser = async(ctx, next) => {
  let user = new User(ctx.request.body)
  user.id = '1'
  let resBody = await userHelper.addUser(user)
  if (resBody) {
    ctx.body = {
      statusCode: 200,
      data: resBody
    }
  }
}