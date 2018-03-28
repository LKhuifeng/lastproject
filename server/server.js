const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const models = require('./model')
const Chat = models.getModel('chat')
//建立应用
const app = express()

//结合express和socket.io
const server = require('http').Server(app)
//引入socket.io
const io = require('socket.io')(server)

io.on('connection',function(socket){
    //成功连接就在服务器打印user login
    // console.log('user login')

    //socket是当前连接的请求，io是全局的请求
    socket.on('sendmsg',function(data){

        const {from, to, msg} = data
        //每个聊天室都有唯一的id
        const chatid = [from,to].sort().join('_')
        Chat.create({chatid,from,to,content:msg},function(err,doc){
            io.emit('recvmsg',Object.assign({},doc._doc))
        })
        // console.log(data)
        // io.emit('recvmsg',data)
    })
})

const userRouter = require('./user')

//开启一个中间件
app.use(cookieParser())
//接受post
app.use(bodyParser.json())
app.use('/user',userRouter)

server.listen(9093,function(){
    console.log('Node app start at port 9093')
})