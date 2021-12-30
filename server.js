const { send } = require('express/lib/response')
const app=require('./app')

const server=app.listen(3000,()=>{
console.log('端口监听'+'3000')


})