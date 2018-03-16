const express = require('express')
//md5加密
const utils = require('utility')
const Router = express.Router()

const models = require('./model')
const User = models.getModel('user')
//想要过滤的信息
const _filter = {'pwd':0,'__V':0}

Router.get('/list',function(req, res){
    User.find({},function(err,doc){
        return res.json(doc)
    })
})

Router.post('/update',function(req,res){
    const userid = req.cookies.userid
    if(!userid){
        return json.dumps({code:1})
    }
    const body = req.body
    //查找并且更新
    User.findByIdAndUpdate(userid,body,function(err,doc){
        const data = Object.assign({},{
            user:doc.user,
            type:doc.type
        },body)
        return res.json({code:0,data})
    })
})
//对密码进行解密查找
//{'pwd:0'} 保证不会将密码返回，哪怕是已经加密的
//也可以用这种方法屏蔽别的不想显示的数据
Router.post('/login',function(req,res){
    const { user,pwd } = req.body
    User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err,doc){
        if(!doc){
            return res.json({code:1,msg:'用户名或者密码错误'})
        }
        //使用cookie保存数据
        res.cookie('userid',doc._id)
        return res.json({code:0,data:doc})
    })
})

Router.post('/register',function(req,res){
    console.log(req.body)
    const {user, pwd ,type} = req.body
    User.findOne({user:user},function(err,doc){
        //有相同名字，注册失败
        if (doc) {
            return res.json({code:1,msg:'用户名重复'})
        }
        const userModel = new User({user,type,pwd:md5Pwd(pwd)})
        userModel.save(function(e,d){
            if(e){
                return res.json({code:1,msg:'后端出现错误'})
            }
            const {user,type,_id} = d
            res.cookie('userid',_id)
            return res.json({code:0,data:{user,type,_id}})
        })
        // User.create({user, type,pwd: md5Pwd(pwd)},function(e, d){
        //     if (e) {
        //         return res.json({code:1,msg:'后端出现错误'})
        //     }
        //     return res.json({code:0})
        // })
    })
})
Router.get('/info',function(req, res){
    const {userid} = req.cookies
    //是否有cookie
    if(!userid){
        return res.json({code: 1})
    }
    User.findOne({_id:userid},_filter,function(err,doc){
        if(err){
            return res.json({code: 1,msg:'后端出错'})
        }
        if(doc){
            return res.json({code:0,data:doc})
        }
    })
})

//防止md5被破解增加密码复杂度
function md5Pwd(pwd){
    const salt = 'gaiusk_pw_d65d2as2'
    return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router