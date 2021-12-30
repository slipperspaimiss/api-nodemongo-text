const app=require('./app')

const server=app.listen(3000,()=>{
console.log('端口监听-- ${server.address().port}')


})