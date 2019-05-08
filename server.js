const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/jr', {
  useNewUrlParser: true 
}, (err) => {
  if (err) {
    console.log('数据库连接失败')
  } else {
    console.log('数据库连接成功')
  }
})


const Koa = require('koa')
const app = new Koa()
const path = require('path');
const serve = require('koa-static');
const main = serve(path.join(__dirname+'/h5'));
app.use(main);
// babyparser用于处理post
const bobyParser  = require('koa-bodyparser')
app.use(bobyParser())

const router = require('./config/router')()
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000, function() {
  console.log('服务启动')
})
