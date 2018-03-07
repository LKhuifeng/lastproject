import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login,getUserData } from './Auth.redux'
import { Redirect } from 'react-router-dom'


//两个reducers怎么处理
//合并reducers
@connect(
    state=>state.auth,
    {login,getUserData}
)

class Auth extends Component{
    componentDidMount(){
        this.props.getUserData()
    }

    // constructor(props){
    //     super(props)
    //     this.state={
    //         data:{}
    //     }
    // }
    render(){
        return (
            <div>
                <h2>我的名字{this.props.user}</h2>
                {this.props.isAuth?<Redirect to='./dashboard' />:null}
                <h2>你没有权限，需要登录才能看</h2>
                <button onClick={this.props.login}>登陆</button>
            </div>
        )
    }
}

export default Auth
