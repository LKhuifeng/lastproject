const mongoose = require('mongoose')
//链接mongodb 并且使用这个集合 mongoose操作mongodb存储json数据 更适合前端操作
const DB_URL = 'mongodb://127.0.0.1:27017/gaosi-chat'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mogo connect success')
})

const models = {
    user:{
        'user':{'type':String, 'require':true},
        'pwd':{'type':String, 'require':true},
        'type':{'type':String, 'require':true},
        //头像
        'avatar':{'type':String},
        //简介
        'desc':{'type':String},
        'title':{'type':String},
        //hr
        'title':{'type':String},
        'money':{'type':String},
        'company':{'type':String}
    },
    chat:{
        'chatid':{'type':String,'require':true},
        'from':{'type':String,'require':true},
        'to':{'type':String,'require':true},
        'read':{'type':Boolean,'default':false},
        'content':{'type':String,'require':true,'default':''},
        'create_time':{'type':Number,'default':new Date().getTime()}
    }
}

for(let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
}