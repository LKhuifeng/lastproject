const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')

//建立应用
const app = express()

//开启一个中间件
app.use(cookieParser())
//接受post
app.use(bodyParser.json())
app.use('/user',userRouter)

app.listen(9093,function(){
    console.log('Node app start at port 9093')
})