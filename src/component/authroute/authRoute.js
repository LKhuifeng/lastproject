import React, { Component } from 'react'
import axios from 'axios'
//该组件不具备history
//通过withRouter传递
//通过withroute更新match，location和history
import { withRouter } from 'react-router-dom'
import { loadData } from '../../redux/user.redux'
import { connect } from 'react-redux'
@withRouter
@connect(
    null,
    {loadData}
)

export class AuthRoute extends Component {
    componentDidMount (){
        const publicList = ['/login','/register']
        const pathname = this.props.location.pathname
        //如果找到当前地址
        if (publicList.indexOf(pathname)>-1) {
            return null
        }
        //获取用户信息
        axios.get('/user/info').
        then(res=>{
            if(res.status===200){
                console.log(res.data.code)
                if(res.data.code===0){
                    //有登录信息
                    this.props.loadData(res.data.data)
                }else{
                    //没有登陆跳转到登录页，所以需要history控制路由
                    this.props.history.push('/login')
                }
                console.log(res.data)
            }
        })
        //是否跳转

        //用户身份

        //信息完善
    }

    render() {
        return null
    }
}

export default AuthRoute
