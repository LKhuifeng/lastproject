import React, { Component } from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, Radio, WingBlank, WhiteSpace ,Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../redux/user.redux'
import myform from '../../component/my-form/my-form'

@connect(
    state=>state.user,
    {register}
)
@myform

export class Register extends Component {
    constructor (props) {
        super(props)

        this.handleRegister = this.handleRegister.bind(this)
    }
    componentDidMount(){
        this.props.handleChange('type','genius')
    }

    handleRegister(){
        this.props.register(this.props.state)
        console.log(this.props.state)
    }

    render () {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
                <Logo></Logo>
                <List>
                    {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
                    <InputItem
                        onChange={v=>this.props.handleChange('user',v)}
                    >用户名</InputItem>
                    <InputItem
                        type='password'
                        onChange={v=>this.props.handleChange('pwd',v)}
                    >密码</InputItem>
                    <InputItem
                        type='password'
                        onChange={v=>this.props.handleChange('repeatpwd',v)}
                    >确认密码</InputItem>
                    <RadioItem
                        checked={this.props.state.type=='code'}
                        onChange={()=>this.props.handleChange('type','code')}
                    >
                        coder
                    </RadioItem>
                    <RadioItem
                        checked={this.props.state.type=='boss'}
                        onChange={()=>this.props.handleChange('type','boss')}
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