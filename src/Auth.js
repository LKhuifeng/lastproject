import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from './Auth.redux'
import { Redirect } from 'react-router-dom'

//两个reducers怎么处理
//合并reducers
@connect(
    state=>state.auth,
    {login}
)

class Auth extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                {this.props.isAuth?<Redirect to='./dashboard' />:null}
                <h2>你没有权限，需要登录才能看</h2>
                <button onClick={this.props.login}>登陆</button>
            </div>
        )
    }
}

export default Auth
