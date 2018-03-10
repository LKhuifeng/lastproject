const express = require('express')
const mongoose = require('mongoose')
//链接mongodb 并且使用这个集合 mongoose操作mongodb存储json数据 更适合前端操作
const DB_URL = 'mongodb://127.0.0.1:27017/gaosi'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mogo connect success')
})
//类似mysql的表
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))

//建立应用
const app = express()

//处理路由
app.get('/',function(req,res){
    res.send('<h1>helloworld</h1>')
})

app.get('/data',function(req,res){
    //findOne只查找一条
    User.find({},function(err,doc){
        res.json(doc)
    })
    // res.json({name:'gaiusk',type:'IT'})
})

app.get('/create',function(req,res){
    User.create({
        user:'gaosi',
        age:23
    },function(err,doc){
        //callback
        if(!err){
            console.log(doc)
        }else{
            console.log(err)
        }
    })
})

app.get('/delete',function(req,res){
    User.remove({age:22},function(err,doc){
        if(!err){
            console.log(doc)
        }else{
            console.log(err)
        }
    })
})

app.get('/updata',function(req,res){
    User.update({
        'user':'gaosi'
    },{
        '$set':{age:26}
    },function(err,doc){
        if(!err){
            console.log(doc)
        }else{
            console.log(err)
        }
    })
})

app.listen(9093,function(){
    console.log('Node app start at port 9093')
})