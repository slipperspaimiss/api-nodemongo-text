const express=require('express')
const routes=require('./mode/index')
const app=express()

app.use('/',routes)




module.exports=app;