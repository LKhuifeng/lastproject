const mongoose = require('mongoose')
//链接mongodb 并且使用这个集合 mongoose操作mongodb存储json数据 更适合前端操作
const DB_URL = 'mongodb://127.0.0.1:27017/gaosi'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mogo connect success')
})