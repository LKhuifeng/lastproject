import axios from 'axios'
import {getRedirectPath} from '../util'

// const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
// const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const LOGOUT = 'LOGOUT'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = ''
const url = ""

const initState = {
    redirectTo:'',
    // isAuth:false,
    msg:'',
    user:'',
    type:''
}
//reducer0
//getRedirectPath进行判断和页面跳转
export function user(state=initState, action){
    switch(action.type){
        case AUTH_SUCCESS:
            return {...state,msg:'',redirectTo:getRedirectPath(action.payload),...action.payload}
        // case LOGIN_SUCCESS:
        //     return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
        case LOAD_DATA:
            return {...state,...action.payload}
        case ERROR_MSG:
            return {...state,isAuth:false,msg:action.msg}
        //将初始数据传递过去
        case LOGOUT:
            return {...initState,redirectTo:'login'}
        default:
            return state
    }
}

function authSuccess(obj){
    const {pwd,...data} = obj
    return { type:AUTH_SUCCESS,payload:data}
}
// function registerSuccess(data){
//     return { type:REGISTER_SUCCESS,payload:data}
// }

// function loginSuccess(data){
//     return { type:LOGIN_SUCCESS ,payload:data}
// }

//报错
function errorMsg (msg) {
    return { type:ERROR_MSG, msg:msg}
}

//获取用户信息
export function loadData(userinfo){
    return { type:LOAD_DATA, payload:userinfo}
}

//退出登录时清除redux信息
export function logoutSubmit(){
    return { type:LOGOUT }
}
//更新信息
export function update(data){
    return dispatch=>{
        axios.post('/user/update',data)
            .then(res=>{
                if(res.status==200&&res.data.code===0){
                    dispatch(authSuccess(res.data.data))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}
//登陆
export function login({user,pwd}){
    if(!user||!pwd) {
        return errorMsg('用户密码必须输入')
    }
    return dispatch=>{
        axios.post(url+'/user/login',{user,pwd})
        .then(res=>{
            if(res.status==200&&res.data.code===0){
                dispatch(authSuccess(res.data.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}
//注册
export function register({user,pwd,repeatpwd,type}){
    if(!user||!pwd||!type) {
        return errorMsg('用户名、密码必须输入')
    }
    if(pwd!==repeatpwd) {
        return errorMsg('密码和确认密码不同')
    }
    return dispatch=>{
        axios.post(url+'/user/register',{user,pwd,type})
        .then(res=>{
            if(res.status==200&&res.data.code===0){
                dispatch(authSuccess({user,pwd,type}))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}