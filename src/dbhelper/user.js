let User = require('../schema/user')

exports.addUser = async (user) => {
  user = await user.save()
  return user
}

exports.findUser = async (params) => {
  let query = User.find({
      mobile: params.mobile,
      password: params.password
  });
  let res = {};
  await query.exec(function (err, tUser) {
    if (err) {
      res = '用户名或密码错误';
    } else {
      res = tUser[0];
    }
  });
  return res
};