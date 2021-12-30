const express=require('express')
const routes=require('./mode/index')
const mode=require('./mode/studemo')
const app=express()
var bodyParser = require('body-parser')
//只要加入这个配置，在req请求对象上会多出来一个属性
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())
app.use('/',routes)
//学神
app.post('/stu',mode.create)
app.get('/stu',mode.findsu)
module.exports=app;
//11111111111111111111111111111111