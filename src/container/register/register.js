import React, { Component } from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, Radio, WingBlank, WhiteSpace ,Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'

@connect(
    state=>state.user,
    {register}
)

export class Register extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: 'genius'
        }

        this.handleRegister = this.handleRegister.bind(this)
    }

    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }

    handleRegister(){
        this.props.register(this.state)
        console.log(this.state)
    }

    render () {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                <List>
                    {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
                    <InputItem
                        onChange={v=>this.handleChange('user',v)}
                    >用户名</InputItem>
                    <InputItem
                        type='password'
                        onChange={v=>this.handleChange('pwd',v)}
                    >密码</InputItem>
                    <InputItem
                        type='password'
                        onChange={v=>this.handleChange('repeatpwd',v)}
                    >确认密码</InputItem>
                    <RadioItem
                        checked={this.state.type=='code'}
                        onChange={()=>this.handleChange('type','code')}
                    >
                        coder
                    </RadioItem>
                    <RadioItem
                        checked={this.state.type=='boss'}
                        onChange={()=>this.handleChange('type','boss')}
                    >
                        HR
                    </RadioItem>
                </List>
                <WhiteSpace></WhiteSpace>
                <Button type='primary' onClick={this.handleRegister}>注册</Button>
            </div>
        )
    }
}

export default Register