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
// babyparser用于处理post
const bobyParser  = require('koa-bodyparser')
app.use(bobyParser())

const router = require('./config/router')()
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)

console.log('app started at port 3000')